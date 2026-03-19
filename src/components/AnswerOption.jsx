import { Check, X } from 'lucide-react';
import './AnswerOption.css';

export default function AnswerOption({ 
  letter, 
  text, 
  selected, 
  correct,
  wrong,
  disabled,
  onClick,
  showResult = false
}) {
  const getStateClass = () => {
    if (correct && showResult) return 'answer-option--correct';
    if (wrong && showResult) return 'answer-option--wrong';
    if (selected) return 'answer-option--selected';
    return '';
  };

  return (
    <button 
      className={`answer-option ${getStateClass()}`}
      onClick={onClick}
      disabled={disabled || showResult}
    >
      <span className="answer-option__letter">{letter}</span>
      <span className="answer-option__text">{text}</span>
      {showResult && correct && (
        <span className="answer-option__icon answer-option__icon--correct">
          <Check size={18} />
        </span>
      )}
      {showResult && wrong && (
        <span className="answer-option__icon answer-option__icon--wrong">
          <X size={18} />
        </span>
      )}
    </button>
  );
}
