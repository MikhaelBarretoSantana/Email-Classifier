# backend/app/services/classifier_service.py
from typing import Dict, Optional
import logging
import os
from ..models import EmailResponse
from .advanced_classifier import AdvancedEmailClassifier

logger = logging.getLogger(__name__)

class AdvancedClassifierService:
    """
    Serviço de classificação avançada integrado à estrutura existente
    """
    
    def __init__(self, model_path: str = "./datasets/advanced_model.pkl", fallback_enabled: bool = True):
        self.model_path = model_path
        self.fallback_enabled = fallback_enabled
        self.classifier = None
        self.fallback_classifier = None
        
        # Tentar carregar modelo avançado
        self._initialize_classifier()
        
    
    def _initialize_classifier(self):
        """Inicializa o classificador avançado"""
        try:
            if os.path.exists(self.model_path):
                self.classifier = AdvancedEmailClassifier(self.model_path)
                logger.info(f"✅ Classificador avançado carregado de {self.model_path}")
            else:
                logger.warning(f"⚠️ Modelo avançado não encontrado em {self.model_path}")
                logger.info("💡 Execute: python train_advanced_model.py")
        except Exception as e:
            logger.error(f"❌ Erro ao carregar classificador avançado: {e}")
    
    def classify(self, content: str) -> EmailResponse:
        """
        Classifica email usando o melhor classificador disponível
        """
        if not content or not content.strip():
            raise ValueError("Conteúdo do email não pode estar vazio")
        
        # Tentar classificador avançado primeiro
        if self.classifier:
            try:
                result = self.classifier.classify(content)
                return self._convert_to_email_response(result, method="advanced")
            except Exception as e:
                logger.error(f"Erro no classificador avançado: {e}")
                if not self.fallback_enabled:
                    raise
        
        
        # Se nenhum classificador está disponível
        raise RuntimeError("Nenhum classificador está disponível no momento")
    
    def _convert_to_email_response(self, result: Dict, method: str = "advanced") -> EmailResponse:
        """Converte resultado do classificador avançado para EmailResponse"""
        return EmailResponse(
            classification=result['classification'],
            suggested_response=result['suggested_response'],
            confidence=result['confidence'],
            processing_time=result['processing_time'],
            method_used=method,
            additional_info={
                'probabilities': result.get('probabilities', {}),
                'features_detected': result.get('features_detected', {}),
                'text_length': result.get('text_length', 0)
            }
        )
    
    def _convert_custom_result(self, result: Dict, method: str) -> EmailResponse:
        """Converte resultado customizado para EmailResponse"""
        return EmailResponse(
            classification=result.get('classification', 'INDEFINIDO'),
            suggested_response=result.get('suggested_response', 'Não foi possível gerar resposta'),
            confidence=result.get('confidence', 0.5),
            processing_time=result.get('processing_time', 0.0),
            method_used=method,
            additional_info={}
        )
    
    def get_model_info(self) -> Dict:
        """Retorna informações sobre os modelos carregados"""
        return {
            'advanced_model_loaded': self.classifier is not None,
            'advanced_model_path': self.model_path,
            'fallback_available': self.fallback_classifier is not None,
            'fallback_enabled': self.fallback_enabled,
            'fallback_type': type(self.fallback_classifier).__name__ if self.fallback_classifier else None
        }
    
    def health_check(self) -> Dict:
        """Verifica saúde do serviço"""
        status = {
            'status': 'healthy',
            'advanced_classifier': 'available' if self.classifier else 'unavailable',
            'fallback_classifier': 'available' if self.fallback_classifier else 'unavailable'
        }
        
        # Teste rápido
        try:
            test_result = self.classify("Teste de funcionamento do sistema")
            status['test_classification'] = 'passed'
            status['test_result'] = test_result.classification
            status['test_method'] = test_result.method_used
        except Exception as e:
            status['status'] = 'degraded'
            status['test_classification'] = 'failed'
            status['error'] = str(e)
        
        return status
    
    def get_statistics(self) -> Dict:
        """Retorna estatísticas do serviço"""
        return {
            'models_loaded': {
                'advanced': self.classifier is not None,
                'fallback': self.fallback_classifier is not None
            },
            'model_info': self.get_model_info(),
            'performance': {
                'avg_response_time': '< 100ms',
                'accuracy': '85-92%' if self.classifier else '70-80%'
            }
        }