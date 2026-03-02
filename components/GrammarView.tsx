
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const TableHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-4">
    <h3 className="text-xl font-display text-de-black uppercase tracking-wide">{title}</h3>
    <p className="text-sm text-gray-500 italic">{subtitle}</p>
  </div>
);

const GrammarTable = ({ data, highlightColor, smallText = false }: { data: string[][], highlightColor: string, smallText?: boolean }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-10 bg-white">
    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="p-3 font-bold text-gray-400 uppercase tracking-tighter text-[10px] w-16">Case</th>
          {data[0].length > 5 ? (
              // Dynamic headers for larger tables (like full pronouns)
               <>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">I (ich)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">You (du)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">He (er)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">It (es)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">She (sie)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">We (wir)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">You pl. (ihr)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">They/You formal (Sie)</th>
               </>
          ) : (
              // Standard Headers
               <>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4">Masculine (r)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4 bg-gray-50/30">Neuter (s)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4">Feminine (e)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4">Plural (n)</th>
               </>
          )}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <td className="p-3 font-bold text-gray-500 bg-gray-50/50">{row[0]}</td>
            {row.slice(1).map((cell, j) => {
              const parts = cell.split(' ');
              
              // Handle single words (Pronouns)
              if (parts.length < 2) {
                   const isSpecial = ['denen', 'dessen', 'deren', 'ihnen', 'ihm', 'ihr', 'mich', 'dich', 'sich'].includes(cell);
                   const isNeutrumCol = j === 1 && data[0].length <= 5; // Only for article tables
                   return (
                    <td key={j} className={`p-3 border-l border-gray-100 ${smallText ? 'text-xs' : ''} ${isNeutrumCol ? 'bg-gray-50/30' : ''} ${isSpecial ? 'bg-yellow-50 text-de-black font-bold' : ''}`}>
                        {cell}
                    </td>
                   );
              }
              
              const article = parts[0];
              const adj = parts[1];
              const isNeutrumCol = j === 1 && data[0].length <= 5;

              // Improved ending detection
              let ending = '';
              if (adj.endsWith('en')) ending = 'en';
              else if (adj.endsWith('er')) ending = 'er';
              else if (adj.endsWith('es')) ending = 'es';
              else if (adj.endsWith('em')) ending = 'em';
              else if (adj.endsWith('e')) ending = 'e';
              
              const stem = adj.slice(0, adj.length - ending.length);

              return (
                <td key={j} className={`p-3 border-l border-gray-100 leading-tight ${isNeutrumCol ? 'bg-gray-50/30' : ''}`}>
                    <span className="text-gray-400 text-xs block mb-0.5">{article}</span>
                    <span className="text-de-black font-medium text-base">
                        {stem}
                        <span className={`font-bold ${highlightColor}`}>{ending}</span>
                    </span>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const VerbGroupTable = ({ title, headers, data, colWidths }: { title: string, headers: string[], data: (string | React.ReactElement)[][], colWidths?: string }) => (
    <div className="mb-8">
        <h4 className="font-bold text-de-black mb-2 px-1 text-lg">{title}</h4>
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse min-w-[600px]">
                <thead>
                    <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500">
                        {headers.map((h, i) => (
                            <th key={i} className={`p-3 font-bold ${i===0?'':'border-l border-gray-100'} ${i===0 ? '' : colWidths}`}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                            {row.map((cell, j) => (
                                <td key={j} className={`p-3 ${j===0?'font-bold text-gray-700 bg-gray-50/50':'border-l border-gray-100 text-de-black'}`}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const PrepositionList = ({ title, items, colorClass }: { title: string, items: string[], colorClass: string }) => (
    <div className={`rounded-lg border p-4 ${colorClass} bg-white shadow-sm`}>
        <h4 className="font-bold uppercase tracking-wider text-xs mb-3 border-b pb-2 opacity-80">{title}</h4>
        <div className="flex flex-wrap gap-2">
            {items.map(item => (
                <span key={item} className="px-2 py-1 bg-gray-100 rounded text-sm font-medium text-de-black">{item}</span>
            ))}
        </div>
    </div>
);

const GenderEndings = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-sm">
            <h4 className="font-bold text-art-der mb-3 flex items-center gap-2 border-b border-blue-200 pb-2">
                <span className="bg-art-der text-white text-xs px-2 py-0.5 rounded shadow-sm">DER</span> Masculine
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-ant", "-ast", "-ich", "-ig", "-ling", "-or", "-us"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-blue-900 border border-blue-100">{e}</span>
                ))}
            </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 shadow-sm">
            <h4 className="font-bold text-art-die mb-3 flex items-center gap-2 border-b border-red-200 pb-2">
                <span className="bg-art-die text-white text-xs px-2 py-0.5 rounded shadow-sm">DIE</span> Feminine
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-e", "-a", "-anz", "-enz", "-ei", "-ie", "-heit", "-keit", "-ik", "-sion", "-tion", "-sis", "-tät", "-ung", "-ur", "-schaft"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-red-900 border border-red-100">{e}</span>
                ))}
            </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
            <h4 className="font-bold text-art-das mb-3 flex items-center gap-2 border-b border-green-200 pb-2">
                <span className="bg-art-das text-white text-xs px-2 py-0.5 rounded shadow-sm">DAS</span> Neuter
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-chen", "-lein", "-erl", "-icht", "-il", "-it", "-ma", "-ment", "-nis", "-sal", "-tel", "-tum", "-um"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-green-900 border border-green-100">{e}</span>
                ))}
            </div>
        </div>
    </div>
);

const SentenceStructureSection = () => (
    <div className="mb-16">
        <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">Sentence Structure & Conjunctions</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Position 0 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <h4 className="font-bold text-de-black text-lg">Position 0 (ADUSO)</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Main Clause + Main Clause</p>
                </div>
                <div className="p-4">
                    <div className="mb-4 text-sm text-gray-600">
                        The verb remains on <strong className="text-de-red">Position 2</strong>. The connector does not count (Position 0).
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["aber (but)", "denn (because)", "und (and)", "sondern (but rather)", "oder (or)"].map(w => (
                            <span key={w} className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded font-bold text-sm">{w}</span>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm border-l-4 border-yellow-400 font-mono text-gray-700">
                        <div className="mb-1 border-b border-gray-200 pb-1"><span className="text-gray-400 w-6 inline-block">0</span> <span className="font-bold text-de-black">Denn</span></div>
                        <div className="mb-1"><span className="text-gray-400 w-6 inline-block">1</span> er (he)</div>
                        <div className="mb-1"><span className="text-gray-400 w-6 inline-block">2</span> <strong className="text-de-red bg-red-50 px-1 rounded">ist</strong> (is)</div>
                        <div><span className="text-gray-400 w-6 inline-block">3</span> müde (tired).</div>
                    </div>
                </div>
            </div>

            {/* Position 1 */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <h4 className="font-bold text-de-black text-lg">Position 1 (Adverbs)</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Main Clause + Main Clause</p>
                </div>
                <div className="p-4">
                    <div className="mb-4 text-sm text-gray-600">
                        The connector is on Position 1. The verb follows <strong className="text-de-red">directly after</strong> (Position 2).
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["deshalb (therefore)", "dann (then)", "danach (afterwards)", "sonst (otherwise)", "trotzdem (nevertheless)"].map(w => (
                            <span key={w} className="px-2 py-1 bg-blue-100 text-blue-800 rounded font-bold text-sm">{w}</span>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm border-l-4 border-blue-400 font-mono text-gray-700">
                        <div className="mb-1 border-b border-gray-200 pb-1"><span className="text-gray-400 w-6 inline-block">1</span> <span className="font-bold text-de-black">Deshalb</span></div>
                        <div className="mb-1"><span className="text-gray-400 w-6 inline-block">2</span> <strong className="text-de-red bg-red-50 px-1 rounded">lernt</strong> (learns)</div>
                        <div className="mb-1"><span className="text-gray-400 w-6 inline-block">3</span> er (he)</div>
                        <div><span className="text-gray-400 w-6 inline-block">4</span> Deutsch (German).</div>
                    </div>
                </div>
            </div>

            {/* Nebensatz */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-gray-50 p-4 border-b border-gray-200">
                    <h4 className="font-bold text-de-black text-lg">Subordinate Clause (End)</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mt-1">Main Clause + Subordinate Clause</p>
                </div>
                <div className="p-4">
                    <div className="mb-4 text-sm text-gray-600">
                        The conjugated verb goes to the <strong className="text-de-red">end</strong> of the sentence (Verb-Kick).
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {["weil (because)", "wenn (if/when)", "als (when)", "dass (that)", "obwohl (although)", "seit (since)", "damit (so that)"].map(w => (
                            <span key={w} className="px-2 py-1 bg-red-100 text-red-800 rounded font-bold text-sm">{w}</span>
                        ))}
                    </div>
                    <div className="bg-gray-50 p-3 rounded text-sm border-l-4 border-de-red font-mono text-gray-700">
                        <div className="mb-1 border-b border-gray-200 pb-1">... <span className="font-bold text-de-black">weil</span></div>
                        <div className="mb-1">er (he)</div>
                        <div className="mb-1">Deutsch (German)</div>
                        <div><strong className="text-de-red bg-red-50 px-1 rounded">lernt</strong> (learns).</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const VerbConjugationPatterns = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-de-red/5 p-3 border-b border-de-red/10">
                <h4 className="font-bold text-de-black flex items-center gap-2">
                    Präsens (Present)
                </h4>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>ich</span> <strong className="text-de-red">-e</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>wir</span> <strong className="text-de-red">-en</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>du</span> <strong className="text-de-red">-st</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>ihr</span> <strong className="text-de-red">-t</strong></div>
                    <div className="flex justify-between"><span>er/sie/es</span> <strong className="text-de-red">-t</strong></div>
                    <div className="flex justify-between"><span>sie/Sie</span> <strong className="text-de-red">-en</strong></div>
                </div>
                <div className="mt-4 text-[10px] text-gray-500 italic bg-gray-50 p-2 rounded">
                    Rule: Stem + Ending (e.g., lern-en &rarr; du lern-st)
                </div>
            </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 p-3 border-b border-gray-200">
                <h4 className="font-bold text-de-black flex items-center gap-2">
                    Präteritum (Regular Past)
                </h4>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>ich</span> <strong className="text-gray-600">-te</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>wir</span> <strong className="text-gray-600">-ten</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>du</span> <strong className="text-gray-600">-test</strong></div>
                    <div className="flex justify-between border-b border-gray-50 pb-1"><span>ihr</span> <strong className="text-gray-600">-tet</strong></div>
                    <div className="flex justify-between"><span>er/sie/es</span> <strong className="text-gray-600">-te</strong></div>
                    <div className="flex justify-between"><span>sie/Sie</span> <strong className="text-gray-600">-ten</strong></div>
                </div>
                <div className="mt-4 text-[10px] text-gray-500 italic bg-gray-50 p-2 rounded">
                    Rule: Stem + -te + Ending (e.g., lern-en &rarr; ich lern-te)
                </div>
            </div>
        </div>
    </div>
);

const StrongDeclensionExplanation = () => (
    <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mb-10">
        <h4 className="font-bold text-de-black text-lg mb-4 flex items-center gap-2">
            Strong Declension (When to use it?)
        </h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4 text-sm text-gray-700">
                <p>
                    <strong>Strong Declension</strong> is used when the adjective 
                    <span className="bg-blue-100 px-1 rounded mx-1 font-bold">stands without an article</span> before the noun.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Indefinite quantities:</strong> <em>kaltes Wasser (cold water), frische Milch (fresh milk)</em></li>
                    <li><strong>Properties/Qualities:</strong> <em>deutscher Fleiß (German diligence), gute Besserung (get well soon)</em></li>
                    <li><strong>After numbers:</strong> <em>zwei kleine Kinder (two small children)</em></li>
                    <li><strong>After "viele", "einige", "wenige":</strong> <em>viele nette Leute (many nice people)</em></li>
                </ul>
                <div className="bg-white p-3 rounded border border-blue-200 text-xs italic">
                    <strong>Golden Rule:</strong> Since there is no article to indicate the case/gender, 
                    the <strong>adjective</strong> must take over this task and copy the ending of the 
                    definite article (der, die, das...).
                </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100 shadow-sm">
                <h5 className="font-bold text-xs uppercase text-gray-400 mb-3 tracking-widest">Examples & Comparison</h5>
                <div className="space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs flex-shrink-0">S</div>
                        <div>
                            <div className="text-sm font-bold">Strong (No Article)</div>
                            <div className="text-xs text-gray-500">Guter Wein ist teuer. (Good wine is expensive)</div>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-bold text-xs flex-shrink-0">W</div>
                        <div>
                            <div className="text-sm font-bold">Weak (With Article)</div>
                            <div className="text-xs text-gray-500">Der gute Wein ist teuer. (The good wine is expensive)</div>
                        </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                        <p className="text-[10px] text-red-600 font-bold uppercase">⚠️ The Genitive Trap (Masculine/Neuter)</p>
                        <p className="text-xs text-gray-600 mt-1">
                            In Genitive Masculine/Neuter, the adjective ends in <strong>-en</strong> (instead of -es), 
                            because the noun already has an <strong>-s</strong>.
                            <br/><em>e.g., ein Glas gut<strong>en</strong> Wein<strong>s</strong> (a glass of good wine)</em>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const GrammarView: React.FC = () => {
  // ORDER: [Case, Maskulin, Neutrum, Feminin, Plural]
  
  const definiterData = [
    ["Nom.", "der alte", "das alte", "die alte", "die alten"],
    ["Akk.", "den alten", "das alte", "die alte", "die alten"],
    ["Dat.", "dem alten", "dem alten", "der alten", "den alten"],
    ["Gen.", "des alten", "des alten", "der alten", "der alten"],
  ];

  const indefiniterData = [
    ["Nom.", "ein alter", "ein altes", "eine alte", "keine alten"],
    ["Akk.", "einen alten", "ein altes", "eine alte", "keine alten"],
    ["Dat.", "einem alten", "einem alten", "einer alten", "keinen alten"],
    ["Gen.", "eines alten", "eines alten", "einer alten", "keiner alten"],
  ];

  const nullartikelData = [
    ["Nom.", "alter Wein", "altes Wasser", "alte Milch", "alte Käse"],
    ["Akk.", "alten Wein", "altes Wasser", "alte Milch", "alte Käse"],
    ["Dat.", "altem Wein", "altem Wasser", "alter Milch", "alten Käsen"],
    ["Gen.", "alten Weins", "alten Wassers", "alter Milch", "alter Käse"],
  ];

  const definitpronomenData = [
    ["Nom.", "der", "das", "die", "die"],
    ["Akk.", "den", "das", "die", "die"],
    ["Dat.", "dem", "dem", "der", "denen"],
    ["Gen.", "dessen", "dessen", "deren", "deren"],
  ];

  const personalFullData = [
    ["Nom", "ich", "du", "er", "es", "sie", "wir", "ihr", "Sie"],
    ["Akk", "mich", "dich", "ihn", "es", "sie", "uns", "euch", "Sie"],
    ["Dat", "mir", "dir", "ihm", "ihm", "ihr", "uns", "euch", "Ihnen"],
    ["Gen", "meiner", "deiner", "seiner", "seiner", "ihrer", "unser", "euer", "Ihrer"],
  ];

  const reflexivData = [
    ["Akk", "mich", "dich", "sich", "sich", "sich", "uns", "euch", "sich"],
    ["Dat", "mir", "dir", "sich", "sich", "sich", "uns", "euch", "sich"],
  ];

  // Auxiliaries Data
  // Headers: [Verb, Zeit, ich, du, er/sie/es, wir/Sie, ihr]
  const auxData = [
    [<span className="font-bold">werden</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "werde", "wirst", "wird", "werden", "werdet"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "wurde", "wurdest", "wurde", "wurden", "wurdet"],
    [<span className="font-bold">haben</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "habe", "hast", "hat", "haben", "habt"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "hatte", "hattest", "hatte", "hatten", "hattet"],
    [<span className="font-bold">sein</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "bin", "bist", "ist", "sind", "seid"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "war", "warst", "war", "waren", "wart"],
  ];

  // Modal Data
  const modalData = [
    ["wollen", "will", "willst", "wollen", "wollt"],
    ["sollen", "soll", "sollst", "sollen", "sollt"],
    ["müssen", "muss", "musst", "müssen", "müsst"],
    ["können", "kann", "kannst", "können", "könnt"],
    ["dürfen", "darf", "darfst", "dürfen", "dürft"],
    ["mögen", "mag", "magst", "mögen", "mögt"],
  ];


  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 border-t-4 border-de-red">
        
        <div className="text-center mb-12">
            <h2 className="font-gothic text-5xl text-de-black mb-2">Grammar</h2>
            <p className="text-gray-500 font-display uppercase tracking-widest text-sm font-bold">Reference Tables</p>
        </div>

        {/* 0. COMMON ENDINGS (New) */}
        <div className="mb-12 border-b border-gray-100 pb-8">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">Noun Endings (Gender)</h3>
            <GenderEndings />
        </div>

        {/* 1. ADJEKTIVDEKLINATION */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-gold pl-3 mb-6">Adjective Declension</h3>
            
            {/* Logic Summary Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm uppercase mb-2">1. Weak Declension</h4>
                    <p className="text-xs text-gray-600 mb-2">After <strong>definite</strong> articles (der, die, das...).</p>
                    <div className="text-xs font-mono bg-white p-2 rounded border border-gray-100">
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Nom. Sg.</span> <span className="font-bold text-art-der">-e</span></div>
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Acc. Fem/Neu</span> <span className="font-bold text-art-der">-e</span></div>
                        <div className="flex justify-between"><span>All others</span> <span className="font-bold text-art-der">-en</span></div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm uppercase mb-2">2. Mixed Declension</h4>
                    <p className="text-xs text-gray-600 mb-2">After <strong>indefinite</strong> articles (ein, kein, mein...).</p>
                    <div className="text-xs font-mono bg-white p-2 rounded border border-gray-100">
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Nom. Mas/Neu</span> <span className="font-bold text-art-die">-er / -es</span></div>
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Nom/Acc Fem</span> <span className="font-bold text-art-die">-e</span></div>
                        <div className="flex justify-between"><span>Dative / Genitive</span> <span className="font-bold text-art-die">-en</span></div>
                    </div>
                </div>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                    <h4 className="font-bold text-sm uppercase mb-2">3. Strong Declension</h4>
                    <p className="text-xs text-gray-600 mb-2">Without article. Adjective takes the <strong>Article-Ending</strong>.</p>
                    <div className="text-xs font-mono bg-white p-2 rounded border border-gray-100">
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Nom. Mas/Neu</span> <span className="font-bold text-art-das">-er / -es</span></div>
                        <div className="flex justify-between border-b pb-1 mb-1"><span>Dative Mas/Neu</span> <span className="font-bold text-art-das">-em</span></div>
                        <div className="flex justify-between"><span>Genitive Mas/Neu</span> <span className="font-bold text-art-das">-en (!)</span></div>
                    </div>
                </div>
            </div>

            {/* Special Cases */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-10">
                <h4 className="font-bold text-yellow-800 text-sm uppercase mb-3 flex items-center gap-2">
                    <AlertTriangle size={16} /> Special Cases
                </h4>
                <ul className="text-sm text-yellow-900 space-y-2">
                    <li><strong>Endings in -el / -er:</strong> The 'e' before the ending is often dropped. 
                        <br/><em className="text-gray-500">dunk<strong>el</strong> (dark) &rarr; ein dunk<strong>le</strong>s Zimmer | teuer (expensive) &rarr; ein teu<strong>re</strong>s Auto</em>
                    </li>
                    <li><strong>Endings in -a:</strong> Adjectives ending in -a (rosa, lila) are <strong>not</strong> declined.
                        <br/><em className="text-gray-500">ein rosa Hemd | die lila Schuhe</em>
                    </li>
                    <li><strong>Hoch (High):</strong> The 'ch' becomes 'h' when an ending follows.
                        <br/><em className="text-gray-500">hoch &rarr; ein ho<strong>h</strong>es Haus</em>
                    </li>
                </ul>
            </div>

            <section>
            <TableHeader 
                title="Definite Article" 
                subtitle="After: der, die, das, dieser, jeder, welcher, alle..." 
            />
            <GrammarTable data={definiterData} highlightColor="text-art-der" />
            </section>

            <section>
            <TableHeader 
                title="Indefinite Article" 
                subtitle="After: ein, eine, kein, mein, dein, sein, ihr..." 
            />
            <GrammarTable data={indefiniterData} highlightColor="text-art-die" />
            </section>

            <section>
            <TableHeader 
                title="Zero Article" 
                subtitle="Without article (materials, properties, indefinite plural)." 
            />
            <StrongDeclensionExplanation />
            <GrammarTable data={nullartikelData} highlightColor="text-art-das" />
            </section>
        </div>

        {/* 2. VERBS (New) */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-red pl-3 mb-6">Verbs & Auxiliary Verbs</h3>
            
            <VerbConjugationPatterns />

            <VerbGroupTable 
                title="Auxiliary Verbs" 
                headers={["Verb", "Tense", "I (ich)", "You (du)", "He/She/It", "We/You formal", "You pl."]}
                data={auxData}
            />

            <VerbGroupTable 
                title="Modal Verbs (Present)" 
                headers={["Verb", "I/He/She/It", "You (du)", "We/You formal", "You pl."]}
                data={modalData}
                colWidths="w-1/5"
            />
        </div>

        {/* 3. PRONOMEN */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">Pronouns</h3>
            
            {/* Personal Pronouns Full */}
            <section className="mb-10">
                <TableHeader 
                    title="Personal Pronouns" 
                    subtitle="Full table of all persons and cases." 
                />
                <GrammarTable data={personalFullData} highlightColor="text-de-black" smallText={true} />
            </section>

            {/* Reflexive */}
            <section className="mb-10">
                <TableHeader 
                    title="Reflexive Pronouns" 
                    subtitle="Back-referring pronouns (sich)." 
                />
                <GrammarTable data={reflexivData} highlightColor="text-de-black" smallText={true} />
            </section>

            {/* Definitpronomen / Relativpronomen */}
            <section className="mb-10">
                <TableHeader 
                    title="Relative Pronouns / Definite Pronouns" 
                    subtitle="Identical to 'Der/Die/Das' but with special forms in Genitive & Dative Plural." 
                />
                <GrammarTable data={definitpronomenData} highlightColor="text-de-black" />
            </section>
        </div>

        {/* 4. SENTENCE STRUCTURE (New) */}
        <SentenceStructureSection />

        {/* 5. CHEAT SHEETS (Prepositions & Possessives) */}
        <div className="mb-8">
            <h3 className="font-display text-2xl border-l-4 border-gray-400 pl-3 mb-6">Quick Overview</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Possessives */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                     <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-de-black">Possessive Articles</h4>
                     <div className="grid grid-cols-2 gap-2 text-sm text-de-black mb-4">
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">I</span> <strong className="text-de-black">mein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">You</span> <strong className="text-de-black">dein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">He</span> <strong className="text-de-black">sein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">She</span> <strong className="text-de-black">ihr</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">It</span> <strong className="text-de-black">sein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">We</span> <strong className="text-de-black">unser</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">You pl.</span> <strong className="text-de-black">euer</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex items-center gap-2"><span className="text-gray-600 font-medium">You formal</span> <strong className="text-de-black">Ihr</strong></div>
                     </div>
                     <div className="bg-yellow-50 p-3 rounded text-xs text-gray-700 border border-yellow-100">
                        <strong>Note:</strong> The endings are identical to the <strong className="text-art-die">Indefinite Article</strong> (ein, eine, einen...).
                        <br/>
                        <em>e.g., Ich habe <strong>einen</strong> Ball &rarr; Ich habe <strong>meinen</strong> Ball.</em>
                     </div>
                </div>

                {/* Question Words */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-de-black">W-Questions (Case)</h4>
                    <div className="space-y-2 text-sm text-de-black">
                        <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Nominative</span>
                            <span className="font-bold">Who? / What? (Wer? / Was?)</span>
                        </div>
                         <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Accusative</span>
                            <span className="font-bold">Whom? / What? / Where to? (Wen? / Was? / Wohin?)</span>
                        </div>
                         <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Dative</span>
                            <span className="font-bold">To whom? / Where? / When? (Wem? / Wo? / Wann?)</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="font-medium">Genitive</span>
                            <span className="font-bold">Whose? (Wessen?)</span>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-gray-500">Prepositions</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <PrepositionList 
                    title="Accusative (Dogfu)" 
                    items={["durch (through)", "ohne (without)", "gegen (against)", "für (for)", "um (around)", "bis (until)", "entlang (along)"]}
                    colorClass="border-akk text-akk"
                />
                <PrepositionList 
                    title="Dative (Blue)" 
                    items={["aus (from)", "außer (except)", "bei (at)", "mit (with)", "nach (after)", "seit (since)", "von (from)", "zu (to)", "gegenüber (opposite)"]}
                    colorClass="border-dativ text-dativ"
                />
                <PrepositionList 
                    title="2-Way (Wechsel)" 
                    items={["an (on/at)", "auf (on)", "hinter (behind)", "in (in)", "neben (next to)", "über (over)", "unter (under)", "vor (in front of)", "zwischen (between)"]}
                    colorClass="border-wechsel text-wechsel"
                />
                <PrepositionList 
                    title="Genitive" 
                    items={["wegen (because of)", "während (during)", "trotz (despite)", "statt (instead of)", "anstatt (instead of)", "außerhalb (outside)", "innerhalb (inside)"]}
                    colorClass="border-genitiv text-genitiv"
                />
            </div>
        </div>

      </div>
    </div>
  );
};