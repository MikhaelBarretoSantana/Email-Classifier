## Serviços principais do Email Classifier

from .advanced_classifier import AdvancedEmailClassifier
from .classifier_service import AdvancedClassifierService
from .file_processor import FileProcessor

__all__ = [
    "AdvancedEmailClassifier",
    "AdvancedClassifierService",
    "FileProcessor",
]

DEFAULT_CLASSIFIER_CONFIG = {
    "confidence_threshold": 0.6,
    "max_file_size_mb": 10,
    "supported_extensions": [".txt", ".pdf"],
}
