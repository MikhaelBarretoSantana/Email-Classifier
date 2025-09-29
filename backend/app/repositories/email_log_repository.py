import logging

logger = logging.getLogger(__name__)

class EmailLogRepository:
    """
    Repositório para persistência de logs de classificação de emails.
    Permite trocar facilmente o backend de armazenamento (arquivo, banco, etc).
    """
    def __init__(self):
        # Exemplo: pode ser adaptado para salvar em arquivo, banco, etc
        self.logs = []

    def save_log(self, log_data: dict):
        self.logs.append(log_data)
        logger.info(f"Log de classificação salvo: {log_data}")

    def get_all_logs(self):
        return self.logs
