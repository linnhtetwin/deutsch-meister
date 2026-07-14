
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const TableHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="mb-4">
    <h3 className="text-xl font-display text-de-black uppercase tracking-wide">{title}</h3>
    <p className="text-sm text-gray-500 italic">{subtitle}</p>
  </div>
);

const LevelBadge = ({ level }: { level: string }) => (
  <span className="ml-2 inline-flex align-middle rounded bg-de-black px-2 py-0.5 text-xs font-bold uppercase tracking-wider text-de-gold">
    {level}
  </span>
);

const TeacherNote = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4 text-sm leading-relaxed text-yellow-900">
    <strong className="text-yellow-800">Teacher note:</strong> {children}
  </div>
);

const LevelRoadmap = () => (
  <div className="mb-12 rounded-lg border border-gray-200 bg-gray-50 p-5">
    <h3 className="mb-4 font-display text-2xl text-de-black">A1-B1 Grammar Roadmap</h3>
    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-lg border border-green-100 bg-white p-4 shadow-sm">
        <div className="mb-2 inline-flex rounded bg-green-100 px-2 py-1 text-xs font-bold uppercase tracking-wider text-green-800">A1 Foundation</div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>Sentence order:</strong> verb in position 2.</li>
          <li><strong>Articles:</strong> der, die, das; ein/eine.</li>
          <li><strong>Cases:</strong> nominative vs accusative first.</li>
          <li><strong>Verbs:</strong> present tense, haben, sein, modal verbs.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <div className="mb-2 inline-flex rounded bg-blue-100 px-2 py-1 text-xs font-bold uppercase tracking-wider text-blue-800">A2 Expansion</div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>Dative:</strong> with people, places, and fixed prepositions.</li>
          <li><strong>Perfect tense:</strong> haben/sein + Partizip II.</li>
          <li><strong>Separable verbs:</strong> einkaufen, aufstehen, mitkommen.</li>
          <li><strong>Subordinate clauses:</strong> weil, dass, wenn.</li>
        </ul>
      </div>
      <div className="rounded-lg border border-violet-100 bg-white p-4 shadow-sm">
        <div className="mb-2 inline-flex rounded bg-violet-100 px-2 py-1 text-xs font-bold uppercase tracking-wider text-violet-800">B1 Control</div>
        <ul className="space-y-2 text-sm text-gray-700">
          <li><strong>Adjective endings:</strong> weak, mixed, strong.</li>
          <li><strong>Relative clauses:</strong> der, das, die, dem, dessen.</li>
          <li><strong>Konjunktiv II:</strong> polite requests and wishes.</li>
          <li><strong>Passive:</strong> wird/wurde + Partizip II.</li>
        </ul>
      </div>
    </div>
  </div>
);

const CorePatternsSection = () => (
  <div className="mb-12">
    <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">
      Core Sentence Patterns <LevelBadge level="A1-A2" />
    </h3>
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h4 className="mb-3 font-bold text-de-black">Main Clause: Position 2</h4>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="rounded bg-gray-50 p-3 font-mono text-xs">
            <span className="text-blue-700">Ich</span> <strong className="text-de-red">lerne</strong> Deutsch.
          </div>
          <div className="rounded bg-gray-50 p-3 font-mono text-xs">
            <span className="text-blue-700">Heute</span> <strong className="text-de-red">lerne</strong> ich Deutsch.
          </div>
          <p>The conjugated verb stays in position 2. If time comes first, the subject moves after the verb.</p>
        </div>
      </div>
      <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
        <h4 className="mb-3 font-bold text-de-black">Subordinate Clause: Verb at the End</h4>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="rounded bg-gray-50 p-3 font-mono text-xs">
            Ich bleibe zu Hause, weil ich Deutsch <strong className="text-de-red">lerne</strong>.
          </div>
          <p>Use this pattern with <strong>weil, dass, wenn, obwohl, bevor, nachdem</strong>. This becomes very important from A2 to B1.</p>
        </div>
      </div>
    </div>
  </div>
);

