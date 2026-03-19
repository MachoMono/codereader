import './ProgressBar.css';

export default function ProgressBar({ 
  current, 
  total, 
  showLabel = true,
  label = ''
}) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  
  return (
    <div className="progress-container">
      {showLabel && (
        <div className="progress-label">
          <span className="progress-label__text">{label || `PROGRESS: ${current}/${total}`}</span>
          <span className="progress-label__percent">{percentage}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div className="progress-bar__track">
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
