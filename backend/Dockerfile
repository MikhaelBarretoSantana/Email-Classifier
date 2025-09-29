FROM python:3.11-slim

# Instala dependências do sistema necessárias para pacotes Python
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Cria diretório de trabalho
WORKDIR /app

# Copia arquivos do projeto
COPY requirements.txt ./
COPY app/ ./app/
COPY datasets/ ./datasets/
COPY scripts/ ./scripts/
COPY .env ./

# Instala dependências Python
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Variáveis de ambiente
ENV PYTHONUNBUFFERED=1
ENV PORT=8000

# Expondo porta
EXPOSE 8000

# Comando de inicialização
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