const CaseDecisionSection = () => (
  <div className="mb-12">
    <h3 className="font-display text-2xl border-l-4 border-dativ pl-3 mb-6">
      Case Decision Guide <LevelBadge level="A1-B1" />
    </h3>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h4 className="font-bold text-de-black">Nominativ</h4>
        <p className="mt-2 text-sm text-gray-600">Who or what does the action?</p>
        <p className="mt-3 rounded bg-gray-50 p-2 text-xs font-mono">Der Mann kommt.</p>
      </div>
      <div className="rounded-lg border border-red-100 bg-white p-4 shadow-sm">
        <h4 className="font-bold text-akk">Akkusativ</h4>
        <p className="mt-2 text-sm text-gray-600">Direct object: whom or what?</p>
        <p className="mt-3 rounded bg-red-50 p-2 text-xs font-mono">Ich sehe den Mann.</p>
      </div>
      <div className="rounded-lg border border-blue-100 bg-white p-4 shadow-sm">
        <h4 className="font-bold text-dativ">Dativ</h4>
        <p className="mt-2 text-sm text-gray-600">Recipient, indirect object, or dative preposition.</p>
        <p className="mt-3 rounded bg-blue-50 p-2 text-xs font-mono">Ich helfe dem Mann.</p>
      </div>
      <div className="rounded-lg border border-violet-100 bg-white p-4 shadow-sm">
        <h4 className="font-bold text-genitiv">Genitiv</h4>
        <p className="mt-2 text-sm text-gray-600">Possession or formal written style. Mostly B1+.</p>
        <p className="mt-3 rounded bg-violet-50 p-2 text-xs font-mono">Das Auto des Mannes.</p>
      </div>
    </div>
    <div className="mt-4">
      <TeacherNote>
        For A1 learners, do not try to master every case ending at once. First recognize the subject, then the direct object. Add dative prepositions and dative verbs in A2, then genitive and adjective endings in B1.
      </TeacherNote>
    </div>
  </div>
);

