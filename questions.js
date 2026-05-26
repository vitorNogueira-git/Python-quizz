// questions.js — all quiz questions, options, answers, and explanations

const QUESTIONS = [
  {
    q: "What does this code print?",
    code: `x = [1, 2, 3]\nx = x + [4]\nprint(len(x))`,
    opts: ["3", "4", "Error", "[1,2,3,4]"],
    answer: 1,
    explanation: "<code>x + [4]</code> creates a new list <code>[1,2,3,4]</code> and reassigns <code>x</code> to it. <code>len()</code> then returns <code>4</code>."
  },
  {
    q: "What is the output of this snippet?",
    code: `def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))`,
    opts: ["Hello, Alice!", "greet, Alice!", "Error: missing argument", "None"],
    answer: 0,
    explanation: "<code>greeting</code> has a default value of <code>'Hello'</code>, so calling <code>greet('Alice')</code> uses that default and returns <code>'Hello, Alice!'</code>."
  },
  {
    q: "What value does result hold after this runs?",
    code: `result = 0\nfor i in range(1, 5):\n    if i % 2 == 0:\n        result += i\nprint(result)`,
    opts: ["6", "10", "4", "0"],
    answer: 0,
    explanation: "<code>range(1,5)</code> gives <code>[1,2,3,4]</code>. Even numbers are <code>2</code> and <code>4</code>. Their sum is <code>6</code>."
  },
  {
    q: "Which of the following correctly unpacks a tuple?",
    code: `coords = (10, 20, 30)`,
    opts: [
      "x, y, z = coords",
      "x = y = z = coords",
      "[x, y, z] = coords",
      "Both A and C"
    ],
    answer: 3,
    explanation: "Python supports tuple unpacking with both <code>x, y, z = coords</code> and <code>[x, y, z] = coords</code> — both work identically."
  },
  {
    q: "What does this function return when called as shown?",
    code: `def mystery(lst):\n    return [x**2 for x in lst if x > 0]\n\nprint(mystery([-2, -1, 0, 3, 4]))`,
    opts: ["[4, 1, 0, 9, 16]", "[9, 16]", "[0, 9, 16]", "[4, 1, 9, 16]"],
    answer: 1,
    explanation: "The list comprehension filters to only items where <code>x > 0</code> (which are <code>3</code> and <code>4</code>), then squares them: <code>[9, 16]</code>."
  },
  {
    q: "What is printed by this code?",
    code: `def counter(start=0):\n    start += 1\n    return start\n\nprint(counter())\nprint(counter())`,
    opts: ["1 then 2", "1 then 1", "0 then 1", "Error"],
    answer: 1,
    explanation: "Default argument values don't persist between calls — <code>start</code> is a local variable. Each call to <code>counter()</code> starts fresh from <code>0</code>, adds <code>1</code>, and returns <code>1</code>."
  },
  {
    q: "What does this slice return?",
    code: `s = 'abcdefgh'\nprint(s[1:7:2])`,
    opts: ["'bdf'", "'ace'", "'bdfh'", "'aceg'"],
    answer: 0,
    explanation: "<code>s[1:7:2]</code> starts at index <code>1</code> (<code>'b'</code>), goes to index <code>7</code> (exclusive), stepping by <code>2</code>. Indices 1, 3, 5 → characters <code>b</code>, <code>d</code>, <code>f</code> → <code>'bdf'</code>."
  },
  {
    q: "What will this code output?",
    code: `def add(a, b):\n    return a + b\n\nresult = add(b=3, a=5)\nprint(result)`,
    opts: ["8", "53", "Error: wrong order", "35"],
    answer: 0,
    explanation: "Python allows keyword arguments in any order. <code>a=5</code>, <code>b=3</code> → <code>5+3 = 8</code>."
  }
];
