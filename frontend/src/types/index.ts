// frontend/src/types/index.ts
// Tipos atualizados para compatibilidade com o backend

export interface EmailClassification {
  classification: 'PRODUTIVO' | 'IMPRODUTIVO' | 'INDEFINIDO';
  suggested_response: string;
  confidence: number;
  processing_time: number;
  method_used?: string;
  additional_info?: {
    probabilities?: Record<string, number>;
    features_detected?: Record<string, any>;
    text_length?: number;
    filename?: string;
    file_size?: number;
    extraction_method?: string;
    file_type?: string;
  };
}

export interface ClassificationRequest {
  text: string;
}

export interface FileUploadResponse {
  filename: string;
  file_size: number;
  extracted_text_length: number;
  classification_result: EmailClassification;
}

export interface APIStatus {
  status: 'healthy' | 'degraded' | 'unhealthy';
  advanced_classifier: string;
  fallback_classifier: string;
  test_classification?: string;
  test_result?: string;
  test_method?: string;
  error?: string;
  timestamp?: string;
  application?: string;
  version?: string;
}

export interface ModelInfo {
  advanced_model_loaded: boolean;
  advanced_model_path: string;
  fallback_available: boolean;
  fallback_enabled: boolean;
  fallback_type?: string;
}

export interface Statistics {
  models_loaded: {
    advanced: boolean;
    fallback: boolean;
  };
  model_info: ModelInfo;
  performance: {
    avg_response_time: string;
    accuracy: string;
  };
  total_classifications?: number;
  uptime?: string;
}

export interface APIError {
  detail: string;
  type?: string;
  suggestion?: string;
  timestamp?: string;
}

// Tipos para compatibilidade com frontend existente
export interface ClassificationHistory {
  id: string;
  text: string;
  classification: 'PRODUTIVO' | 'IMPRODUTIVO';
  confidence: number;
  timestamp: string;
  processing_time: number;
  method_used?: string;
}

// Tipos para análise e métricas
export interface ClassificationAnalysis {
  isReliable: boolean;
  confidenceLevel: 'high' | 'medium' | 'low';
  recommendation: string;
  speedCategory: string;
}

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Tipos para componentes
export interface ClassificationResultProps {
  result: EmailClassification;
  isLoading?: boolean;
  error?: string;
}

export interface FileInputProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSize?: number;
  disabled?: boolean;
}

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  maxLength?: number;
}

// Enums para melhor type safety
export enum ClassificationType {
  PRODUTIVO = 'PRODUTIVO',
  IMPRODUTIVO = 'IMPRODUTIVO',
  INDEFINIDO = 'INDEFINIDO'
}

export enum ConfidenceLevel {
  HIGH = 'high',
  MEDIUM = 'medium',
  LOW = 'low'
}

export enum APIStatusType {
  HEALTHY = 'healthy',
  DEGRADED = 'degraded',
  UNHEALTHY = 'unhealthy'
}

// Tipos para hooks
export interface UseEmailClassifierState {
  result: EmailClassification | null;
  isLoading: boolean;
  error: string | null;
  history: ClassificationHistory[];
  statistics: Statistics | null;
  apiStatus: APIStatus | null;
}

export interface UseEmailClassifierActions {
  classifyText: (text: string) => Promise<void>;
  classifyFile: (file: File) => Promise<void>;
  clearResult: () => void;
  clearError: () => void;
  refreshStatistics: () => Promise<void>;
  checkApiStatus: () => Promise<void>;
}

// Tipos para configuração
export interface AppConfig {
  apiUrl: string;
  maxFileSize: number;
  supportedFileTypes: string[];
  confidenceThreshold: number;
}

// Tipos para tema e UI
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
  borderRadius: string;
}

// Tipos para eventos
export interface ClassificationEvent {
  type: 'text' | 'file';
  input: string | File;
  result: EmailClassification;
  timestamp: Date;
}

// Exportações utilitárias
export type ClassificationMethod = 'text' | 'file';
export type ProcessingStatus = 'idle' | 'processing' | 'completed' | 'error';

// Guards de tipo
export const isEmailClassification = (obj: any): obj is EmailClassification => {
  return obj && 
         typeof obj.classification === 'string' &&
         typeof obj.suggested_response === 'string' &&
         typeof obj.confidence === 'number' &&
         typeof obj.processing_time === 'number';
};

export const isAPIError = (obj: any): obj is APIError => {
  return obj && typeof obj.detail === 'string';
};

export const isValidClassification = (classification: string): classification is ClassificationType => {
  return Object.values(ClassificationType).includes(classification as ClassificationType);
};