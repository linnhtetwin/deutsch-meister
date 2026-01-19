
import React from 'react';
import { Search, Filter, Highlighter, BookOpen, AlertTriangle, HelpCircle, Volume2 } from 'lucide-react';

export const GuideView: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-de-gold">
        
        {/* Header */}
        <div className="bg-gray-50 p-8 border-b border-gray-100">
          <h2 className="font-display text-4xl text-de-black mb-2">Benutzerhandbuch</h2>
          <p className="text-gray-500 text-lg font-serif italic">How to master Deutsch Meister</p>
        </div>

        <div className="p-8 space-y-12">
          
          {/* Section 1: Search */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-de-black text-white p-2 rounded">
                <Search size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Intelligent Search</h3>
            </div>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                The dictionary search is designed to be flexible. You don't need to know the exact infinitive form of a verb.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>German & English:</strong> Search for "laufen" or "run".</li>
                <li><strong>Conjugations:</strong> Search for specific forms like "lief" (past), "gelaufen" (perfekt), or "nimmst" (du form of nehmen). The app knows the grammar!</li>
                <li><strong>Context:</strong> Search for parts of example sentences.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Audio */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-de-red text-white p-2 rounded">
                <Volume2 size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Audio & Pronunciation</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-gray-700 mb-2">
                Click the <span className="inline-block bg-white p-1 rounded-full shadow-sm border"><Volume2 size={14} className="inline text-gray-400" /></span> icon next to any German word or example sentence.
              </p>
              <p className="text-sm text-gray-500">
                The app uses your device's built-in text-to-speech engine to read the text aloud in German, helping you perfect your pronunciation alongside your grammar.
              </p>
            </div>
          </section>

          {/* Section 3: Highlights */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-de-gold text-black p-2 rounded">
                <Highlighter size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Yellow Highlights</h3>
            </div>
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
              <p className="text-gray-700 mb-2">When you search, matches are <span className="bg-yellow-200 ring-2 ring-yellow-400 font-bold px-1 rounded">highlighted</span> in yellow.</p>
              <p className="text-sm text-gray-500">
                This helps you understand <em>why</em> a result appeared. If you search for "ging", the verb "gehen" will appear, and the word "ging" inside the conjugation table will be highlighted.
              </p>
            </div>
          </section>

          {/* Section 4: Filters */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-dativ text-white p-2 rounded">
                <Filter size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Filters & Categories</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 p-4 rounded hover:shadow-sm transition-shadow">
                <span className="font-bold text-de-black block mb-1">Alle</span>
                <span className="text-sm text-gray-500">Shows the complete database.</span>
              </div>
              <div className="border border-gray-200 p-4 rounded hover:shadow-sm transition-shadow">
                <span className="font-bold text-gray-800 block mb-1">Nomen</span>
                <span className="text-sm text-gray-500">Displays only Nouns with their Article (Der/Die/Das) and Plural forms.</span>
              </div>
              <div className="border border-l-4 border-dativ p-4 rounded bg-gray-50">
                <span className="font-bold text-dativ block mb-1">Dativ</span>
                <span className="text-sm text-gray-600">Verbs that strictly require the Dativ case (e.g., "helfen", "danken").</span>
              </div>
              <div className="border border-l-4 border-akk p-4 rounded bg-gray-50">
                <span className="font-bold text-akk block mb-1">Akkusativ</span>
                <span className="text-sm text-gray-600">Verbs that strictly require the Akkusativ case (e.g., "sehen", "essen").</span>
              </div>
              <div className="border border-l-4 border-wechsel p-4 rounded bg-gray-50">
                <span className="font-bold text-wechsel block mb-1">Wechsel / Präp</span>
                <span className="text-sm text-gray-600">Two-way prepositions (Legen vs Liegen) and verbs with fixed prepositions (Warten auf).</span>
              </div>
            </div>
          </section>

          {/* Section 5: Card Details */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-blue-600 text-white p-2 rounded">
                <BookOpen size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Card Details</h3>
            </div>
            <div className="prose text-gray-600 max-w-none">
              <p>
                <strong>Verb Cards:</strong> Features a clear 3-column table separating <strong>Präsens</strong> (Present) and <strong>Präteritum</strong> (Simple Past) tenses for easy reading. The <strong>Perfekt</strong> form is displayed at the bottom.
              </p>
              <p>
                <strong>Noun Cards:</strong> Clearly display the Article color-coded (Der=Blue, Die=Red, Das=Green) and the Plural form.
              </p>
              <div className="mt-4 flex items-start gap-2 bg-yellow-50 p-3 rounded text-sm text-yellow-800">
                <AlertTriangle size={16} className="mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Traps (False Friends):</strong> Some verbs look like they should be Dativ but are Akkusativ (e.g., "fragen", "anrufen"). These are marked with a <span className="font-bold">⚠️ Trap</span> badge.
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Quizzes */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 text-white p-2 rounded">
                <HelpCircle size={24} />
              </div>
              <h3 className="font-display text-2xl text-gray-800">Quizzes</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex gap-2">
                <span className="font-bold text-de-black min-w-[100px]">Verb Quiz:</span>
                <span>Select from 4 modes (Classic, Wechsel, Genitiv, Chaos) to test your case knowledge.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-de-black min-w-[100px]">Nomen Quiz:</span>
                <span>Simple but effective drill for Der, Die, Das.</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold text-de-black min-w-[100px]">Streak:</span>
                <span>Try to get the highest streak! The counter resets to 0 if you make a mistake.</span>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};
