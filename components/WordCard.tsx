
import React from 'react';
import { DatabaseItem, VerbItem, NounItem } from '../types';
import { Volume2 } from 'lucide-react';

interface WordCardProps {
  item: DatabaseItem;
  searchTerm?: string;
}

// --- Audio / TTS Logic ---

const SpeakButton: React.FC<{ text: string; label?: string; variant?: 'icon' | 'button' }> = ({ text, label, variant = 'icon' }) => {
  
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Cancel any currently playing speech to avoid overlap
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'de-DE'; // Force German language
    utterance.rate = 0.7; // Slightly slower for better clarity
    
    window.speechSynthesis.speak(utterance);
  };

  if (variant === 'button') {
    return (
        <button 
            onClick={handleSpeak}
            className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-de-red hover:text-de-black transition-colors"
        >
            <Volume2 size={14} />
            {label || 'Anhören'}
        </button>
    )
  }

  return (
    <button 
      onClick={handleSpeak}
      className="text-gray-400 hover:text-de-red transition-colors p-2 rounded-full hover:bg-red-50 flex-shrink-0 flex items-center justify-center"
      title="Aussprache hören"
    >
      <Volume2 size={20} />
    </button>
  );
};

// --- Helper Functions ---

const isMatch = (text: string, searchTerm?: string) => {
  if (!searchTerm || !text) return false;
  if (searchTerm.length < 2) return false;
  return text.toLowerCase().includes(searchTerm.toLowerCase().trim());
};

const highlightClass = (text: string, searchTerm?: string, base: string = '') => {
  return isMatch(text, searchTerm) 
    ? `${base} bg-yellow-200 text-black ring-2 ring-yellow-400 font-bold relative z-10 shadow-sm rounded-sm px-0.5 mx-[-2px]` 
    : base;
}

// --- Card Components ---

