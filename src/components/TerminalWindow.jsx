import './TerminalWindow.css';

export default function TerminalWindow({ 
  title = 'terminal',
  children,
  className = ''
}) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot--red"></span>
          <span className="terminal-dot terminal-dot--yellow"></span>
          <span className="terminal-dot terminal-dot--green"></span>
        </div>
        <span className="terminal-title">[{title}]</span>
      </div>
      <div className="terminal-body">
        {children}
      </div>
    </div>
  );
}

export function CodeLine({ number, content, type = 'default' }) {
  return (
    <div className={`code-line code-line--${type}`}>
      <span className="code-line__number">{number}</span>
      <span className="code-line__content">{content}</span>
    </div>
  );
}
