import { useState, useCallback, useEffect } from 'react';
import { apiService } from '../services/api';
import type { 
  EmailClassification, 
  ClassificationHistory, 
  Statistics, 
  APIStatus,
  UseEmailClassifierState,
  ValidationResult
} from '../types';

export const useEmailClassifier = () => {
  // Estado principal
  const [state, setState] = useState<UseEmailClassifierState>({
    result: null,
    isLoading: false,
    error: null,
    history: [],
    statistics: null,
    apiStatus: null
  });

  // Função para atualizar estado de forma segura
  const updateState = useCallback((updates: Partial<UseEmailClassifierState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  // Classificar texto
  const classifyText = useCallback(async (text: string) => {
    try {
      // Validar entrada
      const validation = apiService.validateTextInput(text);
      if (!validation.isValid) {
        updateState({ error: validation.error });
        return;
      }

      updateState({ isLoading: true, error: null });

      const result = await apiService.classifyText(text);
      
      // Adicionar ao histórico local
      const historyItem: ClassificationHistory = {
        id: Date.now().toString(),
        text: text.substring(0, 100) + (text.length > 100 ? '...' : ''),
        classification: result.classification as 'PRODUTIVO' | 'IMPRODUTIVO',
        confidence: result.confidence,
        timestamp: new Date().toISOString(),
        processing_time: result.processing_time,
        method_used: result.method_used
      };

      updateState({
        result,
        isLoading: false,
        history: [historyItem, ...state.history.slice(0, 9)] // Manter últimos 10
      });

    } catch (error) {
      updateState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Erro ao classificar texto'
      });
    }
  }, [state.history, updateState]);

  // Classificar arquivo
  const classifyFile = useCallback(async (file: File) => {
    try {
      // Validar arquivo
      const validation = apiService.validateFileInput(file);
      if (!validation.isValid) {
        updateState({ error: validation.error });
        return;
      }

      updateState({ isLoading: true, error: null });

      const result = await apiService.classifyFile(file);
      
      // Adicionar ao histórico local
      const historyItem: ClassificationHistory = {
        id: Date.now().toString(),
        text: `Arquivo: ${file.name}`,
        classification: result.classification as 'PRODUTIVO' | 'IMPRODUTIVO',
        confidence: result.confidence,
        timestamp: new Date().toISOString(),
        processing_time: result.processing_time,
        method_used: result.method_used
      };

      updateState({
        result,
        isLoading: false,
        history: [historyItem, ...state.history.slice(0, 9)]
      });

    } catch (error) {
      updateState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Erro ao processar arquivo'
      });
    }
  }, [state.history, updateState]);

  // Limpar resultado
  const clearResult = useCallback(() => {
    updateState({ result: null, error: null });
  }, [updateState]);

  // Limpar erro
  const clearError = useCallback(() => {
    updateState({ error: null });
  }, [updateState]);

  // Atualizar estatísticas
  const refreshStatistics = useCallback(async () => {
    try {
      const statistics = await apiService.getStatistics();
      updateState({ statistics });
    } catch (error) {
      console.warn('Erro ao obter estatísticas:', error);
    }
  }, [updateState]);

  // Verificar status da API
  const checkApiStatus = useCallback(async () => {
    try {
      const apiStatus = await apiService.getStatus();
      updateState({ apiStatus });
    } catch (error) {
      updateState({
        apiStatus: {
          status: 'unhealthy',
          advanced_classifier: 'unavailable',
          fallback_classifier: 'unavailable',
          error: error instanceof Error ? error.message : 'Erro desconhecido'
        }
      });
    }
  }, [updateState]);

  // Verificar status na inicialização
  useEffect(() => {
    checkApiStatus();
    refreshStatistics();
  }, [checkApiStatus, refreshStatistics]);

  // Métodos utilitários adicionais
  const utils = {
    // Análise do resultado
    analyzeResult: (result: EmailClassification) => {
      return apiService.analyzeClassificationResult(result);
    },

    // Formatadores
    formatConfidence: (confidence: number) => apiService.formatConfidence(confidence),
    formatProcessingTime: (time: number) => apiService.formatProcessingTime(time),
    formatFileSize: (size: number) => apiService.formatFileSize(size),

    // Validações
    validateText: (text: string): ValidationResult => apiService.validateTextInput(text),
    validateFile: (file: File): ValidationResult => apiService.validateFileInput(file),

    // Helpers de UI
    getClassificationColor: (classification: string) => 
      apiService.getClassificationColor(classification as 'PRODUTIVO' | 'IMPRODUTIVO'),
    getClassificationIcon: (classification: string) => 
      apiService.getClassificationIcon(classification as 'PRODUTIVO' | 'IMPRODUTIVO'),
    getClassificationBadgeClass: (classification: string) => 
      apiService.getClassificationBadgeClass(classification as 'PRODUTIVO' | 'IMPRODUTIVO'),

    // Status da API
    isApiHealthy: () => state.apiStatus?.status === 'healthy',
    getApiStatusColor: () => {
      switch (state.apiStatus?.status) {
        case 'healthy': return 'text-green-600';
        case 'degraded': return 'text-yellow-600';
        case 'unhealthy': return 'text-red-600';
        default: return 'text-gray-600';
      }
    }
  };

  // Estatísticas derivadas
  const localStats = {
    totalClassifications: state.history.length,
    averageConfidence: state.history.length > 0 
      ? state.history.reduce((sum, item) => sum + item.confidence, 0) / state.history.length 
      : 0,
    productiveCount: state.history.filter(item => item.classification === 'PRODUTIVO').length,
    unproductiveCount: state.history.filter(item => item.classification === 'IMPRODUTIVO').length,
    averageProcessingTime: state.history.length > 0
      ? state.history.reduce((sum, item) => sum + item.processing_time, 0) / state.history.length
      : 0
  };

  return {
    // Estado
    ...state,
    
    // Ações
    classifyText,
    classifyFile,
    clearResult,
    clearError,
    refreshStatistics,
    checkApiStatus,
    
    // Utilitários
    utils,
    
    // Estatísticas locais
    localStats,
    
    // Estado derivado
    hasResult: !!state.result,
    hasError: !!state.error,
    hasHistory: state.history.length > 0,
    isApiAvailable: state.apiStatus?.status !== 'unhealthy'
  };
};

// Hook simplificado para casos básicos
export const useSimpleClassifier = () => {
  const [result, setResult] = useState<EmailClassification | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const classify = useCallback(async (input: string | File) => {
    try {
      setIsLoading(true);
      setError(null);

      let classificationResult: EmailClassification;
      
      if (typeof input === 'string') {
        classificationResult = await apiService.classifyText(input);
      } else {
        classificationResult = await apiService.classifyFile(input);
      }

      setResult(classificationResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro na classificação');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const reset = useCallback(() => {
    setResult(null);
    setError(null);
  }, []);

  return {
    result,
    isLoading,
    error,
    classify,
    reset,
    hasResult: !!result,
    hasError: !!error
  };
};

export default useEmailClassifier;