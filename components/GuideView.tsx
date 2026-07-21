
import React from 'react';
import { Search, Filter, Highlighter, BookOpen, AlertTriangle, HelpCircle, Volume2, Map, Brain, LayoutList } from 'lucide-react';
import { TabView } from '../types';

export const GuideView: React.FC<{ onNavigate?: (tab: TabView, anchor?: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden border-t-4 border-de-gold">
        
        {/* Header */}
        <div className="bg-gray-50 p-8 border-b border-gray-100">
          <h2 className="font-display text-4xl text-de-black mb-2">Benutzerhandbuch</h2>
          <p className="text-gray-500 text-lg font-serif italic">How to use Deutsch Meister without feeling overwhelmed</p>
        </div>

        <div className="p-8 space-y-12">

          <section className="rounded-xl border border-yellow-200 bg-yellow-50 p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-de-gold text-black p-2 rounded"><Map size={24} /></div>
              <h3 className="font-display text-2xl text-gray-800">Start with the Lernweg</h3>
            </div>
            <p className="leading-relaxed text-gray-700">If you are unsure what to study, open <strong>Lernweg</strong>. It takes you from zero knowledge to B1 through twelve missions. Check off small actions, follow the suggested next mission, and use its buttons to open the right dictionary, grammar or quiz page.</p>
            <button onClick={() => onNavigate?.('learning-path')} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-de-black px-4 py-2 text-sm font-bold text-de-gold hover:bg-de-red hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"><Map size={16} /> Open Zero to B1 Lernweg</button>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-de-red text-white p-2 rounded"><LayoutList size={24} /></div>
              <h3 className="font-display text-2xl text-gray-800">Grammatik: your reference page</h3>
            </div>
            <p className="leading-relaxed text-gray-700">Use <strong>Grammatik</strong> when a Lernweg mission introduces a rule or when you need to check a form. It covers the A1–B1 learning roadmap, cases, adjective endings, verbs, pronouns, sentence order, conjunctions, prepositions, word formation, and B1 structures.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">1 · Jump</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Use the topic buttons at the top instead of scrolling through everything.</p></div>
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">2 · Understand</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Read the short rule and example first. Open detailed cards only when needed.</p></div>
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">3 · Retrieve</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Close the rule, create your own example, and then check the table.</p></div>
            </div>
            <div className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm leading-relaxed text-blue-900"><strong>On a phone:</strong> wide grammar tables scroll horizontally. The expandable practical cards stay closed to keep the page breathable.</div>
            <button onClick={() => onNavigate?.('grammar')} className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-lg bg-de-black px-4 py-2 text-sm font-bold text-white hover:bg-de-red focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"><LayoutList size={16} /> Open Grammatik</button>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-violet-600 text-white p-2 rounded"><Brain size={24} /></div>
              <h3 className="font-display text-2xl text-gray-800">How to remember more</h3>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">Retrieve</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Close the page and recall the answer before checking it.</p></div>
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">Use</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Write or say a personal sentence with every new pattern.</p></div>
              <div className="rounded-lg border border-gray-200 p-4"><strong className="text-de-black">Repeat</strong><p className="mt-1 text-sm leading-relaxed text-gray-600">Review after 1, 3, 7, 14 and 30 days—not five times at once.</p></div>
            </div>
          </section>
          
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
