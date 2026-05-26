# 🐍 Python Basics Quiz

An interactive, browser-based Python quiz for intermediate learners. No frameworks, no build tools — just vanilla HTML, CSS, and JavaScript.

![Python Quiz preview](https://img.shields.io/badge/Python-Intermediate-7c6af7?style=flat-square&logo=python&logoColor=white)
![HTML](https://img.shields.io/badge/HTML-5-e34c26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-3-264de4?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-f7df1e?style=flat-square&logo=javascript&logoColor=black)

---

## Features

- 8 questions covering variables, loops, functions, slices, and list comprehensions
- Syntax-highlighted code snippets for each question
- Instant feedback with correct/incorrect highlighting
- Explanation shown after each answer
- Score tracking and progress bar
- Final results screen with percentage
- Fully responsive — works on mobile and desktop
- Zero dependencies — no npm, no build step

---

## Project structure

```
python-quiz/
├── index.html          # Main entry point
├── css/
│   └── style.css       # All styles (dark theme, animations)
├── js/
│   ├── questions.js    # Quiz questions, options, answers, explanations
│   └── quiz.js         # Quiz state machine and rendering logic
└── README.md
```

---

## Getting started

### Option 1 — Open directly in your browser

Just double-click `index.html`. No server needed.

### Option 2 — Serve locally (recommended for development)

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then open [http://localhost:8000](http://localhost:8000).

### Option 3 — Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your quiz will be live at `https://<your-username>.github.io/<repo-name>`

---

## Adding or editing questions

Open `js/questions.js`. Each question follows this structure:

```js
{
  q: "What does this code print?",       // Question text
  code: `x = 1\nprint(x)`,              // Code snippet (use \n for line breaks, optional)
  opts: ["1", "0", "Error", "None"],     // Answer options (2–4)
  answer: 0,                             // Index of the correct option (0-based)
  explanation: "..."                     // Shown after answering (HTML allowed)
}
```

To remove a code snippet, simply omit the `code` key.

---

## Customisation

| What | Where |
|------|-------|
| Questions & answers | `js/questions.js` |
| Colours & fonts | CSS variables at the top of `css/style.css` |
| Quiz title / metadata | `<header>` in `index.html` |
| Layout & animations | `css/style.css` |

---

## Contributing

Pull requests welcome! Some ideas for contributions:

- Add more question categories (OOP, decorators, async/await)
- Add difficulty selection at the start
- Add a timer per question
- Add localStorage to persist high scores
- Add a share-results button

---

## License

MIT — free to use, modify, and distribute.
