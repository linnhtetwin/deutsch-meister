<div align="center">

# 🇩🇪 Deutsch Meister

**Master the German Case System & Articles**

A guided German learning platform that combines a zero-to-B1 roadmap, searchable vocabulary, grammar references, and focused quizzes.

[View Online](https://deutsch-meister.pages.dev/) • [Features](#features) • [Getting Started](#getting-started) • [Technologies](#technologies) • [License](#license)

[![License: Apache v2](https://img.shields.io/badge/License-apache%20v2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

</div>

---

## Features

✨ **Interactive Learning Modules**
- 🗺️ **Lernweg (Zero to B1)** – A complete learning path for absolute beginners through independent B1 learners. Twelve expandable missions provide clear outcomes, small checklists, recommended practice links, an automatic “next mission,” and progress saved locally in the browser.
- 📚 **Wörterbuch (Dictionary)** – Browse and search the growing verb/noun database with lazy‑loading infinite scroll, relevance‑aware sorting and advanced filters (Dativ, Akkusativ, Genitiv, Wechselpräposition → Akk/Dativ, Präpositionalverb → Akk/Dativ, Intransitiv, Modalverb, plus nouns/adjectives/adverbs). Search looks through example sentences and full verb conjugations for smarter results.
- 📋 **Grammatik (Grammar)** – A1–B1 grammar roadmap with learner-friendly examples, case and declension tables, expandable practical patterns, sentence order, conjunctions, prepositions, verb forms, pronouns, word building, and B1 structures.
- ❓ **Verb Quiz** – Master German verbs with multiple quiz modes: Classic, Wechselpräpositionen, Genitiv‑Meister (rare Genitiv verbs), and Chaos Mix. Real‑time feedback plus a **streak counter** keeps you motivated.
- 🎓 **Nomen Quiz** – Practice German article selection (Der, Die, Das) with instant feedback, streak tracking and a built‑in educational section full of gender heuristics and tips.
- 📖 **Anleitung (App Guide)** – Explains search, audio, filters, cards, quizzes, the Lernweg workflow, and a simple retrieve–use–repeat memory method.

🎨 **User Experience**
- Clean, intuitive interface with German cultural styling
- Real-time feedback on quiz answers
- Streak counter to track your progress
- Persistent learning-path checklists stored on the learner's device
- Direct links from roadmap missions to the relevant learning and practice pages
- Responsive design for mobile and desktop

⚙️ **Built with Modern Tech**
- React 19 + TypeScript
- Vite for blazing-fast development
- Tailwind CSS for styling
- Lucide React icons

---

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/deutsch-meister.git
   cd deutsch-meister
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Deploy to Cloudflare Pages

```bash
npm run deploy
```

---

## Project Structure

```
deutsch-meister/
├── components/              # React components
│   ├── DictionaryView.tsx   # Dictionary/search interface
│   ├── VerbQuiz.tsx         # Verb quiz with multiple modes
│   ├── NounQuiz.tsx         # Noun/article quiz
│   ├── GrammarView.tsx      # A1–B1 grammar reference
│   ├── LearningPathView.tsx # Interactive zero-to-B1 roadmap
│   ├── GuideView.tsx        # App usage and study guide
│   └── WordCard.tsx         # Reusable word card component
├── App.tsx                  # Main app component
├── data.ts                  # Verb and noun database
├── types.ts                 # TypeScript type definitions
├── index.tsx                # React entry point
├── vite.config.ts           # Vite configuration
└── public/                  # Static assets
```

---

## Technologies

- **Frontend Framework**: [React 19](https://react.dev)
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Build Tool**: [Vite 8](https://vite.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Build and deploy to Cloudflare Pages |

---

## Learning Resources

### Recommended workflow

1. Open **Lernweg** and continue the first unfinished mission.
2. Learn only five new words and one small grammar pattern at a time.
3. Use the mission buttons to open the relevant dictionary or grammar section.
4. Say or write personal examples, then test yourself with a quiz.
5. Review from memory after 1, 3, 7, 14, and 30 days.

The roadmap is intentionally flexible: its week ranges are guidance, not deadlines. Completion checkboxes are stored in browser `localStorage` and can be reset from the Lernweg page.

### Covered topics

This app focuses on mastering:

- **German Cases** (Fälle):
  - Nominativ (Nominative)
  - Dativ (Dative)
  - Akkusativ (Accusative)
  - Genitiv (Genitive)

- **German Articles**:
  - Definite articles: Der, Die, Das
  - Case agreement and article changes

- **Verb Categories**:
  - Standard dative/accusative verbs
  - Wechselpräposition verbs (two-way prepositions)
  - Genitive verbs
  - Prepositional verbs
  - Intransitive verbs

- **Additional Grammar Topics**:
  - Declension tables for adjectives, pronouns and articles
  - Sentence structure rules (V2, TeKaMoLo, subclauses)
  - Adverbs and their order
  - Gender-ending heuristics and cheat‑sheets

---

## Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features (e.g. more case filters, verb/noun entries, etc.)
- Improve the grammar database
- Submit pull requests

> 🔐 **Security:** please avoid adding any private credentials or keys to commits. Use environment variables or secure storage when testing APIs.

---

## License

This project is licensed under the Apache License v2.0 (Apache-2.0). See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for German learners worldwide

</div>
