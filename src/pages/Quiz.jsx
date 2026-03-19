import { useState, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import CyberButton from '../components/CyberButton';
import TerminalWindow, { CodeLine } from '../components/TerminalWindow';
import AnswerOption from '../components/AnswerOption';
import ProgressBar from '../components/ProgressBar';
import { languages } from '../data/quizData';
import { useProgress } from '../hooks/useProgress';
import './Quiz.css';

export default function Quiz({ languageId, difficultyId, onBack }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  
  const { completeQuestion, getCompletedCount } = useProgress();
  
  const language = languages[languageId];
  const questions = language?.difficulty[difficultyId]?.questions || [];
  const currentQuestion = questions[currentIndex];
  
  const completedInQuiz = getCompletedCount(languageId, difficultyId);
  const totalInQuiz = questions.length;

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setQuizComplete(true);
    }
  }, [currentIndex, questions.length]);

  const handleSelectAnswer = (letter) => {
    if (showFeedback) return;
    
    setSelectedAnswer(letter);
    setShowFeedback(true);
    
    const isCorrect = letter === currentQuestion.correct;
    completeQuestion(languageId, difficultyId, currentQuestion.id, isCorrect);
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuizComplete(true);
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizComplete(false);
  };

  if (questions.length === 0) {
    return (
      <div className="quiz quiz--empty">
        <p className="quiz__error">NO_DATA_FOUND</p>
        <CyberButton onClick={onBack}>RETURN_BASE</CyberButton>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="quiz quiz--complete">
        <pre className="complete-ascii">
{`
  ███████╗ ██████╗ ███╗   ██╗ ██████╗ 
  ██╔════╝██╔═══██╗████╗  ██║██╔═══██╗
  █████╗  ██║   ██║██╔██╗ ██║██║   ██║
  ██╔══╝  ██║   ██║██║╚██╗██║██║   ██║
  ██║     ╚██████╔╝██║ ╚████║╚██████╔╝
  ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝ 
`}
        </pre>
        <p className="complete-label">SEQUENCE_COMPLETE</p>
        <div className="complete-stats">
          <span className="stat-item">
            <span className="stat-label">QUESTIONS:</span>
            <span className="stat-value">{questions.length}</span>
          </span>
        </div>
        <div className="complete-actions">
          <CyberButton variant="secondary" onClick={handleRestart}>RETRY_SEQUENCE</CyberButton>
          <CyberButton onClick={onBack}>RETURN_BASE</CyberButton>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      {/* Header */}
      <header className="quiz__header">
        <button className="quiz__back" onClick={onBack}>
          <ChevronLeft size={16} />
          <span>EXIT</span>
        </button>
        
        <div className="quiz__info">
          <span className="quiz__language">{language?.name.toUpperCase()}</span>
          <span className="quiz__separator">//</span>
          <span className="quiz__difficulty">{language?.difficulty[difficultyId]?.name.toUpperCase()}</span>
        </div>
        
        <div className="quiz__counter">
          {String(currentIndex + 1).padStart(2, '0')}/{totalInQuiz}
        </div>
      </header>

      {/* Main Content */}
      <main className="quiz__main">
        {/* Question */}
        <div className="quiz__question">
          <span className="question-prefix">&gt;_</span>
          <h2 className="quiz__question-text">{currentQuestion.question}</h2>
        </div>

        {/* Code Block */}
        <TerminalWindow title={`${languageId}_q${String(currentIndex + 1).padStart(2, '0')}`}>
          {currentQuestion.code.map((line, idx) => (
            <CodeLine 
              key={idx} 
              number={line.number} 
              content={line.content}
              type={line.type}
            />
          ))}
        </TerminalWindow>

        {/* Answer Options */}
        <div className="quiz__options">
          {currentQuestion.options.map((option) => (
            <AnswerOption
              key={option.letter}
              letter={option.letter}
              text={option.text}
              selected={selectedAnswer === option.letter}
              correct={showFeedback && option.letter === currentQuestion.correct}
              wrong={showFeedback && selectedAnswer === option.letter && option.letter !== currentQuestion.correct}
              disabled={showFeedback}
              showResult={showFeedback}
              onClick={() => handleSelectAnswer(option.letter)}
            />
          ))}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`quiz__feedback ${selectedAnswer === currentQuestion.correct ? 'quiz__feedback--correct' : 'quiz__feedback--wrong'}`}>
            <div className="feedback-header">
              {selectedAnswer === currentQuestion.correct ? '[+]' : '[-]'} {selectedAnswer === currentQuestion.correct ? 'CORRECT' : 'INCORRECT'}
            </div>
            <p className="feedback-explanation">{currentQuestion.explanation}</p>
            <CyberButton 
              variant={selectedAnswer === currentQuestion.correct ? 'success' : 'primary'}
              size="small"
              icon="arrow"
              onClick={handleNext}
            >
              {currentIndex + 1 >= questions.length ? 'COMPLETE' : 'NEXT'}
            </CyberButton>
          </div>
        )}
      </main>

      {/* Progress */}
      <footer className="quiz__footer">
        <ProgressBar 
          current={currentIndex + 1} 
          total={totalInQuiz}
          label={`LOADING: ${currentIndex + 1}/${totalInQuiz}`}
        />
      </footer>
    </div>
  );
}
