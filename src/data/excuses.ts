export interface Excuse {
  id: number;
  category: 'INFRA' | 'FRONTEND' | 'BACKEND' | 'COSMIC';
  headline: string;
  explanation: string;
  stampText: string;
  riskLevel: string;
}

export const DEV_EXCUSES: Excuse[] = [
  {
    id: 1,
    category: 'INFRA',
    headline: 'IT WORKED IN DOCKER LOCALLY',
    explanation: 'The container had 32GB of RAM allocated on my laptop and zero network latency. Production only has 512MB and a dream.',
    stampText: 'CERTIFIED CONTAINER DRIFT',
    riskLevel: 'SEV-1 / NOT MY FAULT',
  },
  {
    id: 2,
    category: 'COSMIC',
    headline: 'HIGH-ALTITUDE COSMIC RAY BIT FLIP',
    explanation: 'An ionizing particle from deep space struck the AWS us-east-1 server rack and flipped a single boolean from true to false.',
    stampText: 'ACT OF GOD / PHYSICS',
    riskLevel: 'UNREPRODUCIBLE',
  },
  {
    id: 3,
    category: 'FRONTEND',
    headline: 'STALE SERVICE WORKER CACHE',
    explanation: 'The code is flawless. The user simply needs to hard-refresh, clear localStorage, delete cookies, and buy a new router.',
    stampText: 'WORKS IN INCOGNITO',
    riskLevel: 'USER ERROR',
  },
  {
    id: 4,
    category: 'BACKEND',
    headline: 'EVENTUAL CONSISTENCY WASN’T EVENTUAL ENOUGH',
    explanation: 'The database write succeeded spiritually, even if the read replica hasn’t heard about it yet.',
    stampText: 'RACE CONDITION SURVIVOR',
    riskLevel: 'TRANSIENT GLITCH',
  },
  {
    id: 5,
    category: 'INFRA',
    headline: 'DNS PROPAGATION LAG',
    explanation: 'Somewhere between Cloudflare, Route53, and the ISP, packets are taking the scenic route through 2014.',
    stampText: 'IT’S ALWAYS DNS',
    riskLevel: 'WAITING 24–48 HRS',
  },
  {
    id: 6,
    category: 'BACKEND',
    headline: 'THIRD-PARTY API SILENTLY CHANGED SCHEMA',
    explanation: 'They turned an integer into a nullable string on a Friday afternoon without bumping the API version.',
    stampText: 'UPSTREAM BETRAYAL',
    riskLevel: 'EXTERNAL BLAME',
  },
  {
    id: 7,
    category: 'FRONTEND',
    headline: 'SAFARI RENDERING ENGINE QUIRK',
    explanation: 'Everything aligns to the sub-pixel on Chrome, Firefox, and Edge. Safari decided CSS Flexbox is merely a suggestion.',
    stampText: 'SAFARI IS THE NEW IE',
    riskLevel: 'WONTFIX',
  },
  {
    id: 8,
    category: 'COSMIC',
    headline: 'TIMEZONE / DAYLIGHT SAVINGS EDGE CASE',
    explanation: 'The cron job assumed every day has 24 hours and every region respects UTC. Reality disagreed.',
    stampText: 'CHRONOLOGICAL ANOMALY',
    riskLevel: 'TRY AGAIN TOMORROW',
  },
];

export const BADGE_THEMES = {
  amber: {
    name: 'Hazard Amber',
    bg: 'bg-amber-400',
    text: 'text-zinc-950',
    border: 'border-zinc-950',
    accent: 'bg-zinc-950 text-amber-400',
  },
  crimson: {
    name: 'Prod Down Red',
    bg: 'bg-rose-600',
    text: 'text-white',
    border: 'border-rose-200',
    accent: 'bg-zinc-950 text-rose-400',
  },
  terminal: {
    name: 'Matrix Green',
    bg: 'bg-zinc-900',
    text: 'text-emerald-400',
    border: 'border-emerald-500',
    accent: 'bg-emerald-500 text-zinc-950',
  },
} as const;

export type ThemeKey = keyof typeof BADGE_THEMES;