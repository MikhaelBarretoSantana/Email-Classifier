class StorageInterface:
    """
    Interface para armazenamento de arquivos e dados. Permite trocar implementação facilmente (local, cloud, mock, etc).
    """
    def save(self, path: str, data: bytes) -> bool:
        raise NotImplementedError("Implementação de storage não definida.")

    def load(self, path: str) -> bytes:
        raise NotImplementedError("Implementação de storage não definida.")

class LocalStorage(StorageInterface):
    """
    Implementação local para armazenamento em disco.
    """
    def save(self, path: str, data: bytes) -> bool:
        try:
            with open(path, 'wb') as f:
                f.write(data)
            return True
        except Exception:
            return False

    def load(self, path: str) -> bytes:
        try:
            with open(path, 'rb') as f:
                return f.read()
        except Exception:
            return b''
