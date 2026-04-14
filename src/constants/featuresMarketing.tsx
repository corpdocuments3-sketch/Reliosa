import type { LucideIcon } from 'lucide-react';
import {
  FolderKanban,
  FolderOpen,
  Calendar,
  Users,
  ListChecks,
  Shield,
  BarChart3,
  Layers,
  Sparkles,
  HardHat,
} from 'lucide-react';

export const FEATURES_TAGLINE = 'Features that Keep Your Projects Moving';

export const FEATURES_INTRO =
  'Gremso brings everything your construction team needs into one powerful, organized workspace—so you can focus on delivery, not coordination.';

export type MarketingFeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  /** Prose block instead of bullet list (e.g. “All-in-One Platform”) */
  body?: string;
};

/** Full feature set for /features; first six are used on the home page grid. */
export const MARKETING_FEATURES: MarketingFeatureItem[] = [
  {
    icon: FolderKanban,
    title: 'Project & Workflow Management',
    description: 'Plan, track, and execute projects with complete clarity.',
    bullets: [
      'Create and manage multiple projects in one place',
      'Assign tasks with deadlines and responsibilities',
      'Track progress from planning to handover',
      'Visualize workflows and identify bottlenecks early',
    ],
  },
  {
    icon: FolderOpen,
    title: 'Centralized Document Control',
    description: 'Keep every file exactly where your team expects it.',
    bullets: [
      'Store drawings, contracts, and reports securely',
      'Version control to avoid confusion and errors',
      'Quick access for both office and on-site teams',
      'Organized folders for every project',
    ],
  },
  {
    icon: Calendar,
    title: 'Smart Meeting Coordination',
    description: 'Never lose track of important discussions.',
    bullets: [
      'Schedule and manage meetings effortlessly',
      'Attach agendas, notes, and action points',
      'Keep meeting records linked to projects',
      'Ensure accountability with clear follow-ups',
    ],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Keep everyone aligned—office and field alike.',
    bullets: [
      'Real-time updates and communication',
      'Assign roles and responsibilities clearly',
      'Share updates across teams instantly',
      'Reduce miscommunication and delays',
    ],
  },
  {
    icon: ListChecks,
    title: 'Task Tracking & Accountability',
    description: 'Make sure nothing slips through the cracks.',
    bullets: [
      'Assign tasks with ownership and deadlines',
      'Monitor task completion in real-time',
      'Set priorities and track dependencies',
      'Maintain full accountability across teams',
    ],
  },
  {
    icon: Shield,
    title: 'Secure Access & Permissions',
    description: 'Control who sees what—without slowing down work.',
    bullets: [
      'Role-based access for team members',
      'Secure document sharing',
      'Workspace-level permissions',
      'Protect sensitive project data',
    ],
  },
  {
    icon: BarChart3,
    title: 'Operational Visibility',
    description: 'Stay in control of every moving part.',
    bullets: [
      'Monitor project status at a glance',
      'Track team performance and updates',
      'Identify delays before they escalate',
      'Maintain clarity across multiple job sites',
    ],
  },
  {
    icon: Layers,
    title: 'Workspace Organization for Scale',
    description: 'Grow your operations without losing structure.',
    bullets: [
      'Dedicated workspaces for different teams or projects',
      'Structured environments for better organization',
      'Easily manage multiple ongoing jobs',
      'Built for scaling construction businesses',
    ],
  },
  {
    icon: Sparkles,
    title: 'All-in-One Platform',
    description: 'No more switching between disconnected tools.',
    body: 'Gremso combines project tracking, document control, meetings, and collaboration into a single system—so your team works faster, smarter, and with fewer errors.',
  },
  {
    icon: HardHat,
    title: 'Built for Construction Teams',
    description: 'Designed specifically for how construction teams operate.',
    bullets: [
      'Site managers stay aligned with office teams',
      'Safety records and schedules stay organized',
      'Field updates are instantly visible',
      'Everything stays connected from start to finish',
    ],
  },
];

/** First six pillars — matches home grid and spec order through Secure Access. */
export const HOME_MARKETING_FEATURES = MARKETING_FEATURES.slice(0, 6);
