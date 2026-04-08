export type Topic = {
  name: string;
  notes: string;
};

export const prelimsTopics: Topic[] = [
  { name: "Polity", notes: "Laxmikanth + PYQs + current constitutional amendments" },
  { name: "Modern History", notes: "Spectrum timeline and freedom movement themes" },
  { name: "Environment", notes: "Protected areas, climate conventions, biodiversity" },
  { name: "Economy", notes: "Budget, survey, macro indicators, basic concepts" },
  { name: "Science & Tech", notes: "Applications in news, space, biotech, defense" }
];

export const mainsTopics: Topic[] = [
  { name: "GS-1", notes: "Indian society, history, geography with value-added examples" },
  { name: "GS-2", notes: "Constitution, governance, social justice, IR" },
  { name: "GS-3", notes: "Economy, security, environment, science-tech" },
  { name: "GS-4", notes: "Ethics definitions, case-study framework, quotes" },
  { name: "Essay", notes: "Theme bank, intro-body-conclusion patterns" }
];
