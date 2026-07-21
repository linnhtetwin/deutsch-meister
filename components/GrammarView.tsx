
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

const PatternLine = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="grid gap-1 border-b border-gray-100 py-2 last:border-0 sm:grid-cols-[7.5rem_1fr]">
    <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{label}</span>
    <span className="text-sm leading-relaxed text-gray-700">{children}</span>
  </div>
);

const TopicDetails = ({ title, level, summary, children }: { title: string; level: string; summary: string; children: React.ReactNode }) => (
  <details className="group rounded-xl border border-gray-200 bg-white shadow-sm open:ring-2 open:ring-de-gold/30">
    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 rounded-xl p-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">
      <span>
        <span className="block font-bold text-de-black">{title} <LevelBadge level={level} /></span>
        <span className="mt-1 block text-sm leading-relaxed text-gray-500">{summary}</span>
      </span>
      <span aria-hidden="true" className="mt-1 text-xl text-gray-400 transition-transform group-open:rotate-45">+</span>
    </summary>
    <div className="border-t border-gray-100 px-5 pb-5 pt-3">{children}</div>
  </details>
);

const TopicNav = () => (
  <nav aria-label="Grammar topics" className="mb-12 rounded-xl border border-gray-200 bg-gray-50 p-4">
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">Jump to a topic</p>
    <div className="flex flex-wrap gap-2 text-sm">
      {[
        ['#cases', 'Cases'],
        ['#adjectives', 'Adjectives'],
        ['#verbs', 'Verbs'],
        ['#pronouns', 'Pronouns'],
        ['#sentences', 'Sentences'],
        ['#prepositions', 'Prepositions'],
        ['#word-building', 'Words & dates'],
      ].map(([href, label]) => (
        <a key={href} href={href} className="rounded-full border border-gray-200 bg-white px-3 py-2 font-medium text-gray-700 transition hover:border-de-red hover:text-de-red focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">
          {label}
        </a>
      ))}
    </div>
  </nav>
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
            <td className="p-3 font-bold text-blue-700">A2</td>
            <td className="border-l border-gray-100 p-3">Futur I</td>
            <td className="border-l border-gray-100 p-3">Promise, prediction, or emphasis on the future</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich werde morgen arbeiten.</td>
          </tr>
          <tr className="border-t border-gray-100">
            <td className="p-3 font-bold text-violet-700">B1</td>
            <td className="border-l border-gray-100 p-3">Plusquamperfekt</td>
            <td className="border-l border-gray-100 p-3">An action completed before another past action</td>
            <td className="border-l border-gray-100 p-3 font-mono text-xs">Ich hatte schon gegessen.</td>
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

        <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 sm:p-6">
            <h4 className="font-bold text-de-black text-lg">Conjunctions: remember 3 patterns</h4>
            <p className="mt-1 text-sm text-gray-600">Look at the word after the comma. Then choose where the verb goes.</p>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
                <div className="rounded-lg border border-yellow-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-100 font-bold text-yellow-800">1</span>
                        <div>
                            <p className="font-bold text-de-black">Normal order</p>
                            <p className="text-xs text-gray-500">und, aber, oder, denn, sondern</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Start with the subject, then the verb.</p>
                    <p className="mt-3 rounded bg-gray-50 p-3 text-sm text-gray-700">
                        Ich bleibe zu Hause, <strong>denn ich <span className="text-de-red">bin</span></strong> krank.
                    </p>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-800">2</span>
                        <div>
                            <p className="font-bold text-de-black">Verb directly after</p>
                            <p className="text-xs text-gray-500">deshalb, trotzdem, dann, sonst</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Put the verb immediately after the connector.</p>
                    <p className="mt-3 rounded bg-gray-50 p-3 text-sm text-gray-700">
                        Ich bin krank. <strong>Deshalb <span className="text-de-red">bleibe</span></strong> ich zu Hause.
                    </p>
                </div>

                <div className="rounded-lg border border-red-200 bg-white p-4 shadow-sm">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-800">3</span>
                        <div>
                            <p className="font-bold text-de-black">Verb at the end</p>
                            <p className="text-xs text-gray-500">weil, dass, wenn, obwohl, falls</p>
                        </div>
                    </div>
                    <p className="text-sm text-gray-600">Save the conjugated verb for the end.</p>
                    <p className="mt-3 rounded bg-gray-50 p-3 text-sm text-gray-700">
                        Ich bleibe zu Hause, <strong>weil</strong> ich krank <strong className="text-de-red">bin</strong>.
                    </p>
                </div>
            </div>

            <div className="mt-5 rounded-lg border border-indigo-100 bg-white p-4 text-sm text-gray-700">
                <strong className="text-indigo-900">Quick memory:</strong> subject + verb · connector + verb · verb at the end
            </div>

            <details className="mt-4 rounded-lg border border-indigo-100 bg-white">
                <summary className="cursor-pointer px-4 py-3 text-sm font-bold text-indigo-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">
                    More B1 connectors
                </summary>
                <div className="grid gap-3 border-t border-indigo-100 p-4 text-sm sm:grid-cols-2">
                    <p><strong>Verb at the end:</strong> da, ob, bevor, nachdem, seitdem, bis, damit, sodass, indem</p>
                    <p><strong>Pairs:</strong> entweder … oder, sowohl … als auch, weder … noch, je … desto</p>
                </div>
            </details>
        </div>

        <div className="mt-6">
            <TopicDetails title="Indirect questions" level="B1" summary="Keep the question word—or use ob for a yes/no question—and move the verb to the end.">
                <PatternLine label="W-question">Wo ist der Bahnhof? → Wissen Sie, <strong>wo</strong> der Bahnhof <strong>ist</strong>?</PatternLine>
                <PatternLine label="Yes / no">Kommt sie heute? → Weißt du, <strong>ob</strong> sie heute <strong>kommt</strong>?</PatternLine>
                <p className="mt-3 text-xs text-gray-500">This follows pattern 3 above: the conjugated verb waits until the end.</p>
            </TopicDetails>
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
        <div className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm">
            <h4 className="font-bold text-de-black">Degree particles</h4>
            <p className="mt-1 text-sm text-gray-600">These small words strengthen or weaken an adjective or adverb; they do not change their form.</p>
            <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded bg-emerald-50 p-3"><strong>++</strong> total, besonders</div>
                <div className="rounded bg-emerald-50 p-3"><strong>+</strong> echt, ziemlich, wirklich</div>
                <div className="rounded bg-emerald-50 p-3"><strong>−</strong> nicht so, nicht besonders</div>
                <div className="rounded bg-emerald-50 p-3"><strong>−−</strong> gar nicht, überhaupt nicht</div>
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

const NounAdjectiveExtensions = () => (
  <div className="mb-10 grid gap-4 lg:grid-cols-2">
    <TopicDetails
      title="N-declension nouns"
      level="A2"
      summary="Some masculine people and animals add -(e)n outside the nominative singular."
    >
      <PatternLine label="Nominative">der Kollege · ein Kunde · der Junge</PatternLine>
      <PatternLine label="Other cases">den/dem/des Kolleg<strong>en</strong> · Kund<strong>en</strong> · Jung<strong>en</strong></PatternLine>
      <p className="mt-3 text-xs leading-relaxed text-gray-500">Common signals include masculine nouns ending in <strong>-e</strong>, plus words such as <strong>Herr, Mensch, Student, Tourist</strong>.</p>
    </TopicDetails>

    <TopicDetails
      title="Adjectives used as nouns"
      level="A2"
      summary="The adjective keeps its normal ending and begins with a capital letter."
    >
      <PatternLine label="Person">der Bekannt<strong>e</strong> · ein Bekannt<strong>er</strong> · die Bekannt<strong>e</strong></PatternLine>
      <PatternLine label="Plural">die Bekannt<strong>en</strong> · keine Bekannt<strong>en</strong></PatternLine>
      <PatternLine label="Idea/thing">etwas Neu<strong>es</strong> · nichts Interessant<strong>es</strong></PatternLine>
      <p className="mt-3 text-xs text-gray-500">Choose the ending from the adjective tables above; only the missing noun is implied.</p>
    </TopicDetails>

    <TopicDetails
      title="Participles as adjectives"
      level="B1"
      summary="A participle can describe a noun and then takes an adjective ending."
    >
      <PatternLine label="Partizip I">wohnen → wohnend → der wohnend<strong>e</strong> Student</PatternLine>
      <PatternLine label="Partizip II">schreiben → geschrieben → der geschrieben<strong>e</strong> Brief</PatternLine>
      <p className="mt-3 text-xs text-gray-500"><strong>Partizip I</strong> is usually verb stem + <strong>-d</strong>. Both participles then follow the same declension rules as other adjectives.</p>
    </TopicDetails>

    <TopicDetails
      title="Comparison and adjective endings"
      level="A2-B1"
      summary="Comparative and superlative forms can also stand before nouns."
    >
      <PatternLine label="Regular">klein → klein<strong>er</strong> → am klein<strong>sten</strong></PatternLine>
      <PatternLine label="Irregular">gut → besser → am besten · gern → lieber → am liebsten · viel → mehr → am meisten</PatternLine>
      <PatternLine label="Before noun">ein größer<strong>es</strong> Problem · mit einem größer<strong>en</strong> Problem</PatternLine>
      <PatternLine label="Compare">größer <strong>als</strong> · genauso groß <strong>wie</strong></PatternLine>
      <p className="mt-3 text-xs text-gray-500">Build the comparative first, then add the ending required by article, gender and case.</p>
    </TopicDetails>
  </div>
);

const PronounObjectPatterns = () => (
  <div className="mb-10 grid gap-4 lg:grid-cols-2">
    <TopicDetails title="Indefinite pronouns" level="A2" summary="Use these when the person or thing is unknown, general, or already understood.">
      <PatternLine label="People">jemand · niemand · man</PatternLine>
      <PatternLine label="Things">etwas · nichts · alles</PatternLine>
      <PatternLine label="From ein/kein">einer, eine, eins · keiner, keine, keins</PatternLine>
      <p className="mt-3 text-xs text-gray-500">Example: Ich brauche einen Stift. Hast du <strong>einen</strong>? — Nein, ich habe <strong>keinen</strong>.</p>
    </TopicDetails>

    <TopicDetails title="What kind of …?" level="A2" summary="Was für ein asks about type or quality; only ein changes for gender and case.">
      <PatternLine label="Question">Was für <strong>ein</strong> Kurs? · Was für <strong>eine</strong> Prüfung?</PatternLine>
      <PatternLine label="Accusative">Was für <strong>einen</strong> Film siehst du?</PatternLine>
      <PatternLine label="Plural">Was für Bücher liest du? (no ein)</PatternLine>
    </TopicDetails>

    <TopicDetails title="Two objects: simple order" level="A2" summary="Put the dative person before the accusative thing in the usual neutral sentence.">
      <PatternLine label="Two nouns">Ich schenke <strong>meinem Bruder</strong> <strong>das Buch</strong>.</PatternLine>
      <PatternLine label="Pronoun first">Ich schenke <strong>es</strong> meinem Bruder. · Ich schenke <strong>ihm</strong> das Buch.</PatternLine>
      <PatternLine label="Two pronouns">Ich schenke <strong>es ihm</strong>.</PatternLine>
    </TopicDetails>

    <TopicDetails title="Possession with von" level="A1-A2" summary="In everyday German, von + dative is a simple alternative to the genitive.">
      <PatternLine label="Genitive">Annas Mutter · die Mutter meines Freundes</PatternLine>
      <PatternLine label="von + Dat.">die Mutter <strong>von Anna</strong> · das Auto <strong>von meinem Freund</strong></PatternLine>
    </TopicDetails>
  </div>
);

const PracticalVerbPatterns = () => (
  <div className="mb-16">
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        <h3 className="font-display text-2xl text-de-black">Practical Verb Patterns <LevelBadge level="A1-B1" /></h3>
        <p className="mt-1 text-sm text-gray-500">Open only the pattern you need; the conjugation tables above remain the reference.</p>
      </div>
    </div>
    <div className="grid gap-4 lg:grid-cols-2">
      <TopicDetails title="Future and earlier past" level="A2-B1" summary="Use a sentence bracket: the conjugated helper comes early and the main form closes the sentence.">
        <PatternLine label="Futur I">Ich <strong>werde</strong> morgen länger <strong>arbeiten</strong>.</PatternLine>
        <PatternLine label="Promise">Ich <strong>werde</strong> keinen Termin <strong>vergessen</strong>.</PatternLine>
        <PatternLine label="Plusquamperfekt">Ich <strong>hatte</strong> schon <strong>gegessen</strong>, bevor er kam.</PatternLine>
        <p className="mt-3 text-xs text-gray-500">German often uses the present tense with a time word for plans: <em>Morgen arbeite ich länger.</em></p>
      </TopicDetails>

      <TopicDetails title="Imperative and polite requests" level="A1-A2" summary="Choose the form by who you are addressing; omit the pronoun with du and ihr.">
        <PatternLine label="du">Komm mit! · Fahr langsam! · Sei leise!</PatternLine>
        <PatternLine label="ihr">Kommt mit! · Fahrt langsam! · Seid leise!</PatternLine>
        <PatternLine label="Sie">Kommen Sie bitte mit! · Seien Sie bitte leise!</PatternLine>
        <PatternLine label="Softer">Könnten Sie mir bitte helfen?</PatternLine>
      </TopicDetails>

      <TopicDetails title="Verbs with dative" level="A2" summary="A small group of common verbs asks for a dative person, not an accusative object.">
        <PatternLine label="Pattern">Das Hemd <strong>gefällt mir</strong>. · Der Mantel <strong>steht dir</strong>.</PatternLine>
        <PatternLine label="Common verbs">helfen, danken, gefallen, gehören, passen, schmecken, fehlen, folgen</PatternLine>
        <p className="mt-3 text-xs text-gray-500">Ask <strong>Wem?</strong>: Wem gefällt das Hemd? — Mir.</p>
      </TopicDetails>

      <TopicDetails title="Infinitive with zu" level="A2" summary="Use zu when a second action depends on many verbs, adjectives or noun expressions.">
        <PatternLine label="Simple">Ich versuche, früher <strong>zu schlafen</strong>.</PatternLine>
        <PatternLine label="Separable">Fang an, die Bewerbung <strong>auszufüllen</strong>.</PatternLine>
        <PatternLine label="No zu">After modal verbs and <strong>lassen, sehen, hören, gehen</strong>: Ich muss arbeiten.</PatternLine>
      </TopicDetails>

      <TopicDetails title="Useful expressions with es" level="A2" summary="Many impersonal statements use es as a fixed placeholder subject.">
        <PatternLine label="Situation">Es ist leicht/schwierig/möglich, Deutsch zu lernen.</PatternLine>
        <PatternLine label="Weather/time">Es regnet. · Es ist Viertel nach acht.</PatternLine>
        <PatternLine label="Existence">Es gibt hier einen Supermarkt. (+ accusative)</PatternLine>
      </TopicDetails>

      <TopicDetails title="Build the Perfekt" level="A1-A2" summary="The prefix tells you where ge- goes—or whether it disappears.">
        <PatternLine label="Separable">kennenlernen → kennengelernt · einkaufen → eingekauft</PatternLine>
        <PatternLine label="Inseparable">besuchen → besucht · verstehen → verstanden (no ge-)</PatternLine>
        <PatternLine label="-ieren">telefonieren → telefoniert · studieren → studiert (no ge-)</PatternLine>
        <p className="mt-3 text-xs text-gray-500">Most verbs use <strong>haben</strong>; movement or change-of-state verbs often use <strong>sein</strong>.</p>
      </TopicDetails>

      <TopicDetails title="Reflexive verbs" level="A2" summary="The reflexive pronoun refers back to the subject and changes with the person.">
        <PatternLine label="Pattern">Ich freue <strong>mich</strong>. · Du fühlst <strong>dich</strong> müde.</PatternLine>
        <PatternLine label="Common verbs">sich erinnern, sich interessieren, sich beeilen, sich ausruhen, sich treffen</PatternLine>
        <p className="mt-3 text-xs text-gray-500">Use the reflexive-pronoun table above when the subject changes.</p>
      </TopicDetails>

      <TopicDetails title="Modal verbs in the past" level="A2" summary="In everyday narration, modal verbs commonly use the simple past.">
        <PatternLine label="Forms">musste · konnte · wollte · durfte · sollte</PatternLine>
        <PatternLine label="Example">Ich <strong>musste</strong> arbeiten. · Wir <strong>konnten</strong> nicht kommen.</PatternLine>
      </TopicDetails>

      <TopicDetails title="lassen" level="B1" summary="Use lassen for permission, instruction, or having something done.">
        <PatternLine label="Permission">Sie <strong>lässt</strong> ihn ihr Konto prüfen.</PatternLine>
        <PatternLine label="Have done">Ich <strong>lasse</strong> mein Fahrrad reparieren.</PatternLine>
        <PatternLine label="Advice">Du <strong>solltest</strong> die Reifen wechseln lassen.</PatternLine>
      </TopicDetails>
    </div>
  </div>
);

const PrepositionsInUse = () => (
  <div id="prepositions" className="mb-16 scroll-mt-28">
    <h3 className="mb-2 font-display text-2xl border-l-4 border-prep pl-3">Prepositions in Use <LevelBadge level="A1-B1" /></h3>
    <p className="mb-6 pl-4 text-sm text-gray-500">These patterns apply the case lists below to the three questions learners use most.</p>
    <div className="grid gap-4 lg:grid-cols-2">
      <TopicDetails title="Time: duration, start and deadline" level="A1-A2" summary="Match the preposition to the question: how long, since when, or until when?">
        <PatternLine label="Duration">für + Akk.: für einen Monat · für zwei Wochen</PatternLine>
        <PatternLine label="Starting point">seit + Dat.: seit einem Jahr · seit der Ausbildung</PatternLine>
        <PatternLine label="Before/after">vor/nach + Dat.: vor dem Kurs · nach dem Training</PatternLine>
        <PatternLine label="Deadline/start">bis Freitag · ab morgen</PatternLine>
      </TopicDetails>

      <TopicDetails title="Place: Wo? or Wohin?" level="A2" summary="With two-way prepositions, location takes dative; destination takes accusative.">
        <PatternLine label="Wo? + Dat.">Ich bin <strong>in der</strong> Apotheke. · Das Bild hängt <strong>an der</strong> Wand.</PatternLine>
        <PatternLine label="Wohin? + Akk.">Ich gehe <strong>in die</strong> Apotheke. · Ich hänge das Bild <strong>an die</strong> Wand.</PatternLine>
        <PatternLine label="People">bei Maria → zu Maria</PatternLine>
        <PatternLine label="Countries">in Deutschland → nach Deutschland · in der Schweiz → in die Schweiz</PatternLine>
      </TopicDetails>

      <TopicDetails title="Verbs with fixed prepositions" level="A2-B1" summary="Learn the verb, preposition and case as one vocabulary unit.">
        <PatternLine label="+ Akk.">denken an · warten auf · sich freuen über · sprechen über</PatternLine>
        <PatternLine label="+ Dat.">teilnehmen an · sprechen mit · träumen von · gehören zu</PatternLine>
        <PatternLine label="Person">An wen denkst du? — An meine Schwester.</PatternLine>
        <PatternLine label="Thing">Woran denkst du? — An die Prüfung.</PatternLine>
      </TopicDetails>

      <TopicDetails title="da(r)- and wo(r)- compounds" level="B1" summary="Use wo(r)- to ask about things and da(r)- to refer back to them.">
        <PatternLine label="Consonant">mit → womit? / damit · von → wovon? / davon</PatternLine>
        <PatternLine label="Vowel">an → woran? / daran · über → worüber? / darüber</PatternLine>
        <p className="mt-3 text-xs text-gray-500">For people, keep preposition + pronoun: <strong>mit wem?</strong>, <strong>mit ihm</strong>.</p>
      </TopicDetails>

      <TopicDetails title="Direction: hin or her?" level="A2" summary="hin means away from the speaker; her means toward the speaker.">
        <PatternLine label="Away: hin">Wohin gehst du? — Ich gehe <strong>dorthin</strong>. · Geh hinein!</PatternLine>
        <PatternLine label="Toward: her">Woher kommst du? — Komm <strong>hierher</strong>! · Komm herein!</PatternLine>
        <PatternLine label="Short commands">Geh hinunter! · Komm herauf!</PatternLine>
      </TopicDetails>

      <TopicDetails title="Source and time span" level="A2" summary="Use Woher? for origin and these compact patterns for time ranges.">
        <PatternLine label="Woher?">aus dem Bus · aus der S-Bahn · vom Arzt · von der Tankstelle</PatternLine>
        <PatternLine label="From now">von Montag <strong>an</strong> · von heute <strong>an</strong></PatternLine>
        <PatternLine label="For a period"><strong>über</strong> eine Stunde · über das Wochenende</PatternLine>
      </TopicDetails>
    </div>
  </div>
);

const WordsAndDates = () => (
  <div id="word-building" className="mb-16 scroll-mt-28">
    <h3 className="mb-2 font-display text-2xl border-l-4 border-de-gold pl-3">Words & Dates <LevelBadge level="A1-B1" /></h3>
    <p className="mb-6 pl-4 text-sm text-gray-500">Compact formation rules from the screenshots; gender suffixes are already covered above.</p>
    <div className="grid gap-4 lg:grid-cols-2">
      <TopicDetails title="Ordinal numbers and dates" level="A1-A2" summary="Use -te through 19 and -ste from 20 onward, then add an adjective ending in a sentence.">
        <PatternLine label="1–19">erste, zweite, dritte, vierte … neunzehnte</PatternLine>
        <PatternLine label="20+">zwanzigste, einundzwanzigste …</PatternLine>
        <PatternLine label="When?">am zweiten Mai · vom zweiten bis zum zwanzigsten Mai</PatternLine>
      </TopicDetails>

      <TopicDetails title="Build new nouns" level="A2-B1" summary="German grows vocabulary through compounds, people suffixes and noun-forming endings.">
        <PatternLine label="Compound">das Volk + das Fest → das Volksfest · braten + die Wurst → die Bratwurst</PatternLine>
        <PatternLine label="Person">der Mechaniker → die Mechanikerin · der Arzt → die Ärztin</PatternLine>
        <PatternLine label="From verb">sich erinnern → die Erinnerung · herstellen → die Herstellung</PatternLine>
        <p className="mt-3 text-xs text-gray-500">In compounds, the <strong>last noun</strong> decides the article and plural.</p>
      </TopicDetails>

      <TopicDetails title="Build adjectives" level="B1" summary="A few productive endings help you understand and create related words.">
        <PatternLine label="-los">die Arbeit → arbeitslos · der Geschmack → geschmacklos</PatternLine>
        <PatternLine label="-isch / -ig">der Sturm → stürmisch · die Lust → lustig</PatternLine>
        <PatternLine label="-bar">benutzen → benutzbar · essen → essbar</PatternLine>
        <PatternLine label="un-">angenehm → unangenehm · möglich → unmöglich</PatternLine>
      </TopicDetails>
    </div>
  </div>
);

const B1GrammarSection = () => {
  const konjunktivData = [
    ["würde + Infinitive", "Ich würde gehen", "Du würdest gehen", "Er würde gehen", "Wir würden gehen", "Ihr würdet gehen", "Sie würden gehen"],
    ["hätte / wäre", "Ich hätte Zeit", "Du hättest Zeit", "Er wäre glücklich", "Wir wären bereit", "Ihr wärt hier", "Sie wären stolz"],
    ["könnte / sollte", "Ich könnte helfen", "Du solltest lernen", "Er könnte kommen", "Wir sollten gehen", "Ihr könntet fragen", "Sie sollten antworten"],
    ["Past: hätte/wäre + Partizip II", "Ich hätte angerufen", "Du wärst gekommen", "Er hätte geholfen", "Wir wären geblieben", "Ihr hättet gefragt", "Sie wären gefahren"],
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
    <div id="b1-grammar" className="mb-16 scroll-mt-28">
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
            <div><strong>With modal:</strong> Der Brief muss geschrieben werden.</div>
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
            <div>Ich fahre dorthin, <strong>wo</strong> es ruhig ist.</div>
            <div>Das ist alles, <strong>was</strong> ich weiß.</div>
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

        <TopicNav />
        <LevelRoadmap />
        <CorePatternsSection />
        <div id="cases" className="scroll-mt-28"><CaseDecisionSection /></div>
        <TenseProgressionSection />

        {/* 0. COMMON ENDINGS (New) */}
        <div id="noun-gender" className="mb-12 scroll-mt-28 border-b border-gray-100 pb-8">
            <h3 className="font-display text-2xl border-l-4 border-de-black pl-3 mb-6">
              Noun Gender & Endings <LevelBadge level="A1-A2" />
            </h3>
            <GenderEndings />
        </div>

        {/* 1. ADJEKTIVDEKLINATION */}
        <div id="adjectives" className="mb-16 scroll-mt-28">
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

            <NounAdjectiveExtensions />
        </div>

        {/* 2. VERBS (New) */}
        <div id="verbs" className="mb-16 scroll-mt-28">
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

        <PracticalVerbPatterns />

        {/* 3. PRONOMEN */}
        <div id="pronouns" className="mb-16 scroll-mt-28">
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

            <PronounObjectPatterns />
        </div>

        {/* 4. SENTENCE STRUCTURE (New) */}
        <div id="sentences" className="scroll-mt-28"><SentenceStructureSection /></div>

        {/* 5. B1 GRAMMAR */}
        <B1GrammarSection />

        {/* 6. ADVERBS (New) */}
        <AdverbSection />

        <PrepositionsInUse />

        <WordsAndDates />

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
