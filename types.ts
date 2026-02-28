
export type CaseType = 
  | 'Dativ' 
  | 'Akkusativ' 
  | 'Genitiv' 
  | 'Wechselpräposition (Akkusativ)' 
  | 'Wechselpräposition (Dativ)' 
  | 'Präpositionalverb + Akk' 
  | 'Präpositionalverb + Dativ'
  | 'Intransitiv'
  | 'Modalverb';

export type ArticleType = 'Der' | 'Die' | 'Das';
export type ItemType = 'verb' | 'noun';

export interface VerbItem {
  type: 'verb';
  de: string;
  en: string;
  case: CaseType;
  ex: string;
  
  // Conjugation Details - Singular
  pres_ich: string;
  pres_du: string;
  pres: string; // er/sie/es (3rd Person Sg)
  
  past_ich: string;
  past_du: string;
  past: string; // er/sie/es (3rd Person Sg)

  // Conjugation Details - Plural
  pres_wir: string;
  pres_ihr: string;
  pres_sie: string;

  past_wir: string;
  past_ihr: string;
  past_sie: string;
  
  perf: string; // Perfekt (er/sie/es)
  isTrap: boolean;
}

export interface NounItem {
  type: 'noun';
  art: ArticleType;
  de: string;
  en: string;
  pl: string;
  ex: string;
}

export type DatabaseItem = VerbItem | NounItem;

export type TabView = 'dictionary' | 'verb-quiz' | 'noun-quiz' | 'guide' | 'grammar';