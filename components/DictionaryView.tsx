
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { database } from '../data';
import { WordCard } from './WordCard';
import { Search, ArrowUpDown, Loader2 } from 'lucide-react';
import { CaseType } from '../types';

// FilterType now includes every CaseType value so the UI can present all cases defined
// in the shared `types.ts` file. The special values are kept for global/noun/other
// filtering logic.
type FilterType = 'all' | 'noun' | 'OtherVerb' | CaseType;
type SortType = 'de-asc' | 'de-desc' | 'en-asc' | 'en-desc';

const BATCH_SIZE = 15; // 3 columns * 5 rows = 15 items per batch

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

      // Include Example sentences in search scope (both verbs and nouns have .ex now)
      let searchableText = `${item.de} ${item.en} ${item.ex}`;
      
      if (item.type === 'verb') {
        // Add raw forms (Present, Past, Perfekt)
        searchableText += ` ${item.pres_ich} ${item.pres_du} ${item.pres} ${item.pres_wir} ${item.pres_ihr} ${item.pres_sie}`;
        searchableText += ` ${item.past_ich} ${item.past_du} ${item.past} ${item.past_wir} ${item.past_ihr} ${item.past_sie}`;
        searchableText += ` ${item.perf}`;
        
        // Add pronoun combinations for natural queries like "ich mag" or "du hast"
        searchableText += ` ich ${item.pres_ich} du ${item.pres_du} er sie es ${item.pres} wir ${item.pres_wir} ihr ${item.pres_ihr} sie ${item.pres_sie}`;
      } else if (item.type === 'noun') {
          searchableText += ` ${item.pl} ${item.art}`;
      }

      return searchableText.toLowerCase().includes(term);
    });

    // 3. Sorting
    return data.sort((a, b) => {
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

  const FilterButton: React.FC<{ type: FilterType, label: string }> = ({ type, label }) => (
    <button
      onClick={() => setFilter(type)}
      className={`px-4 py-1 rounded-full text-sm font-medium border transition-colors whitespace-nowrap
        ${filter === type 
          ? 'bg-de-black text-white border-de-black' 
          : 'bg-white text-gray-600 border-gray-300 hover:border-gray-400'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="bg-white p-6 rounded-md border-l-4 border-de-gold shadow-sm mb-8">
        <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Suche... (e.g. 'begegnen', 'lernte', 'mag')"
            className="w-full pl-10 pr-20 py-3 border-2 border-gray-200 rounded focus:border-de-black focus:ring-0 outline-none transition-colors text-lg"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                 {/* Display TOTAL count, not just visible count */}
                 <span className="text-gray-400 text-xs font-bold bg-gray-100 px-2 py-1 rounded-full border border-gray-200">
                    {filteredData.length}
                 </span>
            </div>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            <div className="flex flex-wrap gap-2">
            <FilterButton type="all" label="Alle" />
            <FilterButton type="noun" label="Nomen" />
            <div className="w-px h-6 bg-gray-300 mx-1 self-center hidden sm:block"></div>
            <FilterButton type="Dativ" label="Dativ" />
            <FilterButton type="Akkusativ" label="Akkusativ" />
            <FilterButton type="Genitiv" label="Genitiv" />
            <FilterButton type="Wechselpräposition (Akkusativ)" label="Wechselpräposition (Akkusativ)" />
            <FilterButton type="Wechselpräposition (Dativ)" label="Wechselpräposition (Dativ)" />
            <FilterButton type="Präpositionalverb + Akk" label="Präpositionalverb + Akk" />
            <FilterButton type="Präpositionalverb + Dativ" label="Präpositionalverb + Dativ" />
            <FilterButton type="Intransitiv" label="Intransitiv" />
            <FilterButton type="Modalverb" label="Modalverb" />
            <FilterButton type="OtherVerb" label="Andere Verben" />
            </div>

            <div className="flex items-center gap-2 self-end lg:self-auto">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sort:</span>
                <div className="relative">
                    <select 
                        value={sort} 
                        onChange={(e) => setSort(e.target.value as SortType)}
                        className="appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-1.5 pl-3 pr-8 rounded focus:outline-none focus:border-de-black text-sm font-medium cursor-pointer hover:bg-gray-100 transition-colors"
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
        <div ref={observerTarget} className="flex justify-center py-8">
            <Loader2 className="animate-spin text-gray-400" />
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