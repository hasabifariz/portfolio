// Add a project: append an object to PROJECTS. Order here = order on the page.

export interface Project {
  title: string;
  description: string;
  tags: string[];
  thumbCells: ('hot' | 'mid' | 'light' | 'faint')[];
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Flexofast — FlexoAcademy LMS',
    description:
      'Training platform for warehouse staff, couriers and drivers, replacing paper attendance that HR couldn\'t use in audits. FastAPI + MySQL backend with 80+ endpoints, JWT auth and SSO, plus a React PWA for Android that saves test answers offline and syncs later. Covers room booking with clash detection, check-in, server-graded pre/post tests and Excel reports. Training records stay tamper-proof through append-only tables enforced by MySQL triggers.',
    tags: ['React', 'TypeScript', 'FastAPI', 'MySQL'],
    thumbCells: ['light','hot','faint','mid','light','mid','light','hot','faint','light'],
  },
  {
    title: 'Flexofast — Flexo Sales CRM',
    description:
      'Next.js sales CRM replacing the shared Excel sales report, with separate data per team. Drag-and-drop Kanban pipeline that stays smooth with 400+ deals in one stage, follow-ups, activity logs, a follow-up calendar, and dashboards for win rate, weighted pipeline and forecast. Server-side role access (Superadmin, Manager, Sales Rep), Excel import with duplicate detection, 360+ unit tests, shipped as a Docker image.',
    tags: ['Next.js', 'TypeScript', 'MySQL', 'atlaskit/pragmatic-drag-and-drop'],
    thumbCells: ['mid','faint','hot','light','mid','light','hot','faint','light','mid'],
  },
  {
    title: 'Flexofast — WMS ',
    description:
      'Warehouse management system covering receiving, inventory, picking, order processing, and reporting. Includes barcode scanning, background Excel exports with polling, and a mobile interface for warehouse floor operations.',
    tags: ['Angular', 'PrimeNG', 'RxJS', 'TypeScript'],
    thumbCells: ['hot','light','mid','light','faint','light','faint','light','hot','mid'],
  },
  {
    title: 'Arya Noble — Internal Web Apps',
    description:
      'Internal web applications for a beauty, skincare, and wellness company. Turned Figma designs into responsive interfaces and worked through Jira tickets on a regular release cycle.',
    tags: ['React', 'PrimeReact', 'Tailwind'],
    thumbCells: ['mid','light','hot','faint','light','hot','light','faint','mid','light'],
  },
  {
    title: 'AXA AFI — Claims & User Management',
    description:
      'UI components for claims processing and user management at an insurance and financial services company, plus responsive HTML email templates for consistent rendering across mail clients.',
    tags: ['UI Components', 'API Integration', 'HTML Email'],
    thumbCells: ['light','hot','mid','light','faint','light','hot','faint','light','mid'],
  },
  {
    title: 'AJAIB — Bank Bumi Arta',
    description:
      'User interfaces built from Functional Specification Documents and integrated with the supporting APIs for a banking client.',
    tags: ['React', 'API Integration'],
    thumbCells: ['faint','mid','light','hot','light','faint','mid','light','hot','light'],
  },
  {
    title: 'Kawan Lama Group — Invoice Portal',
    description:
      'Web-based invoice management system covering tenants, users, and transactions, with real-time invoice generation and data updates built in ReactJS and MaterialUI.',
    tags: ['React', 'MaterialUI', 'JavaScript'],
    thumbCells: ['mid','hot','light','faint','mid','faint','light','hot','mid','light'],
  },
  {
    title: 'Clarity — E-commerce Platform & Admin Panel',
    description:
      'Furniture sales platform serving both public and LKPP procurement channels, with an admin panel for content and inventory management built in ReactJS and MaterialUI.',
    tags: ['React', 'MaterialUI', 'API Integration'],
    thumbCells: ['light','mid','hot','light','faint','hot','faint','mid','light','hot'],
  },
  {
    title: 'WMS Honda Line 1 & 2',
    description:
      'Extended a warehouse management system for inventory tracking and logistics, adding features for reporting, search, and tracking.',
    tags: ['React', 'MaterialUI'],
    thumbCells: ['hot','faint','light','mid','light','hot','light','faint','mid','light'],
  },
  {
    title: 'ITAM — IT Asset Management',
    description:
      'Web-based IT asset tracking and storage system built for Telkom Indonesia, with optimized database queries to cut down load times.',
    tags: ['Node.js', 'Express.js', 'Neo4J'],
    thumbCells: ['light','light','hot','faint','mid','light','faint','hot','light','mid'],
  },
  {
    title: 'UIMax — ISP & OSP',
    description:
      'Refactored a unified inventory management platform for Telkom Indonesia to be easier to maintain and faster to run, plus API queries feeding the reporting layer.',
    tags: ['Node.js', 'Express.js', 'Refactor'],
    thumbCells: ['mid','light','faint','hot','light','light','mid','faint','hot','light'],
  },
  {
    title: 'Portfolio — this site',
    description:
      'Single-page portfolio built with Angular, Tailwind CSS, GSAP ScrollTrigger animations, and Elms Sans typography.',
    tags: ['Angular', 'Tailwind', 'GSAP', 'Elms Sans'],
    thumbCells: ['faint','light','mid','hot','light','mid','hot','light','faint','mid'],
  },
];
