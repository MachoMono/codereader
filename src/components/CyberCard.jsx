import { Code } from 'lucide-react';
import './CyberCard.css';

export default function CyberCard({ 
  children, 
  variant = 'default',
  glowColor = 'cyan',
  header,
  icon,
  onClick,
  className = ''
}) {
  const IconComponent = icon === 'code' ? Code : null;

  return (
    <div 
      className={`cyber-card cyber-card--${variant} cyber-card--glow-${glowColor} ${onClick ? 'cyber-card--clickable' : ''} ${className}`}
      onClick={onClick}
    >
      <div className="cyber-card__accent"></div>
      {header && (
        <div className="cyber-card__header">
          {IconComponent && <IconComponent size={14} />}
          <span>{header}</span>
        </div>
      )}
      <div className="cyber-card__body">
        {children}
      </div>
    </div>
  );
}
