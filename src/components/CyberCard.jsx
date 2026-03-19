import './CyberCard.css';

export default function CyberCard({ 
  children, 
  variant = 'default',
  onClick,
  selected = false,
  className = ''
}) {
  return (
    <div 
      className={`cyber-card ${selected ? 'cyber-card--selected' : ''} ${onClick ? 'cyber-card--clickable' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
