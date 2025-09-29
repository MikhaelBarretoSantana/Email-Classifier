# backend/app/main.py
from fastapi import FastAPI, UploadFile, File, Form, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from .services.classifier_service import AdvancedClassifierService
from .services.file_processor import FileProcessor
from .models import EmailResponse, HealthResponse, ModelInfo, StatisticsResponse
from .utils.logger import setup_logger

# Configurar logger customizado
logger = setup_logger("EmailClassifierAPI")

# Criar aplicação FastAPI
app = FastAPI(
    title="Sistema Avançado de Classificação de Emails - AutoU",
    description="API com IA para classificação inteligente de emails em Produtivo/Improdutivo",
    version="2.0.0",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configurar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",
        "https://email-classifier-1-kkch.onrender.com",  # Adicione o domínio do frontend publicado
    ],
    allow_credentials=True,
    allow_methods=["*"],  # Permite todos os métodos
    allow_headers=["*"],
)


# Inicializar serviço de classificação global
classifier_service = None


@app.on_event("startup")
async def startup_event():
    """Inicializar serviços na inicialização"""
    global classifier_service
    try:
        # Usar variável de ambiente para caminho do modelo
        model_path = os.getenv("ADVANCED_MODEL_PATH", "./datasets/advanced_model.pkl")
        classifier_service = AdvancedClassifierService(model_path=model_path)
        logger.info("✅ Aplicação iniciada com sucesso")
        # Teste de saúde na inicialização
        health = classifier_service.health_check()
        logger.info(f"Status de saúde: {health['status']}")
    except Exception as e:
        logger.error(f"❌ Erro na inicialização: {e}")
        # Continuar mesmo com erro para permitir debug

def get_classifier_service() -> AdvancedClassifierService:
    """
    Dependency para obter o serviço de classificação.
    Retorna a instância global do serviço de classificação, inicializando se necessário.
    Utiliza o caminho do modelo definido na variável de ambiente ADVANCED_MODEL_PATH.
    Returns:
        AdvancedClassifierService: Instância do serviço de classificação.
    """
    global classifier_service
    if classifier_service is None:
        model_path = os.getenv("ADVANCED_MODEL_PATH", "./datasets/advanced_model.pkl")
        classifier_service = AdvancedClassifierService(model_path=model_path)
    return classifier_service

# ==================== ENDPOINTS PRINCIPAIS ====================

@app.get("/")
async def root():
    """
    Endpoint raiz da API.
    Retorna informações básicas sobre o sistema, versão, status e endpoints disponíveis.
    Returns:
        dict: Informações da API.
    """
    return {
        "message": "Sistema Avançado de Classificação de Emails - AutoU",
        "version": "2.0.0", 
        "status": "operational",
        "endpoints": {
            "classify": "/api/classify",
            "classify_file": "/api/classify-file",
            "health": "/api/health",
            "docs": "/docs"
        }
    }

@app.post("/api/classify", response_model=EmailResponse)
async def classify_email(
    text: str = Form(..., description="Conteúdo do email para classificação"),
    service: AdvancedClassifierService = Depends(get_classifier_service)
):
    """
    Classifica texto de email diretamente.
    Args:
        text (str): Conteúdo do email para classificação.
        service (AdvancedClassifierService): Serviço de classificação injetado.
    Returns:
        EmailResponse: Resultado da classificação do email.
    Raises:
        HTTPException: Para erros de validação ou internos.
    """
    try:
        logger.info(f"📝 Classificando texto: {len(text)} caracteres")
        # Validações
        if not text or not text.strip():
            raise HTTPException(
                status_code=400,
                detail="O texto não pode estar vazio"
            )
        if len(text.strip()) < 10:
            raise HTTPException(
                status_code=400,
                detail="Texto muito curto. Mínimo de 10 caracteres necessário."
            )
        if len(text) > 50000:
            raise HTTPException(
                status_code=400,
                detail="Texto muito longo. Máximo de 50.000 caracteres."
            )
        # Classificar
        result = service.classify(text)
        logger.info(f"✅ Classificação concluída: {result.classification} ({result.confidence:.2%})")
        return result
    except HTTPException:
        raise
    except ValueError as e:
        logger.warning(f"⚠️ Erro de validação: {e}")
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.error(f"❌ Erro interno na classificação: {e}")
        raise HTTPException(
            status_code=500,
            detail="Erro interno do servidor. Tente novamente em alguns minutos."
        )

