import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import {
  Rocket,
  FolderKanban,
  FolderOpen,
  Calendar,
  Users,
  BarChart3,
  Shield,
  CreditCard,
  Mail,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type HelpSection = {
  title: string;
  description: string;
  topics: string[];
  highlight: string;
  icon: LucideIcon;
};

const helpSections: HelpSection[] = [
  {
    title: 'Getting Started',
    description: 'New to Gremso? Start here.',
    topics: [
      'How to create your workspace',
      'Setting up your first project',
      'Inviting team members',
      'Understanding dashboards and navigation',
    ],
    highlight: 'Get up and running in minutes with a simple setup process.',
    icon: Rocket,
  },
  {
    title: 'Projects & Tasks',
    description: 'Manage your work efficiently from start to finish.',
    topics: [
      'Creating and organizing projects',
      'Assigning tasks and setting deadlines',
      'Tracking progress and updates',
      'Managing multiple projects',
    ],
    highlight: 'Stay on top of every job with clear visibility.',
    icon: FolderKanban,
  },
  {
    title: 'Documents & File Management',
    description: 'Keep your files organized and secure.',
    topics: [
      'Uploading and managing documents',
      'Version control and updates',
      'Structuring folders for projects',
      'Accessing files on-site and in office',
    ],
    highlight: 'Never lose track of important documents again.',
    icon: FolderOpen,
  },
  {
    title: 'Meetings & Communication',
    description: 'Keep discussions clear and actionable.',
    topics: [
      'Scheduling meetings',
      'Adding agendas and notes',
      'Linking meetings to projects',
      'Tracking follow-ups and decisions',
    ],
    highlight: 'Turn conversations into outcomes.',
    icon: Calendar,
  },
  {
    title: 'Team & Permissions',
    description: 'Control access and manage your team effectively.',
    topics: [
      'Adding and removing team members',
      'Setting roles and permissions',
      'Managing workspace access',
      'Keeping sensitive data secure',
    ],
    highlight: 'The right people see the right information.',
    icon: Users,
  },
  {
    title: 'Tracking & Updates',
    description: 'Monitor progress across all your projects.',
    topics: [
      'Viewing project status',
      'Tracking task completion',
      'Identifying delays',
      'Managing updates across teams',
    ],
    highlight: 'Stay informed without chasing updates.',
    icon: BarChart3,
  },
  {
    title: 'Security & Data Protection',
    description: 'Your data is safe with Gremso.',
    topics: [
      'Secure document storage',
      'Role-based access control',
      'Data privacy practices',
      'Backup and reliability',
    ],
    highlight: 'Built for trust and control.',
    icon: Shield,
  },
  {
    title: 'Account & Billing',
    description: 'Manage your account and plans with ease.',
    topics: [
      'Updating account details',
      'Managing subscriptions',
      'Billing and invoices',
      'Plan upgrades',
    ],
    highlight: 'Full control over your account settings.',
    icon: CreditCard,
  },
];

const faqs = [
  {
    question: 'Is Gremso suitable for small teams?',
    answer:
      'Yes, Gremso is designed to scale from small teams to large construction operations.',
  },
  {
    question: 'Can field teams use Gremso easily?',
    answer:
      "Yes, it's built to work for both on-site and office teams.",
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, Gremso uses structured access control and secure storage.',
  },
  {
    question: 'Can I manage multiple projects at once?',
    answer:
      'Absolutely, Gremso is designed for multi-project management.',
  },
];

export default function HelpCenter() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="border-b border-gray-100 bg-[#F6F3EE]/60 px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1F2937] sm:text-5xl">
              Gremso Help Center
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#6B7280] sm:text-xl">
              Everything you need to get started, manage your workspace, and keep
              your projects running smoothly.
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {helpSections.map((section) => (
                <article
                  key={section.title}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-gremso/30 hover:shadow-md sm:p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gremso-soft text-gremso-dark transition-colors duration-200 group-hover:bg-gremso group-hover:text-white">
                    <section.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{section.description}</p>
                  <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Topics
                  </h3>
                  <ul className="mt-3 space-y-2.5 text-sm text-gray-600">
                    {section.topics.map((topic) => (
                      <li key={topic} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gremso" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 border-t border-gray-100 pt-5 text-sm font-medium text-gremso-dark">
                    {section.highlight}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Quick answers to common questions about Gremso.
              </p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gremso focus-visible:ring-offset-2"
                    onClick={() =>
                      setOpenFaqIndex((prev) => (prev === index ? null : index))
                    }
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-semibold text-gray-900">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <ChevronUp className="h-5 w-5 shrink-0 text-gremso" />
                    ) : (
                      <ChevronDown className="h-5 w-5 shrink-0 text-gray-400" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="rounded-2xl bg-gremso px-6 py-10 text-center text-white shadow-lg shadow-gremso-dark/20 sm:px-10">
              <h2 className="text-2xl font-bold sm:text-3xl">Need More Help?</h2>
              <p className="mt-3 text-white/90">
                Can&apos;t find what you&apos;re looking for? Reach out and we&apos;ll get
                back to you.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
                <a
                  href="mailto:support@gremso.com"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gremso-dark transition-colors hover:bg-gray-100"
                >
                  <Mail className="h-4 w-4" />
                  support@gremso.com
                </a>
                <span className="text-sm text-white/80">
                  Response time: within 24 hours
                </span>
              </div>
              <Link
                to="/contact"
                className="mt-6 inline-block text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition-colors hover:decoration-white"
              >
                Or use the contact form
              </Link>
            </div>

            <div className="flex gap-4 rounded-2xl border border-gremso/25 bg-gremso-soft p-6 sm:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gremso shadow-sm">
                <Lightbulb className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Quick tip</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  Most teams get fully set up in under a day. Start simple—create a
                  project, invite your team, and build from there.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
