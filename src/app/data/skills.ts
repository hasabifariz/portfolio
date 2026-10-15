// Add a skill: append it to a group's items, or add a new { category, items } group.

export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Frameworks',          items: ['Angular', 'ReactJS'] },
  { category: 'UI Libraries',        items: ['PrimeNG', 'PrimeReact', 'MaterialUI', 'Tailwind CSS', 'PrimeFlex'] },
  { category: 'Languages',           items: ['TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'State & Reactivity',  items: ['RxJS', 'Angular Signals', 'React Hooks'] },
  { category: 'Backend',             items: ['Node.js', 'Express.js', 'Neo4J'] },
  { category: 'Tooling',             items: ['Git', 'GitKraken', 'Bitbucket', 'Docker'] },
  { category: 'Monitoring & QA',     items: ['Elastic APM (RUM)', 'SonarQube'] },
  { category: 'Project Management',  items: ['Jira', 'ClickUp'] },
];
