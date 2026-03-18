import { Terminal, Type, ChevronRight } from 'lucide-react';
import './CyberButton.css';

export default function CyberButton({ 
  children, 
  variant = 'cyan', 
  size = 'medium',
  icon = null,
  onClick,
  disabled = false,
  className = ''
}) {
  const getIcon = () => {
    if (icon === 'terminal') return <Terminal size={18} />;
    if (icon === 'type') return <Type size={18} />;
    if (icon === 'arrow') return <ChevronRight size={18} />;
    return null;
  };

  return (
    <button 
      className={`cyber-btn cyber-btn--${variant} cyber-btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {getIcon() && <span className="cyber-btn__icon">{getIcon()}</span>}
      <span className="cyber-btn__text">{children}</span>
    </button>
  );
}
