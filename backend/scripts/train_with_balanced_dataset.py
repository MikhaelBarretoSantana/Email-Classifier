# backend/train_with_balanced_dataset.py
import pandas as pd
import pickle
import numpy as np
import re
import logging
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import classification_report, accuracy_score, confusion_matrix
from sklearn.preprocessing import StandardScaler
import os

# Configurar logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

def preprocess_text_optimized(text):
    """Preprocessamento otimizado para o dataset balanceado"""
    if not text:
        return ""
    
    text = str(text).lower()
    
    # Preservar pontuação importante
    text = re.sub(r'[^\w\s\?!.,;:()]', ' ', text)
    text = re.sub(r'\s+', ' ', text)
    
    try:
        import nltk
        from nltk.corpus import stopwords
        from nltk.tokenize import word_tokenize
        from nltk.stem import RSLPStemmer
        
        # Palavras importantes que não devem ser removidas
        important_words = {
            'erro', 'bug', 'problema', 'falha', 'ajuda', 'suporte', 'urgente',
            'obrigado', 'obrigada', 'parabéns', 'felicitações', 'gratidão',
            'natal', 'aniversário', 'sucesso', 'não', 'sim', 'como', 'quando',
            'muito', 'bem', 'mal', 'bom', 'ruim', 'preciso', 'solicito'
        }
        
        stopwords_pt = set(stopwords.words('portuguese')) - important_words
        stemmer = RSLPStemmer()
        tokens = word_tokenize(text, language='portuguese')
        
        processed_tokens = []
        for token in tokens:
            if len(token) > 1 and token not in stopwords_pt:
                try:
                    stemmed = stemmer.stem(token)
                    processed_tokens.append(stemmed)
                except:
                    processed_tokens.append(token)
        
        return ' '.join(processed_tokens)
    except:
        return text

