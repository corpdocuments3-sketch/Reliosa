import type { LucideIcon } from 'lucide-react';
import {
  Globe,
  Lightbulb,
  Wrench,
  MapPin,
  TrendingUp,
  Target,
  Zap,
} from 'lucide-react';

export const CAREERS_TAGLINE = 'Build the future of construction teamwork.';

export const CAREERS_INTRO =
  "At Reliosa, we're creating a smarter way for construction teams to manage projects, collaborate, and stay in control. We believe great products come from great people—and we're always looking for driven individuals who want to make an impact.";

export type CareersSection = {
  icon: LucideIcon;
  title: string;
  description?: string;
  bullets: string[];
  /** Optional callout line below bullets (e.g. open roles) */
  footnote?: string;
};

export const CAREERS_SECTIONS: CareersSection[] = [
  {
    icon: Globe,
    title: 'Why Work With Us',
    description: "We're not just building software—we're solving real problems for real teams.",
    bullets: [
      'Work on a product used in real-world construction environments',
      'Be part of a fast-growing SaaS startup',
      'Take ownership and see your work make an impact',
      'Collaborate with a focused, ambitious team',
      'Learn, grow, and build meaningful skills',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Our Culture',
    description: 'We keep things simple, practical, and results-driven.',
    bullets: [
      'Ownership First – You take responsibility and drive outcomes',
      'Clarity Over Complexity – We build solutions that actually work',
      'Team Over Ego – We win together',
      'Continuous Improvement – Always learning, always evolving',
    ],
  },
  {
    icon: Wrench,
    title: "What You'll Work On",
    description: "At Reliosa, you'll help build tools that power construction teams daily.",
    bullets: [
      'Project and workflow management systems',
      'Real-time collaboration tools',
      'Secure document handling systems',
      'Scalable SaaS infrastructure',
      'User-focused product improvements',
    ],
  },
  {
    icon: MapPin,
    title: 'Open Roles',
    description: "We're currently hiring for:",
    bullets: [
      'Frontend Developer (React / Next.js)',
      'Backend Developer (Node.js / APIs)',
      'Product Designer (UI/UX)',
      'Customer Success Associate',
      'Operations / Project Coordinator',
    ],
    footnote: "Don't see your role? We still want to hear from you.",
  },
  {
    icon: TrendingUp,
    title: 'Growth & Opportunities',
    description: 'We invest in people who want to grow.',
    bullets: [
      'Hands-on learning with real projects',
      'Opportunity to take leadership roles early',
      'Work closely with founders',
      'Build skills across product, tech, and business',
    ],
  },
  {
    icon: Target,
    title: "Who We're Looking For",
    description: 'People who are:',
    bullets: [
      'Self-driven and proactive',
      'Comfortable with responsibility',
      'Problem-solvers, not just task-doers',
      'Interested in SaaS, startups, and real-world impact',
      'Ready to build something meaningful',
    ],
  },
];

export const CAREERS_JOIN_HEADING = 'Join Us';

export const CAREERS_JOIN_INTRO = 'Want to be part of Reliosa?';

export const CAREERS_JOIN_BODY =
  'Send your resume and a short introduction using the address below. Or tell us what you can bring to the team—we value skills and mindset over titles.';

export const CAREERS_EMAIL = 'careers@reliosa.com';

export const CAREERS_CLOSING_TITLE = "Let's Build Something That Matters";

export const CAREERS_CLOSING_LINE =
  'Reliosa is growing—and this is your chance to grow with it.';

export const CareersClosingIcon = Zap;
