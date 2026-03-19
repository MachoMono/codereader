import { useState } from 'react';
import CyberCard from '../components/CyberCard';
import CyberButton from '../components/CyberButton';
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
      {/* Header */}
      <header className="home__header">
        <pre className="home__logo">
{`
  ██████╗ ██████╗ ███████╗ ██████╗ ███╗   ██╗
  ██╔══██╗██╔═══██╗██╔════╝██╔═══██╗████╗  ██║
  ██████╔╝██║   ██║███████╗██║   ██║██╔██╗ ██║
  ██╔═══╝ ██║   ██║╚════██║██║   ██║██║╚██╗██║
  ██║     ╚██████╔╝███████║╚██████╔╝██║ ╚████║
  ╚═╝      ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
`}
        </pre>
        <p className="home__tagline">
          <span className="home__prompt">&gt;</span> Learn to read code. Learn to understand.
        </p>
      </header>

      {/* Language Selection */}
      <section className="home__section">
        <div className="section-header">
          <span className="section-prefix">//</span>
          <h2 className="section-title">SELECT_PROTOCOL</h2>
        </div>
        
        <div className="language-grid">
          {Object.entries(languages).map(([id, lang]) => (
            <CyberCard
              key={id}
              onClick={() => handleLanguageSelect(id)}
              selected={selectedLanguage === id}
              className="language-card"
            >
              <div className="card-code">
                <span className="code-arrow">&gt;&gt;</span> {lang.name.toUpperCase()} <span className="code-arrow">&lt;&lt;</span>
              </div>
              <div className="card-preview">
                {id === 'python' && 'print("hello world")'}
                {id === 'javascript' && 'console.log(x)'}
                {id === 'react' && '<Component />'}
              </div>
              <div className="card-meta">
                {lang.difficulty.beginner.questions.length + lang.difficulty.intermediate.questions.length} questions
              </div>
            </CyberCard>
          ))}
        </div>
      </section>

      {/* Difficulty Selection */}
      {selectedLanguage && (
        <section className="home__section home__section--animate">
          <div className="section-header">
            <span className="section-prefix">//</span>
            <h2 className="section-title">DIFFICULTY_LEVEL</h2>
          </div>
          
          <div className="difficulty-grid">
            {difficulties.map((diff) => {
              const lang = languages[selectedLanguage];
              const questions = lang?.difficulty[diff.id]?.questions || [];
              const completed = getCompletedCount(selectedLanguage, diff.id);
              
              return (
                <button
                  key={diff.id}
                  className={`difficulty-card ${selectedDifficulty === diff.id ? 'difficulty-card--selected' : ''}`}
                  onClick={() => handleDifficultySelect(diff.id)}
                >
                  <div className="difficulty-prefix">
                    {diff.id === 'beginner' ? '//' : '/***/'}
                  </div>
                  <div className="difficulty-info">
                    <span className="difficulty-name">{diff.name.toUpperCase()}</span>
                    <span className="difficulty-desc">
                      {diff.id === 'beginner' ? 'For those just starting out' : 'For those with experience'}
                    </span>
                    <span className="difficulty-count">{questions.length} questions</span>
                  </div>
                  {completed > 0 && (
                    <div className="difficulty-progress">
                      <ProgressBar 
                        current={completed} 
                        total={questions.length}
                        showLabel={false}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="home__section">
        <div className="section-header">
          <span className="section-prefix">//</span>
          <h2 className="section-title">SYSTEM_STATUS</h2>
        </div>
        
        <div className="stats-grid">
          <div className="stat-item">
            <span className="stat-label">QUIZZES:</span>
            <span className="stat-value">{progress.stats.totalQuizzes}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ACCURACY:</span>
            <span className="stat-value stat-value--accent">{getAccuracy()}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">ANSWERED:</span>
            <span className="stat-value">{progress.stats.totalAnswered}</span>
          </div>
        </div>
      </section>

      {/* Start Quiz */}
      {selectedLanguage && selectedDifficulty && (
        <div className="home__action home__action--animate">
          <ProgressBar 
            current={completedCount} 
            total={totalQuestions}
            label={`LOADING: ${completedCount}/${totalQuestions}`}
          />
          <CyberButton 
            variant="primary" 
            size="large"
            icon="arrow"
            onClick={handleStartQuiz}
          >
            INITIATE_SEQUENCE
          </CyberButton>
        </div>
      )}
    </div>
  );
}
