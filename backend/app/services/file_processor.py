import PyPDF2
import io
import logging
from typing import Union
from fastapi import HTTPException, UploadFile

logger = logging.getLogger(__name__)

class FileProcessor:
    """Processador de arquivos para extração de texto"""
    
    SUPPORTED_EXTENSIONS = {'.txt', '.pdf'}
    MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB
    
    @classmethod
    async def process_uploaded_file(cls, file: UploadFile) -> str:
        """
        Processa arquivo enviado e extrai texto
        
        Args:
            file: Arquivo enviado via upload
            
        Returns:
            str: Texto extraído do arquivo
            
        Raises:
            HTTPException: Se houver erro no processamento
        """
        try:
            # Validações básicas
            cls._validate_file(file)
            
            # Ler conteúdo do arquivo
            content = await file.read()
            
            # Validar tamanho
            if len(content) > cls.MAX_FILE_SIZE:
                raise HTTPException(
                    status_code=413,
                    detail=f"Arquivo muito grande. Máximo permitido: {cls.MAX_FILE_SIZE // (1024*1024)}MB"
                )
            
            # Extrair texto baseado na extensão
            filename_lower = file.filename.lower()
            
            if filename_lower.endswith('.pdf'):
                text = cls._extract_text_from_pdf(content)
            elif filename_lower.endswith('.txt'):
                text = cls._extract_text_from_txt(content)
            else:
                raise HTTPException(
                    status_code=400,
                    detail="Formato de arquivo não suportado"
                )
            
            # Validar se texto foi extraído
            if not text.strip():
                raise HTTPException(
                    status_code=400,
                    detail="Arquivo vazio ou não foi possível extrair texto legível"
                )
            
            logger.info(f"Texto extraído com sucesso: {len(text)} caracteres")
            return text.strip()
            
        except HTTPException:
            raise
        except Exception as e:
            logger.error(f"Erro inesperado no processamento do arquivo: {str(e)}")
            raise HTTPException(
                status_code=500,
                detail=f"Erro interno no processamento do arquivo: {str(e)}"
            )
    
    @classmethod
    def _validate_file(cls, file: UploadFile) -> None:
        """Valida arquivo enviado"""
        if not file.filename:
            raise HTTPException(
                status_code=400,
                detail="Nenhum arquivo foi enviado"
            )
        
        # Verificar extensão
        filename_lower = file.filename.lower()
        if not any(filename_lower.endswith(ext) for ext in cls.SUPPORTED_EXTENSIONS):
            raise HTTPException(
                status_code=400,
                detail=f"Formato não suportado. Formatos aceitos: {', '.join(cls.SUPPORTED_EXTENSIONS)}"
            )
    
    @classmethod
    def _extract_text_from_pdf(cls, pdf_content: bytes) -> str:
        """
        Extrai texto de arquivo PDF
        
        Args:
            pdf_content: Conteúdo do PDF em bytes
            
        Returns:
            str: Texto extraído
        """
        try:
            logger.info("Iniciando extração de texto do PDF")
            
            pdf_reader = PyPDF2.PdfReader(io.BytesIO(pdf_content))
            
            if len(pdf_reader.pages) == 0:
                raise ValueError("PDF não contém páginas")
            
            text_parts = []
            
            for page_num, page in enumerate(pdf_reader.pages, 1):
                try:
                    page_text = page.extract_text()
                    if page_text.strip():
                        text_parts.append(page_text)
                        logger.debug(f"Página {page_num}: {len(page_text)} caracteres extraídos")
                except Exception as e:
                    logger.warning(f"Erro ao extrair texto da página {page_num}: {str(e)}")
                    continue
            
            if not text_parts:
                raise ValueError("Não foi possível extrair texto de nenhuma página do PDF")
            
            full_text = '\n'.join(text_parts)
            logger.info(f"PDF processado com sucesso: {len(pdf_reader.pages)} páginas, {len(full_text)} caracteres")
            
            return full_text
            
        except Exception as e:
            logger.error(f"Erro ao processar PDF: {str(e)}")
            raise ValueError(f"Erro ao processar PDF: {str(e)}")
    
    @classmethod
    def _extract_text_from_txt(cls, txt_content: bytes) -> str:
        """
        Extrai texto de arquivo TXT
        
        Args:
            txt_content: Conteúdo do TXT em bytes
            
        Returns:
            str: Texto extraído
        """
        try:
            logger.info("Iniciando extração de texto do arquivo TXT")
            
            # Tentar diferentes encodings
            encodings = ['utf-8', 'latin-1', 'cp1252', 'iso-8859-1']
            
            for encoding in encodings:
                try:
                    text = txt_content.decode(encoding)
                    logger.info(f"Arquivo TXT decodificado com sucesso usando {encoding}")
                    return text
                except UnicodeDecodeError:
                    continue
            
            # Se nenhuma encoding funcionou
            raise ValueError("Não foi possível decodificar o arquivo de texto com nenhuma encoding suportada")
            
        except Exception as e:
            logger.error(f"Erro ao processar arquivo TXT: {str(e)}")
            raise ValueError(f"Erro ao processar arquivo TXT: {str(e)}")
    
    @classmethod
    def get_file_info(cls, file: UploadFile) -> dict:
        """
        Retorna informações sobre o arquivo
        
        Args:
            file: Arquivo enviado
            
        Returns:
            dict: Informações do arquivo
        """
        return {
            'filename': file.filename,
            'content_type': file.content_type,
            'size': getattr(file, 'size', 'unknown'),
            'supported': any(file.filename.lower().endswith(ext) for ext in cls.SUPPORTED_EXTENSIONS) if file.filename else False
        }