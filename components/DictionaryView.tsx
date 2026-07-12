
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { database } from '../data';
import { WordCard } from './WordCard';
import { Search, ArrowUpDown, Loader2, X } from 'lucide-react';
import { CaseType } from '../types';

// FilterType now includes every CaseType value so the UI can present all cases defined
// in the shared `types.ts` file. The special values are kept for global/noun/other
// filtering logic.
type FilterType = 'all' | 'noun' | 'adjective' | 'adverb' | 'OtherVerb' | CaseType;
type SortType = 'de-asc' | 'de-desc' | 'en-asc' | 'en-desc';

const BATCH_SIZE = 15; // 3 columns * 5 rows = 15 items per batch

const primaryFilters: { type: FilterType; label: string }[] = [
  { type: 'all', label: 'Alle' },
  { type: 'noun', label: 'Nomen' },
  { type: 'adjective', label: 'Adjektiv' },
  { type: 'adverb', label: 'Adverb' },
];

const verbFilters: { type: FilterType; label: string }[] = [
  { type: 'Dativ', label: 'Dativ' },
  { type: 'Akkusativ', label: 'Akkusativ' },
  { type: 'Genitiv', label: 'Genitiv' },
  { type: 'Wechselpräposition (Akkusativ)', label: 'Wechsel Akk' },
  { type: 'Wechselpräposition (Dativ)', label: 'Wechsel Dat' },
  { type: 'Präpositionalverb + Akk', label: 'Präp + Akk' },
  { type: 'Präpositionalverb + Dativ', label: 'Präp + Dat' },
  { type: 'Intransitiv', label: 'Intransitiv' },
  { type: 'Modalverb', label: 'Modalverb' },
  { type: 'OtherVerb', label: 'Andere Verben' },
];

const FilterButton: React.FC<{ type: FilterType, currentFilter: FilterType, setFilter: (type: FilterType) => void, label: string }> = ({ type, currentFilter, setFilter, label }) => (
  <button
    onClick={() => setFilter(type)}
    className={`min-h-9 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50
      ${currentFilter === type 
        ? 'bg-de-black text-white border-de-black' 
        : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
      }`}
  >
    {label}
  </button>
);

