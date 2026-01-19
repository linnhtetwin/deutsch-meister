import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { database } from '../data';
import { NounItem } from '../types';
import { ArrowRight, CheckCircle, XCircle, Info } from 'lucide-react';

export const NounQuiz: React.FC = () => {
  const [currentNoun, setCurrentNoun] = useState<NounItem | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);

  const nouns = useMemo(() => database.filter((item): item is NounItem => item.type === 'noun'), []);

  const pickRandomNoun = useCallback(() => {
    const random = nouns[Math.floor(Math.random() * nouns.length)];
    setCurrentNoun(random);
    setFeedback(null);
  }, [nouns]);

  useEffect(() => {
    pickRandomNoun();
  }, [pickRandomNoun]);

  const handleAnswer = (choice: 'Der' | 'Die' | 'Das') => {
    if (feedback !== null || !currentNoun) return;

    if (currentNoun.art === choice) {
      setFeedback('correct');
      setStreak(s => s + 1);
    } else {
      setFeedback('incorrect');
      setStreak(0);
    }
  };

  if (!currentNoun) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 mt-8 pb-12">
      <div className="bg-white rounded-lg shadow-xl border-b-8 border-de-gold overflow-hidden mb-8">
        <div className="p-8 md:p-12 text-center">
            <div className="flex justify-between items-center mb-6">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Nomen Quiz</span>
                 <span className="text-xs font-bold text-de-red uppercase tracking-widest">Streak: {streak}</span>
            </div>

          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Der, Die oder Das?
          </p>
          
          <h2 className="font-display text-5xl md:text-6xl text-de-black mb-4 transition-all">
            {currentNoun.de}
          </h2>
          
          <p className="text-xl text-gray-400 italic mb-10 font-serif">
            {currentNoun.en}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleAnswer('Der')}
              disabled={feedback !== null}
              className={`min-w-[100px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                ${feedback === null ? 'bg-art-der text-white' : 'bg-gray-200 text-gray-400'}
              `}
            >
              Der
            </button>
            <button
              onClick={() => handleAnswer('Die')}
              disabled={feedback !== null}
              className={`min-w-[100px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                ${feedback === null ? 'bg-art-die text-white' : 'bg-gray-200 text-gray-400'}
              `}
            >
              Die
            </button>
             <button
              onClick={() => handleAnswer('Das')}
              disabled={feedback !== null}
              className={`min-w-[100px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                ${feedback === null ? 'bg-art-das text-white' : 'bg-gray-200 text-gray-400'}
              `}
            >
              Das
            </button>
          </div>

          <div className="min-h-[100px] flex flex-col items-center justify-center">
            {feedback === 'correct' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-center text-art-das text-2xl font-bold mb-2">
                  <CheckCircle className="w-8 h-8 mr-2" />
                  Richtig!
                </div>
                 <div className="text-gray-600 bg-green-50 px-4 py-2 rounded">
                    <p>Plural: <strong>{currentNoun.pl}</strong></p>
                </div>
              </div>
            )}

            {feedback === 'incorrect' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-center text-art-die text-2xl font-bold mb-2">
                  <XCircle className="w-8 h-8 mr-2" />
                  Falsch!
                </div>
                <div className="text-gray-600 bg-red-50 px-4 py-2 rounded">
                    <p>Es ist <strong className="text-art-die">{currentNoun.art}</strong>.</p>
                     <p>Plural: <strong>{currentNoun.pl}</strong></p>
                </div>
              </div>
            )}
          </div>

          {feedback !== null && (
            <button
              onClick={pickRandomNoun}
              className="mt-6 inline-flex items-center px-6 py-2 border-2 border-de-black text-de-black font-bold uppercase tracking-wider hover:bg-de-black hover:text-de-gold transition-colors"
            >
              Nächstes Wort <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Educational Section */}
      <div className="bg-white rounded-lg shadow p-6 border-l-4 border-art-der">
        <h3 className="font-display text-2xl text-de-black mb-4 flex items-center">
            <Info className="mr-2 text-art-der" />
            Warum ist das Genus wichtig?
        </h3>
        <div className="text-gray-600">
            <p className="mb-4 text-sm leading-relaxed">
                In German, every noun has a grammatical gender: <strong className="text-art-der">Masculine (Der)</strong>, <strong className="text-art-die">Feminine (Die)</strong>, or <strong className="text-art-das">Neuter (Das)</strong>.
                Unlike English, the article changes based on the <strong>Grammatical Case</strong> (Nominativ, Akkusativ, Dativ, Genitiv).
            </p>
            <p className="mb-6 text-sm leading-relaxed">
                If you don't memorize the gender (Der/Die/Das), you cannot correctly form sentences. For example, "Der Mann" becomes "De<strong>m</strong> Mann" in Dativ, but "Die Frau" becomes "De<strong>r</strong> Frau".
            </p>
            
            <h4 className="font-bold text-de-black uppercase tracking-wider text-xs mb-3">Common Endings (Heuristics)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-100 shadow-sm">
                    <span className="font-bold text-art-der block mb-2 text-lg">Der <span className="text-xs font-normal text-gray-500">(Masculine)</span></span>
                    <ul className="list-disc list-inside text-xs space-y-1.5 text-gray-700">
                        <li>Male persons</li>
                        <li>Days, Months, Seasons</li>
                        <li>Ends in <strong>-er, -ling, -ismus</strong></li>
                        <li>Most cars & trains</li>
                    </ul>
                </div>
                <div className="bg-red-50 p-4 rounded border border-red-100 shadow-sm">
                    <span className="font-bold text-art-die block mb-2 text-lg">Die <span className="text-xs font-normal text-gray-500">(Feminine)</span></span>
                    <ul className="list-disc list-inside text-xs space-y-1.5 text-gray-700">
                        <li>Female persons</li>
                        <li>Ends in <strong>-ung, -heit, -keit</strong></li>
                        <li>Ends in <strong>-schaft, -ion, -tät</strong></li>
                        <li>Most ending in <strong>-e</strong></li>
                    </ul>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-100 shadow-sm">
                    <span className="font-bold text-art-das block mb-2 text-lg">Das <span className="text-xs font-normal text-gray-500">(Neuter)</span></span>
                    <ul className="list-disc list-inside text-xs space-y-1.5 text-gray-700">
                        <li>Diminutives (<strong>-chen, -lein</strong>)</li>
                        <li>Metals, Colors</li>
                        <li>Nouns from Verbs (Das Essen)</li>
                        <li>Ends in <strong>-ment, -um</strong></li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};