def extract_optimized_features(text):
    """Extração de características otimizada"""
    features = {}
    
    # Características básicas
    features['length'] = len(text)
    features['word_count'] = len(text.split())
    features['sentence_count'] = text.count('.') + text.count('!') + text.count('?')
    
    # Densidade de informação
    words = text.split()
    unique_words = len(set(word.lower() for word in words))
    features['unique_word_ratio'] = unique_words / len(words) if words else 0
    features['avg_word_length'] = np.mean([len(word) for word in words]) if words else 0
    
    # Características de pontuação (indicadores emocionais)
    features['question_marks'] = text.count('?')
    features['exclamation_marks'] = text.count('!')
    features['periods'] = text.count('.')
    features['commas'] = text.count(',')
    
    # Intensidade emocional
    features['uppercase_ratio'] = sum(1 for c in text if c.isupper()) / len(text) if text else 0
    features['repeated_punctuation'] = len(re.findall(r'[!?]{2,}', text))
    
    # Padrões técnicos
    features['has_error_codes'] = 1 if re.search(r'\b(erro|error)\s*\d+', text.lower()) else 0
    features['has_numbers'] = len(re.findall(r'\d+', text))
    features['has_urls'] = 1 if re.search(r'http|www', text.lower()) else 0
    features['has_emails'] = 1 if re.search(r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b', text) else 0
    
    # Palavras-chave balanceadas
    productive_keywords = [
        'erro', 'bug', 'problema', 'falha', 'defeito', 'crash',
        'preciso', 'solicito', 'ajuda', 'suporte', 'orientação',
        'urgente', 'crítico', 'importante', 'prioritário',
        'login', 'senha', 'acesso', 'sistema', 'configuração',
        'status', 'andamento', 'protocolo', 'quando', 'como'
    ]
    
    unproductive_keywords = [
        'obrigado', 'obrigada', 'agradeço', 'gratidão',
        'parabéns', 'felicitações', 'congratulações',
        'sucesso', 'conquista', 'vitória',
        'natal', 'aniversário', 'feriado', 'férias',
        'feliz', 'alegria', 'celebrar', 'comemorar',
        'abraços', 'saudações', 'desejo', 'tenha'
    ]
    
    text_lower = text.lower()
    
    # Contagem ponderada de palavras-chave
    productive_score = 0
    for keyword in productive_keywords:
        if keyword in text_lower:
            # Dar peso maior para palavras no início
            if text_lower.startswith(keyword):
                productive_score += 2
            else:
                productive_score += 1
    
    unproductive_score = 0
    for keyword in unproductive_keywords:
        if keyword in text_lower:
            if text_lower.startswith(keyword):
                unproductive_score += 2
            else:
                unproductive_score += 1
    
    features['productive_keywords'] = productive_score
    features['unproductive_keywords'] = unproductive_score
    
    # Ratio balanceado
    total_keywords = productive_score + unproductive_score
    if total_keywords > 0:
        features['keyword_ratio'] = productive_score / total_keywords
    else:
        features['keyword_ratio'] = 0.5
    
    # Indicadores de formalidade
    formal_indicators = ['prezados', 'atenciosamente', 'cordialmente', 'solicitação']
    features['formality_score'] = sum(1 for indicator in formal_indicators if indicator in text_lower)
    
    return features

def main():
    """Função principal de treinamento"""
    print("🚀 TREINANDO MODELO COM DATASET BALANCEADO")
    print("="*50)
    
    try:
        # 1. Verificar se dataset balanceado existe
        dataset_path = os.path.join(os.path.dirname(__file__), "..", "datasets", "dataset_balanced_2000.csv")

        if not os.path.exists(dataset_path):
            print(f"❌ Dataset balanceado não encontrado: {dataset_path}")
            print("💡 Execute primeiro: python create_improved_dataset.py")
            return False
        
        # 2. Carregar dataset
        print(f"📊 Carregando dataset balanceado...")
        df = pd.read_csv(dataset_path)
        
        # 3. Validar dataset
        print(f"✅ Dataset carregado: {len(df)} registros")
        class_counts = df['label'].value_counts()
        for label, count in class_counts.items():
            percentage = (count / len(df)) * 100
            print(f"   {label}: {count:,} ({percentage:.1f}%)")
        
        # 4. Preprocessar textos
        print("🔄 Preprocessando textos...")
        df['processed_text'] = df['text'].apply(preprocess_text_optimized)
        
        # 5. Extrair características
        print("🔄 Extraindo características...")
        feature_dicts = df['processed_text'].apply(extract_optimized_features)
        feature_df = pd.DataFrame(feature_dicts.tolist())
        
        # 6. Preparar dados
        X_text = df['processed_text'].values
        X_features = feature_df.values
        y = df['label'].values
        
        # 7. Dividir dados (80% treino, 20% teste)
        X_text_train, X_text_test, X_feat_train, X_feat_test, y_train, y_test = train_test_split(
            X_text, X_features, y, test_size=0.2, random_state=42, stratify=y
        )
        
        print(f"📊 Dados divididos: {len(X_text_train)} treino, {len(X_text_test)} teste")
        
        # 8. Vetorização TF-IDF otimizada
        print("🔄 Vetorizando textos com TF-IDF...")
        vectorizer = TfidfVectorizer(
            max_features=8000,  # Aumentar features
            ngram_range=(1, 3),  # Incluir trigramas
            min_df=2,
            max_df=0.85,
            sublinear_tf=True,
            strip_accents='unicode'
        )
        
        X_text_train_vec = vectorizer.fit_transform(X_text_train)
        X_text_test_vec = vectorizer.transform(X_text_test)
        
        # 9. Normalizar características
        scaler = StandardScaler()
        X_feat_train_scaled = scaler.fit_transform(X_feat_train)
        X_feat_test_scaled = scaler.transform(X_feat_test)
        
        # 10. Combinar características
        try:
            from scipy.sparse import hstack
            X_train_combined = hstack([X_text_train_vec, X_feat_train_scaled])
            X_test_combined = hstack([X_text_test_vec, X_feat_test_scaled])
            print("✅ Características textuais e numéricas combinadas")
        except ImportError:
            print("⚠️ Scipy não disponível, usando apenas texto")
            X_train_combined = X_text_train_vec
            X_test_combined = X_text_test_vec
        
        # 11. Treinar modelo otimizado
        print("🤖 Treinando Random Forest otimizado...")
        model = RandomForestClassifier(
            n_estimators=300,  # Mais árvores
            max_depth=25,      # Maior profundidade
            min_samples_split=3,
            min_samples_leaf=1,
            max_features='sqrt',
            random_state=42,
            class_weight='balanced',  # Importante para classes balanceadas
            bootstrap=True,
            oob_score=True,
            n_jobs=-1  # Usar todos os cores
        )
        
        model.fit(X_train_combined, y_train)
        
        # 12. Avaliar modelo
        print("📊 Avaliando modelo...")
        y_pred = model.predict(X_test_combined)
        accuracy = accuracy_score(y_test, y_pred)
        
        # Cross-validation
        try:
            cv_scores = cross_val_score(model, X_train_combined, y_train, cv=5, scoring='accuracy')
            cv_mean = cv_scores.mean()
            cv_std = cv_scores.std()
        except:
            cv_mean = accuracy
            cv_std = 0
        
        # 13. Salvar modelo
        model_data = {
            'model': model,
            'vectorizer': vectorizer,
            'scaler': scaler
        }
        
        model_path = os.path.join(os.path.dirname(__file__), "..", "datasets", "advanced_model.pkl")
        with open(model_path, 'wb') as f:
            pickle.dump(model_data, f)
        
        # 14. Resultados detalhados
        print("\n" + "="*60)
        print("🎯 RESULTADOS DO TREINAMENTO OTIMIZADO")
        print("="*60)
        print(f"✅ Acurácia no teste: {accuracy:.1%}")
        print(f"✅ Cross-validation: {cv_mean:.1%} (±{cv_std*2:.1%})")
        if hasattr(model, 'oob_score_'):
            print(f"✅ Out-of-bag score: {model.oob_score_:.1%}")
        print(f"✅ Modelo salvo em: {model_path}")
        
        print("\n📋 Relatório de classificação detalhado:")
        print(classification_report(y_test, y_pred, zero_division=0))
        
        print("\n📊 Matriz de confusão:")
        cm = confusion_matrix(y_test, y_pred)
        print(cm)
        
        # 15. Teste com exemplos específicos
        print("\n" + "="*60)
        print("🧪 TESTE COM EXEMPLOS BALANCEADOS")
        print("="*60)
        
        test_examples = [
            ("Estou com problema para fazer login no sistema", "PRODUTIVO"),
            ("Muito obrigado pelo excelente atendimento!", "IMPRODUTIVO"),
            ("Como configurar a integração da API?", "PRODUTIVO"),
            ("Parabéns pelo sucesso do projeto!", "IMPRODUTIVO"),
            ("Sistema apresentando erro 500", "PRODUTIVO"),
            ("Feliz Natal para toda equipe!", "IMPRODUTIVO"),
            ("Preciso urgentemente acessar relatórios", "PRODUTIVO"),
            ("Gratidão pela dedicação demonstrada", "IMPRODUTIVO"),
            ("Não consigo fazer backup dos dados", "PRODUTIVO"),
            ("Desejo ótima semana para todos!", "IMPRODUTIVO")
        ]
        
        correct_predictions = 0
        
        for i, (text, expected) in enumerate(test_examples, 1):
            # Processar exemplo
            processed = preprocess_text_optimized(text)
            features = extract_optimized_features(text)
            
            # Vetorizar
            text_vec = vectorizer.transform([processed])
            feat_array = np.array(list(features.values())).reshape(1, -1)
            
            if scaler:
                feat_array = scaler.transform(feat_array)
            
            # Combinar
            try:
                from scipy.sparse import hstack
                X_example = hstack([text_vec, feat_array])
            except ImportError:
                X_example = text_vec
            
            # Predizer
            prediction = model.predict(X_example)[0]
            confidence = max(model.predict_proba(X_example)[0])
            
            is_correct = prediction == expected
            if is_correct:
                correct_predictions += 1
            
            status = "✅" if is_correct else "❌"
            print(f"{i:2d}. {status} '{text[:45]}...'")
            print(f"     Esperado: {expected} | Predito: {prediction} ({confidence:.1%})")
        
        test_accuracy = correct_predictions / len(test_examples)
        print(f"\n📊 Precisão nos exemplos: {test_accuracy:.1%} ({correct_predictions}/{len(test_examples)})")
        
        # 16. Análise de importância das características
        if hasattr(model, 'feature_importances_'):
            print(f"\n🔍 Top 10 características mais importantes:")
            try:
                feature_names = list(vectorizer.get_feature_names_out())
                feature_names.extend([f'feat_{i}' for i in range(len(feature_df.columns))])
                
                importances = model.feature_importances_
                indices = np.argsort(importances)[::-1]
                
                for i in range(min(10, len(indices))):
                    idx = indices[i]
                    if idx < len(vectorizer.get_feature_names_out()):
                        name = feature_names[idx]
                    else:
                        name = f"característica_{idx}"
                    print(f"  {i+1:2d}. {name}: {importances[idx]:.4f}")
            except:
                print("  Análise de importância não disponível")
        
        # 17. Recomendações finais
        print(f"\n💡 RECOMENDAÇÕES:")
        if accuracy >= 0.90:
            print("  ✅ Modelo com excelente performance!")
        elif accuracy >= 0.85:
            print("  ✅ Modelo com boa performance!")
        else:
            print("  ⚠️ Modelo pode precisar de mais ajustes")
        
        if test_accuracy >= 0.80:
            print("  ✅ Testes manuais satisfatórios!")
        else:
            print("  ⚠️ Revisar exemplos de teste")
        
        print(f"\n🚀 PRÓXIMOS PASSOS:")
        print("  1. Execute: python run.py")
        print("  2. Teste a API: curl http://localhost:8000/api/health")
        print("  3. Teste classificação: curl -X POST http://localhost:8000/api/classify -d 'text=teste'")
        
        return True
        
    except Exception as e:
        print(f"\n❌ ERRO DURANTE TREINAMENTO: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)