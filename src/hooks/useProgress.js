import { useState, useEffect } from 'react';

const STORAGE_KEY = 'codereader_progress';

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : {
      completed: {},
      stats: {
        totalQuizzes: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        streak: 0
      }
    };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeQuestion = (language, difficulty, questionId, wasCorrect) => {
    setProgress(prev => {
      const key = `${language}-${difficulty}`;
      const newCompleted = { ...prev.completed };
      
      if (!newCompleted[key]) {
        newCompleted[key] = {
          questions: [],
          correct: 0,
          total: 0
        };
      }
      
      if (!newCompleted[key].questions.includes(questionId)) {
        newCompleted[key].questions.push(questionId);
        newCompleted[key].total += 1;
        if (wasCorrect) {
          newCompleted[key].correct += 1;
        }
      }
      
      return {
        completed: newCompleted,
        stats: {
          ...prev.stats,
          totalAnswered: prev.stats.totalAnswered + 1,
          totalCorrect: wasCorrect ? prev.stats.totalCorrect + 1 : prev.stats.totalCorrect,
          streak: wasCorrect ? prev.stats.streak + 1 : 0,
          totalQuizzes: Object.keys(newCompleted).length
        }
      };
    });
  };

  const isCompleted = (language, difficulty, questionId) => {
    const key = `${language}-${difficulty}`;
    return progress.completed[key]?.questions.includes(questionId);
  };

  const getAccuracy = () => {
    const { totalCorrect, totalAnswered } = progress.stats;
    if (totalAnswered === 0) return 0;
    return Math.round((totalCorrect / totalAnswered) * 100);
  };

  const getCompletedCount = (language, difficulty) => {
    const key = `${language}-${difficulty}`;
    return progress.completed[key]?.questions.length || 0;
  };

  const resetProgress = () => {
    setProgress({
      completed: {},
      stats: {
        totalQuizzes: 0,
        totalCorrect: 0,
        totalAnswered: 0,
        streak: 0
      }
    });
  };

  return {
    progress,
    completeQuestion,
    isCompleted,
    getAccuracy,
    getCompletedCount,
    resetProgress
  };
}
