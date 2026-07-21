import React, { useEffect, useState } from 'react';
import { BookOpen, Brain, Check, ChevronDown, Clock3, GraduationCap, HelpCircle, LayoutList, RotateCcw, Sparkles, Target } from 'lucide-react';
import { TabView } from '../types';

type Navigate = (tab: TabView, anchor?: string) => void;

type Mission = {
  id: string;
  stage: 'A0' | 'A1' | 'A2' | 'B1';
  title: string;
  promise: string;
  topics: string[];
  tasks: string[];
  practice: { label: string; tab: TabView; anchor?: string }[];
};

const MISSIONS: Mission[] = [
  {
    id: 'a0-sound', stage: 'A0', title: 'Meet German', promise: 'Read German sounds and survive your first greeting.',
    topics: ['alphabet & umlauts', 'greetings', 'please / thanks', 'numbers 0–20'],
    tasks: ['Listen and repeat 10 short words', 'Say a 4-line greeting aloud', 'Recall numbers 0–20 without looking'],
    practice: [{ label: 'Find starter words', tab: 'dictionary' }],
  },
  {
    id: 'a0-sentence', stage: 'A0', title: 'Build a tiny sentence', promise: 'Introduce yourself with sein, haben and a verb in position 2.',
    topics: ['ich / du / Sie', 'sein & haben', 'verb position 2', 'W-questions'],
    tasks: ['Write 5 “Ich bin / habe …” sentences', 'Ask and answer 3 W-questions', 'Read every sentence aloud twice'],
    practice: [{ label: 'Learn sentence order', tab: 'grammar', anchor: 'sentences' }, { label: 'Search sein & haben', tab: 'dictionary' }],
  },
  {
    id: 'a0-life', stage: 'A0', title: 'Your first daily German', promise: 'Talk simply about time, food, family and your routine.',
    topics: ['days & time', 'family', 'food', 'common present verbs'],
    tasks: ['Learn 5 useful words with their context', 'Describe one day in 5 short sentences', 'Review all A0 cards from memory'],
    practice: [{ label: 'Browse vocabulary', tab: 'dictionary' }, { label: 'Try noun articles', tab: 'noun-quiz' }],
  },
  {
    id: 'a1-nouns', stage: 'A1', title: 'Control nouns and articles', promise: 'Use der, die, das, ein/eine and plurals with confidence.',
    topics: ['noun gender', 'plural forms', 'nominative', 'kein / nicht'],
    tasks: ['Learn nouns as article + noun + plural', 'Sort 15 nouns by gender', 'Reach a 5-answer noun-quiz streak'],
    practice: [{ label: 'Gender patterns', tab: 'grammar', anchor: 'noun-gender' }, { label: 'Noun quiz', tab: 'noun-quiz' }],
  },
  {
    id: 'a1-objects', stage: 'A1', title: 'Add people and things', promise: 'Use nominative and accusative in useful everyday sentences.',
    topics: ['accusative articles', 'personal pronouns', 'common verbs', 'word order'],
    tasks: ['Highlight subject, verb and object in 5 sentences', 'Change 5 masculine nouns from der to den', 'Complete one verb-quiz round'],
    practice: [{ label: 'Case guide', tab: 'grammar', anchor: 'cases' }, { label: 'Verb quiz', tab: 'verb-quiz' }],
  },
  {
    id: 'a1-verbs', stage: 'A1', title: 'Make verbs work for you', promise: 'Use modal, separable and imperative forms in daily situations.',
    topics: ['modal verbs', 'separable verbs', 'imperative', 'sentence bracket'],
    tasks: ['Conjugate 3 high-frequency verbs', 'Write 5 sentences with können or müssen', 'Give 3 friendly instructions aloud'],
    practice: [{ label: 'Verb patterns', tab: 'grammar', anchor: 'verbs' }, { label: 'Search modal verbs', tab: 'dictionary' }],
  },
  {
    id: 'a2-cases', stage: 'A2', title: 'Meet the dative', promise: 'Talk about recipients, locations and fixed dative verbs.',
    topics: ['dative articles', 'dative pronouns', 'two objects', 'dative verbs'],
    tasks: ['Answer 5 questions with wem?', 'Write 5 sentences using mit, bei or zu', 'Contrast accusative and dative examples'],
    practice: [{ label: 'Review cases', tab: 'grammar', anchor: 'cases' }, { label: 'Filter dative verbs', tab: 'dictionary' }],
  },
  {
    id: 'a2-past', stage: 'A2', title: 'Tell what happened', promise: 'Build the Perfekt and use common simple-past forms.',
    topics: ['haben / sein + Partizip II', 'separable prefixes', 'war / hatte', 'modal past'],
    tasks: ['Tell yesterday in 6 sentences', 'Group 10 verbs by haben or sein', 'Retell the story without notes'],
    practice: [{ label: 'Perfect & past', tab: 'grammar', anchor: 'verbs' }, { label: 'Inspect verb cards', tab: 'dictionary' }],
  },
  {
    id: 'a2-connect', stage: 'A2', title: 'Connect your ideas', promise: 'Explain reasons, conditions and contrasts without losing word order.',
    topics: ['weil / dass / wenn', 'deshalb / trotzdem', 'two-way prepositions', 'adjective endings'],
    tasks: ['Join 5 sentence pairs with weil', 'Say 3 Wo/Wohin pairs', 'Describe 5 nouns with adjectives'],
    practice: [{ label: 'Sentence connectors', tab: 'grammar', anchor: 'sentences' }, { label: 'Prepositions', tab: 'grammar', anchor: 'prepositions' }],
  },
  {
    id: 'b1-detail', stage: 'B1', title: 'Speak with detail', promise: 'Use relative clauses and precise adjective forms.',
    topics: ['relative clauses', 'adjective declension', 'comparison', 'word building'],
    tasks: ['Describe 5 people or objects with relative clauses', 'Choose adjective endings in 8 examples', 'Create 5 related words from known roots'],
    practice: [{ label: 'Adjective guide', tab: 'grammar', anchor: 'adjectives' }, { label: 'B1 grammar', tab: 'grammar', anchor: 'sentences' }],
  },
  {
    id: 'b1-nuance', stage: 'B1', title: 'Add nuance and politeness', promise: 'Express wishes, advice, possibility and impersonal actions.',
    topics: ['Konjunktiv II', 'passive voice', 'indirect questions', 'verbs with prepositions'],
    tasks: ['Make 5 polite requests', 'Rewrite 3 active sentences in passive', 'Ask 3 indirect questions'],
    practice: [{ label: 'B1 focus', tab: 'grammar', anchor: 'b1-grammar' }, { label: 'Prepositional verbs', tab: 'dictionary' }],
  },
  {
    id: 'b1-hero', stage: 'B1', title: 'Become an independent learner', promise: 'Understand, produce and repair your own German.',
    topics: ['reading & listening', 'connected speaking', 'structured writing', 'error review'],
    tasks: ['Speak for 3 minutes on a familiar topic', 'Write 120 words and correct them', 'Complete both quizzes and record weak points'],
    practice: [{ label: 'Verb challenge', tab: 'verb-quiz' }, { label: 'Noun challenge', tab: 'noun-quiz' }],
  },
];

