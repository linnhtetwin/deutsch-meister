import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { database } from '../data';
import { VerbItem } from '../types';
import { ArrowRight, CheckCircle, XCircle, Settings, Play, Shuffle, Anchor, Crown } from 'lucide-react';

type QuizMode = 'classic' | 'wechsel' | 'genitiv' | 'mix';

export const VerbQuiz: React.FC = () => {
  const [mode, setMode] = useState<QuizMode | null>(null);
  const [currentVerb, setCurrentVerb] = useState<VerbItem | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [streak, setStreak] = useState(0);

  // Filter verbs based on active mode
  const quizPool = useMemo(() => {
    if (!mode) return [];
    
    const allVerbs = database.filter((item): item is VerbItem => item.type === 'verb');

    switch (mode) {
      case 'classic':
        return allVerbs.filter(v => v.case === 'Dativ' || v.case === 'Akkusativ');
      case 'wechsel':
        return allVerbs.filter(v => v.case.startsWith('Wechsel'));
      case 'genitiv':
         // Return Genitiv verbs + a mix of others for distractors.
         // We filter the whole pool here, logic in pickRandomVerb ensures balance.
         return allVerbs.filter(v => v.case === 'Genitiv' || v.case === 'Dativ' || v.case === 'Akkusativ');
      case 'mix':
        // Exclude Intransitiv from quiz as we don't have a button for it in the UI
        return allVerbs.filter(v => v.case !== 'Intransitiv'); 
      default:
        return [];
    }
  }, [mode]);

  const pickRandomVerb = useCallback(() => {
    if (quizPool.length === 0) return;
    
    let nextVerb: VerbItem;
    
    if (mode === 'genitiv') {
        // Boost probability of Genitiv verbs in this mode to 40%
        const genitivVerbs = quizPool.filter(v => v.case === 'Genitiv');
        const otherVerbs = quizPool.filter(v => v.case !== 'Genitiv');
        
        if (Math.random() < 0.4 && genitivVerbs.length > 0) {
             nextVerb = genitivVerbs[Math.floor(Math.random() * genitivVerbs.length)];
        } else {
             nextVerb = otherVerbs[Math.floor(Math.random() * otherVerbs.length)];
        }
    } else {
        nextVerb = quizPool[Math.floor(Math.random() * quizPool.length)];
    }

    setCurrentVerb(nextVerb);
    setFeedback(null);
  }, [quizPool, mode]);

  // Initial load when mode changes
  useEffect(() => {
    if (mode) {
        pickRandomVerb();
        setStreak(0);
    }
  }, [mode, pickRandomVerb]);

  const getBaseCase = (c: string): string => {
    if (c.includes('Genitiv')) return 'Genitiv';
    if (c.includes('Dativ')) return 'Dativ';
    if (c.includes('Akk') || c.includes('Akkusativ')) return 'Akkusativ';
    return 'Unknown';
  };

  const handleAnswer = (choice: string) => {
    if (feedback !== null || !currentVerb) return;

    const correctCase = getBaseCase(currentVerb.case);

    if (correctCase === choice) {
      setFeedback('correct');
      setStreak(s => s + 1);
    } else {
      setFeedback('incorrect');
      setStreak(0);
    }
  };

  // --- RENDER: MODE SELECTION ---
  if (!mode) {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-8 pb-12">
            <h2 className="text-3xl font-display text-center text-de-black mb-8 uppercase tracking-wide">Wähle deinen Modus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Classic Mode */}
                <button onClick={() => setMode('classic')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-8 border-dativ text-left group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-dativ/10 p-3 rounded-full group-hover:bg-dativ/20 transition-colors">
                            <Play className="w-8 h-8 text-dativ" />
                        </div>
                        <span className="text-xs font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase">Empfohlen</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">Klassisch</h3>
                    <p className="text-gray-500">Dativ vs. Akkusativ. The essential German struggle.</p>
                </button>

                {/* Wechsel Mode */}
                <button onClick={() => setMode('wechsel')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-8 border-wechsel text-left group">
                    <div className="flex items-center justify-between mb-4">
                         <div className="bg-wechsel/10 p-3 rounded-full group-hover:bg-wechsel/20 transition-colors">
                            <Anchor className="w-8 h-8 text-wechsel" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">Wechselpräpositionen</h3>
                    <p className="text-gray-500">Wo (Dativ) oder Wohin (Akkusativ)? Legen vs Liegen.</p>
                </button>

                {/* Genitiv Mode */}
                <button onClick={() => setMode('genitiv')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-8 border-genitiv text-left group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-genitiv/10 p-3 rounded-full group-hover:bg-genitiv/20 transition-colors">
                            <Crown className="w-8 h-8 text-genitiv" />
                        </div>
                        <span className="text-xs font-bold bg-de-gold text-de-black px-2 py-1 rounded uppercase">Profis</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">Genitiv Meister</h3>
                    <p className="text-gray-500">Identify the rare Genitiv verbs mixed with others.</p>
                </button>

                {/* Mix Mode */}
                <button onClick={() => setMode('mix')} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-l-8 border-de-black text-left group">
                    <div className="flex items-center justify-between mb-4">
                        <div className="bg-black/5 p-3 rounded-full group-hover:bg-black/10 transition-colors">
                            <Shuffle className="w-8 h-8 text-de-black" />
                        </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 font-display">Chaos Modus</h3>
                    <p className="text-gray-500">Everything at once. Dativ, Akkusativ, Genitiv, Prepositions.</p>
                </button>
            </div>
        </div>
    )
  }

  // --- RENDER: QUIZ ---
  if (!currentVerb) return <div className="text-center mt-12">Loading Quiz...</div>;

  return (
    <div className="max-w-2xl mx-auto px-4 mt-8">
      <div className="bg-white rounded-lg shadow-xl border-b-8 border-de-gold overflow-hidden relative">
        
        {/* Header with Exit Button */}
        <div className="absolute top-4 left-4">
            <button onClick={() => setMode(null)} className="text-gray-400 hover:text-de-black flex items-center gap-1 text-sm font-bold uppercase tracking-wider transition-colors">
                <Settings className="w-4 h-4" /> Modus
            </button>
        </div>

        <div className="p-8 md:p-12 text-center">
            <div className="flex justify-end items-center mb-6">
                 <span className="text-xs font-bold text-de-red uppercase tracking-widest">Streak: {streak}</span>
            </div>
         
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
            Welcher Kasus?
          </p>
          
          <h2 className="font-display text-5xl md:text-6xl text-de-black mb-4 transition-all">
            {currentVerb.de}
          </h2>
          
          <p className="text-xl text-gray-400 italic mb-10 font-serif">
            {currentVerb.en}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => handleAnswer('Dativ')}
              disabled={feedback !== null}
              className={`min-w-[120px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                ${feedback === null ? 'bg-dativ text-white' : 'bg-gray-200 text-gray-400'}
              `}
            >
              {mode === 'wechsel' ? 'Dativ (Wo?)' : 'Dativ'}
            </button>
            <button
              onClick={() => handleAnswer('Akkusativ')}
              disabled={feedback !== null}
              className={`min-w-[120px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                ${feedback === null ? 'bg-akk text-white' : 'bg-gray-200 text-gray-400'}
              `}
            >
              {mode === 'wechsel' ? 'Akk (Wohin?)' : 'Akkusativ'}
            </button>
            
            {(mode === 'genitiv' || mode === 'mix') && (
                <button
                onClick={() => handleAnswer('Genitiv')}
                disabled={feedback !== null}
                className={`min-w-[120px] px-6 py-4 text-xl font-bold font-display uppercase tracking-wide rounded shadow-md transition-all transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed
                    ${feedback === null ? 'bg-genitiv text-white' : 'bg-gray-200 text-gray-400'}
                `}
                >
                Genitiv
                </button>
            )}
          </div>

          <div className="min-h-[100px] flex flex-col items-center justify-center">
            {feedback === 'correct' && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center justify-center text-art-das text-2xl font-bold mb-2">
                  <CheckCircle className="w-8 h-8 mr-2" />
                  Richtig!
                </div>
                <div className="text-gray-600 bg-green-50 px-4 py-2 rounded">
                    <p>Es ist <strong className="text-art-das">{currentVerb.case}</strong>.</p>
                    <p className="italic text-sm mt-1">"{currentVerb.ex}"</p>
                     {currentVerb.isTrap && <p className="text-de-gold font-bold text-xs mt-1 uppercase">Careful, false friend!</p>}
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
                    <p>Es ist <strong className="text-art-die">{currentVerb.case}</strong>.</p>
                    <p className="italic text-sm mt-1">"{currentVerb.ex}"</p>
                </div>
              </div>
            )}
          </div>

          {feedback !== null && (
            <button
              onClick={pickRandomVerb}
              className="mt-6 inline-flex items-center px-6 py-2 border-2 border-de-black text-de-black font-bold uppercase tracking-wider hover:bg-de-black hover:text-de-gold transition-colors"
            >
              Nächstes Wort <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};