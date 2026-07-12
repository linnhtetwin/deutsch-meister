
import React from 'react';
import { DatabaseItem, VerbItem, NounItem, AdjectiveItem, AdverbItem } from '../types';
import { AlertTriangle, Volume2 } from 'lucide-react';

interface WordCardProps {
  item: DatabaseItem;
  searchTerm?: string;
}

// --- Audio / TTS Logic ---

const SpeakButton: React.FC<{ text: string; label?: string; variant?: 'icon' | 'button' }> = ({ text, label, variant = 'icon' }) => {
  
  const handleSpeak = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!('speechSynthesis' in window)) return;
    
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
            type="button"
            onClick={handleSpeak}
            className="flex items-center gap-1 rounded px-2 py-1 text-xs font-bold uppercase tracking-wider text-de-red transition-colors hover:bg-red-50 hover:text-de-black focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"
            aria-label={`German pronunciation for ${text}`}
        >
            <Volume2 size={14} />
            {label || 'Anhören'}
        </button>
    )
  }

  return (
    <button 
      type="button"
      onClick={handleSpeak}
      className="text-gray-400 hover:text-de-red transition-colors p-2 rounded-full hover:bg-red-50 flex-shrink-0 flex items-center justify-center focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"
      title="Aussprache hören"
      aria-label={`German pronunciation for ${text}`}
    >
      <Volume2 size={20} />
    </button>
  );
};

// --- Helper Functions ---

const isMatch = (text: string, searchTerm?: string) => {
  if (!searchTerm || !text) return false;
  if (searchTerm.length < 2) return false;
  const term = searchTerm.toLowerCase().trim();
  const isShortCommon = ['der', 'die', 'das', 'ein', 'eine', 'und', 'in', 'zu', 'den', 'dem', 'denen'].includes(term);
  
  if (isShortCommon) {
      return new RegExp(`\\b${term}\\b`, 'i').test(text);
  }
  return text.toLowerCase().includes(term);
};

const highlightClass = (text: string, searchTerm?: string, base: string = '') => {
  return isMatch(text, searchTerm) 
    ? `${base} bg-yellow-200 text-black ring-2 ring-yellow-400 font-bold relative z-10 shadow-sm rounded-sm px-0.5 mx-[-2px]` 
    : base;
}

