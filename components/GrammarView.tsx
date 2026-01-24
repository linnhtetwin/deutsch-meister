
import React from 'react';

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
          <th className="p-3 font-bold text-gray-400 uppercase tracking-tighter text-[10px] w-16">Kasus</th>
          {data[0].length > 4 ? (
              // Dynamic headers for larger tables (like full pronouns)
               <>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Ich</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Du</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Er</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Sie</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Es</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Wir</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Ihr</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100">Sie</th>
               </>
          ) : (
              // Standard Headers
               <>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4">Maskulin (r)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4 bg-gray-50/30">Neutrum (s)</th>
                <th className="p-3 font-bold text-gray-800 border-l border-gray-100 w-1/4">Feminin (e)</th>
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
              const isNeutrumCol = j === 1;

              return (
                <td key={j} className={`p-3 border-l border-gray-100 leading-tight ${isNeutrumCol ? 'bg-gray-50/30' : ''}`}>
                    <span className="text-gray-400 text-xs block mb-0.5">{article}</span>
                    <span className="text-de-black font-medium">
                        {adj.slice(0, -2)}
                        <span className={`font-bold ${highlightColor}`}>{adj.slice(-2)}</span>
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
                <span className="bg-art-der text-white text-xs px-2 py-0.5 rounded shadow-sm">DER</span> Maskulin
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-ant", "-ast", "-ich", "-ig", "-ling", "-or", "-us"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-blue-900 border border-blue-100">{e}</span>
                ))}
            </div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg border border-red-100 shadow-sm">
            <h4 className="font-bold text-art-die mb-3 flex items-center gap-2 border-b border-red-200 pb-2">
                <span className="bg-art-die text-white text-xs px-2 py-0.5 rounded shadow-sm">DIE</span> Feminin
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-e", "-a", "-anz", "-enz", "-ei", "-ie", "-heit", "-keit", "-ik", "-sion", "-tion", "-sis", "-tät", "-ung", "-ur", "-schaft"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-red-900 border border-red-100">{e}</span>
                ))}
            </div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg border border-green-100 shadow-sm">
            <h4 className="font-bold text-art-das mb-3 flex items-center gap-2 border-b border-green-200 pb-2">
                <span className="bg-art-das text-white text-xs px-2 py-0.5 rounded shadow-sm">DAS</span> Neutrum
            </h4>
            <div className="flex flex-wrap gap-2">
                {["-chen", "-lein", "-erl", "-icht", "-il", "-it", "-ma", "-ment", "-nis", "-sal", "-tel", "-tum", "-um"].map(e => (
                    <span key={e} className="bg-white px-2 py-1 rounded text-sm text-green-900 border border-green-100">{e}</span>
                ))}
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
    ["Nom", "ich", "du", "er", "sie", "es", "wir", "ihr", "Sie"],
    ["Akk", "mich", "dich", "ihn", "sie", "es", "uns", "euch", "Sie"],
    ["Dat", "mir", "dir", "ihm", "ihr", "ihm", "uns", "euch", "Ihnen"],
    ["Gen", "meiner", "deiner", "seiner", "ihrer", "seiner", "unser", "euer", "Ihrer"],
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
            <h2 className="font-gothic text-5xl text-de-black mb-2">Grammatik</h2>
            <p className="text-gray-500 font-display uppercase tracking-widest text-sm font-bold">Referenz Tabellen</p>
        </div>

        {/* 0. COMMON ENDINGS (New) */}
        <div className="mb-12 border-b border-gray-100 pb-8">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">Artikel Endungen (Genus)</h3>
            <GenderEndings />
        </div>

        {/* 1. ADJEKTIVDEKLINATION */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-gold pl-3 mb-6">Adjektivdeklination</h3>
            
            <section>
            <TableHeader 
                title="Bestimmter Artikel" 
                subtitle="Nach: der, die, das, dieser, jeder, welcher, alle..." 
            />
            <GrammarTable data={definiterData} highlightColor="text-art-der" />
            </section>

            <section>
            <TableHeader 
                title="Unbestimmter Artikel" 
                subtitle="Nach: ein, eine, kein, mein, dein, sein, ihr..." 
            />
            <GrammarTable data={indefiniterData} highlightColor="text-art-die" />
            </section>

            <section>
            <TableHeader 
                title="Nullartikel" 
                subtitle="Ohne Artikel (Stoffe, Eigenschaften, Plural unbestimmt)." 
            />
            <GrammarTable data={nullartikelData} highlightColor="text-art-das" />
            </section>
        </div>

        {/* 2. VERBS (New) */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-red pl-3 mb-6">Verben & Hilfsverben</h3>
            
            <VerbGroupTable 
                title="Hilfsverben (Auxiliary)" 
                headers={["Verb", "Zeit", "ich", "du", "er/sie/es", "wir/Sie", "ihr"]}
                data={auxData}
            />

            <VerbGroupTable 
                title="Modalverben (Präsens)" 
                headers={["Verb", "ich / er", "du", "wir / Sie", "ihr"]}
                data={modalData}
                colWidths="w-1/5"
            />
        </div>

        {/* 3. PRONOMEN */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">Pronomen</h3>
            
            {/* Personal Pronouns Full */}
            <section className="mb-10">
                <TableHeader 
                    title="Personalpronomen" 
                    subtitle="Vollständige Tabelle aller Personen und Fälle." 
                />
                <GrammarTable data={personalFullData} highlightColor="text-de-black" smallText={true} />
            </section>

            {/* Reflexive */}
            <section className="mb-10">
                <TableHeader 
                    title="Reflexivpronomen" 
                    subtitle="Rückbezügliche Fürwörter (sich)." 
                />
                <GrammarTable data={reflexivData} highlightColor="text-de-black" smallText={true} />
            </section>

            {/* Definitpronomen / Relativpronomen */}
            <section className="mb-10">
                <TableHeader 
                    title="Relativpronomen / Definitpronomen" 
                    subtitle="Identisch mit 'Der/Die/Das' aber mit speziellen Formen im Genitiv & Dativ Plural." 
                />
                <GrammarTable data={definitpronomenData} highlightColor="text-de-black" />
            </section>
        </div>

        {/* 4. CHEAT SHEETS (Prepositions & Possessives) */}
        <div className="mb-8">
            <h3 className="font-display text-2xl border-l-4 border-gray-400 pl-3 mb-6">Kurzübersicht</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Possessives */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                     <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-de-black">Possessivartikel</h4>
                     <div className="grid grid-cols-2 gap-2 text-sm text-de-black mb-4">
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">ich</span> <strong className="text-de-black">mein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">du</span> <strong className="text-de-black">dein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">er</span> <strong className="text-de-black">sein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">sie</span> <strong className="text-de-black">ihr</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">es</span> <strong className="text-de-black">sein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">wir</span> <strong className="text-de-black">unser</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">ihr</span> <strong className="text-de-black">euer</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100"><span className="text-gray-600 font-medium w-6 inline-block">Sie</span> <strong className="text-de-black">Ihr</strong></div>
                     </div>
                     <div className="bg-yellow-50 p-3 rounded text-xs text-gray-700 border border-yellow-100">
                        <strong>Hinweis:</strong> Die Endungen sind identisch mit dem <strong className="text-art-die">Unbestimmten Artikel</strong> (ein, eine, einen...).
                        <br/>
                        <em>z.B. Ich habe <strong>einen</strong> Ball -&gt; Ich habe <strong>meinen</strong> Ball.</em>
                     </div>
                </div>

                {/* Question Words */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-de-black">W-Fragen (Kasus)</h4>
                    <div className="space-y-2 text-sm text-de-black">
                        <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Nominativ</span>
                            <span className="font-bold">Wer? / Was?</span>
                        </div>
                         <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Akkusativ</span>
                            <span className="font-bold">Wen? / Was? / Wohin?</span>
                        </div>
                         <div className="flex justify-between border-b border-gray-200 pb-1">
                            <span className="font-medium">Dativ</span>
                            <span className="font-bold">Wem? / Wo? / Wann?</span>
                        </div>
                         <div className="flex justify-between">
                            <span className="font-medium">Genitiv</span>
                            <span className="font-bold">Wessen?</span>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-gray-500">Präpositionen</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <PrepositionList 
                    title="Akkusativ (Dogfu)" 
                    items={["durch", "ohne", "gegen", "für", "um", "bis", "entlang"]}
                    colorClass="border-akk text-akk"
                />
                <PrepositionList 
                    title="Dativ (Blue)" 
                    items={["aus", "außer", "bei", "mit", "nach", "seit", "von", "zu", "gegenüber"]}
                    colorClass="border-dativ text-dativ"
                />
                <PrepositionList 
                    title="Wechsel (2-Way)" 
                    items={["an", "auf", "hinter", "in", "neben", "über", "unter", "vor", "zwischen"]}
                    colorClass="border-wechsel text-wechsel"
                />
                <PrepositionList 
                    title="Genitiv" 
                    items={["wegen", "während", "trotz", "statt", "anstatt", "außerhalb", "innerhalb"]}
                    colorClass="border-genitiv text-genitiv"
                />
            </div>
        </div>

      </div>
    </div>
  );
};
