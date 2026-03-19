# CodeReader - Agent Documentation

## Purpose

CodeReader is an interactive quiz application that teaches users how to read code through multiple-choice questions. Features a cyberpunk terminal aesthetic.

## Design Philosophy

- **Dark cyberpunk aesthetic** - Inspired by rekt.network
- **Terminal/ASCII art style** - Pixel fonts, grid-based layouts
- **CRT effects** - Scanlines, vignette overlays
- **Neon glows** - Magenta/purple text shadows
- **NO Emojis** - Use Lucide icons or text symbols

## Color Palette

| Variable | Hex | Usage |
|----------|-----|-------|
| `--bg-void` | #0A0A0A | Main background |
| `--bg-card` | #141414 | Card backgrounds |
| `--bg-terminal` | #0D0D0D | Code blocks |
| `--text-primary` | #B0B0B0 | Body text |
| `--text-active` | #FFFFFF | Headings |
| `--text-muted` | #555555 | Secondary |
| `--accent-magenta` | #FF00FF | Primary accent |
| `--accent-purple` | #9D00FF | Secondary accent |
| `--success` | #00FF66 | Correct answers |
| `--error` | #FF0033 | Wrong answers |
| `--border` | #333333 | Borders |

## Typography

| Font | Role | Import |
|------|------|--------|
| Share Tech Mono | Body, UI | Google Fonts |
| Fira Code | Code blocks | Google Fonts |

## UI/UX Best Practices (UI Pro Max)

### Visual Quality
- No emojis as icons
- Consistent Lucide icons
- Stable hover states (no layout shift)
- Theme colors via CSS variables

### Interaction
- `cursor-pointer` on all clickable elements
- Hover feedback on all interactive elements
- Smooth transitions (200ms ease)
- Visible focus states for keyboard navigation

### Accessibility
- `prefers-reduced-motion` support
- Focus-visible outlines (2px magenta)
- Color contrast ratios (4.5:1 minimum)
- Semantic HTML elements

## Key Components

### CyberButton
- Variants: `primary`, `secondary`, `success`, `ghost`
- Sizes: `small`, `medium`, `large`
- Hover: Inverts to solid magenta bg
- 200ms transition

### CyberCard
- Dark surface with border
- Hover: Magenta border glow
- Clickable variant with cursor-pointer

### TerminalWindow
- Black terminal aesthetic
- Window chrome with colored dots
- Syntax highlighting via `type` prop

### AnswerOption
- Block-style buttons
- Hover: Invert to white bg
- Correct: Green border + glow
- Wrong: Red border + shake animation

### ProgressBar
- Segmented fill
- Magenta glow on filled segments

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

## Visual Effects

### Scanlines
CSS overlay with repeating gradient

### Vignette
Radial gradient darkening edges

### Glow Text
`text-shadow: 0 0 5px #FF00FF, 0 0 10px #FF00FF, 0 0 20px #9D00FF`

## File Locations

| File | Purpose |
|------|---------|
| `src/index.css` | Global styles, CSS variables, effects |
| `src/App.jsx` | View routing |
| `src/pages/Home.jsx` | Language/difficulty select |
| `src/pages/Quiz.jsx` | Quiz flow |
| `src/data/quizData.js` | All quiz content |
| `src/hooks/useProgress.js` | LocalStorage progress |
| `src/components/` | UI components |
