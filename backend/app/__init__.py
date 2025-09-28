# backend/app/__init__.py

# Importar apenas os modelos que existem
from .models import (
    EmailResponse,
    ClassificationRequest,
    HealthResponse,
    ModelInfo,
    StatisticsResponse,
    TrainingRequest,
    TrainingResponse,
    ErrorResponse
)

# Se você tinha outros modelos no arquivo antigo, adicione aqui:
# from .models import ClassificationHistory, APIStatus  # se existirem

__all__ = [
    "EmailResponse",
    "ClassificationRequest", 
    "HealthResponse",
    "ModelInfo",
    "StatisticsResponse",
    "TrainingRequest",
    "TrainingResponse",
    "ErrorResponse"
]