const HighlightedText: React.FC<{ text: string; highlight: string }> = ({ text, highlight }) => {
  if (!highlight.trim() || highlight.length < 2) return <>{text}</>;
  
  const escaped = highlight.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const isShortCommon = ['der', 'die', 'das', 'ein', 'eine', 'und', 'in', 'zu', 'den', 'dem', 'denen'].includes(highlight.toLowerCase().trim());
  
  // If it's a short common word, only match whole words to avoid over-highlighting (e.g. 'der' in 'wieder')
  const regex = isShortCommon 
    ? new RegExp(`(\\b${escaped}\\b)`, 'gi')
    : new RegExp(`(${escaped})`, 'gi');
  const partRegex = isShortCommon
    ? new RegExp(`^${escaped}$`, 'i')
    : new RegExp(`^${escaped}$`, 'i');

  const parts = text.split(regex);
  
  return (
    <>
      {parts.map((part, i) => 
        partRegex.test(part) ? (
          <span key={i} className="bg-de-gold/20 text-de-black font-bold px-0.5 rounded-sm border-b-2 border-de-gold/60 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </>
  );
};

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

  return (
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-all hover:-translate-y-1 hover:shadow-xl ${borderClass} overflow-hidden`}>
      <div className="p-5">
        
        {/* Header: German Word + Audio */}
        <div className="flex justify-between gap-3 items-start mb-2">
          <div className="flex min-w-0 flex-1 items-start gap-1 group">
            <h3 className="min-w-0 break-words font-display text-3xl leading-tight text-de-black">
              <HighlightedText text={item.de} highlight={searchTerm} />
            </h3>
            <SpeakButton text={item.de} />
          </div>
          
          {/* Badge */}
          <div className="flex flex-col items-end gap-1 flex-shrink-0">
            <span className={`${badgeClass} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-right shadow-sm`}>
              {badgeText}
            </span>
            {item.isTrap && (
              <span className="flex items-center gap-1 rounded bg-de-gold px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">
                <AlertTriangle size={12} />
                Trap
              </span>
            )}
          </div>
        </div>

        {/* English Translation */}
        <span className="text-gray-500 italic text-base mb-5 block font-serif">
            <HighlightedText text={item.en} highlight={searchTerm} />
        </span>
        
        {/* Example Sentence */}
        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 mb-6">
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">
              "<HighlightedText text={item.ex} highlight={searchTerm} />"
          </p>
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
                <div className="font-medium text-de-black py-1 border-b border-gray-50">
                    <HighlightedText text={item.pres_ich} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1 border-b border-gray-50">
                    <HighlightedText text={item.past_ich} highlight={searchTerm} />
                </div>

                {/* du */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">du</div>
                <div className="font-medium text-de-black py-1 border-b border-gray-50">
                    <HighlightedText text={item.pres_du} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1 border-b border-gray-50">
                    <HighlightedText text={item.past_du} highlight={searchTerm} />
                </div>

                {/* er/sie */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50 whitespace-nowrap">er/sie</div>
                <div className="font-medium text-de-black py-1 border-b border-gray-50">
                    <HighlightedText text={item.pres} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1 border-b border-gray-50">
                    <HighlightedText text={item.past} highlight={searchTerm} />
                </div>

                {/* wir */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">wir</div>
                <div className="font-medium text-de-black py-1 border-b border-gray-50">
                    <HighlightedText text={item.pres_wir} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1 border-b border-gray-50">
                    <HighlightedText text={item.past_wir} highlight={searchTerm} />
                </div>

                {/* ihr */}
                <div className="text-gray-400 text-xs py-1 border-b border-gray-50">ihr</div>
                <div className="font-medium text-de-black py-1 border-b border-gray-50">
                    <HighlightedText text={item.pres_ihr} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1 border-b border-gray-50">
                    <HighlightedText text={item.past_ihr} highlight={searchTerm} />
                </div>

                {/* sie */}
                <div className="text-gray-400 text-xs py-1">sie</div>
                <div className="font-medium text-de-black py-1">
                    <HighlightedText text={item.pres_sie} highlight={searchTerm} />
                </div>
                <div className="text-gray-600 py-1">
                    <HighlightedText text={item.past_sie} highlight={searchTerm} />
                </div>
            </div>
            
             <div className="mt-3 flex items-start justify-between gap-3 rounded-sm border-t border-gray-100 bg-gray-50/50 p-2 pt-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Perfekt</span>
                 <span className="min-w-0 break-words text-right text-sm font-bold text-de-black">
                     <HighlightedText text={item.perf} highlight={searchTerm} />
                 </span>
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
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-all hover:-translate-y-1 hover:shadow-xl ${borderClass} overflow-hidden`}>
      <div className="p-5">
        <div className="flex justify-between gap-3 items-start mb-2">
          <div className="flex min-w-0 flex-1 items-start gap-1 group">
            <h3 className="min-w-0 break-words font-display text-3xl leading-tight text-de-black">
              <HighlightedText text={item.de} highlight={searchTerm} />
            </h3>
            <SpeakButton text={`${item.art} ${item.de}`} />
          </div>
          <span className={`${badgeClass} text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}>
              {item.art}
          </span>
        </div>
        
        <span className="text-gray-500 italic text-base mb-5 block font-serif">
            <HighlightedText text={item.en} highlight={searchTerm} />
        </span>
        
        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 mb-6">
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">
              "<HighlightedText text={item.ex} highlight={searchTerm} />"
          </p>
          <div className="flex justify-end">
             <SpeakButton text={item.ex} variant="button" label="Beispielsatz" />
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
             <div className="flex items-start justify-between gap-3 px-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Plural</span>
                 <span className={`min-w-0 break-words text-right text-base font-medium ${textClass}`}>
                     <HighlightedText text={item.pl} highlight={searchTerm} />
                 </span>
            </div>
        </div>
      </div>
    </div>
    );
};

const AdjectiveCard: React.FC<{ item: AdjectiveItem; searchTerm: string }> = ({ item, searchTerm }) => {
    return (
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-all hover:-translate-y-1 hover:shadow-xl border-t-purple-500 overflow-hidden`}>
      <div className="p-5">
        <div className="flex justify-between gap-3 items-start mb-2">
          <div className="flex min-w-0 flex-1 items-start gap-1 group">
            <h3 className="min-w-0 break-words font-display text-3xl leading-tight text-de-black">
              <HighlightedText text={item.de} highlight={searchTerm} />
            </h3>
            <SpeakButton text={item.de} />
          </div>
          <span className={`bg-purple-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}>
              Adjektiv
          </span>
        </div>
        
        <span className="text-gray-500 italic text-base mb-5 block font-serif">
            <HighlightedText text={item.en} highlight={searchTerm} />
        </span>
        
        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-300 mb-6">
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">
              "<HighlightedText text={item.ex} highlight={searchTerm} />"
          </p>
          <div className="flex justify-end">
             <SpeakButton text={item.ex} variant="button" label="Beispielsatz" />
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 space-y-2">
             <div className="flex items-start justify-between gap-3 px-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Komparativ</span>
                 <span className="min-w-0 break-words text-right text-base font-medium text-purple-600">
                     <HighlightedText text={item.comp} highlight={searchTerm} />
                 </span>
            </div>
             <div className="flex items-start justify-between gap-3 px-2">
                 <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Superlativ</span>
                 <span className="min-w-0 break-words text-right text-base font-medium text-purple-600">
                     <HighlightedText text={item.sup} highlight={searchTerm} />
                 </span>
            </div>
        </div>
      </div>
    </div>
    );
};

const AdverbCard: React.FC<{ item: AdverbItem; searchTerm: string }> = ({ item, searchTerm }) => {
    return (
    <div className={`bg-white rounded-lg shadow-md border-t-4 transition-all hover:-translate-y-1 hover:shadow-xl border-t-emerald-500 overflow-hidden`}>
      <div className="p-5">
        <div className="flex justify-between gap-3 items-start mb-2">
          <div className="flex min-w-0 flex-1 items-start gap-1 group">
            <h3 className="min-w-0 break-words font-display text-3xl leading-tight text-de-black">
              <HighlightedText text={item.de} highlight={searchTerm} />
            </h3>
            <SpeakButton text={item.de} />
          </div>
          <span className={`bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm`}>
              Adverb
          </span>
        </div>
        
        <span className="text-gray-500 italic text-base mb-5 block font-serif">
            <HighlightedText text={item.en} highlight={searchTerm} />
        </span>
        
        <div className="bg-gray-50 p-4 rounded-md border-l-4 border-gray-300">
          <p className="text-gray-700 italic font-serif text-sm leading-relaxed mb-2">
              "<HighlightedText text={item.ex} highlight={searchTerm} />"
          </p>
          <div className="flex justify-end">
             <SpeakButton text={item.ex} variant="button" label="Beispielsatz" />
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
  if (item.type === 'adjective') {
      return <AdjectiveCard item={item} searchTerm={searchTerm} />;
  }
  if (item.type === 'adverb') {
      return <AdverbCard item={item} searchTerm={searchTerm} />;
  }
  return <NounCard item={item} searchTerm={searchTerm} />;
};
