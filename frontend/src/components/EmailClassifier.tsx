import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEdit, 
  faFileUpload, 
  faCheckCircle, 
  faTimes, 
  faExclamationTriangle, 
  faMagic, 
  faCopy, 
  faPlus, 
  faRobot, 
  faBolt, 
  faShieldAlt, 
  faChartLine, 
  faCloudUploadAlt, 
  faFilePdf, 
  faFileAlt,
  faBrain
} from '@fortawesome/free-solid-svg-icons';
import { useEmailClassifier } from "../hooks/useEmailClassifier";
import { LoadingSpinner } from "./LoadingSpinner";

export const EmailClassifier: React.FC = () => {
  const { classifyText, classifyFile, result, isLoading, error, clearResult } = useEmailClassifier();
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [mode, setMode] = useState<"text" | "file">("text");
  const [isDragging, setIsDragging] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTextChange = useCallback((value: string) => {
    setText(value);
    setCharCount(value.length);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "text" && text.trim()) {
      await classifyText(text);
    } else if (mode === "file" && file) {
      await classifyFile(file);
    }
  };

  const handleFileSelect = useCallback((selectedFile: File) => {
    if (selectedFile.size > 10 * 1024 * 1024) {
      alert("Arquivo muito grande. Máximo 10MB permitido.");
      return;
    }

    const allowedTypes = ['.txt', '.pdf'];
    const fileName = selectedFile.name.toLowerCase();
    const isValidType = allowedTypes.some(type => fileName.endsWith(type));
    
    if (!isValidType) {
      alert("Tipo de arquivo não suportado. Use apenas .txt ou .pdf");
      return;
    }

    setFile(selectedFile);
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFileSelect(droppedFile);
    }
  }, [handleFileSelect]);

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // Você pode adicionar uma notificação aqui
    } catch (err) {
      console.error('Falha ao copiar texto: ', err);
    }
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <LoadingSpinner 
          message="Analisando seu email com IA avançada..."
          submessage="Nossa inteligência artificial está processando o conteúdo e gerando a melhor resposta"
        />
      </div>
    );
  }

  if (result) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="result-card premium-card rounded-xl p-8 mb-8">
          {/* Header do resultado */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <FontAwesomeIcon icon={faCheckCircle} className="text-indigo-600 text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Análise Concluída</h2>
                <p className="text-gray-600">Processamento finalizado com sucesso</p>
              </div>
            </div>
            <button
              onClick={clearResult}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
              title="Fechar resultado"
            >
              <FontAwesomeIcon icon={faTimes} className="text-gray-600" />
            </button>
          </div>

          {/* Badge de classificação */}
          <div className="mb-6">
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-lg ${
              result.classification === "PRODUTIVO" 
                ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                : "bg-gradient-to-r from-red-500 to-red-600 text-white" 
            }`}>
              <FontAwesomeIcon icon={
                result.classification === "PRODUTIVO" ?  faCheckCircle : faExclamationTriangle 
              } />
              <span>{result.classification}</span>
              <span className="bg-white bg-opacity-20 px-2 py-1 rounded-full text-sm text-gray-700">
                {(result.confidence * 100).toFixed(1)}%
              </span>
            </div>
          </div>

          {/* Barra de confiança */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Nível de Confiança</span>
              <span className="text-sm text-gray-600">{(result.confidence * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="progress-bar h-3 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${result.confidence * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Resposta sugerida */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-indigo-800 flex items-center gap-2">
                <FontAwesomeIcon icon={faMagic} />
                Resposta Sugerida
              </h3>
              <button
                onClick={() => copyToClipboard(result.suggested_response)}
                className="px-3 py-1 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                title="Copiar resposta"
              >
                <FontAwesomeIcon icon={faCopy} className="text-xs" />
                Copiar
              </button>
            </div>
            <p className="text-indigo-900 leading-relaxed whitespace-pre-line">
              {result.suggested_response}
            </p>
          </div>

          {/* Métricas */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">
                {(result.processing_time * 1000).toFixed(0)}ms
              </div>
              <div className="text-sm text-gray-600">Tempo de Processamento</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">
                {result.method_used || 'IA Avançada'}
              </div>
              <div className="text-sm text-gray-600">Método Utilizado</div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">
                {result.additional_info?.text_length || text.length}
              </div>
              <div className="text-sm text-gray-600">Caracteres Analisados</div>
            </div>
          </div>

          {/* Botão para nova análise */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <button
              onClick={clearResult}
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faPlus} />
              Analisar Novo Email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          Email Classifier AI
        </h1>
        <p className="text-xl text-white leading-relaxed max-w-3xl mx-auto">
          Sistema Inteligente de Classificação Automática de Emails
          <br />
          <span className="text-white/80 font-medium">
            Desenvolvido para automatizar processos empresariais com IA
          </span>
        </p>
        
        {/* Badges de recursos */}
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20">
            <FontAwesomeIcon icon={faRobot} className="text-indigo-500" />
            <span className="text-sm font-medium text-white">IA Avançada</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20">
            <FontAwesomeIcon icon={faBolt} className="text-indigo-500" />
            <span className="text-sm font-medium text-white">Processamento Rápido</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20">
            <FontAwesomeIcon icon={faShieldAlt} className="text-indigo-500" />
            <span className="text-sm font-medium text-white">Seguro & Confiável</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md border border-white/20">
            <FontAwesomeIcon icon={faChartLine} className="text-indigo-500" />
            <span className="text-sm font-medium text-white">Alta Precisão</span>
          </div>
        </div>
      </div>

      {/* Card principal */}
      <div className="glass-card rounded-xl p-8 mb-8">
        {/* Seletor de modo */}
        <div className="flex bg-white/10 rounded-xl p-1 mb-8" style={{gap: '1em'}}>
          <button
            onClick={() => setMode("text")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              mode === "text"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-gray-700/80 hover:text-gray-700"
            }`}
          >
            <FontAwesomeIcon icon={faEdit} />
            Digitar Texto
          </button>
          <button
            onClick={() => setMode("file")}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
              mode === "file"
                ? "bg-white text-indigo-600 shadow-md"
                : "text-gray-500/80 hover:text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={faFileUpload} />
            Enviar Arquivo
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {mode === "text" ? (
            <div>
              <label htmlFor="email-text" className="block text-lg font-semibold text-white mb-3">
                Conteúdo do Email
              </label>
              <textarea
                id="email-text"
                value={text}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Cole aqui o conteúdo do email que você deseja classificar...

Exemplo:
Olá, estou com problema para acessar minha conta no sistema. Quando tento fazer login, aparece uma mensagem de erro. Poderiam me ajudar urgentemente?"
                className="w-full h-40 p-4 border-2 border-white/20 rounded-xl resize-none bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 hover:border-white/30"
                disabled={isLoading}
                maxLength={50000}
              />
              <div className="flex justify-between items-center mt-2">
                <div className="text-sm text-white/60">
                  Mínimo 10 caracteres • Máximo 50.000 caracteres
                </div>
                <div className={`text-sm ${charCount > 45000 ? 'text-red-400' : 'text-white/60'}`}>
                  {charCount.toLocaleString()} / 50.000
                </div>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-lg font-semibold text-white mb-3">
                Arquivo do Email
              </label>
              
              {!file ? (
                <div
                  className={`upload-area border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                    isDragging
                      ? "border-indigo-400 bg-indigo-500/20"
                      : "border-white/30 hover:border-indigo-400 hover:bg-white/10"
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="space-y-4">
                    <div className="text-6xl text-white/70">
                      <FontAwesomeIcon icon={faCloudUploadAlt} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-white mb-2">
                        Clique aqui ou arraste um arquivo
                      </div>
                      <div className="text-white/60">
                        Formatos suportados: .txt, .pdf • Máximo 10MB
                      </div>
                    </div>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept=".txt,.pdf"
                    onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                    className="hidden"
                    disabled={isLoading}
                  />
                </div>
              ) : (
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon 
                        icon={file.name.endsWith('.pdf') ? faFilePdf : faFileAlt} 
                        className={`text-xl ${file.name.endsWith('.pdf') ? 'text-red-500' : 'text-blue-500'}`}
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{file.name}</div>
                      <div className="text-sm text-white/60">{formatFileSize(file.size)}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="w-8 h-8 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg flex items-center justify-center transition-colors"
                    title="Remover arquivo"
                  >
                    <FontAwesomeIcon icon={faTimes} className="text-sm" />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Error display */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-4 flex items-center gap-3">
              <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-400 text-xl" />
              <div>
                <div className="font-semibold text-red-300">Erro no processamento</div>
                <div className="text-red-400">{error}</div>
              </div>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading || (mode === "text" ? text.trim().length < 10 : !file)}
            className="w-full py-4 px-8 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:hover:shadow-none disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
          >
            <FontAwesomeIcon icon={faBrain} className="text-xl" />
            {isLoading ? "Processando..." : "Classificar com IA"}
          </button>
        </form>
      </div>
    </div>
  );
}