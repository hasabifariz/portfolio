// Add a skill: append it to a group's items, or add a new { category, items } group.

export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { category: 'Frameworks',          items: ['Angular', 'ReactJS', 'Next.js'] },
  { category: 'UI Libraries',        items: ['PrimeNG', 'PrimeReact', 'MaterialUI', 'Tailwind CSS', 'PrimeFlex'] },
  { category: 'Languages',           items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'] },
  { category: 'State & Reactivity',  items: ['Angular Signals', 'React Hooks'] },
  { category: 'Backend & Data',      items: ['Node.js', 'Express.js', 'MySQL', 'Neo4J', 'JWT / SSO'] },
  { category: 'Tooling',             items: ['Git', 'GitKraken', 'Bitbucket', 'Docker'] },
  { category: 'Monitoring & QA',     items: ['Elastic APM (RUM)', 'SonarQube', 'Unit Testing'] },
  { category: 'Project Management',  items: ['Jira', 'ClickUp'] },
];
