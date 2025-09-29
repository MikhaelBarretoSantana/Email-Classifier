import os
import pickle
import logging
from typing import Optional

logger = logging.getLogger(__name__)

class AdvancedModelRepository:
    """
    Repositório para persistência e carregamento do modelo avançado de classificação.
    """
    def __init__(self, model_path: str):
        self.model_path = model_path

    def model_exists(self) -> bool:
        return os.path.exists(self.model_path)

    def load(self) -> Optional[dict]:
        try:
            with open(self.model_path, 'rb') as f:
                model_data = pickle.load(f)
            logger.info(f"✅ Modelo carregado de {self.model_path}")
            return model_data
        except Exception as e:
            logger.error(f"❌ Erro ao carregar modelo: {e}")
            return None

    def save(self, model_data: dict) -> bool:
        try:
            with open(self.model_path, 'wb') as f:
                pickle.dump(model_data, f)
            logger.info(f"✅ Modelo salvo em {self.model_path}")
            return True
        except Exception as e:
            logger.error(f"❌ Erro ao salvar modelo: {e}")
            return False
