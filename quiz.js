// quiz.js — quiz state, rendering, and interaction logic

(function () {
  'use strict';

  // ── State ─────────────────────────────────────────────────────────────────
  let current = 0;
  let score = 0;
  let answered = false;
  const total = QUESTIONS.length;

  // ── DOM refs ───────────────────────────────────────────────────────────────
  const questionPanel = document.getElementById('question-panel');
  const resultPanel   = document.getElementById('result-panel');
  const progressFill  = document.getElementById('progress-fill');
  const scoreDisplay  = document.getElementById('score-display');

  // ── Helpers ────────────────────────────────────────────────────────────────
  function updateProgress() {
    const pct = (current / total) * 100;
    progressFill.style.width = pct + '%';
    scoreDisplay.textContent = score + ' / ' + current;
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function formatCode(raw) {
    return raw
      .split('\\n')
      .map(line => escapeHtml(line))
      .join('\n');
  }

  // ── Render question ────────────────────────────────────────────────────────
  function renderQuestion() {
    answered = false;
    const q = QUESTIONS[current];

    const codeBlock = q.code
      ? `<pre class="code-block"><code>${formatCode(q.code)}</code></pre>`
      : '';

    const options = q.opts
      .map((opt, i) => `
        <button
          class="opt-btn"
          id="opt-${i}"
          data-index="${i}"
          aria-label="Option ${i + 1}: ${opt}"
        >${escapeHtml(opt)}</button>
      `)
      .join('');

    questionPanel.innerHTML = `
      <div class="q-meta">Question <span class="q-num">${current + 1}</span> of <span>${total}</span></div>
      <p class="q-text">${q.q}</p>
      ${codeBlock}
      <div class="options" role="group" aria-label="Answer options">
        ${options}
      </div>
      <div class="explanation-box" id="explanation-box" style="display:none;"></div>
      <div class="nav-row" id="nav-row" style="display:none;">
        <button class="next-btn" id="next-btn"></button>
      </div>
    `;

    questionPanel.querySelectorAll('.opt-btn').forEach(btn => {
      btn.addEventListener('click', () => choose(parseInt(btn.dataset.index)));
    });

    // Animate in
    requestAnimationFrame(() => questionPanel.classList.add('visible'));
  }

  // ── Handle choice ──────────────────────────────────────────────────────────
  function choose(idx) {
    if (answered) return;
    answered = true;

    const q = QUESTIONS[current];
    const isCorrect = idx === q.answer;
    if (isCorrect) score++;

    // Highlight options
    for (let i = 0; i < q.opts.length; i++) {
      const btn = document.getElementById('opt-' + i);
      btn.disabled = true;
      if (i === q.answer) btn.classList.add('correct');
      else if (i === idx)  btn.classList.add('wrong');
      else                  btn.classList.add('dim');
    }

    // Show explanation
    const expBox = document.getElementById('explanation-box');
    expBox.innerHTML = `
      <span class="exp-label ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
        ${isCorrect ? '✓ Correct' : '✗ Incorrect'}
      </span>
      <span class="exp-text">${q.explanation}</span>
    `;
    expBox.style.display = 'flex';

    // Show nav
    const navRow = document.getElementById('nav-row');
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = current + 1 < total ? 'Next question →' : 'See results →';
    nextBtn.addEventListener('click', advance);
    navRow.style.display = 'block';
  }

  // ── Advance ────────────────────────────────────────────────────────────────
  function advance() {
    current++;
    updateProgress();
    questionPanel.classList.remove('visible');

    setTimeout(() => {
      if (current < total) {
        renderQuestion();
      } else {
        showResults();
      }
    }, 220);
  }

  // ── Results ────────────────────────────────────────────────────────────────
  function showResults() {
    questionPanel.style.display = 'none';
    resultPanel.style.display   = 'block';

    const pct = Math.round((score / total) * 100);
    let verdict, verdictClass;
    if (pct >= 80)      { verdict = 'Excellent work! Your Python fundamentals are solid.'; verdictClass = 'v-great'; }
    else if (pct >= 50) { verdict = 'Good effort — a few areas worth reviewing.';          verdictClass = 'v-ok';    }
    else                { verdict = 'Keep practising — you\'ll get there!';                 verdictClass = 'v-low';   }

    resultPanel.innerHTML = `
      <div class="result-inner">
        <div class="result-score ${verdictClass}">${score}<span class="result-denom">/ ${total}</span></div>
        <p class="result-pct">${pct}%</p>
        <p class="result-verdict">${verdict}</p>
        <div class="result-actions">
          <button class="next-btn" onclick="restartQuiz()">↺ Restart quiz</button>
        </div>
      </div>
    `;

    requestAnimationFrame(() => resultPanel.classList.add('visible'));
  }

  // ── Restart (exposed globally for inline onclick) ──────────────────────────
  window.restartQuiz = function () {
    current  = 0;
    score    = 0;
    answered = false;

    resultPanel.classList.remove('visible');
    resultPanel.style.display = 'none';

    questionPanel.style.display = 'block';
    questionPanel.classList.remove('visible');

    updateProgress();
    setTimeout(renderQuestion, 50);
  };

  // ── Init ───────────────────────────────────────────────────────────────────
  updateProgress();
  renderQuestion();
})();
