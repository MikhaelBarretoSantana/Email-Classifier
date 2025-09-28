import type { EmailClassification, ClassificationHistory, Statistics, APIStatus, APIError } from '../types';

class APIService {
  private baseURL: string;

  constructor() {
    // URL do backend - configurável via variável de ambiente
    this.baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      let errorMessage = `Erro ${response.status}`;
      
      try {
        const errorData: APIError = await response.json();
        errorMessage = errorData.detail || errorMessage;
      } catch {
        errorMessage = response.statusText || errorMessage;
      }
      
      throw new Error(errorMessage);
    }

    return response.json();
  }

  // ==================== ENDPOINTS PRINCIPAIS ====================

  async classifyFile(file: File): Promise<EmailClassification> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(`${this.baseURL}/api/classify-file`, {
      method: 'POST',
      body: formData,
    });

    return this.handleResponse<EmailClassification>(response);
  }

  async classifyText(content: string): Promise<EmailClassification> {
    const formData = new FormData();
    formData.append('text', content);

    const response = await fetch(`${this.baseURL}/api/classify`, {
      method: 'POST',
      body: formData,
    });

    return this.handleResponse<EmailClassification>(response);
  }

  async getStatus(): Promise<APIStatus> {
    const response = await fetch(`${this.baseURL}/api/health`);
    return this.handleResponse<APIStatus>(response);
  }

  async getModelInfo(): Promise<any> {
    const response = await fetch(`${this.baseURL}/api/model-info`);
    return this.handleResponse<any>(response);
  }

  async getStatistics(): Promise<Statistics> {
    const response = await fetch(`${this.baseURL}/api/stats`);
    return this.handleResponse<Statistics>(response);
  }

  // ==================== MÉTODOS UTILITÁRIOS ====================

  isValidFileType(file: File): boolean {
    const allowedTypes = ['.txt', '.pdf'];
    const fileName = file.name.toLowerCase();
    return allowedTypes.some(type => fileName.endsWith(type));
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatConfidence(confidence: number): string {
    return `${(confidence * 100).toFixed(1)}%`;
  }

  formatProcessingTime(timeInSeconds: number): string {
    if (timeInSeconds < 1) {
      return `${(timeInSeconds * 1000).toFixed(0)}ms`;
    }
    return `${timeInSeconds.toFixed(2)}s`;
  }

  formatTimestamp(timestamp: string): string {
    return new Date(timestamp).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  getClassificationColor(classification: 'PRODUTIVO' | 'IMPRODUTIVO'): string {
    return classification === 'PRODUTIVO' ? 'bg-red-500' : 'bg-green-500';
  }

  getClassificationTextColor(classification: 'PRODUTIVO' | 'IMPRODUTIVO'): string {
    return classification === 'PRODUTIVO' ? 'text-red-600' : 'text-green-600';
  }

  getClassificationIcon(classification: 'PRODUTIVO' | 'IMPRODUTIVO'): string {
    return classification === 'PRODUTIVO' ? '🔧' : '✅';
  }

  getClassificationBadgeClass(classification: 'PRODUTIVO' | 'IMPRODUTIVO'): string {
    const baseClasses = 'px-3 py-1 rounded-full text-white font-semibold text-sm';
    const colorClass = classification === 'PRODUTIVO' ? 'bg-red-500' : 'bg-green-500';
    return `${baseClasses} ${colorClass}`;
  }

  // ==================== VALIDAÇÕES ====================

  validateTextInput(text: string): { isValid: boolean; error?: string } {
    if (!text || !text.trim()) {
      return { isValid: false, error: 'Texto não pode estar vazio' };
    }

    if (text.trim().length < 10) {
      return { isValid: false, error: 'Texto muito curto. Mínimo de 10 caracteres.' };
    }

    if (text.length > 50000) {
      return { isValid: false, error: 'Texto muito longo. Máximo de 50.000 caracteres.' };
    }

    return { isValid: true };
  }

  validateFileInput(file: File): { isValid: boolean; error?: string } {
    if (!file) {
      return { isValid: false, error: 'Nenhum arquivo selecionado' };
    }

    if (!this.isValidFileType(file)) {
      return { isValid: false, error: 'Tipo de arquivo não suportado. Use .txt ou .pdf' };
    }

    const maxSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxSize) {
      return { isValid: false, error: 'Arquivo muito grande. Máximo 10MB' };
    }

    return { isValid: true };
  }

  // ==================== HELPERS PARA INTERFACE ====================

  getConfidenceLevel(confidence: number): 'high' | 'medium' | 'low' {
    if (confidence >= 0.8) return 'high';
    if (confidence >= 0.6) return 'medium';
    return 'low';
  }

  getConfidenceLevelColor(level: 'high' | 'medium' | 'low'): string {
    switch (level) {
      case 'high': return 'text-green-600';
      case 'medium': return 'text-yellow-600';
      case 'low': return 'text-red-600';
    }
  }

  getConfidenceLevelText(level: 'high' | 'medium' | 'low'): string {
    switch (level) {
      case 'high': return 'Alta confiança';
      case 'medium': return 'Confiança média';
      case 'low': return 'Baixa confiança';
    }
  }

  // ==================== MÉTRICAS E ANÁLISE ====================

  analyzeClassificationResult(result: EmailClassification) {
    const confidenceLevel = this.getConfidenceLevel(result.confidence);
    const isReliable = confidenceLevel === 'high';
    
    return {
      isReliable,
      confidenceLevel,
      recommendation: isReliable 
        ? 'Resultado confiável' 
        : 'Revisar manualmente recomendado',
      speedCategory: result.processing_time < 0.1 ? 'Muito rápido' : 
                    result.processing_time < 0.5 ? 'Rápido' : 'Normal'
    };
  }

  // ==================== ENDPOINTS MOCKADOS (para compatibilidade) ====================
  
  async getHistory(limit: number = 10): Promise<ClassificationHistory[]> {
    // TODO: Implementar no backend se necessário
    console.warn('Histórico não implementado no backend ainda');
    return [];
  }

  async clearHistory(): Promise<{ message: string; cleared_count: number }> {
    // TODO: Implementar no backend se necessário
    console.warn('Limpeza de histórico não implementada no backend ainda');
    return { message: 'Não implementado', cleared_count: 0 };
  }

  async testClassification(): Promise<any> {
    // Usar health check como teste
    return this.getStatus();
  }
}

