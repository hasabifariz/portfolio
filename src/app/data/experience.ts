// Add a job: put it at the TOP of EXPERIENCE (newest first). Set active: true only on your current job.

export interface TimelineItem {
  date: string;
  title: string;
  company: string;
  desc: string;
  active: boolean;
}

export const EXPERIENCE: TimelineItem[] = [
  {
    date: 'Dec 2025 — present',
    title: 'Front-end Developer',
    company: 'PT Flexo Solusi Indonesia (Flexofast) · Contract, on-site',
    desc: 'Merged two legacy systems into one Angular WMS codebase, built the shared UI library (data tables, dropdowns, file upload/download, barcode scanning), and unified the API service pattern. Implemented auth, RBAC, session guards, background exports, and Elastic APM error tracking in production.',
    active: true,
  },
  {
    date: 'Sep 2024 — Mar 2025',
    title: 'Front-end Developer',
    company: 'PT ADI Consulting Indonesia · Placement at Arya Noble',
    desc: 'Built internal web applications with ReactJS, PrimeReact, and Tailwind. Turned Figma designs into responsive interfaces and worked Jira tickets through a regular release cycle, backed by code review and SonarQube quality gates.',
    active: false,
  },
  {
    date: 'Jun 2023 — Feb 2024',
    title: 'Front-end Developer',
    company: 'PT Indocyber Global Teknologi · Placement at AXA AFI',
    desc: 'Built UI components for claims processing and user management, integrated APIs with the backend team, and wrote responsive HTML email templates for consistent rendering across mail clients.',
    active: false,
  },
  {
    date: 'Nov 2021 — May 2023',
    title: 'Front-end Developer',
    company: 'PT Soluix Finteknologi Indonesia',
    desc: 'Worked across four client products — AJAIB (Bank Bumi Arta), Kawan Lama Invoice Portal, Clarity e-commerce platform, and WMS Honda — building interfaces with ReactJS and MaterialUI.',
    active: false,
  },
  {
    date: 'Nov 2020 — Mar 2021',
    title: 'Web Developer',
    company: 'PT Hexacore Bina Sejahtera · Projects for Telkom Indonesia',
    desc: 'Built the ITAM IT asset management system and refactored the UIMax inventory platform, using PugHTML, Node.js, Express.js, SemanticUI, and Neo4J.',
    active: false,
  },
];
