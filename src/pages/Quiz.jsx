import { useState, useEffect } from 'react';
import { ChevronLeft, Check, X } from 'lucide-react';
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
        <p>No questions available for this combination.</p>
        <CyberButton onClick={onBack}>Return to Home</CyberButton>
      </div>
    );
  }

  if (quizComplete) {
    return (
      <div className="quiz quiz--complete">
        <div className="complete-screen">
          <pre className="complete-screen__ascii">
{`
╔═══════════════════════════════════════╗
║                                       ║
║        SEQUENCE_COMPLETE              ║
║                                       ║
║        DATA_PROCESSED_SUCCESSFULLY    ║
║                                       ║
╚═══════════════════════════════════════╝
`}
          </pre>
          
          <div className="complete-screen__stats">
            <div className="complete-stat">
              <span className="complete-stat__label">QUESTIONS_COMPLETED</span>
              <span className="complete-stat__value">{questions.length}</span>
            </div>
            <div className="complete-stat">
              <span className="complete-stat__label">ACCURACY</span>
              <span className="complete-stat__value complete-stat__value--cyan">
                {Math.round((questions.filter((_, i) => i < currentIndex).filter((q, i) => true).length / Math.max(currentIndex, 1)) * 100)}%
              </span>
            </div>
          </div>
          
          <div className="complete-screen__actions">
            <CyberButton variant="cyan" icon="arrow" onClick={handleRestart}>
              RETRY_SEQUENCE
            </CyberButton>
            <CyberButton variant="magenta" icon="arrow" onClick={onBack}>
              RETURN_BASE
            </CyberButton>
          </div>
        </div>
        
        <div className="quiz__particles">
          {Array.from({ length: 30 }, (_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                background: ['var(--neo-cyan)', 'var(--neon-green)', 'var(--electric-yellow)'][i % 3]
              }}
            />
          ))}
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
          <span>EXIT</span>
        </button>
        
        <div className="quiz__progress">
          <ProgressBar 
            current={currentIndex + 1} 
            total={totalInQuiz}
            variant={language.color}
            showLabel={false}
          />
          <span className="quiz__counter">
            Q_{String(currentIndex + 1).padStart(2, '0')}/{totalInQuiz}
          </span>
        </div>
        
        <div className="quiz__language">
          <span className="quiz__language-name">{language.name}</span>
          <span className="quiz__difficulty">{language.difficulty[difficultyId].name}</span>
        </div>
      </header>

      {/* Question Area */}
      <main className="quiz__main">
        <div className="quiz__question">
          <h2 className="quiz__question-text">
            <span className="quiz__question-label">&gt;_</span>
            {currentQuestion.question}
          </h2>
        </div>

        {/* Code Block */}
        <TerminalWindow title={`question_${String(currentIndex + 1).padStart(2, '0')}.${languageId}`}>
          {currentQuestion.code.map((line, idx) => (
            <CodeLine 
              key={idx} 
              number={line.number} 
              content={line.content}
              type={line.type}
            />
          ))}
          {showFeedback && (
            <div className="code-line code-line--prompt">
              <span className="code-line__number"></span>
              <span className="code-line__content">
                {selectedAnswer === currentQuestion.correct ? (
                  <span className="text-green">&gt; CORRECT</span>
                ) : (
                  <span className="text-magenta">&gt; INCORRECT</span>
                )}
              </span>
            </div>
          )}
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
                  <span>CORRECT</span>
                </>
              ) : (
                <>
                  <X size={20} />
                  <span>INCORRECT</span>
                </>
              )}
            </div>
            <p className="feedback__explanation">
              {currentQuestion.explanation}
            </p>
            <CyberButton 
              variant={selectedAnswer === currentQuestion.correct ? 'green' : 'cyan'}
              size="small"
              icon="arrow"
              onClick={handleNext}
            >
              {currentIndex + 1 >= questions.length ? 'COMPLETE' : 'NEXT_QUESTION'}
            </CyberButton>
          </div>
        )}
      </main>

      {/* Particles */}
      <div className="quiz__particles">
        {Array.from({ length: 15 }, (_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