// Instância singleton da API
export const apiService = new APIService();

// Hook de conveniência atualizado
export const useAPI = () => {
  return {
    // Métodos principais
    classifyFile: apiService.classifyFile.bind(apiService),
    classifyText: apiService.classifyText.bind(apiService),
    getStatus: apiService.getStatus.bind(apiService),
    getModelInfo: apiService.getModelInfo.bind(apiService),
    getStatistics: apiService.getStatistics.bind(apiService),
    
    // Métodos de compatibilidade
    getHistory: apiService.getHistory.bind(apiService),
    clearHistory: apiService.clearHistory.bind(apiService),
    testClassification: apiService.testClassification.bind(apiService),
    
    // Validações
    validateTextInput: apiService.validateTextInput.bind(apiService),
    validateFileInput: apiService.validateFileInput.bind(apiService),
    
    // Análise
    analyzeClassificationResult: apiService.analyzeClassificationResult.bind(apiService),
    
    // Utilitários
    utils: {
      isValidFileType: apiService.isValidFileType.bind(apiService),
      formatFileSize: apiService.formatFileSize.bind(apiService),
      formatConfidence: apiService.formatConfidence.bind(apiService),
      formatProcessingTime: apiService.formatProcessingTime.bind(apiService),
      formatTimestamp: apiService.formatTimestamp.bind(apiService),
      getClassificationColor: apiService.getClassificationColor.bind(apiService),
      getClassificationTextColor: apiService.getClassificationTextColor.bind(apiService),
      getClassificationIcon: apiService.getClassificationIcon.bind(apiService),
      getClassificationBadgeClass: apiService.getClassificationBadgeClass.bind(apiService),
      getConfidenceLevel: apiService.getConfidenceLevel.bind(apiService),
      getConfidenceLevelColor: apiService.getConfidenceLevelColor.bind(apiService),
      getConfidenceLevelText: apiService.getConfidenceLevelText.bind(apiService),
    }
  };
};

// Exportação padrão
export default apiService;