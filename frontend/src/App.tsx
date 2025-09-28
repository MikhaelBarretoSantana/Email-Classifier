import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot, 
  faHistory, 
  faChartBar, 
  faSyncAlt, 
  faTimes, 
  faCheckCircle, 
  faExclamationTriangle, 
  faTimesCircle, 
  faSpinner,
  faGraduationCap,
  faShieldAlt,
  faRocket,
  faChartLine,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { LoadingSpinner } from "./components/LoadingSpinner";
import { useEmailClassifier } from "./hooks/useEmailClassifier";
import { EmailClassifier } from "./components/EmailClassifier";

function App() {
  const {
    isLoading,
    result,
    error,
    history,
    statistics,
    hasResult,
    hasError,
    hasHistory,
    utils,
    checkApiStatus,
    apiStatus
  } = useEmailClassifier();

  const [showHistory, setShowHistory] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [apiStatusVisible, setApiStatusVisible] = useState(true);

  useEffect(() => {
    // Verificar status da API ao montar o componente
    checkApiStatus();
    
    // Auto-hide status indicator após 5 segundos se estiver healthy
    const timer = setTimeout(() => {
      if (apiStatus?.status === 'healthy') {
        setApiStatusVisible(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [checkApiStatus, apiStatus?.status]);

  const getStatusColor = () => {
    switch (apiStatus?.status) {
      case 'healthy': return 'bg-green-500';
      case 'degraded': return 'bg-yellow-500';
      case 'unhealthy': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    switch (apiStatus?.status) {
      case 'healthy': return 'Sistema Online';
      case 'degraded': return 'Sistema Degradado';
      case 'unhealthy': return 'Sistema Offline';
      default: return 'Verificando...';
    }
  };

  const getStatusIcon = () => {
    switch (apiStatus?.status) {
      case 'healthy': return faCheckCircle;
      case 'degraded': return faExclamationTriangle;
      case 'unhealthy': return faTimesCircle;
      default: return faSpinner;
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      {/* Background Decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-300 opacity-8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-300 opacity-8 rounded-full blur-3xl"></div>
      </div>

      {/* Status Indicator */}
      {apiStatusVisible && (
        <div className="fixed top-4 right-4 z-50 glass-card rounded-lg px-4 py-3 flex items-center gap-3 text-white text-sm font-medium shadow-xl">
          <div className={`w-3 h-3 rounded-full ${getStatusColor()}`}></div>
          <FontAwesomeIcon 
            icon={getStatusIcon()} 
            className={apiStatus?.status === 'unhealthy' ? 'animate-spin' : ''}
          />
          <span>{getStatusText()}</span>
          <button
            onClick={() => setApiStatusVisible(false)}
            className="ml-2 text-white/60 hover:text-white transition-colors"
            style={{background: 'transparent'}}
          >
            <FontAwesomeIcon icon={faTimes} className="text-xs" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="relative z-10 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
              <FontAwesomeIcon icon={faRobot} className="text-white text-xl" />
            </div>
            <div className="text-white">
              <div className="font-bold text-lg">Email Classifier AI</div>
              <div className="text-sm opacity-90">Powered by AutoU</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {hasHistory && (
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="glass-card px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faHistory} />
                <span className="hidden md:inline">Histórico</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {history.length}
                </span>
              </button>
            )}

            {statistics && (
              <button
                onClick={() => setShowStats(!showStats)}
                className="glass-card px-4 py-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <FontAwesomeIcon icon={faChartBar} />
                <span className="hidden md:inline">Stats</span>
              </button>
            )}

            <button
              onClick={checkApiStatus}
              className="glass-card p-2 rounded-lg text-white hover:bg-white/20 transition-all duration-300"
              title="Verificar status da API"
            >
              <FontAwesomeIcon icon={faSyncAlt} />
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Histórico lateral */}
          {showHistory && hasHistory && (
            <div className="fixed right-4 top-20 bottom-4 w-80 glass-card rounded-xl p-4 z-40 overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Histórico</h3>
                <button
                  onClick={() => setShowHistory(false)}
                  className="text-white/60 hover:text-white"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="space-y-3 overflow-y-auto h-full pb-16">
                {history.map((item) => (
                  <div key={item.id} className="bg-white/10 rounded-lg p-3 hover:bg-white/15 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.classification === 'PRODUTIVO' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {item.classification}
                      </span>
                      <span className="text-white/60 text-xs">
                        {utils.formatConfidence(item.confidence)}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm truncate">{item.text}</p>
                    <div className="text-white/50 text-xs mt-2">
                      {new Date(item.timestamp).toLocaleString('pt-BR')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Estatísticas lateral */}
          {showStats && statistics && (
            <div className="fixed left-4 top-20 bottom-4 w-80 glass-card rounded-xl p-4 z-40">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-white">Estatísticas</h3>
                <button
                  onClick={() => setShowStats(false)}
                  className="text-white/60 hover:text-white"
                  style={{background: 'transparent'}}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>
              <div className="space-y-4 text-white">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-sm opacity-80">Modelos Carregados</div>
                  <div className="font-semibold">
                    {statistics.models_loaded.advanced ? '✅' : '❌'} Avançado
                  </div>
                  <div className="font-semibold">
                    {statistics.models_loaded.fallback ? '✅' : '❌'} Fallback
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-sm opacity-80">Performance</div>
                  <div className="font-semibold">
                    Tempo: {statistics.performance.avg_response_time}
                  </div>
                  <div className="font-semibold">
                    Precisão: {statistics.performance.accuracy}
                  </div>
                </div>

                {statistics.total_classifications && (
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm opacity-80">Total</div>
                    <div className="font-semibold text-2xl">
                      {statistics.total_classifications}
                    </div>
                    <div className="text-sm">classificações</div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Interface principal */}
          <EmailClassifier />

          {/* Footer */}
          <footer className="mt-16 text-center text-white/60">
            <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <FontAwesomeIcon icon={faGraduationCap} />
                <span className="font-semibold">Projeto Desenvolvido para AutoU</span>
              </div>
              <p className="text-sm leading-relaxed">
                Sistema de classificação inteligente utilizando técnicas avançadas de 
                Processamento de Linguagem Natural e Machine Learning para automatizar 
                a análise e resposta de emails empresariais.
              </p>
              <div className="flex justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-green-400" />
                  <span>Seguro</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faRocket} className="text-blue-400" />
                  <span>Rápido</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faChartLine} className="text-purple-400" />
                  <span>Preciso</span>
                </div>
                <div className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faCog} className="text-gray-400" />
                  <span>Inteligente</span>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;