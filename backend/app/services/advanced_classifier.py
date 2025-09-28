# backend/app/services/advanced_classifier.py
import pandas as pd
import pickle
import numpy as np
import re
import time
import logging
from typing import Dict, List, Tuple, Optional
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from sklearn.preprocessing import StandardScaler
import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.stem import RSLPStemmer

logger = logging.getLogger(__name__)

class AdvancedEmailClassifier:
    """
    Classificador avançado de emails para o projeto AutoU
    """
    
    def __init__(self, model_path: str = "../app/services/advanced_model.pkl"):
        self.model_path = model_path
        self.model = None
        self.vectorizer = None
        self.scaler = None
        self.stemmer = RSLPStemmer()
        
        # Palavras-chave otimizadas para contexto empresarial
        self.productive_keywords = {
            'erro', 'bug', 'falha', 'problema', 'defeito', 'crash',
            'não funciona', 'quebrado', 'parou', 'travou', 'lento',
            'preciso', 'solicito', 'gostaria', 'como fazer', 'ajuda',
            'suporte', 'orientação', 'instrução', 'tutorial',
            'urgente', 'crítico', 'importante', 'prioritário', 'asap',
            'deadline', 'prazo', 'vencimento',
            'configuração', 'instalação', 'setup', 'integração',
            'api', 'sistema', 'plataforma', 'aplicativo', 'software',
            'login', 'senha', 'acesso', 'bloqueado', 'desabilitado',
            'permissão', 'autenticação', 'conta',
            'pagamento', 'cobrança', 'fatura', 'contrato', 'renovação',
            'cancelamento', 'reembolso', 'upgrade', 'downgrade',
            'status', 'andamento', 'protocolo', 'número', 'código',
            'relatório', 'dados', 'informações', 'detalhes'
        }
        
        self.unproductive_keywords = {
            'obrigado', 'obrigada', 'agradeço', 'agradecimento',
            'gratidão', 'grato', 'grata', 'reconhecido',
            'parabéns', 'felicitações', 'congratulações',
            'sucesso', 'conquista', 'vitória', 'prêmio',
            'aniversário', 'nascimento', 'casamento', 'formatura',
            'festa', 'comemoração', 'celebração',
            'natal', 'ano novo', 'páscoa', 'feriado', 'férias',
            'final de semana', 'descanso',
            'cumprimentos', 'saudações', 'abraços', 'beijos',
            'tenha um bom dia', 'boa sorte', 'tudo de bom',
            'família', 'saúde', 'melhoras', 'cuidados',
            'felicidade', 'alegria', 'paz'
        }
        
        self._download_nltk_resources()
        
        if self._model_exists():
            self._load_model()
    
    def _download_nltk_resources(self):
        """Baixa recursos necessários do NLTK"""
        resources = ['stopwords', 'punkt', 'rslp']
        for resource in resources:
            try:
                nltk.data.find(f'tokenizers/{resource}')
            except LookupError:
                try:
                    nltk.download(resource, quiet=True)
                except Exception as e:
                    logger.warning(f"Não foi possível baixar {resource}: {e}")
    
    def _model_exists(self) -> bool:
        """Verifica se o modelo existe"""
        import os
        return os.path.exists(self.model_path)
    
    def _load_model(self):
        """Carrega modelo treinado"""
        try:
            with open(self.model_path, 'rb') as f:
                model_data = pickle.load(f)
                self.model = model_data['model']
                self.vectorizer = model_data['vectorizer']
                self.scaler = model_data.get('scaler')
            logger.info(f"✅ Modelo avançado carregado de {self.model_path}")
        except Exception as e:
            logger.error(f"❌ Erro ao carregar modelo: {e}")
            self.model = None
    
    def preprocess_text(self, text: str) -> str:
        """Preprocessa texto para análise"""
        if not text:
            return ""
        
        text = text.lower()
        text = re.sub(r'[^\w\s\?!.,;:]', ' ', text)
        text = re.sub(r'\s+', ' ', text)
        
        try:
            stopwords_pt = set(stopwords.words('portuguese'))
            tokens = word_tokenize(text, language='portuguese')
            
            processed_tokens = []
            for token in tokens:
                if (len(token) > 2 and 
                    (token not in stopwords_pt or 
                     token in self.productive_keywords or 
                     token in self.unproductive_keywords)):
                    
                    try:
                        stemmed = self.stemmer.stem(token)
                        processed_tokens.append(stemmed)
                    except:
                        processed_tokens.append(token)
            
            return ' '.join(processed_tokens)
            
        except Exception as e:
            logger.warning(f"Erro no processamento NLTK: {e}")
            return text
    
    def extract_features(self, text: str) -> Dict[str, float]:
        """Extrai características avançadas do texto (19 features fixas)"""
        features = {}
        
        features['length'] = len(text)
        features['word_count'] = len(text.split())
        
        try:
            sentences = sent_tokenize(text, language='portuguese')
            features['sentence_count'] = len(sentences)
        except:
            features['sentence_count'] = text.count('.') + text.count('!') + text.count('?')
        
        words = text.split()
        features['avg_word_length'] = np.mean([len(word) for word in words]) if words else 0
        
        features['question_marks'] = text.count('?')
        features['exclamation_marks'] = text.count('!')
        features['periods'] = text.count('.')
        features['commas'] = text.count(',')
        
        features['uppercase_ratio'] = sum(1 for c in text if c.isupper()) / len(text) if text else 0
        features['repeated_chars'] = len(re.findall(r'(.)\1{2,}', text))
        
        features['has_email'] = 1 if re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text) else 0
        features['has_phone'] = 1 if re.search(r'\b\d{8,11}\b', text) else 0
        features['has_url'] = 1 if re.search(r'http[s]?://|www\.', text) else 0
        features['has_numbers'] = 1 if re.search(r'\d+', text) else 0
        features['has_time'] = 1 if re.search(r'\d{1,2}:\d{2}', text) else 0
        features['has_date'] = 1 if re.search(r'\d{1,2}/\d{1,2}', text) else 0
        
        text_lower = text.lower()
        productive_count = sum(1 for keyword in self.productive_keywords if keyword in text_lower)
        unproductive_count = sum(1 for keyword in self.unproductive_keywords if keyword in text_lower)
        
        features['productive_keywords'] = productive_count
        features['unproductive_keywords'] = unproductive_count
        features['keyword_ratio'] = productive_count / (unproductive_count + 1)
        
        return features
    
    def classify(self, content: str) -> Dict:
        """Classifica email e retorna resultado detalhado"""
        start_time = time.time()
        
        if not self.model:
            raise ValueError("Modelo não foi carregado. Execute o treinamento primeiro.")
        
        try:
            processed_text = self.preprocess_text(content)
            features = self.extract_features(content)
            feature_array = np.array(list(features.values())).reshape(1, -1)
            
            text_vec = self.vectorizer.transform([processed_text])
            
            if self.scaler:
                feature_array = self.scaler.transform(feature_array)
            
            try:
                from scipy.sparse import hstack
                X_combined = hstack([text_vec, feature_array])
            except ImportError:
                X_combined = text_vec
            
            prediction = self.model.predict(X_combined)[0]
            probabilities = self.model.predict_proba(X_combined)[0]
            confidence = max(probabilities)
            
            suggested_response = self._generate_intelligent_response(prediction, content, features)
            
            processing_time = time.time() - start_time
            
            result = {
                'classification': prediction,
                'confidence': float(confidence),
                'probabilities': {
                    label: float(prob) for label, prob 
                    in zip(self.model.classes_, probabilities)
                },
                'suggested_response': suggested_response,
                'processing_time': processing_time,
                'features_detected': features,
                'text_length': len(content),
                'processed_text_length': len(processed_text)
            }
            
            logger.info(f"Email classificado como {prediction} (confiança: {confidence:.3f})")
            return result
            
        except Exception as e:
            logger.error(f"Erro na classificação: {str(e)}")
            raise
    
    def train_model(self, dataset_path: str) -> Dict[str, float]:
        """Treina o modelo com dataset"""
        logger.info("Iniciando treinamento do modelo avançado...")
        
        df = pd.read_csv(dataset_path)
        if 'text' not in df.columns or 'label' not in df.columns:
            raise ValueError("CSV deve conter colunas 'text' e 'label'")
        
        df['processed_text'] = df['text'].apply(self.preprocess_text)
        feature_dicts = df['processed_text'].apply(self.extract_features)
        feature_df = pd.DataFrame(feature_dicts.tolist())
        
        X_text = df['processed_text'].values
        X_features = feature_df.values
        y = df['label'].values
        
        X_text_train, X_text_test, X_feat_train, X_feat_test, y_train, y_test = train_test_split(
            X_text, X_features, y, test_size=0.2, random_state=42, stratify=y
        )
        
        self.vectorizer = TfidfVectorizer(
            max_features=5000,
            ngram_range=(1, 2),
            min_df=2,
            max_df=0.95,
            sublinear_tf=True
        )
        
        X_text_train_vec = self.vectorizer.fit_transform(X_text_train)
        X_text_test_vec = self.vectorizer.transform(X_text_test)
        
        self.scaler = StandardScaler()
        X_feat_train_scaled = self.scaler.fit_transform(X_feat_train)
        X_feat_test_scaled = self.scaler.transform(X_feat_test)
        
        from scipy.sparse import hstack
        X_train_combined = hstack([X_text_train_vec, X_feat_train_scaled])
        X_test_combined = hstack([X_text_test_vec, X_feat_test_scaled])
        
        self.model = RandomForestClassifier(
            n_estimators=200,
            max_depth=20,
            min_samples_split=5,
            min_samples_leaf=2,
            random_state=42,
            class_weight='balanced'
        )
        
        self.model.fit(X_train_combined, y_train)
        
        y_pred = self.model.predict(X_test_combined)
        accuracy = accuracy_score(y_test, y_pred)
        cv_scores = cross_val_score(self.model, X_train_combined, y_train, cv=5)
        
        model_data = {
            'model': self.model,
            'vectorizer': self.vectorizer,
            'scaler': self.scaler
        }
        
        with open(self.model_path, 'wb') as f:
            pickle.dump(model_data, f)
        
        print("\n" + "="*50)
        print("📊 RELATÓRIO DE TREINAMENTO")
        print("="*50)
        print(f"✅ Acurácia no teste: {accuracy:.3f}")
        print(f"✅ Cross-validation média: {cv_scores.mean():.3f} (±{cv_scores.std()*2:.3f})")
        print("\n📋 Relatório de classificação:")
        print(classification_report(y_test, y_pred))
        
        logger.info(f"Modelo treinado e salvo em {self.model_path}")
        
        return {
            'accuracy': accuracy,
            'cv_mean': cv_scores.mean(),
            'cv_std': cv_scores.std()
        }
    
    def _generate_intelligent_response(self, classification: str, content: str, features: Dict) -> str:
        """Gera resposta inteligente baseada na classificação"""
        content_lower = content.lower()
        
        if classification == "PRODUTIVO":
            return self._generate_productive_response(content_lower, features)
        else:
            return self._generate_unproductive_response(content_lower, features)
    
    def _generate_productive_response(self, content: str, features: Dict) -> str:
        """Gera resposta específica para emails produtivos"""
        
        if any(word in content for word in ['login', 'senha', 'acesso', 'autenticação']):
            urgency = "ALTA" if features.get('exclamation_marks', 0) > 1 else "NORMAL"
            return f"""Olá!

Identificamos um problema de acesso em sua conta (Prioridade: {urgency}).

🔧 **Soluções rápidas:**
• Verifique se está usando o email correto
• Use "Esqueci minha senha" para redefinir
• Limpe cache/cookies do navegador
• Desative bloqueadores temporariamente

📞 **Suporte imediato:**
• Chat online: Disponível 24/7
• Email: suporte@empresa.com
• Telefone: (11) 1234-5678

Resolveremos com máxima prioridade!

Atenciosamente,
Equipe de Suporte Técnico"""

        elif any(word in content for word in ['erro', 'bug', 'falha', 'problema']):
            return """Olá!

Recebemos seu reporte técnico e nossa equipe já foi alertada.

🚀 **Em andamento:**
• Análise detalhada do problema
• Identificação da causa raiz
• Desenvolvimento da solução
• Testes de qualidade

⏰ **Prazos estimados:**
• Retorno inicial: 4 horas
• Correção: 24-48 horas
• Atualizações: A cada 6 horas

Você receberá notificações automáticas sobre o progresso.

Obrigado por nos ajudar a melhorar!

Equipe de Desenvolvimento"""

        elif any(word in content for word in ['status', 'andamento', 'protocolo']):
            return """Prezado(a),

Consultamos o status da sua solicitação:

📋 **Situação atual:**
• Protocolada e em análise
• Equipe especializada responsável
• Prioridade definida pelo conteúdo

📅 **Timeline:**
• Análise: 1-2 dias úteis
• Processamento: 2-3 dias úteis
• Resposta final: até 5 dias úteis

🔔 **Acompanhamento:**
Atualizações automáticas por email e portal online.

Cordialmente,
Central de Atendimento"""

        else:
            urgency = "ALTA" if features.get('question_marks', 0) > 2 or features.get('exclamation_marks', 0) > 2 else "NORMAL"
            return f"""Prezado(a),

Sua mensagem foi recebida e classificada (Prioridade: {urgency}).

✅ **Status:**
• Registrada no sistema
• Equipe notificada
• Protocolo em geração

⚡ **Próximos passos:**
• Análise: até 2 horas
• Retorno: até 6 horas
• Resolução: 24-48 horas

Nossa equipe trabalhará para resolver com máxima eficiência.

Atenciosamente,
Equipe de Atendimento"""
    
    def _generate_unproductive_response(self, content: str, features: Dict) -> str:
        """Gera resposta específica para emails improdutivos"""
        
        if any(word in content for word in ['parabéns', 'felicitações', 'sucesso']):
            return """🎉 Que alegria receber sua mensagem!

Ficamos profundamente honrados com suas felicitações. É esse reconhecimento que nos motiva a superar expectativas diariamente.

Seu feedback será compartilhado com toda a equipe que contribui para nosso sucesso.

Muito obrigado por fazer parte da nossa jornada!

Com gratidão,
Toda a equipe 💙"""

        elif any(word in content for word in ['obrigado', 'obrigada', 'agradeço']):
            return """😊 Que mensagem maravilhosa!

É uma satisfação imensa saber que fizemos a diferença. Momentos como este nos lembram do propósito do nosso trabalho.

Agradecemos por compartilhar sua experiência positiva conosco!

Sempre que precisar, estaremos aqui.

Com carinho,
Equipe de Atendimento ✨"""

        elif any(word in content for word in ['natal', 'ano novo', 'feriado']):
            return """🎊 Que mensagem especial!

Agradecemos sua lembrança carinhosa. Desejamos momentos especiais ao lado de quem você ama.

Que venham muitas alegrias e conquistas!

Com carinho especial,
Toda nossa equipe 🌟"""

        else:
            return """💝 Que presente receber sua mensagem!

Ficamos genuinamente emocionados. É maravilhoso ter pessoas como você em nossa comunidade.

Sua mensagem trouxe sorrisos para todo nosso time.

Desejamos tudo de melhor!

Com muito apreço,
Equipe dedicada 🌈"""