from ..interfaces.auth_provider_interface import AuthProviderInterface, MockAuthProvider

class AuthService:
    """
    Serviço para autenticação de usuários, usando uma interface injetável.
    """
    def __init__(self, provider: AuthProviderInterface = None):
        self.provider = provider or MockAuthProvider()

    def login(self, username: str, password: str) -> bool:
        return self.provider.authenticate(username, password)

    def get_user_info(self, token: str) -> dict:
        return self.provider.get_user_info(token)
