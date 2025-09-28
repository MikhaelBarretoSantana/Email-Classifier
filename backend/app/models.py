# backend/app/models.py
from pydantic import BaseModel, Field, validator, ConfigDict
from typing import Dict, Any, Optional, List
from datetime import datetime

class EmailResponse(BaseModel):
    """
    Resposta da classificação de email com métricas avançadas
    """
    classification: str = Field(..., description="Classificação do email (PRODUTIVO/IMPRODUTIVO)")
    suggested_response: str = Field(..., description="Resposta sugerida personalizada")
    confidence: float = Field(..., ge=0.0, le=1.0, description="Confiança da classificação (0-1)")
    processing_time: float = Field(..., ge=0.0, description="Tempo de processamento em segundos")
    method_used: Optional[str] = Field("unknown", description="Método de classificação usado")
    additional_info: Optional[Dict[str, Any]] = Field(default_factory=dict, description="Informações adicionais")
    
    @validator('classification')
    def validate_classification(cls, v):
        if v not in ['PRODUTIVO', 'IMPRODUTIVO', 'INDEFINIDO']:
            raise ValueError('Classificação deve ser PRODUTIVO, IMPRODUTIVO ou INDEFINIDO')
        return v
    
    @validator('confidence')
    def validate_confidence(cls, v):
        if not 0.0 <= v <= 1.0:
            raise ValueError('Confiança deve estar entre 0.0 e 1.0')
        return v

class ClassificationRequest(BaseModel):
    """
    Requisição para classificação de texto
    """
    text: str = Field(..., min_length=10, max_length=50000, description="Texto do email")
    
    @validator('text')
    def validate_text(cls, v):
        if not v.strip():
            raise ValueError('Texto não pode estar vazio')
        return v.strip()

class FileUploadResponse(BaseModel):
    """
    Resposta específica para upload de arquivo
    """
    filename: str = Field(..., description="Nome do arquivo processado")
    file_size: int = Field(..., description="Tamanho do arquivo em bytes")
    extracted_text_length: int = Field(..., description="Comprimento do texto extraído")
    classification_result: EmailResponse = Field(..., description="Resultado da classificação")

class HealthResponse(BaseModel):
    """
    Resposta do health check da aplicação
    """
    status: str = Field(..., description="Status geral (healthy/degraded/unhealthy)")
    advanced_classifier: str = Field(..., description="Status do classificador avançado")
    fallback_classifier: str = Field(..., description="Status do classificador de fallback")
    test_classification: Optional[str] = Field(None, description="Resultado do teste interno")
    test_result: Optional[str] = Field(None, description="Classificação do teste")
    test_method: Optional[str] = Field(None, description="Método usado no teste")
    error: Optional[str] = Field(None, description="Mensagem de erro se houver")
    timestamp: Optional[datetime] = Field(default_factory=datetime.utcnow, description="Timestamp da verificação")

class ModelInfo(BaseModel):
    """
    Informações sobre os modelos carregados
    """
    advanced_model_loaded: bool = Field(..., description="Se o modelo avançado está carregado")
    advanced_model_path: str = Field(..., description="Caminho do modelo avançado")
    fallback_available: bool = Field(..., description="Se o fallback está disponível")
    fallback_enabled: bool = Field(..., description="Se o fallback está habilitado")
    fallback_type: Optional[str] = Field(None, description="Tipo do classificador de fallback")

class StatisticsResponse(BaseModel):
    """
    Estatísticas da aplicação
    """
    model_config = ConfigDict(protected_namespaces=())
    
    models_loaded: Dict[str, bool] = Field(..., description="Status dos modelos carregados")
    model_info: ModelInfo = Field(..., description="Informações detalhadas dos modelos")
    performance: Dict[str, str] = Field(..., description="Métricas de performance")
    total_classifications: Optional[int] = Field(0, description="Total de classificações realizadas")
    uptime: Optional[str] = Field("00:00:00", description="Tempo de atividade da aplicação")

class TrainingRequest(BaseModel):
    """
    Requisição para retreinamento do modelo
    """
    dataset_path: str = Field("dataset_combined_1200.csv", description="Caminho para o dataset")
    force_retrain: bool = Field(False, description="Forçar retreinamento mesmo se modelo existe")

class TrainingResponse(BaseModel):
    """
    Resposta do retreinamento
    """
    status: str = Field(..., description="Status do treinamento")
    message: str = Field(..., description="Mensagem descritiva")
    accuracy: Optional[float] = Field(None, description="Acurácia do modelo treinado")
    cross_validation: Optional[float] = Field(None, description="Score de cross-validation")
    model_info: Optional[ModelInfo] = Field(None, description="Informações do novo modelo")
    training_time: Optional[float] = Field(None, description="Tempo de treinamento em segundos")

class ErrorResponse(BaseModel):
    """
    Resposta padrão para erros
    """
    detail: str = Field(..., description="Mensagem de erro")
    type: str = Field(..., description="Tipo do erro")
    suggestion: Optional[str] = Field(None, description="Sugestão para resolver o erro")
    timestamp: datetime = Field(default_factory=datetime.utcnow, description="Timestamp do erro")

# Configurações de exemplo para validação
class Config:
    """Configuração para todos os modelos"""
    json_encoders = {
        datetime: lambda v: v.isoformat() + 'Z'
    }
    schema_extra = {
        "example": {
            "classification": "PRODUTIVO",
            "confidence": 0.87,
            "processing_time": 0.045
        }
    }