export const DictionaryView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('de-asc');
  
  // Lazy Loading State
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const observerTarget = useRef<HTMLDivElement>(null);

  const filteredData = useMemo(() => {
    const data = database.filter(item => {
      // 1. Type Filter
      if (filter !== 'all') {
        if (filter === 'noun') {
          if (item.type !== 'noun') return false;
        } else if (filter === 'adjective') {
          if (item.type !== 'adjective') return false;
        } else if (filter === 'adverb') {
          if (item.type !== 'adverb') return false;
        } else if (filter === 'OtherVerb') {
            // Include Wechsel & Prep & Genitiv if not filtered separately
            if (item.type !== 'verb') return false;
            // "Other" implies not pure Dativ/Akkusativ simple verbs
            if (item.case === 'Dativ' || item.case === 'Akkusativ' || item.case === 'Genitiv') return false;
        } else {
          // It's a specific verb case filter
          if (item.type !== 'verb' || item.case !== filter) return false;
        }
      }

      // 2. Search Filter
      const term = searchTerm.toLowerCase().trim();
      if (!term) return true;

      const isShortCommon = ['der', 'die', 'das', 'ein', 'eine', 'und', 'in', 'zu', 'den', 'dem', 'denen'].includes(term);

      // Include Example sentences in search scope (both verbs and nouns have .ex now)
      let searchableText = `${item.de} ${item.en} ${item.ex}`;
      
      if (item.type === 'verb') {
        // Add raw forms (Present, Past, Perfekt)
        searchableText += ` ${item.pres_ich} ${item.pres_du} ${item.pres} ${item.pres_wir} ${item.pres_ihr} ${item.pres_sie}`;
        searchableText += ` ${item.past_ich} ${item.past_du} ${item.past} ${item.past_wir} ${item.past_ihr} ${item.past_sie}`;
        searchableText += ` ${item.perf}`;
      } else if (item.type === 'noun') {
          searchableText += ` ${item.pl} ${item.art}`;
      } else if (item.type === 'adjective') {
          searchableText += ` ${item.comp} ${item.sup}`;
      }

      if (isShortCommon) {
          return new RegExp(`\\b${term}\\b`, 'i').test(searchableText);
      }

      return searchableText.toLowerCase().includes(term);
    });

    // 3. Sorting with Relevance
    return data.sort((a, b) => {
      const term = searchTerm.toLowerCase().trim();
      
      // If searching, prioritize exact/whole matches
      if (term) {
        const getRelevance = (word: string) => {
          const w = word.toLowerCase();
          if (w === term) return 3; // Exact match
          
          // Escape term for regex
          const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          if (new RegExp(`\\b${escapedTerm}\\b`, 'i').test(word)) return 2; // Whole word match
          
          return 1; // Partial match
        };

        const relA = getRelevance(a.de);
        const relB = getRelevance(b.de);

        if (relA !== relB) return relB - relA; // Higher relevance first
      }

      // Secondary sorting based on user selection
      switch (sort) {
        case 'de-asc': return a.de.localeCompare(b.de, 'de');
        case 'de-desc': return b.de.localeCompare(a.de, 'de');
        case 'en-asc': return a.en.localeCompare(b.en, 'en');
        case 'en-desc': return b.en.localeCompare(a.en, 'en');
        default: return 0;
      }
    });
  }, [searchTerm, filter, sort]);

  // Reset visible count when filters or data changes
  useEffect(() => {
    setVisibleCount(BATCH_SIZE);
  }, [filteredData]);

  // Infinite Scroll Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, filteredData.length));
        }
      },
      { threshold: 0.1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => observer.disconnect();
  }, [filteredData.length]);

  // The subset of data to actually render
  const visibleData = filteredData.slice(0, visibleCount);
  const activeFilterLabel = [...primaryFilters, ...verbFilters].find(item => item.type === filter)?.label ?? 'Alle';

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="bg-white p-5 sm:p-6 rounded-lg border-l-4 border-de-gold shadow-sm mb-8">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-3xl uppercase tracking-wide text-de-black">Wörterbuch</h2>
            <p className="text-sm text-gray-500">Search German, English, examples, and conjugated forms.</p>
          </div>
          <div className="flex gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
            <span className="rounded-full bg-gray-100 px-3 py-1 text-de-black">{filteredData.length} Treffer</span>
            <span className="rounded-full bg-gray-100 px-3 py-1">{activeFilterLabel}</span>
          </div>
        </div>

        <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Suche... (e.g. 'begegnen', 'lernte', 'mag')"
            aria-label="Search dictionary"
            className="w-full rounded-md border-2 border-gray-200 py-3 pl-10 pr-24 text-lg outline-none transition-colors focus:border-de-black focus:ring-4 focus:ring-de-gold/20"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center gap-2">
                 {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-100 hover:text-de-black focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                 )}
                 <span className="pointer-events-none text-gray-500 text-xs font-bold bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                    {filteredData.length}
                 </span>
            </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-1 flex-col gap-3">
              <div className="flex flex-wrap gap-2">
                {primaryFilters.map(item => (
                  <FilterButton key={item.type} type={item.type} currentFilter={filter} setFilter={setFilter} label={item.label} />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 border-t border-gray-100 pt-3">
                {verbFilters.map(item => (
                  <FilterButton key={item.type} type={item.type} currentFilter={filter} setFilter={setFilter} label={item.label} />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 self-end lg:self-start">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort:</span>
                <div className="relative">
                    <select 
                        value={sort} 
                        onChange={(e) => setSort(e.target.value as SortType)}
                        aria-label="Sort dictionary"
                        className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2 pl-3 pr-8 rounded-md focus:outline-none focus:border-de-black focus:ring-4 focus:ring-de-gold/20 text-sm font-medium cursor-pointer hover:bg-gray-100 transition-colors"
                    >
                        <option value="de-asc">Deutsch (A-Z)</option>
                        <option value="de-desc">Deutsch (Z-A)</option>
                        <option value="en-asc">English (A-Z)</option>
                        <option value="en-desc">English (Z-A)</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                        <ArrowUpDown size={14} />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Grid displays only visibleData */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleData.map((item, idx) => (
          <WordCard key={`${item.de}-${idx}`} item={item} searchTerm={searchTerm} />
        ))}
      </div>

      {/* Sentinel Element for Infinite Scroll */}
      {visibleCount < filteredData.length && (
        <div ref={observerTarget} className="flex items-center justify-center gap-2 py-8 text-sm font-medium text-gray-400">
            <Loader2 className="animate-spin text-gray-400" />
            Loading more words
        </div>
      )}

      {filteredData.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p className="text-xl">Keine Ergebnisse gefunden.</p>
        </div>
      )}
    </div>
  );
};
