import React, { useState } from 'react';
import { TabView } from './types';
import { DictionaryView } from './components/DictionaryView';
import { VerbQuiz } from './components/VerbQuiz';
import { NounQuiz } from './components/NounQuiz';
import { GuideView } from './components/GuideView';
import { BookOpen, HelpCircle, GraduationCap, Info } from 'lucide-react';

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

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<TabView>('dictionary');

  const NavButton: React.FC<{ tab: TabView, label: string, icon: React.ReactNode }> = ({ tab, label, icon }) => (
    <button
      onClick={() => setCurrentTab(tab)}
      className={`
        flex items-center gap-2 px-6 py-3 font-display uppercase tracking-wider text-lg rounded-sm transition-all
        ${currentTab === tab 
          ? 'bg-de-red text-white shadow-[0_4px_0_#FFCE00] -translate-y-0.5' 
          : 'bg-de-black text-de-gold hover:bg-gray-800 hover:-translate-y-0.5'
        }
      `}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-[#f4f4f4] pb-12">
      {/* Header */}
      <header className="bg-gradient-to-b from-black via-[#DD0000] via-33% to-[#FFCE00] to-66% pt-10 pb-6 px-4 text-center shadow-lg">
        <div className="inline-block bg-white/95 px-12 py-6 rounded shadow-2xl border-b-4 border-de-black transform rotate-1 hover:rotate-0 transition-transform duration-500 relative group cursor-default">
            <div className="flex flex-col items-center">
                <div className="mb-3 transform transition-transform group-hover:scale-110 duration-300">
                    <LogoShield className="h-16 w-16 drop-shadow-md" />
                </div>
                <h1 className="font-gothic text-5xl sm:text-6xl text-de-black m-0 leading-none">Deutsch Meister</h1>
                <p className="font-display text-de-red uppercase tracking-[0.2em] font-bold text-sm sm:text-base mt-2 border-t-2 border-de-gold pt-2 inline-block">
                    Verbs & Nouns Database
                </p>
            </div>
        </div>
      </header>

      <main className="container mx-auto">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 my-8 px-4">
          <NavButton tab="dictionary" label="Wörterbuch" icon={<BookOpen size={20} />} />
          <NavButton tab="verb-quiz" label="Verb Quiz" icon={<HelpCircle size={20} />} />
          <NavButton tab="noun-quiz" label="Nomen Quiz" icon={<GraduationCap size={20} />} />
          <NavButton tab="guide" label="Anleitung" icon={<Info size={20} />} />
        </div>

        {/* Content Area */}
        <div className="animate-in fade-in duration-500">
          {currentTab === 'dictionary' && <DictionaryView />}
          {currentTab === 'verb-quiz' && <VerbQuiz />}
          {currentTab === 'noun-quiz' && <NounQuiz />}
          {currentTab === 'guide' && <GuideView />}
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