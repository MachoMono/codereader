import { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [quizParams, setQuizParams] = useState(null);

  const handleStartQuiz = (language, difficulty) => {
    setQuizParams({ language, difficulty });
    setView('quiz');
  };

  const handleBack = () => {
    setView('home');
    setQuizParams(null);
  };

  return (
    <div className="app">
      {view === 'home' && (
        <Home onStartQuiz={handleStartQuiz} />
      )}
      {view === 'quiz' && quizParams && (
        <Quiz 
          languageId={quizParams.language}
          difficultyId={quizParams.difficulty}
          onBack={handleBack}
        />
      )}
    </div>
  );
}

export default App;
