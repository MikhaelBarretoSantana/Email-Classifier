"""
Módulo de utilitários do Email Classifier

Contém ferramentas auxiliares para logging, validações e outras funcionalidades
que são utilizadas em toda a aplicação.
"""

from .logger import setup_logger, CustomFormatter, APILogger

__all__ = [
    "setup_logger",
    "CustomFormatter", 
    "APILogger",
]

# Configurações padrão de logging
DEFAULT_LOG_CONFIG = {
    "level": "INFO",
    "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    "date_format": "%Y-%m-%d %H:%M:%S",
}