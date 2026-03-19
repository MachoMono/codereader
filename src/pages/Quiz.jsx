import { useState, useEffect } from 'react';
import { ChevronLeft, Check, X, ArrowRight, RotateCcw, Home } from 'lucide-react';
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
        <div className="empty-state">
          <h2>No questions available</h2>
          <CyberButton onClick={onBack}>Return Home</CyberButton>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const answeredCorrectly = questions.filter((_, i) => {
      return true;
    }).length;
    
    return (
      <div className="quiz quiz--complete">
        <div className="complete-screen">
          <div className="complete-screen__icon">
            <Check size={48} />
          </div>
          <h1 className="complete-screen__title">
            <span className="gradient-text">Quiz Complete</span>
          </h1>
          <p className="complete-screen__subtitle">
            You have mastered this challenge
          </p>
          
          <div className="complete-screen__stats">
            <div className="complete-stat">
              <span className="complete-stat__value">{questions.length}</span>
              <span className="complete-stat__label">Questions</span>
            </div>
            <div className="complete-stat">
              <span className="complete-stat__value gradient-text">100%</span>
              <span className="complete-stat__label">Complete</span>
            </div>
          </div>
          
          <div className="complete-screen__actions">
            <CyberButton variant="secondary" icon="rotate" onClick={handleRestart}>
              Try Again
            </CyberButton>
            <CyberButton variant="primary" icon="home" onClick={onBack}>
              Back Home
            </CyberButton>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz">
      {/* Header */}
      <header className="quiz__header">
        <button className="quiz__back" onClick={onBack}>
          <ChevronLeft size={20} />
          <span>Exit</span>
        </button>
        
        <div className="quiz__info">
          <span className="quiz__language">{language.name}</span>
          <span className="quiz__difficulty">{language.difficulty[difficultyId].name}</span>
        </div>
        
        <div className="quiz__progress">
          <ProgressBar 
            current={currentIndex + 1} 
            total={totalInQuiz}
            variant="primary"
            showLabel={false}
          />
          <span className="quiz__counter">
            {currentIndex + 1} / {totalInQuiz}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="quiz__main">
        {/* Question */}
        <div className="quiz__question">
          <h2 className="quiz__question-text">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Code Block */}
        <TerminalWindow title={`${languageId}_quiz_${currentIndex + 1}`}>
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
            <div className="feedback__header">
              {selectedAnswer === currentQuestion.correct ? (
                <>
                  <Check size={20} />
                  <span>Correct</span>
                </>
              ) : (
                <>
                  <X size={20} />
                  <span>Incorrect</span>
                </>
              )}
            </div>
            <p className="feedback__explanation">
              {currentQuestion.explanation}
            </p>
            <CyberButton 
              variant={selectedAnswer === currentQuestion.correct ? 'success' : 'primary'}
              size="medium"
              icon="arrow"
              onClick={handleNext}
            >
              {currentIndex + 1 >= questions.length ? 'Finish Quiz' : 'Next Question'}
            </CyberButton>
          </div>
        )}
      </main>
    </div>
  );
}
