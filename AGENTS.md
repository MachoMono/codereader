# CodeReader - Agent Documentation

## Purpose

CodeReader is an interactive quiz application that teaches users how to read code through multiple-choice questions.

## Design Philosophy

- **Modern & Vibrant**: Colorful gradients, glowing effects, floating orbs
- **Glass Morphism**: Frosted glass cards with backdrop blur
- **Gradient Accents**: Purple, pink, cyan color scheme
- **NO Emojis**: Use Lucide icons or text symbols instead
- **Clean Typography**: Space Grotesk for display, Outfit for body, JetBrains Mono for code

## Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--primary` | #6366F1 | Primary buttons, accents |
| `--secondary` | #EC4899 | Pink accents |
| `--accent` | #06B6D4 | Cyan highlights |
| `--accent-alt` | #8B5CF6 | Purple |
| `--bg-base` | #0F0F1A | Deep background |
| `--bg-card` | rgba(255,255,255,0.05) | Card backgrounds |
| `--text-primary` | #FFFFFF | Main text |
| `--text-secondary` | rgba(255,255,255,0.7) | Secondary text |

## Gradients

```css
--gradient-text: linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899, #F472B6);
--gradient-bg: linear-gradient(135deg, #0F0F1A 0%, #1A1035 50%, #0F1A2A 100%);
```

## Typography

| Font | Role | Import |
|------|------|--------|
| Space Grotesk | Display, headers | Google Fonts |
| Outfit | Body text | Google Fonts |
| JetBrains Mono | Code blocks | Google Fonts |

## Key Components

### CyberButton
- Variants: `primary`, `secondary`, `accent`, `success`, `danger`, `ghost`, `outline`
- Sizes: `small`, `medium`, `large`
- Gradient backgrounds with hover lift effect
- Loading spinner state

### CyberCard
- Glass morphism background
- Gradient border on hover
- Color variants for accent colors
- Clickable for selection

### TerminalWindow
- Dark terminal aesthetic
- Colored syntax highlighting
- Window chrome with dots

### AnswerOption
- Letter prefix in colored box
- Correct: Green highlight + check icon
- Wrong: Red highlight + shake animation

### ProgressBar
- Segmented progress
- Gradient fill
- Percentage display

## Quiz Data Format

Questions in `src/data/quizData.js`:

```javascript
{
  id: string,
  question: string,
  code: [{ number, content, type }],
  options: [{ letter, text }],
  correct: 'A' | 'B' | 'C' | 'D',
  explanation: string
}
```

Code types: `default`, `keyword`, `string`, `function`, `comment`, `number`, `operator`

## Styling Guidelines

- **NO Emojis**: Use Lucide icons
- **Glass Effects**: `backdrop-filter: blur(20px)`
- **Gradient Borders**: Use `::before` with mask-composite
- **Floating Orbs**: Blurred gradient circles for backgrounds
- **Soft Shadows**: `box-shadow: 0 20px 40px rgba(0,0,0,0.3)`

## Animation Classes

| Animation | Purpose |
|-----------|---------|
| `fade-in-up` | Element entrance |
| `float` | Floating elements |
| `gradient-shift` | Animated gradients |
| `shimmer` | Loading effects |

## File Locations

| File | Purpose |
|------|---------|
| `src/index.css` | Global styles, variables |
| `src/App.jsx` | View routing |
| `src/pages/Home.jsx` | Language/difficulty select |
| `src/pages/Quiz.jsx` | Quiz flow |
| `src/data/quizData.js` | All quiz content |
| `src/hooks/useProgress.js` | LocalStorage progress |
