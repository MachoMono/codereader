import { useState } from 'react';
import { Code, Zap, Trophy } from 'lucide-react';
import CyberButton from '../components/CyberButton';
import CyberCard from '../components/CyberCard';
import ProgressBar from '../components/ProgressBar';
import { languages, difficulties } from '../data/quizData';
import { useProgress } from '../hooks/useProgress';
import './Home.css';

export default function Home({ onStartQuiz }) {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const { progress, getAccuracy, getCompletedCount } = useProgress();

  const handleLanguageSelect = (langId) => {
    setSelectedLanguage(langId);
    setSelectedDifficulty(null);
  };

  const handleDifficultySelect = (diffId) => {
    setSelectedDifficulty(diffId);
  };

  const handleStartQuiz = () => {
    if (selectedLanguage && selectedDifficulty) {
      onStartQuiz(selectedLanguage, selectedDifficulty);
    }
  };

  const totalQuestions = selectedLanguage && selectedDifficulty
    ? languages[selectedLanguage]?.difficulty[selectedDifficulty]?.questions.length || 0
    : 0;

  const completedCount = selectedLanguage && selectedDifficulty
    ? getCompletedCount(selectedLanguage, selectedDifficulty)
    : 0;

  return (
    <div className="home">
      {/* ASCII Art Header */}
      <header className="home__header">
        <pre className="home__ascii">
{`
██╗   ██╗██╗ ██████╗████████╗ ██████╗ ██████╗ ██╗   ██╗
██║   ██║██║██╔════╝╚══██╔══╝██╔═══██╗██╔══██╗╚██╗ ██╔╝
██║   ██║██║██║        ██║   ██║   ██║██████╔╝ ╚████╔╝ 
╚██╗ ██╔╝██║██║        ██║   ██║   ██║██╔══██╗  ╚██╔╝  
 ╚████╔╝ ██║╚██████╗   ██║   ╚██████╔╝██║  ██║   ██║   
  ╚═══╝  ╚═╝ ╚═════╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝   ╚═╝   
`}
        </pre>
        <p className="home__tagline">
          <span className="home__tagline-text">DECODE_THE_MATRIX_OF_CODE</span>
        </p>
      </header>

      {/* Language Selection */}
      <section className="home__section">
        <h2 className="home__section-title">
          <span className="home__section-icon"><Code size={20} /></span>
          SELECT_PROTOCOL
        </h2>
        <div className="home__languages">
          {Object.entries(languages).map(([id, lang]) => (
            <CyberCard
              key={id}
              variant={selectedLanguage === id ? 'highlighted' : 'default'}
              glowColor={lang.color}
              header={lang.name}
              icon="code"
              onClick={() => handleLanguageSelect(id)}
              className="language-card"
            >
              <div className="language-card__preview">
                <code>{id === 'python' ? 'print("hello")' : id === 'javascript' ? 'console.log(x)' : '<Component />'}</code>
              </div>
              <div className="language-card__stats">
                <span>{lang.difficulty.beginner.questions.length + lang.difficulty.intermediate.questions.length} questions</span>
              </div>
            </CyberCard>
          ))}
        </div>
      </section>

      {/* Difficulty Selection */}
      {selectedLanguage && (
        <section className="home__section home__section--animate">
          <h2 className="home__section-title">
            <span className="home__section-icon"><Zap size={20} /></span>
            DIFFICULTY_LEVEL
          </h2>
          <div className="home__difficulties">
            {difficulties.map((diff) => {
              const lang = languages[selectedLanguage];
              const questions = lang?.difficulty[diff.id]?.questions || [];
              const completed = getCompletedCount(selectedLanguage, diff.id);
              
              return (
                <button
                  key={diff.id}
                  className={`difficulty-btn difficulty-btn--${diff.color} ${selectedDifficulty === diff.id ? 'difficulty-btn--selected' : ''}`}
                  onClick={() => handleDifficultySelect(diff.id)}
                >
                  <span className="difficulty-btn__name">{diff.name.toUpperCase()}</span>
                  <span className="difficulty-btn__count">{questions.length} questions</span>
                  {completed > 0 && (
                    <span className="difficulty-btn__progress">{completed}/{questions.length}</span>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Progress Stats */}
      <section className="home__section">
        <h2 className="home__section-title">
          <span className="home__section-icon"><Trophy size={20} /></span>
          SYSTEM_STATUS
        </h2>
        <div className="home__stats">
          <div className="stat-card">
            <span className="stat-card__label">QUIZZES_COMPLETED</span>
            <span className="stat-card__value">{progress.stats.totalQuizzes}</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">ACCURACY</span>
            <span className="stat-card__value stat-card__value--cyan">{getAccuracy()}%</span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">STREAK</span>
            <span className="stat-card__value stat-card__value--yellow">
              <Zap size={16} /> {progress.stats.streak}
            </span>
          </div>
          <div className="stat-card">
            <span className="stat-card__label">QUESTIONS_ANSWERED</span>
            <span className="stat-card__value">{progress.stats.totalAnswered}</span>
          </div>
        </div>
      </section>

      {/* Start Quiz Button */}
      {selectedLanguage && selectedDifficulty && (
        <div className="home__action home__action--animate">
          <ProgressBar 
            current={completedCount} 
            total={totalQuestions}
            variant="cyan"
            label={`PROGRESS: ${completedCount}/${totalQuestions}`}
          />
          <CyberButton 
            variant="cyan" 
            size="large"
            icon="arrow"
            onClick={handleStartQuiz}
          >
            INITIATE_QUIZ_SEQUENCE
          </CyberButton>
        </div>
      )}

      {/* Floating Particles */}
      <div className="home__particles">
        {Array.from({ length: 20 }, (_, i) => (
          <div 
            key={i} 
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}
