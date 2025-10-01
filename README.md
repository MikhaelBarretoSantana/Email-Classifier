# 📧 Email Classifier - Classificação Inteligente de Emails

Uma solução completa de IA para classificação automática de emails e sugestão de respostas, desenvolvida para otimizar o fluxo de trabalho em empresas do setor financeiro.

## 🎯 Sobre o Projeto


**Versão atual:** 2.0.0

**Principais novidades:**
- API otimizada com FastAPI 3.11+ e endpoints keep-alive (`/`, `/ping`, `/uptimerobot`)
- Classificação avançada com IA híbrida (TF-IDF + Random Forest)
- Suporte a múltiplos formatos de arquivo (.txt, .pdf)
- Arquitetura modular: interfaces, serviços, repositórios, utilitários
- Logger customizado e estatísticas detalhadas
- Frontend React 18 com integração direta via proxy Vite
- Scripts para geração e treinamento de datasets realistas
- Dockerfile atualizado para ambiente produtivo

Este projeto foi desenvolvido como parte de um desafio técnico para criar uma solução digital que automatize a leitura e classificação de emails em uma grande empresa do setor financeiro. A aplicação utiliza inteligência artificial para classificar emails em categorias e sugerir respostas automáticas, liberando tempo valioso da equipe.

### 🔍 Problema Resolvido

Empresas do setor financeiro recebem um alto volume de emails diariamente, incluindo:

- Solicitações de status de requisições
- Compartilhamento de arquivos
- Mensagens improdutivas (felicitações, perguntas irrelevantes)

A classificação manual desses emails consome tempo significativo da equipe, que poderia ser dedicado a atividades mais estratégicas.

### ✨ Solução Desenvolvida

Uma aplicação web completa que:

- **Classifica** emails automaticamente em categorias **Produtivo** ou **Improdutivo**
- **Sugere respostas** automáticas baseadas na classificação
- Oferece uma **interface intuitiva** para upload e análise de emails
- Utiliza **modelos de IA avançados** para alta precisão na classificação

## 🛠️ Tecnologias Utilizadas

### Backend (Python)

- **FastAPI** 3.11+ (API principal)
- **scikit-learn** (Random Forest, ML)
- **NLTK** (PLN, stemmer RSLP)
- **TF-IDF Vectorizer**
- **pandas**
- **PyPDF2**
- **uvicorn**
- **pydantic** (modelos de dados)
- **Docker** (containerização)

### Frontend (React + TypeScript)

- **React 18**
- **TypeScript**
- **Vite** (proxy integrado para backend)
- **CSS3**

### Scripts e Utilitários

- **create_improved_dataset.py** (geração de emails realistas)
- **train_with_balanced_dataset.py** (treinamento avançado)

### Hospedagem e Deploy

- **Docker**
- **Plataformas de nuvem**: Heroku, Railway, Render, etc.

## 🏗️ Arquitetura do Projeto

```
email-classifier/
├── 🔧 backend/              # API em Python (FastAPI)
│   ├── app/
│   │   ├── main.py         # Configuração principal da API
│   │   ├── models.py       # Modelos de dados (Pydantic)
│   │   ├── services/       # Lógica de negócio
│   │   │   ├── classifier_service.py      # Orquestração de classificadores
│   │   │   ├── advanced_classifier.py     # Modelo ML avançado
│   │   │   └── file_processor.py         # Processamento de arquivos
│   │   ├── interfaces/     # Interfaces para provedores externos
│   │   ├── repositories/   # Repositórios de dados e modelos
│   │   ├── utils/          # Logger e utilitários
│   │   └── __pycache__/    # Cache de módulos Python
│   ├── datasets/           # Datasets e modelos treinados
│   │   ├── advanced_model.pkl            # Modelo Random Forest treinado
│   │   └── dataset_balanced_2000.csv     # Dataset balanceado
│   ├── scripts/           # Scripts de treinamento e dados
│   │   ├── create_improved_dataset.py    # Gerador de dataset
│   │   └── train_with_balanced_dataset.py # Treinamento avançado
│   ├── requirements.txt   # Dependências Python
│   └── run.py            # Script de execução otimizado
├── 🎨 frontend/             # Interface React
│   ├── src/
│   │   ├── components/     # Componentes React
│   │   │   ├── EmailClassifier.tsx       # Componente principal
│   │   │   └── LoadingSpinner.tsx        # Spinner de carregamento
│   │   ├── hooks/         # Hooks personalizados
│   │   │   └── useEmailClassifier.ts     # Hook de classificação
│   │   ├── services/      # Comunicação com API
│   │   │   └── api.ts     # Cliente HTTP
│   │   └── types/         # Definições TypeScript
│   │       └── index.ts   # Tipos da aplicação
│   └── package.json       # Dependências Node.js
└── 📝 demo/                # Arquivos de demonstração
    ├── produtivo1.txt     # Exemplo: solicitação de suporte
    ├── produtivo2.txt     # Exemplo: pedido de status
    ├── improdutivo1.txt   # Exemplo: mensagem de felicitação
    └── improdutivo2.txt   # Exemplo: agradecimento
```

## 🚀 Como Executar

### Pré-requisitos

- Python 3.11+ (recomendado)
- Node.js 18+
- npm ou yarn

### 🔧 Configuração do Backend

1. **Clone o repositório:**

```bash
git clone <seu-repositorio>
cd email-classifier/backend
```

2. **Crie um ambiente virtual:**

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# ou
venv\Scripts\activate     # Windows
```

3. **Instale as dependências:**

```bash
pip install -r requirements.txt
```

4. **Configure as variáveis de ambiente:**

```bash
cp .env.example .env
# Edite o arquivo .env com suas configurações
```

5. **Execute o servidor:**

```bash
python run.py
```

O backend estará disponível em: `http://localhost:8000`

