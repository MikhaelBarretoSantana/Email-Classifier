class EmailSenderInterface:
    """
    Interface para envio de emails. Permite trocar implementação facilmente (SMTP, API, mock, etc).
    """
    def send_email(self, to: str, subject: str, body: str) -> bool:
        raise NotImplementedError("Implementação de envio de email não definida.")

class MockEmailSender(EmailSenderInterface):
    """
    Implementação mock para testes/desenvolvimento.
    """
    def send_email(self, to: str, subject: str, body: str) -> bool:
        print(f"Email enviado para {to}: {subject}\n{body}")
        return True
