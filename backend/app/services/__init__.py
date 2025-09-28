"""
Módulo de serviços do Email Classifier

Este módulo contém todos os serviços principais da aplicação:
- AdvancedEmailClassifier: Classificação inteligente de emails (modelo avançado)
- AdvancedClassifierService: Serviço que gerencia os classificadores
- FileProcessor: Processamento de arquivos (PDF, TXT)
"""

from .advanced_classifier import AdvancedEmailClassifier
from .classifier_service import AdvancedClassifierService
from .file_processor import FileProcessor

__all__ = [
    "AdvancedEmailClassifier",
    "AdvancedClassifierService",
    "FileProcessor",
]

# Versões dos serviços
ADVANCED_CLASSIFIER_VERSION = "2.0.0"
CLASSIFIER_SERVICE_VERSION = "1.0.0"
FILE_PROCESSOR_VERSION = "1.5.0"

# Configurações padrão
DEFAULT_CLASSIFIER_CONFIG = {
    "confidence_threshold": 0.6,
    "max_file_size_mb": 10,
    "supported_extensions": [".txt", ".pdf"],
}