const VerbCard: React.FC<{ item: VerbItem; searchTerm: string }> = ({ item, searchTerm }) => {
  let borderClass = 'border-t-gray-500';
  let badgeClass = 'bg-gray-500';
  let badgeText: string = item.case;

  if (item.case === 'Dativ') { 
    borderClass = 'border-t-dativ'; 
    badgeClass = 'bg-dativ'; 
  } else if (item.case === 'Akkusativ') { 
    borderClass = 'border-t-akk'; 
    badgeClass = 'bg-akk'; 
  } else if (item.case === 'Genitiv') { 
    borderClass = 'border-t-genitiv'; 
    badgeClass = 'bg-genitiv'; 
  } else if (item.case.startsWith('Wechsel')) { 
    borderClass = 'border-t-wechsel'; 
    badgeClass = 'bg-wechsel';
    badgeText = item.case.replace('Wechselpräposition', 'Wechsel');
  } else if (item.case.startsWith('Präpositionalverb')) { 
    borderClass = 'border-t-prep'; 
    badgeClass = 'bg-prep';
    badgeText = item.case.replace('Präpositionalverb', 'Präp');
  } else if (item.case === 'Intransitiv') {
    borderClass = 'border-t-gray-400';
    badgeClass = 'bg-gray-400';
    badgeText = 'Intransitiv';
  }

  const hl = (t: string) => highlightClass(t, searchTerm);

  return (
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-transform hover:-translate-y-1 ${borderClass} overflow-hidden`}>
      <div className="p-5">
        
        {/* Header: German Word + Audio */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 group flex-wrap max-w-[70%]">
            <h3 className={`font-display text-3xl text-de-black leading-tight ${isMatch(item.de, searchTerm) ? 'bg-yellow-200 rounded px-1' : ''}`}>
              {item.de}
            </h3>
            <SpeakButton text={item.de} />
          </div>
          
          {/* Badge */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className={`${badgeClass} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-right shadow-sm`}>
              {badgeText}
            </span>
            {item.isTrap && (
              <span className="bg-de-gold text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider shadow-sm flex items-center gap-1">
                ⚠️ Trap
              </span>
            )}
          </div>
        </div>

        {/* English Translation */}
        <span className={`text-gray-500 italic text-base mb-5 block font-serif ${isMatch(item.en, searchTerm) ? 'bg-yellow-100 px-1 rounded' : ''}`}>{item.en}</span>
        
        {/* Example Sentence */}
        <div className={`bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 mb-6 ${isMatch(item.ex, searchTerm) ? 'bg-yellow-50' : ''}`}>
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">"{item.ex}"</p>
          <div className="flex justify-end">
             <SpeakButton text={item.ex} variant="button" label="Beispielsatz" />
          </div>
        </div>
        
        {/* Conjugation Table - Revised Layout */}
        <div className="bg-white rounded border border-gray-100 p-3 shadow-sm">
            <div className="grid grid-cols-[2.5rem_1fr_1fr] gap-x-2 text-sm items-center">
                
                {/* Headers */}
                <div className="col-span-1"></div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider pb-1 border-b border-gray-100">Präsens</div>
                <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider pb-1 border-b border-gray-100">Präteritum</div>
                
                {/* ich */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">ich</div>
                <div className={`font-medium text-de-black py-1 border-b border-gray-50 ${hl(item.pres_ich)}`}>{item.pres_ich}</div>
                <div className={`text-gray-600 py-1 border-b border-gray-50 ${hl(item.past_ich)}`}>{item.past_ich}</div>

                {/* du */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">du</div>
                <div className={`font-medium text-de-black py-1 border-b border-gray-50 ${hl(item.pres_du)}`}>{item.pres_du}</div>
                <div className={`text-gray-600 py-1 border-b border-gray-50 ${hl(item.past_du)}`}>{item.past_du}</div>

                {/* er/sie */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50 whitespace-nowrap">er/sie</div>
                <div className={`font-medium text-de-black py-1 border-b border-gray-50 ${hl(item.pres)}`}>{item.pres}</div>
                <div className={`text-gray-600 py-1 border-b border-gray-50 ${hl(item.past)}`}>{item.past}</div>

                {/* wir */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">wir</div>
                <div className={`font-medium text-de-black py-1 border-b border-gray-50 ${hl(item.pres_wir)}`}>{item.pres_wir}</div>
                <div className={`text-gray-600 py-1 border-b border-gray-50 ${hl(item.past_wir)}`}>{item.past_wir}</div>

                {/* ihr */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">ihr</div>
                <div className={`font-medium text-de-black py-1 border-b border-gray-50 ${hl(item.pres_ihr)}`}>{item.pres_ihr}</div>
                <div className={`text-gray-600 py-1 border-b border-gray-50 ${hl(item.past_ihr)}`}>{item.past_ihr}</div>

                {/* sie */}
                <div className="text-gray-400 text-xs py-1">sie</div>
                <div className={`font-medium text-de-black py-1 ${hl(item.pres_sie)}`}>{item.pres_sie}</div>
                <div className={`text-gray-600 py-1 ${hl(item.past_sie)}`}>{item.past_sie}</div>
            </div>
            
             <div className="mt-3 pt-2 border-t border-gray-100 flex justify-between items-center bg-gray-50/50 p-2 rounded-sm">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Perfekt</span>
                 <span className={`text-sm font-bold text-de-black ${hl(item.perf)}`}>{item.perf}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

const NounCard: React.FC<{ item: NounItem; searchTerm: string }> = ({ item, searchTerm }) => {
    let borderClass = 'border-t-gray-500';
    let badgeClass = 'bg-gray-500';
    let textClass = 'text-gray-600';
    
    if (item.art === 'Der') {
        borderClass = 'border-t-art-der';
        badgeClass = 'bg-art-der';
        textClass = 'text-art-der';
    } else if (item.art === 'Die') {
        borderClass = 'border-t-art-die';
        badgeClass = 'bg-art-die';
        textClass = 'text-art-die';
    } else if (item.art === 'Das') {
        borderClass = 'border-t-art-das';
        badgeClass = 'bg-art-das';
        textClass = 'text-art-das';
    }

    return (
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-transform hover:-translate-y-1 ${borderClass} overflow-hidden`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="flex items-center gap-1 group">
            <h3 className={`font-display text-3xl text-de-black leading-tight ${isMatch(item.de, searchTerm) ? 'bg-yellow-200 rounded px-1' : ''}`}>
              {item.de}
            </h3>
            <SpeakButton text={`${item.art} ${item.de}`} />
          </div>
          <span className={`${badgeClass} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}>
              {item.art}
          </span>
        </div>
        
        <span className={`text-gray-500 italic text-base mb-5 block font-serif ${isMatch(item.en, searchTerm) ? 'bg-yellow-100 px-1 rounded' : ''}`}>{item.en}</span>
        
        <div className={`bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 mb-6 ${isMatch(item.ex, searchTerm) ? 'bg-yellow-50' : ''}`}>
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">"{item.ex}"</p>
          <div className="flex justify-end">
             <SpeakButton text={item.ex} variant="button" label="Beispielsatz" />
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
             <div className="flex justify-between items-center px-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Plural</span>
                 <span className={`text-base font-medium ${textClass} ${isMatch(item.pl, searchTerm) ? 'bg-yellow-200 rounded px-1 text-black' : ''}`}>{item.pl}</span>
            </div>
        </div>
      </div>
    </div>
    );
};

export const WordCard: React.FC<WordCardProps> = ({ item, searchTerm = '' }) => {
  if (item.type === 'verb') {
      return <VerbCard item={item} searchTerm={searchTerm} />;
  }
  return <NounCard item={item} searchTerm={searchTerm} />;
};
