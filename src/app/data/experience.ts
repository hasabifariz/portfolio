// Add a job: put it at the TOP of EXPERIENCE (newest first). Set active: true only on your current job.
// Each entry in points is one bullet.

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  points: string[];
  active: boolean;
}

export const EXPERIENCE: TimelineItem[] = [
  {
    date: 'Dec 2025 — present',
    title: 'Front-end Developer',
    company: 'PT Flexo Solusi Indonesia (Flexofast) · Contract, on-site',
    points: [
      'Merged two legacy systems into one Angular WMS codebase, with a shared UI library (data tables, file upload/download, barcode scanning) and one API service pattern.',
      'Implemented auth, RBAC, session guards, background exports and Elastic APM error tracking in production.',
      'Built FlexoAcademy, a training platform for warehouse staff, couriers and drivers: FastAPI + MySQL backend with 80+ endpoints, JWT auth and SSO.',
      'Built Flexo Sales CRM in Next.js to replace the shared Excel sales report: a Kanban pipeline that handles 400+ deals per stage, server-side role access and 360+ unit tests.',
    ],
    active: true,
  },
  {
    date: 'Sep 2024 — Mar 2025',
    title: 'Front-end Developer',
    company: 'PT ADI Consulting Indonesia · Placement at Arya Noble',
    points: [
      'Built internal web applications with ReactJS, PrimeReact and Tailwind.',
      'Turned Figma designs into responsive interfaces.',
      'Worked Jira tickets through a regular release cycle, backed by code review and SonarQube quality gates.',
    ],
    active: false,
  },
  {
    date: 'Jun 2023 — Feb 2024',
    title: 'Front-end Developer',
    company: 'PT Indocyber Global Teknologi · Placement at AXA AFI',
    points: [
      'Built UI components for claims processing and user management.',
      'Integrated APIs with the backend team.',
      'Wrote responsive HTML email templates that render consistently across mail clients.',
    ],
    active: false,
  },
  {
    date: 'Nov 2021 — May 2023',
    title: 'Front-end Developer',
    company: 'PT Soluix Finteknologi Indonesia',
    points: [
      'Built interfaces with ReactJS and MaterialUI across four client products.',
      'Clients: AJAIB (Bank Bumi Arta), Kawan Lama Invoice Portal, Clarity e-commerce and WMS Honda.',
    ],
    active: false,
  },
  {
    date: 'Nov 2020 — Mar 2021',
    title: 'Web Developer',
    company: 'PT Hexacore Bina Sejahtera · Projects for Telkom Indonesia',
    points: [
      'Built the ITAM IT asset management system for Telkom Indonesia.',
      'Refactored the UIMax inventory platform to be easier to maintain and faster to run.',
      'Stack: PugHTML, Node.js, Express.js, SemanticUI and Neo4J.',
    ],
    active: false,
  },
];
