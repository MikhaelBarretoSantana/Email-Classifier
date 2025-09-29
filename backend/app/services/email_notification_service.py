from ..interfaces.email_sender_interface import EmailSenderInterface, MockEmailSender

class EmailNotificationService:
    """
    Serviço para envio de notificações por email, usando uma interface injetável.
    """
    def __init__(self, sender: EmailSenderInterface = None):
        self.sender = sender or MockEmailSender()

    def notify_user(self, to: str, subject: str, body: str) -> bool:
        return self.sender.send_email(to, subject, body)
