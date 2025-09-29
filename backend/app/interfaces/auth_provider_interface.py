class AuthProviderInterface:
    """
    Interface para autenticação de usuários. Permite trocar implementação facilmente (OAuth, JWT, mock, etc).
    """
    def authenticate(self, username: str, password: str) -> bool:
        raise NotImplementedError("Implementação de autenticação não definida.")

    def get_user_info(self, token: str) -> dict:
        raise NotImplementedError("Implementação de autenticação não definida.")

class MockAuthProvider(AuthProviderInterface):
    """
    Implementação mock para testes/desenvolvimento.
    """
    def authenticate(self, username: str, password: str) -> bool:
        return username == "admin" and password == "admin"

    def get_user_info(self, token: str) -> dict:
        return {"username": "admin", "roles": ["admin"]}
