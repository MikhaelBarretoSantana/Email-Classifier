import logging
import sys
from datetime import datetime
from typing import Optional

def setup_logger(name: str, level: str = "INFO") -> logging.Logger:
    """
    Configura e retorna um logger personalizado
    
    Args:
        name: Nome do logger
        level: Nível de logging (DEBUG, INFO, WARNING, ERROR)
        
    Returns:
        logging.Logger: Logger configurado
    """
    
    # Criar logger
    logger = logging.getLogger(name)
    
    # Evitar duplicação de handlers
    if logger.handlers:
        return logger
    
    # Configurar nível
    numeric_level = getattr(logging, level.upper(), logging.INFO)
    logger.setLevel(numeric_level)
    
    # Criar formatter personalizado
    formatter = CustomFormatter()
    
    # Handler para console
    console_handler = logging.StreamHandler(sys.stdout)
    console_handler.setLevel(numeric_level)
    console_handler.setFormatter(formatter)
    logger.addHandler(console_handler)
    
    # Evitar propagação para o logger raiz
    logger.propagate = False
    
    return logger

class CustomFormatter(logging.Formatter):
    """Formatter personalizado com cores e emojis"""
    
    # Cores ANSI
    COLORS = {
        'DEBUG': '\033[36m',    # Ciano
        'INFO': '\033[32m',     # Verde
        'WARNING': '\033[33m',  # Amarelo
        'ERROR': '\033[31m',    # Vermelho
        'CRITICAL': '\033[91m', # Vermelho brilhante
        'RESET': '\033[0m'      # Reset
    }
    
    # Emojis por nível
    EMOJIS = {
        'DEBUG': '🔍',
        'INFO': 'ℹ️',
        'WARNING': '⚠️',
        'ERROR': '❌',
        'CRITICAL': '🚨'
    }
    
    def format(self, record):
        # Timestamp
        timestamp = datetime.fromtimestamp(record.created).strftime('%Y-%m-%d %H:%M:%S')
        
        # Cor e emoji baseados no nível
        level_name = record.levelname
        color = self.COLORS.get(level_name, self.COLORS['RESET'])
        emoji = self.EMOJIS.get(level_name, '')
        reset_color = self.COLORS['RESET']
        
        # Nome do módulo (simplificado)
        module_name = record.name.split('.')[-1] if '.' in record.name else record.name
        
        # Formatação personalizada
        if record.levelno >= logging.ERROR:
            # Para erros, incluir mais informações
            formatted = (
                f"{color}{emoji} [{timestamp}] {level_name:<8} "
                f"[{module_name}:{record.lineno}] {record.getMessage()}{reset_color}"
            )
            
            # Adicionar informações de exceção se existir
            if record.exc_info:
                formatted += f"\n{self.formatException(record.exc_info)}"
                
        else:
            # Para outros níveis, formato mais simples
            formatted = (
                f"{color}{emoji} [{timestamp}] {level_name:<8} "
                f"[{module_name}] {record.getMessage()}{reset_color}"
            )
        
        return formatted

class APILogger:
    """Logger específico para API com métodos utilitários"""
    
    def __init__(self, name: str = "EmailClassifierAPI"):
        self.logger = setup_logger(name)
    
    def log_request(self, method: str, path: str, client_ip: Optional[str] = None):
        """Log de requisição HTTP"""
        client_info = f" from {client_ip}" if client_ip else ""
        self.logger.info(f"🌐 {method} {path}{client_info}")
    
    def log_classification(self, classification: str, confidence: float, processing_time: float):
        """Log de classificação realizada"""
        self.logger.info(
            f"🤖 Classificação: {classification} "
            f"(confiança: {confidence:.2f}, tempo: {processing_time:.3f}s)"
        )
    
    def log_file_processing(self, filename: str, file_size: int, text_length: int):
        """Log de processamento de arquivo"""
        size_mb = file_size / (1024 * 1024)
        self.logger.info(
            f"📄 Arquivo processado: {filename} "
            f"({size_mb:.2f}MB → {text_length} caracteres)"
        )
    
    def log_error_with_context(self, error: Exception, context: str):
        """Log de erro com contexto adicional"""
        self.logger.error(f"❌ Erro em {context}: {str(error)}")
        if hasattr(error, '__traceback__'):
            import traceback
            self.logger.debug(f"Stack trace: {traceback.format_exc()}")
    
    def log_startup(self, version: str, mode: str):
        """Log de inicialização da aplicação"""
        self.logger.info("🚀" + "="*50)
        self.logger.info(f"🚀 Email Classifier API v{version}")
        self.logger.info(f"🤖 Modo: {mode}")
        self.logger.info(f"📚 Documentação: /docs")
        self.logger.info("🚀" + "="*50)
    
    def log_statistics(self, total: int, productive: int, unproductive: int, avg_confidence: float):
        """Log de estatísticas"""
        self.logger.info(
            f"📊 Estatísticas: {total} classificações "
            f"({productive} produtivos, {unproductive} improdutivos, "
            f"confiança média: {avg_confidence:.2f})"
        )