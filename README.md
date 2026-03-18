# CodeReader

An interactive web application for learning to read code through multiple-choice quizzes. Features a cyberpunk aesthetic inspired by 80s anime (Akira, Ghost in the Shell, Cyberpunk Edgerunners).

## Quick Start

```bash
npm install
npm run dev
```

Visit `http://localhost:5173`

## Tech Stack

- **React 18** with Vite
- **Lucide React** for icons
- **CSS Variables** for theming
- **LocalStorage** for progress tracking

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── CyberButton.jsx     # Neon-styled buttons
│   ├── CyberCard.jsx       # Cards with glow effects
│   ├── TerminalWindow.jsx  # Code display terminal
│   ├── AnswerOption.jsx    # Quiz answer buttons
│   └── ProgressBar.jsx     # Segmented progress
├── pages/          # Page components
│   ├── Home.jsx    # Language/difficulty selection
│   └── Quiz.jsx    # Active quiz view
├── data/           # Static data
│   └── quizData.js # Quiz questions
└── hooks/          # Custom React hooks
    └── useProgress.js  # Progress tracking
```

## Adding Quiz Questions

Edit `src/data/quizData.js`. Questions follow this format:

```javascript
{
  id: 'unique-id',
  question: 'What does this code print?',
  code: [
    { number: 1, content: 'x = 5', type: 'default' },
    { number: 2, content: 'print(x)', type: 'function' }
  ],
  options: [
    { letter: 'A', text: 'Nothing' },
    { letter: 'B', text: '5' },
    // ...
  ],
  correct: 'B',
  explanation: 'x = 5 stores 5 in x. print(x) outputs 5.'
}
```

Code line `type` values: `default`, `keyword`, `string`, `function`, `comment`, `number`, `operator`

## Design System

### Colors
- `--neo-cyan`: #00F5FF (primary)
- `--hot-magenta`: #FF2A6D (accent)
- `--electric-yellow`: #FCEE0A (highlight)
- `--neon-green`: #05FFA1 (success)
- `--void-black`: #05050A (background)

### Typography
- **Display**: Orbitron (futuristic headers)
- **Code**: Fira Code (monospace with ligatures)
- **UI**: Audiowide (tech labels)

### Key Effects
- Hard shadows (4px offset, no blur)
- Neon glows (`box-shadow` with color + blur)
- Scanline overlay (`.scanlines::before`)
- Floating particles animation

## Deployment

```bash
npm run build
```

Output in `dist/` folder. Deploy to any static hosting (Vercel, Netlify, GitHub Pages).

## Design Inspiration

- Akira (1988) - color palette, atmosphere
- Cyberpunk Edgerunners - neon aesthetic
- Blade Runner - dystopian tech vibes
- Neubrutalism - hard shadows, bold borders
