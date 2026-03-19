import { ChevronRight } from 'lucide-react';
import './CyberButton.css';

export default function CyberButton({ 
  children, 
  variant = 'primary', 
  size = 'medium',
  icon,
  onClick,
  disabled = false,
  className = ''
}) {
  return (
    <button 
      className={`cyber-btn cyber-btn--${variant} cyber-btn--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="cyber-btn__text">{children}</span>
      {icon === 'arrow' && <ChevronRight size={16} className="cyber-btn__arrow" />}
    </button>
  );
}
