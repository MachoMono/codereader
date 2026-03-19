import { Code, Zap, Trophy, BookOpen } from 'lucide-react';
import './CyberCard.css';

const iconMap = {
  code: Code,
  zap: Zap,
  trophy: Trophy,
  book: BookOpen,
};

export default function CyberCard({ 
  children, 
  variant = 'default',
  color = 'primary',
  header,
  icon,
  onClick,
  selected = false,
  className = ''
}) {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div 
      className={`cyber-card cyber-card--${variant} cyber-card--${color} ${selected ? 'cyber-card--selected' : ''} ${onClick ? 'cyber-card--clickable' : ''} ${className}`}
      onClick={onClick}
    >
      {header && (
        <div className="cyber-card__header">
          {IconComponent && <IconComponent size={16} />}
          <span>{header}</span>
        </div>
      )}
      <div className="cyber-card__body">
        {children}
      </div>
      <div className="cyber-card__glow" />
    </div>
  );
}
