import './ProgressBar.css';

export default function ProgressBar({ 
  current, 
  total, 
  variant = 'primary',
  showLabel = true,
  label = '',
  showPercentage = true
}) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  
  return (
    <div className="progress-container">
      {showLabel && (
        <div className="progress-label">
          <span className="progress-label__text">{label || `Question ${current} of ${total}`}</span>
          {showPercentage && (
            <span className="progress-label__percent">{percentage}%</span>
          )}
        </div>
      )}
      <div className={`progress-bar progress-bar--${variant}`}>
        <div 
          className="progress-bar__fill"
          style={{ width: `${percentage}%` }}
        />
        <div className="progress-bar__segments">
          {Array.from({ length: total }, (_, i) => (
            <div 
              key={i} 
              className={`progress-segment ${i < current ? 'progress-segment--filled' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