6. **(Opcional) Execute via Docker:**

```bash
docker build -t email-classifier-backend .
docker run -p 8000:8000 email-classifier-backend
```

### 🎨 Configuração do Frontend

1. **Navegue para o diretório do frontend:**

```bash
cd email-classifier/frontend
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Execute em modo desenvolvimento:**

```bash
npm run dev
```

O frontend estará disponível em: `http://localhost:5173`

4. **Proxy automático para backend:**
O frontend já está configurado para redirecionar `/api` para o backend local (`vite.config.ts`).

## 📊 Funcionalidades

### 🤖 Classificação Inteligente

- Modelo híbrido: TF-IDF + Random Forest
- Extração automática de 19+ features + 8000 TF-IDF
- Precisão > 90% (validação cruzada)
- Processamento em tempo real (NLTK, português)
- Classificação contextualizada (produtivo/improdutivo)

### 💬 Geração de Respostas

- Respostas automáticas baseadas em regras inteligentes
- Detecção de contexto (login, erro, status, etc.)
- Personalização por urgência e tom profissional

### 📎 Processamento de Arquivos

- Suporte a .txt e .pdf
- Upload drag & drop ou manual
- Análise direta na interface web

### 🎯 Categorias Suportadas

#### 📈 Produtivo

- Suporte técnico
- Atualizações de casos
- Dúvidas sobre sistemas
- Requisições de documentos
- Solicitações de integração, auditoria, relatórios, etc.

#### 🎊 Improdutivo

- Felicitações
- Agradecimentos
- Conversas casuais
- Mensagens motivacionais, cultura, etc.

## 🧪 Testando a Aplicação

### Arquivos de Demonstração

O projeto inclui arquivos de exemplo na pasta `demo/`:

- `produtivo1.txt` - Solicitação de suporte técnico
- `produtivo2.txt` - Pedido de atualização de status
- `improdutivo1.txt` - Mensagem de felicitação
- `improdutivo2.txt` - Agradecimento pela prestação de serviço

### Endpoints da API

```bash
# Endpoint raiz (keep-alive)
curl http://localhost:8000/

# Health check
curl http://localhost:8000/api/health

# Classificar texto direto
curl -X POST http://localhost:8000/api/classify -F "text=Sistema apresentando erro 500 durante login"

# Classificar arquivo
curl -X POST http://localhost:8000/api/classify-file -F "file=@demo/produtivo1.txt"

# Informações do modelo
curl http://localhost:8000/api/model-info

# Estatísticas
curl http://localhost:8000/api/stats

# Ping/uptime
curl http://localhost:8000/ping
curl http://localhost:8000/uptimerobot
```

### Fluxo de Teste Completo

1. Acesse a aplicação web em `http://localhost:5173`
2. Teste classificação de texto direto
3. Faça upload dos arquivos de demo
4. Observe respostas e métricas em tempo real
5. Consulte `/docs` para documentação automática

## 🔧 Configuração Avançada

### Variáveis de Ambiente (.env)

```env
# Application Settings
DEBUG=False
LOG_LEVEL=INFO

# CORS Settings
ALLOWED_ORIGINS=http://localhost:3000,http://localhost:5173
```

### Treinamento do Modelo

Para retreinar o modelo com novos dados:

```bash
cd backend/scripts
python train_with_balanced_dataset.py
```

### Geração de dataset realista

```bash
python create_improved_dataset.py
```


## 📊 Métricas de Performance
### Logger e Monitoramento

- Logs detalhados de inicialização, estatísticas e erros
- Estatísticas em tempo real via endpoint `/api/stats`

### Modelo de Classificação

- **Acurácia**: ~92% (conjunto de teste)
- **Cross-validation**: ~90% (±3%)
- **Precisão**: ~91% (Produtivo), ~93% (Improdutivo)
- **Recall**: ~94% (Produtivo), ~90% (Improdutivo)
- **Tempo de resposta**: < 100ms
- **Características**: 19 features + 8000 TF-IDF features

### Dataset Balanceado

- **Total**: 2000 emails (1000 produtivos + 1000 improdutivos)
- **Diversidade**: 95%+ textos únicos
- **Idioma**: Português brasileiro especializado
- **Contexto**: Empresarial/financeiro

### Características Extraídas

- Comprimento e contagem de palavras
- Densidade de informação e palavras únicas
- Pontuação e intensidade emocional
- Padrões técnicos (códigos de erro, URLs, emails)
- Palavras-chave específicas do domínio
- Indicadores de formalidade

## 🧩 Integração e Extensibilidade

- API RESTful, fácil integração com outros sistemas
- Estrutura modular para adicionar novos classificadores, provedores de email, storage, etc.
- Suporte a deploy em nuvem e containers

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 👨‍💻 Autor

**Mikhael Barreto Santana**

- LinkedIn: https://www.linkedin.com/in/mikhael-barreto-santana/
- Email: mikhaelbarretos@gmail.com
- Portfolio: https://github.com/MikhaelBarretoSantana

---

## 🔗 Links Importantes

**🌐 Aplicação Online**: https://email-classifier-1-kkch.onrender.com
- **🎥 Vídeo Demonstrativo**: [Link do YouTube]
- **📊 Documentação da API**: [Link]/docs
- **🐛 Report Issues**: [Link]/issues

---

_Desenvolvido com ❤️ para o desafio técnico AutoU - Automatizando o futuro da comunicação empresarial_
