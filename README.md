<div align="center">

# 🇩🇪 Deutsch Meister

**Master the German Case System & Articles**

A comprehensive learning platform for German grammar, specializing in verbs, nouns, and the German case system (Dativ, Akkusativ, Genitiv).

[View Online](https://ai.studio/apps/drive/1Krf4WoJe39XR9v7VZ41kkQBpsMJq1DXe) • [Features](#features) • [Getting Started](#getting-started) • [Technologies](#technologies)

</div>

---

## Features

✨ **Interactive Learning Modules**
- 📚 **Wörterbuch (Dictionary)** - Browse and search comprehensive verb and noun database
- ❓ **Verb Quiz** - Master German verbs with multiple quiz modes (Classic, Wechselpräposition, Genitiv, Mix)
- 🎓 **Nomen Quiz** - Practice German article selection (Der, Die, Das)
- 📖 **Anleitung (Guide)** - Learn German grammar fundamentals

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
   
   Create a `.env.local` file in the root directory:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

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

---

## Contributing

Contributions are welcome! Feel free to:
- Report bugs and issues
- Suggest new features
- Improve the grammar database
- Submit pull requests

---

## License

This project is open source and available under the MIT License.

---

<div align="center">

Made with ❤️ for German learners worldwide

</div>
