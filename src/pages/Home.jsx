import { useState } from 'react';
import { Code, Zap, Trophy, Play, ArrowRight, Sparkles } from 'lucide-react';
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
      {/* Hero Section */}
      <header className="home__hero">
        <div className="home__hero-bg">
          <div className="hero-orb hero-orb--1"></div>
          <div className="hero-orb hero-orb--2"></div>
          <div className="hero-orb hero-orb--3"></div>
        </div>
        <div className="home__hero-content">
          <div className="home__badge">
            <Sparkles size={14} />
            <span>Learn to Read Code</span>
          </div>
          <h1 className="home__title">
            <span className="gradient-text">CodeReader</span>
          </h1>
          <p className="home__subtitle">
            Master code comprehension through interactive quizzes
          </p>
        </div>
      </header>

      {/* Language Selection */}
      <section className="home__section">
        <div className="section-header">
          <div className="section-icon">
            <Code size={20} />
          </div>
          <h2 className="section-title">Choose Your Language</h2>
        </div>
        <div className="language-grid">
          {Object.entries(languages).map(([id, lang]) => (
            <CyberCard
              key={id}
              variant="gradient-border"
              color={lang.color}
              header={lang.name}
              icon="code"
              onClick={() => handleLanguageSelect(id)}
              selected={selectedLanguage === id}
              className="language-card"
            >
              <div className="language-card__preview">
                <code>{id === 'python' ? 'print("hello")' : id === 'javascript' ? 'console.log(x)' : '<Component />'}</code>
              </div>
              <div className="language-card__meta">
                <span>{lang.difficulty.beginner.questions.length + lang.difficulty.intermediate.questions.length} questions</span>
              </div>
            </CyberCard>
          ))}
        </div>
      </section>

      {/* Difficulty Selection */}
      {selectedLanguage && (
        <section className="home__section home__section--animate">
          <div className="section-header">
            <div className="section-icon">
              <Zap size={20} />
            </div>
            <h2 className="section-title">Select Difficulty</h2>
          </div>
          <div className="difficulty-grid">
            {difficulties.map((diff) => {
              const lang = languages[selectedLanguage];
              const questions = lang?.difficulty[diff.id]?.questions || [];
              const completed = getCompletedCount(selectedLanguage, diff.id);
              
              return (
                <button
                  key={diff.id}
                  className={`difficulty-card difficulty-card--${diff.color} ${selectedDifficulty === diff.id ? 'difficulty-card--selected' : ''}`}
                  onClick={() => handleDifficultySelect(diff.id)}
                >
                  <div className="difficulty-card__icon">
                    {diff.id === 'beginner' ? '//' : '***'}
                  </div>
                  <div className="difficulty-card__content">
                    <span className="difficulty-card__name">{diff.name}</span>
                    <span className="difficulty-card__count">{questions.length} questions</span>
                    {completed > 0 && (
                      <div className="difficulty-card__progress">
                        <ProgressBar 
                          current={completed} 
                          total={questions.length}
                          variant={diff.color}
                          showLabel={false}
                        />
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="home__section">
        <div className="section-header">
          <div className="section-icon">
            <Trophy size={20} />
          </div>
          <h2 className="section-title">Your Progress</h2>
        </div>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card__icon">
              <Code size={24} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__value">{progress.stats.totalQuizzes}</span>
              <span className="stat-card__label">Quizzes</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon stat-card__icon--accent">
              <Zap size={24} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__value gradient-text">{getAccuracy()}%</span>
              <span className="stat-card__label">Accuracy</span>
            </div>
          </div>
          <div className="stat-card">
            <div className="stat-card__icon stat-card__icon--secondary">
              <Trophy size={24} />
            </div>
            <div className="stat-card__content">
              <span className="stat-card__value">{progress.stats.totalAnswered}</span>
              <span className="stat-card__label">Answered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Start Quiz Button */}
      {selectedLanguage && selectedDifficulty && (
        <div className="home__action home__action--animate">
          <ProgressBar 
            current={completedCount} 
            total={totalQuestions}
            variant="primary"
            label={`${completedCount} of ${totalQuestions} completed`}
          />
          <CyberButton 
            variant="primary" 
            size="large"
            icon="play"
            onClick={handleStartQuiz}
          >
            Start Quiz
          </CyberButton>
        </div>
      )}
    </div>
  );
}
