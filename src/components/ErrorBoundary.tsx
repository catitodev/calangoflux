import { Component, ErrorInfo, ReactNode } from 'react';
import calangoLogo from '../assets/imagens/calango-logo-nova.png';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  retryCount: number;
}

const MAX_RETRIES = 3;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState((prev) => ({
      hasError: false,
      retryCount: prev.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      const canRetry = this.state.retryCount < MAX_RETRIES;

      return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[var(--bg-primary)] text-[var(--text-primary)] px-4">
          <img
            src={calangoLogo}
            alt="CalangoFlux"
            className="w-24 h-24 mb-6"
          />
          <p className="text-lg text-center mb-6 max-w-md">
            Algo deu errado. Estamos trabalhando para resolver.
          </p>
          {canRetry ? (
            <button
              onClick={this.handleRetry}
              className="px-6 py-3 bg-[var(--accent-primary)] text-[var(--bg-primary)] font-semibold rounded-lg hover:brightness-110 transition-all duration-300"
            >
              Tentar novamente
            </button>
          ) : (
            <p className="text-[var(--text-muted)] text-sm">
              Não foi possível recuperar. Tente recarregar a página.
            </p>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