const STAGES = [
  { id: 'A0', label: 'Zero → first sentences', range: 'Weeks 1–2', color: 'bg-gray-900', text: 'Start with sound, survival language and tiny sentences.' },
  { id: 'A1', label: 'Foundation', range: 'Weeks 3–8', color: 'bg-green-600', text: 'Handle familiar daily situations with simple language.' },
  { id: 'A2', label: 'Everyday independence', range: 'Weeks 9–18', color: 'bg-blue-600', text: 'Connect ideas and talk about past, place and people.' },
  { id: 'B1', label: 'Confident communication', range: 'Weeks 19–30+', color: 'bg-violet-600', text: 'Explain opinions, experiences and plans in connected German.' },
] as const;

const STORAGE_KEY = 'deutsch-meister-learning-path-v1';
const ALL_TASK_IDS = MISSIONS.flatMap(mission => mission.tasks.map((_, index) => `${mission.id}-${index}`));

export const LearningPathView: React.FC<{ onNavigate: Navigate }> = ({ onNavigate }) => {
  const [completed, setCompleted] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed: unknown = JSON.parse(saved);
        if (Array.isArray(parsed)) setCompleted(parsed.filter((id): id is string => typeof id === 'string' && ALL_TASK_IDS.includes(id)));
      }
    } catch {
      // Progress still works for this session when storage is unavailable.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(completed)); } catch { /* no-op */ }
  }, [completed, ready]);

  const nextMission = MISSIONS.find(mission => mission.tasks.some((_, index) => !completed.includes(`${mission.id}-${index}`))) ?? MISSIONS[MISSIONS.length - 1];
  const courseComplete = completed.length === ALL_TASK_IDS.length;
  const percent = Math.round((completed.length / ALL_TASK_IDS.length) * 100);

  const toggleTask = (id: string) => setCompleted(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  const resetProgress = () => {
    if (window.confirm('Reset every learning-path checkbox?')) setCompleted([]);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20">
      <div className="overflow-hidden rounded-xl border-t-4 border-de-gold bg-white shadow-xl">
        <header className="bg-[linear-gradient(135deg,#111_0%,#252525_62%,#3a2600_100%)] px-6 py-10 text-white sm:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-de-gold px-3 py-1 text-xs font-bold uppercase tracking-widest text-black"><Sparkles size={14} /> Zero to B1</span>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Your German learning path</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg">Learn a little, retrieve it from memory, use it, then revisit it. This guide tells you what to do next and connects every step to your practice tools.</p>
          </div>
        </header>

        <div className="p-5 sm:p-8 lg:p-10">
          <section className="grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-gray-500">Your progress</p>
                  <p className="mt-1 font-display text-3xl text-de-black">{percent}% complete</p>
                </div>
                <button onClick={resetProgress} className="inline-flex min-h-11 items-center gap-2 rounded-lg px-3 text-sm font-bold text-gray-500 hover:bg-white hover:text-de-red focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"><RotateCcw size={16} /> Reset</button>
              </div>
              <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200" role="progressbar" aria-label="Course progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={percent}>
                <div className="h-full rounded-full bg-[linear-gradient(90deg,#111_0%,#DD0000_55%,#FFCE00_100%)] transition-all" style={{ width: `${percent}%` }} />
              </div>
              <p className="mt-3 text-sm text-gray-600">{completed.length} of {ALL_TASK_IDS.length} small learning actions completed. Progress is saved on this device.</p>
            </div>

            <div className="rounded-xl border border-de-gold/60 bg-yellow-50 p-5 sm:p-6">
              <div className="flex items-center gap-3"><Target className="text-de-red" /><p className="font-bold text-de-black">{courseComplete ? 'Roadmap complete' : 'Your next mission'}</p></div>
              <p className="mt-3 text-xl font-bold text-de-black">{courseComplete ? 'You reached the B1 hero checkpoint!' : <><span className="text-de-red">{nextMission.stage}</span> · {nextMission.title}</>}</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-600">{courseComplete ? 'Keep your German alive through reading, conversation, writing and regular retrieval.' : nextMission.promise}</p>
              {courseComplete
                ? <button onClick={() => onNavigate('verb-quiz')} className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-de-black px-4 py-2 text-sm font-bold text-de-gold hover:bg-de-red hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">Take a challenge</button>
                : <a href={`#${nextMission.id}`} className="mt-4 inline-flex min-h-11 items-center rounded-lg bg-de-black px-4 py-2 text-sm font-bold text-de-gold hover:bg-de-red hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">Continue here</a>}
            </div>
          </section>

          <section className="mt-8 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
              <div className="flex items-center gap-3"><Clock3 className="text-blue-700" /><h3 className="font-display text-2xl">The 25-minute session</h3></div>
              <ol className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  ['1 · Retrieve', '5 min: say yesterday’s words and rule without looking.'],
                  ['2 · Learn', '8 min: only 5 new words and one small grammar pattern.'],
                  ['3 · Use', '7 min: speak or write three personal sentences.'],
                  ['4 · Test', '5 min: quiz yourself, then record one weak point.'],
                ].map(([title, text]) => <li key={title} className="rounded-lg border border-blue-100 bg-white p-3"><strong className="text-blue-800">{title}</strong><span className="mt-1 block leading-relaxed text-gray-600">{text}</span></li>)}
              </ol>
            </div>

            <div className="rounded-xl border border-violet-100 bg-violet-50 p-5 sm:p-6">
              <div className="flex items-center gap-3"><Brain className="text-violet-700" /><h3 className="font-display text-2xl">Make it stick</h3></div>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">Do not reread until it feels familiar. Close the page and pull the answer from memory—even a failed attempt strengthens the next review.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Today', 'Tomorrow', '3 days', '7 days', '14 days', '30 days'].map((day, index) => <span key={day} className={`rounded-full px-3 py-2 text-xs font-bold ${index === 0 ? 'bg-violet-700 text-white' : 'border border-violet-200 bg-white text-violet-800'}`}>{day}</span>)}
              </div>
              <p className="mt-4 text-xs text-violet-900"><strong>Vocabulary rule:</strong> learn <em>der Tisch · die Tische · Ich sitze am Tisch</em>, never “Tisch = table” alone.</p>
            </div>
          </section>

          <section className="mt-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-de-red">The roadmap</p>
              <h3 className="mt-2 font-display text-3xl sm:text-4xl">One stage at a time</h3>
              <p className="mt-2 leading-relaxed text-gray-600">Weeks are a gentle guide, not a deadline. Move forward when you can use the skill, and keep reviewing older missions.</p>
            </div>

            <div className="mt-8 space-y-8">
              {STAGES.map(stage => {
                const missions = MISSIONS.filter(mission => mission.stage === stage.id);
                const stageTaskIds = missions.flatMap(mission => mission.tasks.map((_, index) => `${mission.id}-${index}`));
                const stageDone = stageTaskIds.filter(id => completed.includes(id)).length;
                return (
                  <section key={stage.id} className="rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <span className={`${stage.color} flex h-12 w-12 shrink-0 items-center justify-center rounded-xl font-display text-lg text-white`}>{stage.id}</span>
                        <div><h4 className="font-display text-2xl text-de-black">{stage.label}</h4><p className="mt-1 text-sm text-gray-600">{stage.range} · {stage.text}</p></div>
                      </div>
                      <span className="self-start rounded-full bg-white px-3 py-2 text-xs font-bold text-gray-600 sm:self-auto">{stageDone}/{stageTaskIds.length} actions</span>
                    </div>

                    <div className="mt-5 grid gap-4 xl:grid-cols-3">
                      {missions.map(mission => {
                        const missionDone = mission.tasks.every((_, index) => completed.includes(`${mission.id}-${index}`));
                        return (
                          <details id={mission.id} key={mission.id} className="group scroll-mt-28 rounded-xl border border-gray-200 bg-white shadow-sm open:ring-2 open:ring-de-gold/30">
                            <summary className="flex cursor-pointer list-none items-start justify-between gap-3 p-5 focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50">
                              <div>
                                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${missionDone ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>{missionDone && <Check size={11} />}{mission.stage} mission</span>
                                <h5 className="mt-3 text-lg font-bold text-de-black">{mission.title}</h5>
                                <p className="mt-1 text-sm leading-relaxed text-gray-500">{mission.promise}</p>
                              </div>
                              <ChevronDown className="mt-1 shrink-0 text-gray-400 transition-transform group-open:rotate-180" size={20} />
                            </summary>
                            <div className="border-t border-gray-100 px-5 pb-5 pt-4">
                              <div className="flex flex-wrap gap-2">{mission.topics.map(topic => <span key={topic} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-600">{topic}</span>)}</div>
                              <p className="mb-2 mt-5 text-xs font-bold uppercase tracking-wider text-gray-400">Do these actions</p>
                              <div className="space-y-2">
                                {mission.tasks.map((task, index) => {
                                  const id = `${mission.id}-${index}`;
                                  const checked = completed.includes(id);
                                  return <label key={id} className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-100 p-3 hover:bg-yellow-50"><input type="checkbox" checked={checked} onChange={() => toggleTask(id)} className="sr-only" /><span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border ${checked ? 'border-green-600 bg-green-600 text-white' : 'border-gray-300 bg-white text-transparent'}`}><Check size={14} /></span><span className={`text-sm leading-relaxed ${checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>{task}</span></label>;
                                })}
                              </div>
                              <div className="mt-5 flex flex-wrap gap-2">
                                {mission.practice.map(link => <button key={link.label} onClick={() => onNavigate(link.tab, link.anchor)} className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-de-black px-3 py-2 text-xs font-bold text-white hover:bg-de-red focus:outline-none focus-visible:ring-4 focus-visible:ring-de-gold/50"><BookOpen size={14} /> {link.label}</button>)}
                              </div>
                            </div>
                          </details>
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-gray-200 bg-de-black p-6 text-white sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-3"><GraduationCap className="text-de-gold" /><h3 className="font-display text-2xl">A simple weekly rhythm</h3></div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-gray-300"><strong className="text-white">Mon–Thu:</strong> learn and use one small pattern. <strong className="text-white">Friday:</strong> retrieve the week without notes. <strong className="text-white">Weekend:</strong> take a quiz, enjoy German media, and repair weak points.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button onClick={() => onNavigate('dictionary')} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black hover:bg-de-gold"><BookOpen size={16} /> Learn</button>
                <button onClick={() => onNavigate('grammar')} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-bold text-black hover:bg-de-gold"><LayoutList size={16} /> Review</button>
                <button onClick={() => onNavigate('verb-quiz')} className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-de-red px-4 py-2 text-sm font-bold text-white hover:bg-de-gold hover:text-black"><HelpCircle size={16} /> Test</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
