<div align="center">

# 🇩🇪 Deutsch Meister

**Master the German Case System & Articles**

A comprehensive learning platform for German grammar, specializing in verbs, nouns, and the German case system (Dativ, Akkusativ, Genitiv).

[View Online](https://deutsch-meister.pages.dev/) • [Features](#features) • [Getting Started](#getting-started) • [Technologies](#technologies) • [License](#license)

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

</div>

---

## Features

✨ **Interactive Learning Modules**
- 📚 **Wörterbuch (Dictionary)** – Browse and search the growing verb/noun database with lazy‑loading infinite scroll, relevance‑aware sorting and advanced filters (Dativ, Akkusativ, Genitiv, Wechselpräposition → Akk/Dativ, Präpositionalverb → Akk/Dativ, Intransitiv, Modalverb, plus nouns/adjectives/adverbs). Search looks through example sentences and full verb conjugations for smarter results.
- ❓ **Verb Quiz** – Master German verbs with multiple quiz modes: Classic, Wechselpräpositionen, Genitiv‑Meister (rare Genitiv verbs), and Chaos Mix. Real‑time feedback plus a **streak counter** keeps you motivated.
- 🎓 **Nomen Quiz** – Practice German article selection (Der, Die, Das) with instant feedback, streak tracking and a built‑in educational section full of gender heuristics and tips.
- 📖 **Anleitung (Guide)** – Comprehensive grammar reference featuring declension tables, sentence‑structure rules (V2, TeKaMoLo, subclauses), adverb explanations and handy gender‑ending cheat sheets.

🎨 **User Experience**
- Clean, intuitive interface with German cultural styling
- Real-time feedback on quiz answers
- Streak counter to track your progress
- Responsive design for mobile and desktop

⚙️ **Built with Modern Tech**
- React 19 + TypeScript
- Vite for blazing-fast development
- Tailwind CSS for styling
- Lucide React icons
- Google Gemini API integration

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

3. **Configure environment variables**
   
   Create a `.env.local` file in the root directory (these files are ignored by Git for security):
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   You can also use other `.env` variants like `.env.development.local` or `.env.production.local` – the gitignore prevents them from being accidentally committed.

> ⚠️ **Security tip:** never commit API keys or other secrets. The app reads from `import.meta.env` at build time, so local files or environment variables on the hosting platform are sufficient.

4. **Start development server**
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
│   ├── GuideView.tsx        # Grammar guide
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
- **Build Tool**: [Vite 6](https://vitejs.dev)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **AI**: [Google Gemini API](https://ai.google.dev)
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

This project is licensed under the GNU Affero General Public License v3.0 (AGPL-3.0). See the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ for German learners worldwide

</div>
