import './AnswerOption.css';

export default function AnswerOption({ 
  letter, 
  text, 
  selected, 
  correct,
  wrong,
  disabled,
  showResult,
  onClick
}) {
  return (
    <button 
      className={`answer-option ${selected ? 'answer-option--selected' : ''} ${showResult && correct ? 'answer-option--correct' : ''} ${showResult && wrong ? 'answer-option--wrong' : ''}`}
      onClick={onClick}
      disabled={disabled || showResult}
    >
      <span className="answer-option__letter">{letter}</span>
      <span className="answer-option__text">{text}</span>
    </button>
  );
}
