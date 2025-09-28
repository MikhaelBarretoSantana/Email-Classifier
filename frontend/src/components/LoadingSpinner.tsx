import React, { useEffect, useState } from 'react';

interface LoadingSpinnerProps {
  message?: string;
  submessage?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  message = "Processando seu email...",
  submessage = "Nossa IA está analisando o conteúdo e gerando a melhor resposta"
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: "fas fa-file-alt",
      text: "Analisando conteúdo do email",
      description: "Extraindo e processando o texto"
    },
    {
      icon: "fas fa-brain",
      text: "Aplicando algoritmos de IA",
      description: "Classificando com machine learning"
    },
    {
      icon: "fas fa-magic",
      text: "Gerando resposta personalizada",
      description: "Criando sugestão inteligente"
    }
  ];

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 20; // Reset para dar sensação de processamento contínuo
        return prev + Math.random() * 15;
      });
    }, 300);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [steps.length]);

  return (
    <div className="glass-card rounded-xl p-8 text-center max-w-lg mx-auto">
      {/* Spinner principal com robô */}
      <div className="relative w-24 h-24 mx-auto mb-6">
        <div className="absolute inset-0 border-4 border-indigo-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-indigo-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 bg-indigo-100 rounded-full flex items-center justify-center">
          <i className="fas fa-robot text-2xl text-indigo-600"></i>
        </div>
        
        {/* Pulse effect */}
        <div className="absolute inset-0 border-2 border-indigo-300 rounded-full animate-pulse opacity-75"></div>
      </div>

      {/* Mensagem principal */}
      <h3 className="text-xl font-bold text-white mb-2">
        {message}
      </h3>

      {/* Submensagem */}
      <p className="text-white/80 mb-6 leading-relaxed">
        {submessage}
      </p>

      {/* Barra de progresso */}
      <div className="bg-white/20 rounded-full h-3 mb-6 overflow-hidden">
        <div 
          className="bg-gradient-to-r from-indigo-400 to-indigo-600 h-full rounded-full transition-all duration-500 ease-out relative overflow-hidden"
          style={{ width: `${Math.min(progress, 90)}%` }}
        >
          {/* Efeito shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Etapas do processamento */}
      <div className="space-y-3">
        {steps.map((step, index) => (
          <ProcessingStep
            key={index}
            icon={step.icon}
            text={step.text}
            description={step.description}
            active={index === currentStep}
            completed={index < currentStep}
          />
        ))}
      </div>

      {/* Indicadores adicionais */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="flex items-center justify-center gap-4 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Sistema Online</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span>IA Ativa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ProcessingStepProps {
  icon: string;
  text: string;
  description: string;
  active: boolean;
  completed: boolean;
}

const ProcessingStep: React.FC<ProcessingStepProps> = ({ 
  icon, 
  text, 
  description, 
  active, 
  completed 
}) => (
  <div className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 ${
    active 
      ? 'bg-white/20 text-white scale-105' 
      : completed
      ? 'bg-white/10 text-white/90'
      : 'text-white/60'
  }`}>
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
      active 
        ? 'bg-indigo-500 text-white' 
        : completed
        ? 'bg-green-500 text-white'
        : 'bg-white/10 text-white/60'
    }`}>
      {active ? (
        <i className="fas fa-spinner fa-spin"></i>
      ) : completed ? (
        <i className="fas fa-check"></i>
      ) : (
        <i className={icon}></i>
      )}
    </div>
    
    <div className="flex-1 text-left">
      <div className={`font-medium transition-colors duration-300 ${
        active ? 'text-white' : completed ? 'text-white/90' : 'text-white/60'
      }`}>
        {text}
      </div>
      <div className={`text-sm transition-colors duration-300 ${
        active ? 'text-white/80' : 'text-white/50'
      }`}>
        {description}
      </div>
    </div>

    {/* Indicator */}
    <div className="ml-auto">
      {active ? (
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse"></div>
      ) : completed && (
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
      )}
    </div>
  </div>
);