@app.post("/api/classify-file", response_model=EmailResponse)
async def classify_file(
    file: UploadFile = File(..., description="Arquivo .txt ou .pdf contendo o email"),
    service: AdvancedClassifierService = Depends(get_classifier_service)
):
    """
    Classifica email a partir de arquivo enviado.
    Args:
        file (UploadFile): Arquivo .txt ou .pdf contendo o email.
        service (AdvancedClassifierService): Serviço de classificação injetado.
    Returns:
        EmailResponse: Resultado da classificação do email extraído do arquivo.
    Raises:
        HTTPException: Para erros de validação ou internos.
    """
    try:
        logger.info(f"📁 Processando arquivo: {file.filename}")
        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="Nenhum arquivo foi enviado"
            )
        # Processar arquivo
        text = await FileProcessor.process_uploaded_file(file)
        if len(text.strip()) < 10:
            raise HTTPException(
                status_code=400,
                detail="Arquivo contém muito pouco texto para classificação (mínimo 10 caracteres)."
            )
        # Classificar
        result = service.classify(text)
        # Adicionar informações do arquivo
        result.additional_info.update({
            'filename': file.filename,
            'file_size': len(text),
            'extraction_method': 'file_upload',
            'file_type': file.content_type
        })
        logger.info(f"✅ Arquivo classificado: {result.classification} ({result.confidence:.2%})")
        return result
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"❌ Erro no processamento do arquivo: {e}")
        raise HTTPException(
            status_code=500,
            detail=f"Erro interno no processamento: {str(e)}"
        )

@app.get("/api/health")
async def health_check(service: AdvancedClassifierService = Depends(get_classifier_service)):
    """
    Verifica saúde da aplicação e dos modelos de IA.
    Args:
        service (AdvancedClassifierService): Serviço de classificação injetado.
    Returns:
        JSONResponse: Status de saúde da aplicação e dos modelos.
    """
    try:
        health_status = service.health_check()
        if health_status['status'] == 'healthy':
            status_code = 200
        elif health_status['status'] == 'degraded':
            status_code = 200
        else:
            status_code = 503
        return JSONResponse(
            status_code=status_code,
            content={
                'timestamp': '2024-01-01T00:00:00Z',
                'application': 'Email Classifier API - AutoU',
                'version': '2.0.0',
                **health_status
            }
        )
    except Exception as e:
        logger.error(f"❌ Erro no health check: {e}")
        return JSONResponse(
            status_code=503,
            content={
                'status': 'unhealthy',
                'error': str(e),
                'application': 'Email Classifier API - AutoU'
            }
        )

@app.get("/api/model-info")
async def get_model_info(service: AdvancedClassifierService = Depends(get_classifier_service)):
    """
    Retorna informações detalhadas sobre os modelos carregados.
    Args:
        service (AdvancedClassifierService): Serviço de classificação injetado.
    Returns:
        dict: Informações dos modelos carregados.
    Raises:
        HTTPException: Em caso de erro interno.
    """
    try:
        return service.get_model_info()
    except Exception as e:
        logger.error(f"❌ Erro ao obter info do modelo: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/stats")
async def get_statistics(service: AdvancedClassifierService = Depends(get_classifier_service)):
    """
    Retorna estatísticas de uso e performance da aplicação.
    Args:
        service (AdvancedClassifierService): Serviço de classificação injetado.
    Returns:
        dict: Estatísticas de uso e performance.
    Raises:
        HTTPException: Em caso de erro interno.
    """
    try:
        return service.get_statistics()
    except Exception as e:
        logger.error(f"❌ Erro ao obter estatísticas: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    )