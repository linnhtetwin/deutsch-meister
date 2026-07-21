
import React, { useState } from 'react';
import { TabView } from './types';
import { DictionaryView } from './components/DictionaryView';
import { VerbQuiz } from './components/VerbQuiz';
import { NounQuiz } from './components/NounQuiz';
import { GuideView } from './components/GuideView';
import { GrammarView } from './components/GrammarView';
import { LearningPathView } from './components/LearningPathView';
import { BookOpen, HelpCircle, GraduationCap, Info, LayoutList, Map } from 'lucide-react';

// Custom German Shield Logo Component
const LogoShield: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20 L5 70 C5 100 50 120 50 120 C50 120 95 100 95 70 L95 20 L50 0 L5 20 Z" fill="#000000" stroke="none"/>
    <path d="M5 45 L95 45 L95 70 C95 85 80 100 50 110 C20 100 5 85 5 70 L5 45 Z" fill="#DD0000"/>
    <path d="M5 80 L95 80 L95 70 C95 85 80 100 50 110 C20 100 5 85 5 80 Z" fill="#FFCE00"/>
    {/* Optional: Add a stylized letter or symbol inside */}
    <text x="50" y="75" textAnchor="middle" fill="white" className="font-gothic text-5xl select-none" style={{ textShadow: '2px 2px 0px #000' }}>D</text>
  </svg>
);

const NavButton: React.FC<{ tab: TabView, currentTab: TabView, setCurrentTab: (tab: TabView) => void, label: string, icon: React.ReactNode }> = ({ tab, currentTab, setCurrentTab, label, icon }) => (
  <button
    onClick={() => setCurrentTab(tab)}
    aria-current={currentTab === tab ? 'page' : undefined}
    className={`
      flex min-h-12 items-center justify-center gap-2 rounded-md px-4 py-3 font-display text-base uppercase tracking-wide transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/60 sm:px-5 lg:text-lg
      ${currentTab === tab 
        ? 'bg-de-red text-white shadow-[0_4px_0_#FFCE00]'
        : 'bg-white text-de-black ring-1 ring-gray-200 hover:bg-de-black hover:text-de-gold hover:ring-de-black'
      }
    `}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabView>('dictionary');

  const navigateTo = (tab: TabView, anchor?: string) => {
    setCurrentTab(tab);
    window.setTimeout(() => {
      if (anchor) document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] pb-12 text-de-black">
      {/* Header */}
      <header className="bg-[linear-gradient(180deg,#111_0_34%,#DD0000_34%_67%,#FFCE00_67%_100%)] px-4 pb-8 pt-8 text-center shadow-lg sm:pt-10">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/30 bg-white/95 px-5 py-5 shadow-2xl sm:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:text-left">
            <LogoShield className="h-16 w-16 shrink-0 drop-shadow-md sm:h-20 sm:w-20" />
            <div>
              <h1 className="m-0 font-gothic text-5xl leading-none text-de-black sm:text-6xl">Deutsch Meister</h1>
              <p className="mt-2 inline-block border-t-2 border-de-gold pt-2 font-display text-sm font-bold uppercase tracking-[0.18em] text-de-red sm:text-base">
                Verbs, Nouns & Grammar Practice
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto">
        {/* Navigation */}
        <nav className="sticky top-0 z-20 border-b border-gray-200 bg-[#f4f4f4]/95 px-4 py-4 backdrop-blur supports-[backdrop-filter]:bg-[#f4f4f4]/80" aria-label="Main sections">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center">
          <NavButton tab="learning-path" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Lernweg" icon={<Map size={20} />} />
          <NavButton tab="dictionary" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Wörterbuch" icon={<BookOpen size={20} />} />
          <NavButton tab="grammar" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Grammatik" icon={<LayoutList size={20} />} />
          <NavButton tab="verb-quiz" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Verb Quiz" icon={<HelpCircle size={20} />} />
          <NavButton tab="noun-quiz" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Nomen Quiz" icon={<GraduationCap size={20} />} />
          <NavButton tab="guide" currentTab={currentTab} setCurrentTab={setCurrentTab} label="Anleitung" icon={<Info size={20} />} />
          </div>
        </nav>

        {/* Content Area */}
        <div className="animate-in fade-in duration-500 pt-8">
          {currentTab === 'learning-path' && <LearningPathView onNavigate={navigateTo} />}
          {currentTab === 'dictionary' && <DictionaryView />}
          {currentTab === 'grammar' && <GrammarView />}
          {currentTab === 'verb-quiz' && <VerbQuiz />}
          {currentTab === 'noun-quiz' && <NounQuiz />}
          {currentTab === 'guide' && <GuideView onNavigate={navigateTo} />}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-400 text-sm mt-12 pb-8">
        <p>Master the German Case System & Articles</p>
      </footer>
    </div>
  );
};

export default App;
