import './AnswerOption.css';

export default function AnswerOption({ 
  letter, 
  text, 
  selected, 
  correct,
  wrong,
  disabled,
  onClick 
}) {
  const getStateClass = () => {
    if (correct) return 'answer-option--correct';
    if (wrong) return 'answer-option--wrong';
    if (selected) return 'answer-option--selected';
    return '';
  };

  return (
    <button 
      className={`answer-option ${getStateClass()}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="answer-option__letter">[{letter}]</span>
      <span className="answer-option__text">{text}</span>
    </button>
  );
}
