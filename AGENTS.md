# CodeReader - Agent Documentation

## Purpose

CodeReader is an interactive quiz application that teaches users how to read code. It presents code snippets and asks multiple-choice questions about what the code does or outputs.

## Design Philosophy

- **Cyberpunk Aesthetic**: Inspired by 80s anime (Akira, Ghost in the Shell, Cyberpunk Edgerunners)
- **No Emojis**: Use Lucide icons or ASCII art instead
- **Hard Shadows**: Neubrutalism-style (4px offset, no blur)
- **Neon Glows**: CSS box-shadow with color + blur radius
- **Terminal Feel**: Monospace fonts, command-line aesthetics

## Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--neo-cyan` | #00F5FF | Primary actions, links |
| `--hot-magenta` | #FF2A6D | Alerts, errors |
| `--electric-yellow` | #FCEE0A | Highlights, warnings |
| `--neon-green` | #05FFA1 | Success, correct answers |
| `--void-black` | #05050A | Background |
| `--cyber-dark` | #0A0A14 | Cards, surfaces |
| `--terminal` | #12121F | Code blocks |
| `--chrome` | #1A1A2E | Borders |

## Typography

| Font | Role | Import |
|------|------|--------|
| Orbitron | Display, headers | Google Fonts |
| Fira Code | Code blocks | Google Fonts |
| Audiowide | UI labels | Google Fonts |
| Exo 2 | Body text | Google Fonts |
| Share Tech Mono | Terminal text | Google Fonts |

## Key Components

### CyberButton
- Variants: `cyan`, `magenta`, `yellow`, `green`
- Sizes: `small`, `medium`, `large`
- Hover: Background fill + shadow grow
- Active: Hard press (shadow disappears)

### CyberCard
- Hover: Lift + border glow
- Accent bar: Gradient stripe at top
- Clickable variant for selection

### TerminalWindow
- Window chrome (dots + title)
- Line numbers
- Syntax highlighting via `type` prop

### AnswerOption
- Letter prefix in brackets
- Correct: Green border + glow + pulse
- Wrong: Magenta border + shake animation

### ProgressBar
- Segmented fill
- Sweep animation on fill

## Quiz Data Format

Questions are defined in `src/data/quizData.js`:

```javascript
{
  id: string,           // Unique identifier
  question: string,     // Question text
  code: [               // Code lines
    { number, content, type }
  ],
  options: [             // Answer choices
    { letter, text }
  ],
  correct: string,       // 'A', 'B', 'C', or 'D'
  explanation: string   // Shown after answering
}
```

## Adding New Languages

1. Add language entry in `languages` object
2. Add difficulty levels with `questions` array
3. Each language can have: `beginner`, `intermediate`, `advanced`

## Adding New Questions

1. Find the language/difficulty in `quizData.js`
2. Add new question object to the `questions` array
3. Ensure unique `id` following pattern: `{lang}-{diff}-{num}`

## Styling Guidelines

- **NO Emojis**: Use Lucide icons or ASCII
- **Hard Shadows**: `4px 4px 0 0 {color}`
- **Glow Effects**: `0 0 10px {color}, 0 0 30px rgba({color}, 0.4)`
- **Scanlines**: Use `.scanlines::before` pseudo-element
- **Particles**: Floating animated divs with glow

## Animation Classes

| Class | Purpose |
|-------|---------|
| `.scanlines::before` | CRT overlay effect |
| `@keyframes glitch` | Text glitch |
| `@keyframes shake` | Wrong answer shake |
| `@keyframes fade-in-up` | Element entrance |
| `@keyframes particle-float` | Background particles |

## Progress Tracking

Uses LocalStorage key `codereader_progress`. Hook `useProgress.js` manages:
- Completed questions per language/difficulty
- Overall stats (accuracy, streak)
- Reset capability

## File Locations

| File | Purpose |
|------|---------|
| `src/index.css` | Global styles, CSS variables, animations |
| `src/App.jsx` | Main app, view routing |
| `src/pages/Home.jsx` | Language/difficulty selection |
| `src/pages/Quiz.jsx` | Quiz flow, feedback |
| `src/data/quizData.js` | All quiz content |
| `src/hooks/useProgress.js` | Progress state management |
