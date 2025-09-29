from ..interfaces.storage_interface import StorageInterface, LocalStorage

class FileStorageService:
    """
    Serviço para armazenamento de arquivos, usando uma interface injetável.
    """
    def __init__(self, storage: StorageInterface = None):
        self.storage = storage or LocalStorage()

    def save_file(self, path: str, data: bytes) -> bool:
        return self.storage.save(path, data)

    def load_file(self, path: str) -> bytes:
        return self.storage.load(path)
