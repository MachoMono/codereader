import { Terminal, Type, ChevronRight, Play, Check, X, ArrowRight } from 'lucide-react';
import './CyberButton.css';

export default function CyberButton({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon = null,
  onClick,
  disabled = false,
  loading = false,
  className = ''
}) {
  const getIcon = () => {
    if (loading) return <span className="cyber-btn__spinner" />;
    if (icon === 'terminal') return <Terminal size={18} />;
    if (icon === 'type') return <Type size={18} />;
    if (icon === 'arrow' || icon === 'play') return <ArrowRight size={18} />;
    if (icon === 'check') return <Check size={18} />;
    if (icon === 'x') return <X size={18} />;
    return null;
  };

  return (
    <button 
      className={`cyber-btn cyber-btn--${variant} cyber-btn--${size} ${loading ? 'cyber-btn--loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {getIcon() && <span className="cyber-btn__icon">{getIcon()}</span>}
      <span className="cyber-btn__text">{children}</span>
    </button>
  );
}