const TenseProgressionSection = () => (
  <div className="mb-12">
    <h3 className="font-display text-2xl border-l-4 border-de-red pl-3 mb-6">
      Tense Progression <LevelBadge level="A1-B1" />
    </h3>
    <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
            <th className="p-3 font-bold">Level</th>
            <th className="border-l border-gray-100 p-3 font-bold">Tense / Form</th>
            <th className="border-l border-gray-100 p-3 font-bold">Use</th>
            <th className="border-l border-gray-100 p-3 font-bold">Example</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="border-t border-gray-100">
            <td className="p-3 font-bold text-green-700">A1</td>
            <td className="border-l border-gray-100 p-3">Präsens</td>
            <td className="border-l border-gray-100 p-3">Daily life, plans, routines</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich lerne Deutsch.</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-3 font-bold text-blue-700">A2</td>
            <td className="border-l border-gray-100 p-3">Perfekt</td>
            <td className="border-l border-gray-100 p-3">Spoken past</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich habe Deutsch gelernt.</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-3 font-bold text-blue-700">A2</td>
            <td className="border-l border-gray-100 p-3">Präteritum of sein/haben/modal verbs</td>
            <td className="border-l border-gray-100 p-3">Common narrative past</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich war krank. Ich musste arbeiten.</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-3 font-bold text-violet-700">B1</td>
            <td className="border-l border-gray-100 p-3">Konjunktiv II</td>
            <td className="border-l border-gray-100 p-3">Polite requests, wishes, advice</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich würde gern kommen.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ARTICLE_TABLE_HEADERS = ['Masculine (r)', 'Neuter (s)', 'Feminine (e)', 'Plural (n)'];
const PERSON_PRONOUN_HEADERS = ['ich', 'du', 'er', 'es', 'sie', 'wir', 'ihr', 'sie/Sie'];

const GrammarTable = ({ data, highlightColor, headers = ARTICLE_TABLE_HEADERS, smallText = false }: { data: string[][], highlightColor: string, headers?: string[], smallText?: boolean }) => (
  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-10 bg-white">
    <table className="w-full text-left text-sm border-collapse min-w-[500px]">
      <thead>
        <tr className="bg-gray-50 border-b border-gray-200">
          <th className="p-3 font-bold text-gray-400 uppercase tracking-tighter text-[10px] w-16">Case</th>
          {headers.map((header, index) => (
            <th key={`${header}-${index}`} className={`p-3 font-bold text-gray-800 border-l border-gray-100 ${headers.length === 4 ? 'w-1/4' : ''} ${headers.length === 4 && index === 1 ? 'bg-gray-50/30' : ''}`}>
              {header}
            </th>
          ))}
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
                   const isNeutrumCol = headers.length === 4 && j === 1;
                   return (
                    <td key={j} className={`p-3 border-l border-gray-100 ${smallText ? 'text-xs' : ''} ${isNeutrumCol ? 'bg-gray-50/30' : ''} ${isSpecial ? 'bg-yellow-50 text-de-black font-bold' : ''}`}>
                        {cell}
                    </td>
                   );
              }
              
              const article = parts[0];
              const adj = parts[1];
              const isNeutrumCol = headers.length === 4 && j === 1;

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
        <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">
          Sentence Structure & Conjunctions <LevelBadge level="A1-B1" />
        </h3>
        
        {/* General Rule: V2 & TeKaMoLo */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-10">
            <h4 className="font-bold text-de-black text-lg mb-4 flex items-center gap-2">
                General Rule: German Sentence Structure
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <p className="font-bold text-de-red mb-1">1. The V2 Rule (Verb Position 2)</p>
                        <p>In a standard main clause, the conjugated verb <strong>must</strong> be in the second position.</p>
                        <div className="bg-white p-2 rounded border border-gray-200 mt-2 font-mono text-xs">
                            <span className="text-blue-600">Ich</span> <span className="text-red-600 font-bold">gehe</span> heute nach Hause.
                            <br/>
                            <span className="text-blue-600">Heute</span> <span className="text-red-600 font-bold">gehe</span> ich nach Hause.
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-de-red mb-1">2. TeKaMoLo (Adverbial Order)</p>
                        <p>When using multiple adverbs, follow this order:</p>
                        <ul className="list-disc pl-5 mt-1 space-y-1">
                            <li><strong>Te</strong>mporal (When?)</li>
                            <li><strong>Ka</strong>usal (Why?)</li>
                            <li><strong>Mo</strong>dal (How?)</li>
                            <li><strong>Lo</strong>kal (Where?)</li>
                        </ul>
                    </div>
                </div>
                <div className="space-y-4 text-sm text-gray-700">
                    <div>
                        <p className="font-bold text-de-red mb-1">3. Questions (Verb Position 1)</p>
                        <p>In Yes/No questions, the verb moves to the first position.</p>
                        <div className="bg-white p-2 rounded border border-gray-200 mt-2 font-mono text-xs">
                            <span className="text-red-600 font-bold">Gehst</span> du heute nach Hause?
                        </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded border border-blue-100 text-xs italic">
                        <strong>Tip:</strong> If you start with something other than the subject (like "Heute"), the subject must jump to Position 3 to keep the verb at Position 2.
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mb-10">
            <h4 className="font-bold text-de-black text-lg mb-4">Conjunctions for B1</h4>
            <p className="text-sm text-gray-700 mb-4">
                For B1, learners should not only memorize connectors, but also know their word-order type: position 0, position 1, or subordinate clause with the verb at the end.
            </p>
            <div className="grid gap-4 lg:grid-cols-3">
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Reason & Result</p>
                    <p className="text-sm text-gray-600 mb-3">weil, da, denn, deshalb, deswegen, sodass</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        Ich bleibe zu Hause, <span className="font-bold">weil</span> ich krank <span className="text-de-red font-bold">bin</span>.
                        <br/>
                        Ich bin krank. <span className="font-bold">Deshalb</span> <span className="text-de-red font-bold">bleibe</span> ich zu Hause.
                        <br/>
                        Er hat den Bus genommen, <span className="font-bold">sodass</span> er pünktlich <span className="text-de-red font-bold">war</span>.
                    </div>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Contrast</p>
                    <p className="text-sm text-gray-600 mb-3">aber, sondern, obwohl, trotzdem, während</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        <span className="font-bold">Obwohl</span> es regnet, gehen wir spazieren.
                        <br/>
                        Es regnet. <span className="font-bold">Trotzdem</span> gehen wir spazieren.
                        <br/>
                        Ich trinke keinen Kaffee, <span className="font-bold">sondern</span> Tee.
                    </div>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Time</p>
                    <p className="text-sm text-gray-600 mb-3">wenn, als, bevor, nachdem, während, seitdem, bis, sobald, solange</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        <span className="font-bold">Als</span> ich Kind war, wohnte ich in Berlin.
                        <br/>
                        <span className="font-bold">Wenn</span> ich Zeit habe, lerne ich Deutsch.
                        <br/>
                        <span className="font-bold">Seitdem</span> ich hier wohne, spreche ich mehr Deutsch.
                    </div>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Condition & Indirect Question</p>
                    <p className="text-sm text-gray-600 mb-3">wenn, falls, ob</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        <span className="font-bold">Wenn</span> du Zeit hast, ruf mich an.
                        <br/>
                        <span className="font-bold">Falls</span> es regnet, bleiben wir zu Hause.
                        <br/>
                        Ich weiß nicht, <span className="font-bold">ob</span> er heute <span className="text-de-red font-bold">kommt</span>.
                    </div>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Purpose & Method</p>
                    <p className="text-sm text-gray-600 mb-3">damit, um ... zu, indem, ohne ... zu</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        Ich lerne Deutsch, <span className="font-bold">damit</span> ich in Deutschland arbeiten <span className="text-de-red font-bold">kann</span>.
                        <br/>
                        Ich lerne Deutsch, <span className="font-bold">um</span> eine Prüfung <span className="font-bold">zu</span> bestehen.
                        <br/>
                        Man lernt Wörter, <span className="font-bold">indem</span> man sie oft <span className="text-de-red font-bold">benutzt</span>.
                    </div>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-100">
                    <p className="font-bold text-de-black mb-2">Two-Part Connectors</p>
                    <p className="text-sm text-gray-600 mb-3">entweder ... oder, sowohl ... als auch, nicht nur ... sondern auch, weder ... noch</p>
                    <div className="bg-slate-50 p-3 rounded text-xs font-mono text-gray-700">
                        <span className="font-bold">Entweder</span> kommst du mit, <span className="font-bold">oder</span> du bleibst hier.
                        <br/>
                        Er ist <span className="font-bold">nicht nur</span> klug, <span className="font-bold">sondern auch</span> sehr fleißig.
                        <br/>
                        Sie ist <span className="font-bold">weder</span> müde <span className="font-bold">noch</span> krank.
                    </div>
                </div>
            </div>
            <div className="mt-6 overflow-x-auto rounded-lg border border-indigo-100 bg-white shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                    <thead>
                        <tr className="bg-indigo-50">
                            <th className="p-3 font-bold text-indigo-900">Type</th>
                            <th className="p-3 font-bold text-indigo-900 border-l border-indigo-100">Connectors</th>
                            <th className="p-3 font-bold text-indigo-900 border-l border-indigo-100">Word order</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-t border-indigo-100">
                            <td className="p-3 font-bold">Position 0</td>
                            <td className="p-3 border-l border-indigo-100">und, aber, oder, denn, sondern</td>
                            <td className="p-3 border-l border-indigo-100">Verb stays in position 2 after the subject.</td>
                        </tr>
                        <tr className="border-t border-indigo-100 bg-indigo-50/50">
                            <td className="p-3 font-bold">Position 1</td>
                            <td className="p-3 border-l border-indigo-100">deshalb, deswegen, trotzdem, dann, danach, sonst</td>
                            <td className="p-3 border-l border-indigo-100">Connector takes position 1, verb comes immediately after it.</td>
                        </tr>
                        <tr className="border-t border-indigo-100">
                            <td className="p-3 font-bold">Subordinate clause</td>
                            <td className="p-3 border-l border-indigo-100">weil, da, dass, ob, wenn, falls, obwohl, bevor, nachdem, seitdem, bis, sobald, solange, damit, sodass, indem</td>
                            <td className="p-3 border-l border-indigo-100">Conjugated verb goes to the end.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

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
                        {["weil (because)", "wenn (if/when)", "als (when)", "dass (that)", "obwohl (although)", "seit (since)", "damit (so that)", "falls (in case/if)"].map(w => (
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

const AdverbSection = () => (
    <div className="mb-16">
        <h3 className="font-display text-2xl border-l-4 border-emerald-500 pl-3 mb-6">
          Adverbs <LevelBadge level="A2-B1" />
        </h3>
        <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100 mb-8">
            <h4 className="font-bold text-de-black text-lg mb-4">What are Adverbs?</h4>
            <p className="text-sm text-gray-700 mb-4">
                Adverbs describe <strong>how, when, where, or why</strong> something happens. 
                Unlike adjectives, German adverbs <strong>never change their ending</strong> (no declension).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded border border-emerald-100 shadow-sm">
                    <h5 className="font-bold text-emerald-700 text-xs uppercase mb-2">Temporal (When?)</h5>
                    <ul className="text-xs space-y-1 text-gray-600">
                        <li>heute (today)</li>
                        <li>oft (often)</li>
                        <li>immer (always)</li>
                        <li>bald (soon)</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded border border-emerald-100 shadow-sm">
                    <h5 className="font-bold text-emerald-700 text-xs uppercase mb-2">Lokal (Where?)</h5>
                    <ul className="text-xs space-y-1 text-gray-600">
                        <li>hier (here)</li>
                        <li>dort (there)</li>
                        <li>überall (everywhere)</li>
                        <li>links (left)</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded border border-emerald-100 shadow-sm">
                    <h5 className="font-bold text-emerald-700 text-xs uppercase mb-2">Modal (How?)</h5>
                    <ul className="text-xs space-y-1 text-gray-600">
                        <li>gerne (gladly)</li>
                        <li>vielleicht (maybe)</li>
                        <li>sehr (very)</li>
                        <li>besonders (especially)</li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded border border-emerald-100 shadow-sm">
                    <h5 className="font-bold text-emerald-700 text-xs uppercase mb-2">Kausal (Why?)</h5>
                    <ul className="text-xs space-y-1 text-gray-600">
                        <li>deshalb (therefore)</li>
                        <li>darum (for that reason)</li>
                        <li>trotzdem (nevertheless)</li>
                    </ul>
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
                    <div className="flex justify-between"><span>er/es/sie</span> <strong className="text-de-red">-t</strong></div>
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
                    <div className="flex justify-between"><span>er/es/sie</span> <strong className="text-gray-600">-te</strong></div>
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

const B1GrammarSection = () => {
  const konjunktivData = [
    ["würde + Infinitive", "Ich würde gehen", "Du würdest gehen", "Er würde gehen", "Wir würden gehen", "Ihr würdet gehen", "Sie würden gehen"],
    ["hätte / wäre", "Ich hätte Zeit", "Du hättest Zeit", "Er wäre glücklich", "Wir wären bereit", "Ihr wärt hier", "Sie wären stolz"],
    ["könnte / sollte", "Ich könnte helfen", "Du solltest lernen", "Er könnte kommen", "Wir sollten gehen", "Ihr könntet fragen", "Sie sollten antworten"],
  ];

  const passiveData = [
    ["Present Passive", "Der Brief wird geschrieben.", "The letter is being written."],
    ["Past Passive", "Der Brief wurde geschrieben.", "The letter was written."],
    ["Perfect Passive", "Der Brief ist geschrieben worden.", "The letter has been written."],
  ];

  const relativePronounsData = [
    ["Nominative", "der", "das", "die", "die"],
    ["Accusative", "den", "das", "die", "die"],
    ["Dative", "dem", "dem", "der", "denen"],
    ["Genitive", "dessen", "dessen", "deren", "deren"],
  ];

  return (
    <div className="mb-16">
      <h3 className="font-display text-2xl border-l-4 border-violet-500 pl-3 mb-6">
        B1 Grammar Focus <LevelBadge level="B1" />
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h4 className="font-bold text-de-black mb-3">Konjunktiv II</h4>
          <p className="text-sm text-gray-600 mb-4">
            Use Konjunktiv II to talk about wishes, polite requests, or unreal situations.
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <div><strong>Ich würde</strong> gern helfen. (I would like to help.)</div>
            <div><strong>Wenn ich Zeit hätte</strong>, würde ich kommen. (If I had time, I would come.)</div>
            <div><strong>Du solltest</strong> das ausprobieren. (You should try that.)</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h4 className="font-bold text-de-black mb-3">Passive Voice</h4>
          <p className="text-sm text-gray-600 mb-4">
            The agent becomes optional and the action becomes the focus.
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <div><strong>Präsens:</strong> Der Brief wird geschrieben.</div>
            <div><strong>Präteritum:</strong> Der Brief wurde geschrieben.</div>
            <div><strong>Perfekt:</strong> Der Brief ist geschrieben worden.</div>
          </div>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          <h4 className="font-bold text-de-black mb-3">Relative Clauses</h4>
          <p className="text-sm text-gray-600 mb-4">
            The verb goes to the end of the relative clause.
          </p>
          <div className="space-y-3 text-sm text-gray-700">
            <div>Das ist der Mann, <strong>der</strong> das Buch liest.</div>
            <div>Ich kenne das Haus, <strong>in dem</strong> er wohnt.</div>
            <div>Die Frau, <strong>deren</strong> Auto kaputt ist, fährt heute nicht.</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-violet-50 p-4 border-b border-violet-100">
            <h4 className="font-bold text-de-black">B1 Konjunktiv II Table</h4>
          </div>
          <div className="p-4">
            <VerbGroupTable
              title="Konjunktiv II Patterns"
              headers={["Form", "ich", "du", "er/es/sie", "wir", "ihr", "sie/Sie"]}
              data={konjunktivData}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-violet-50 p-4 border-b border-violet-100">
            <h4 className="font-bold text-de-black">Relative Pronouns</h4>
          </div>
          <div className="p-4">
            <GrammarTable data={relativePronounsData} highlightColor="text-de-black" headers={ARTICLE_TABLE_HEADERS} />
          </div>
        </div>
      </div>
    </div>
  );
};

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
  // Headers: [Verb, Zeit, ich, du, er/es/sie, wir, ihr, sie/Sie]
  const auxData = [
    [<span className="font-bold">werden</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "werde", "wirst", "wird", "werden", "werdet", "werden"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "wurde", "wurdest", "wurde", "wurden", "wurdet", "wurden"],
    [<span className="font-bold">haben</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "habe", "hast", "hat", "haben", "habt", "haben"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "hatte", "hattest", "hatte", "hatten", "hattet", "hatten"],
    [<span className="font-bold">sein</span>, <span className="text-xs text-gray-400 font-bold uppercase">Pres</span>, "bin", "bist", "ist", "sind", "seid", "sind"],
    [<span className="font-bold"></span>, <span className="text-xs text-gray-400 font-bold uppercase">Past</span>, "war", "warst", "war", "waren", "wart", "waren"],
  ];

  // Modal Data
  const modalData = [
    ["wollen", "will", "willst", "will", "wollen", "wollt", "wollen"],
    ["sollen", "soll", "sollst", "soll", "sollen", "sollt", "sollen"],
    ["müssen", "muss", "musst", "muss", "müssen", "müsst", "müssen"],
    ["können", "kann", "kannst", "kann", "können", "könnt", "können"],
    ["dürfen", "darf", "darfst", "darf", "dürfen", "dürft", "dürfen"],
    ["mögen", "mag", "magst", "mag", "mögen", "mögt", "mögen"],
  ];


  return (
    <div className="max-w-6xl mx-auto px-4 pb-20">
      <div className="bg-white rounded-lg shadow-xl p-6 md:p-10 border-t-4 border-de-red">
        
        <div className="text-center mb-12">
            <h2 className="font-gothic text-5xl text-de-black mb-2">Grammar</h2>
            <p className="text-gray-500 font-display uppercase tracking-widest text-sm font-bold">A1-B1 Learning Path & Reference Tables</p>
        </div>

        <LevelRoadmap />
        <CorePatternsSection />
        <CaseDecisionSection />
        <TenseProgressionSection />

        {/* 0. COMMON ENDINGS (New) */}
        <div className="mb-12 border-b border-gray-100 pb-8">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">
              Noun Gender & Endings <LevelBadge level="A1-A2" />
            </h3>
            <GenderEndings />
        </div>

        {/* 1. ADJEKTIVDEKLINATION */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-gold pl-3 mb-6">
              Adjective Declension <LevelBadge level="A2-B1" />
            </h3>
            
            {/* Introduction */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h4 className="font-bold text-blue-800 text-lg mb-3">How Adjective Declension Works</h4>
                <p className="text-blue-900 mb-4">
                    German adjectives change their endings based on the article (or lack thereof) that precedes them. 
                    There are three main declension patterns:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded border">
                        <h5 className="font-bold text-sm uppercase text-blue-700 mb-2">Weak Declension</h5>
                        <p className="text-xs text-gray-600 mb-2">After definite articles (der, die, das, dieser, jeder, etc.)</p>
                        <p className="text-sm">Adjective usually ends in <strong className="text-art-der">-en</strong>, with <strong className="text-art-der">-e</strong> in nominative singular feminine/neuter.</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                        <h5 className="font-bold text-sm uppercase text-blue-700 mb-2">Mixed Declension</h5>
                        <p className="text-xs text-gray-600 mb-2">After indefinite articles (ein, eine, kein, mein, etc.)</p>
                        <p className="text-sm">Combines weak and strong endings. Nominative masculine/neuter get <strong className="text-art-die">-er/-es</strong>, others follow weak pattern.</p>
                    </div>
                    <div className="bg-white p-4 rounded border">
                        <h5 className="font-bold text-sm uppercase text-blue-700 mb-2">Strong Declension</h5>
                        <p className="text-xs text-gray-600 mb-2">Without article (materials, properties, indefinite plural)</p>
                        <p className="text-sm">Adjective takes the same endings as definite articles would have.</p>
                    </div>
                </div>
            </div>

            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="font-bold text-lg mb-4">Which adjective table should I use?</h4>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded border border-blue-100 bg-blue-50 p-4">
                        <h5 className="mb-2 font-bold text-blue-900">1. Definite Article</h5>
                        <p className="text-sm text-blue-900">Use this when the noun already has a strong signal: <strong>der, die, das, dieser, jeder, welcher</strong>.</p>
                        <p className="mt-3 rounded bg-white p-2 text-xs font-mono text-gray-700">der alte Mann</p>
                    </div>
                    <div className="rounded border border-red-100 bg-red-50 p-4">
                        <h5 className="mb-2 font-bold text-red-900">2. Indefinite Article</h5>
                        <p className="text-sm text-red-900">Use this after words like <strong>ein, eine, kein, mein, dein, sein, ihr</strong>.</p>
                        <p className="mt-3 rounded bg-white p-2 text-xs font-mono text-gray-700">ein alter Mann</p>
                    </div>
                    <div className="rounded border border-green-100 bg-green-50 p-4">
                        <h5 className="mb-2 font-bold text-green-900">3. Zero Article</h5>
                        <p className="text-sm text-green-900">Use this when there is no article before the adjective.</p>
                        <p className="mt-3 rounded bg-white p-2 text-xs font-mono text-gray-700">alter Wein</p>
                    </div>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                    The detailed tables below show the endings. This is easier for A2-B1 learners than reading one huge combined table.
                </p>
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
                <GrammarTable data={definiterData} highlightColor="text-art-der" headers={ARTICLE_TABLE_HEADERS} />
            </section>

            <section>
            <TableHeader 
                title="Indefinite Article" 
                subtitle="After: ein, eine, kein, mein, dein, sein, ihr..." 
            />
                <GrammarTable data={indefiniterData} highlightColor="text-art-die" headers={ARTICLE_TABLE_HEADERS} />
            </section>

            <section>
            <TableHeader 
                title="Zero Article" 
                subtitle="Without article (materials, properties, indefinite plural)." 
            />
            <StrongDeclensionExplanation />
            <GrammarTable data={nullartikelData} highlightColor="text-art-das" headers={ARTICLE_TABLE_HEADERS} />
            </section>
        </div>

        {/* 2. VERBS (New) */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-red pl-3 mb-6">
              Verbs & Auxiliary Verbs <LevelBadge level="A1-B1" />
            </h3>
            
            <VerbConjugationPatterns />

            <VerbGroupTable 
                title="Auxiliary Verbs" 
                headers={["Verb", "Tense", "ich", "du", "er/es/sie", "wir", "ihr", "sie/Sie"]}
                data={auxData}
            />

            <VerbGroupTable 
                title="Modal Verbs (Present)" 
                headers={["Verb", "ich", "du", "er/es/sie", "wir", "ihr", "sie/Sie"]}
                data={modalData}
                colWidths="w-1/6"
            />
        </div>

        {/* 3. PRONOMEN */}
        <div className="mb-16">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">
              Pronouns <LevelBadge level="A1-A2" />
            </h3>
            
            {/* Personal Pronouns Full */}
            <section className="mb-10">
                <TableHeader 
                    title="Personal Pronouns" 
                    subtitle="Full table of all persons and cases." 
                />
                <GrammarTable data={personalFullData} highlightColor="text-de-black" headers={PERSON_PRONOUN_HEADERS} smallText={true} />
            </section>

            {/* Reflexive */}
            <section className="mb-10">
                <TableHeader 
                    title="Reflexive Pronouns" 
                    subtitle="Back-referring pronouns (sich)." 
                />
                <GrammarTable data={reflexivData} highlightColor="text-de-black" headers={PERSON_PRONOUN_HEADERS} smallText={true} />
            </section>

            {/* Definitpronomen / Relativpronomen */}
            <section className="mb-10">
                <TableHeader 
                    title="Relative Pronouns / Definite Pronouns" 
                    subtitle="Identical to 'Der/Die/Das' but with special forms in Genitive & Dative Plural." 
                />
                <GrammarTable data={definitpronomenData} highlightColor="text-de-black" headers={ARTICLE_TABLE_HEADERS} />
            </section>
        </div>

        {/* 4. SENTENCE STRUCTURE (New) */}
        <SentenceStructureSection />

        {/* 5. B1 GRAMMAR */}
        <B1GrammarSection />

        {/* 6. ADVERBS (New) */}
        <AdverbSection />

        {/* 7. CHEAT SHEETS (Prepositions & Possessives) */}
        <div className="mb-8">
            <h3 className="font-display text-2xl border-l-4 border-gray-400 pl-3 mb-6">
              Quick Overview <LevelBadge level="A1-B1" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Possessives */}
                <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                     <h4 className="font-bold uppercase tracking-wider text-sm mb-4 text-de-black">Possessive Articles</h4>
                     <div className="grid grid-cols-2 gap-2 text-sm text-de-black mb-4">
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">ich</span><strong className="text-de-black ml-2">mein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">du</span><strong className="text-de-black ml-2">dein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">er/es</span><strong className="text-de-black ml-2">sein</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">sie</span><strong className="text-de-black ml-2">ihr</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">wir</span><strong className="text-de-black ml-2">unser</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">ihr</span><strong className="text-de-black ml-2">euer</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">sie</span><strong className="text-de-black ml-2">ihr</strong></div>
                        <div className="p-2 bg-white rounded border border-gray-100 flex justify-between items-center"><span className="text-gray-600 font-medium">Sie</span><strong className="text-de-black ml-2">Ihr</strong></div>
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
