"""
Script para executar o Email Classifier API

Este script facilita a execução do servidor de desenvolvimento
com todas as configurações apropriadas.

Usage:
    python run.py                 # Execução padrão
    python run.py --port 8080     # Porta customizada
    python run.py --no-reload     # Sem auto-reload
    python run.py --host 0.0.0.0  # Host customizado
"""

import argparse
import sys
import os
from pathlib import Path

# Adicionar o diretório atual ao PYTHONPATH
current_dir = Path(__file__).parent
sys.path.insert(0, str(current_dir))

def parse_args():
    """Parse argumentos da linha de comando"""
    parser = argparse.ArgumentParser(
        description="Email Classifier API Server",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Exemplos de uso:
  python run.py
  python run.py --port 8080
  python run.py --host 127.0.0.1 --no-reload
  python run.py --debug
        """
    )
    
    parser.add_argument(
        "--host", 
        default="0.0.0.0",
        help="Host para bind do servidor (padrão: 0.0.0.0)"
    )
    
    parser.add_argument(
        "--port", 
        type=int, 
        default=8000,
        help="Porta para o servidor (padrão: 8000)"
    )
    
    parser.add_argument(
        "--no-reload", 
        action="store_true",
        help="Desabilitar auto-reload em desenvolvimento"
    )
    
    parser.add_argument(
        "--debug", 
        action="store_true",
        help="Habilitar modo debug com logs detalhados"
    )
    
    parser.add_argument(
        "--workers", 
        type=int, 
        default=1,
        help="Número de workers (padrão: 1)"
    )
    
    return parser.parse_args()

def check_environment():
    """Verificar se o ambiente está configurado corretamente"""
    issues = []
    
    # Verificar arquivo .env
    env_file = current_dir / ".env"
    if not env_file.exists():
        issues.append("⚠️  Arquivo .env não encontrado (opcional)")
    
    # Verificar dependências críticas
    try:
        import fastapi
        import pydantic
        import PyPDF2
    except ImportError as e:
        issues.append(f"❌ Dependência faltando: {e}")
    
    # Verificar versão do Python
    if sys.version_info < (3, 11):
        issues.append(f"⚠️  Python {sys.version_info.major}.{sys.version_info.minor} pode ter problemas. Recomendado: Python 3.11+")
    
    return issues

def main():
    """Função principal"""
    args = parse_args()
    
    # Banner de inicialização
    print("🚀" + "="*60)
    print("🚀  EMAIL CLASSIFIER API")
    print("🚀  Desenvolvido para o desafio AutoU")
    print("🚀" + "="*60)
    
    # Verificar ambiente
    issues = check_environment()
    if issues:
        print("\n📋 Verificações do ambiente:")
        for issue in issues:
            print(f"   {issue}")
        print()
    
    # Verificar se conseguimos importar a app
    try:
        from app.main import app
        print("✅ Aplicação importada com sucesso!")
    except ImportError as e:
        print(f"❌ Erro ao importar aplicação: {e}")
        print("🔧 Verifique se está no diretório backend e se instalou as dependências")
        sys.exit(1)
    
    # Configurar log level
    log_level = "debug" if args.debug else "info"
    
    # Informações de startup
    print(f"🌐 Servidor: http://{args.host}:{args.port}")
    print(f"📚 Documentação: http://{args.host}:{args.port}/docs")
    print(f"🔄 Auto-reload: {'Habilitado' if not args.no_reload else 'Desabilitado'}")
    print(f"📊 Log level: {log_level.upper()}")
    print(f"👥 Workers: {args.workers}")
    print()
    
    # Dicas úteis
    print("💡 Dicas úteis:")
    print(f"   • Testar API: curl http://{args.host}:{args.port}/health")
    print(f"   • Parar servidor: Ctrl+C")
    if not args.no_reload:
        print(f"   • Auto-reload ativo: modificações serão aplicadas automaticamente")
    print()
    
    try:
        import uvicorn
        
        if args.no_reload:
            # Sem reload, podemos passar a app diretamente
            print("ℹ️  Iniciando servidor sem auto-reload...")
            uvicorn.run(
                app,
                host=args.host,
                port=args.port,
                log_level=log_level,
                workers=args.workers
            )
        else:
            # Com reload, precisamos passar como string
            print("ℹ️  Iniciando servidor com auto-reload...")
            uvicorn.run(
                "app.main:app",  # String import para auto-reload
                host=args.host,
                port=args.port,
                reload=True,
                log_level=log_level
            )
            
    except KeyboardInterrupt:
        print("\n🛑 Servidor interrompido pelo usuário")
    except Exception as e:
        print(f"❌ Erro fatal: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()