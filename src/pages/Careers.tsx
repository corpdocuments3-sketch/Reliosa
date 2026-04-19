import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  CAREERS_CLOSING_LINE,
  CAREERS_CLOSING_TITLE,
  CAREERS_EMAIL,
  CAREERS_INTRO,
  CAREERS_JOIN_BODY,
  CAREERS_JOIN_HEADING,
  CAREERS_JOIN_INTRO,
  CAREERS_SECTIONS,
  CAREERS_TAGLINE,
  CareersClosingIcon,
  type CareersSection,
} from '../constants/careersMarketing';

function CareersSectionCard({ section }: { section: CareersSection }) {
  const Icon = section.icon;
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-gremso/30 hover:shadow-md sm:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gremso-soft text-gremso-dark transition-colors duration-200 group-hover:bg-gremso group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
      {section.description ? (
        <p className="mt-2 text-sm text-gray-600">{section.description}</p>
      ) : null}
      <ul className="mt-5 space-y-2.5 text-sm text-gray-600">
        {section.bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gremso" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      {section.footnote ? (
        <p className="mt-5 border-t border-gray-100 pt-5 text-sm font-medium text-gremso-dark">
          {section.footnote}
        </p>
      ) : null}
    </article>
  );
}

export default function Careers() {
  const ClosingIcon = CareersClosingIcon;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="border-b border-gray-100 bg-[#F6F3EE]/60 px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1F2937] sm:text-5xl">
              Reliosa Careers
            </h1>
            <p className="mt-4 text-xl font-semibold text-gremso-dark sm:text-2xl">
              {CAREERS_TAGLINE}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#6B7280] sm:text-xl">
              {CAREERS_INTRO}
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {CAREERS_SECTIONS.map((section) => (
                <CareersSectionCard key={section.title} section={section} />
              ))}
            </div>

            <div className="mt-12 rounded-2xl bg-gremso px-6 py-10 text-center text-white shadow-lg shadow-gremso-dark/20 sm:px-10">
              <h2 className="text-2xl font-bold sm:text-3xl">{CAREERS_JOIN_HEADING}</h2>
              <p className="mt-3 text-lg text-white/95">{CAREERS_JOIN_INTRO}</p>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
                {CAREERS_JOIN_BODY}
              </p>
              <a
                href={`mailto:${CAREERS_EMAIL}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-gremso-dark transition-colors hover:bg-gray-100"
              >
                <Mail className="h-4 w-4" />
                {CAREERS_EMAIL}
              </a>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="text-sm font-medium text-white underline decoration-white/60 underline-offset-4 transition-colors hover:decoration-white"
                >
                  Prefer the contact form?
                </Link>
              </div>
            </div>

            <div className="mt-10 flex gap-4 rounded-2xl border border-gremso/25 bg-gremso-soft p-6 sm:p-8">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-gremso shadow-sm">
                <ClosingIcon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{CAREERS_CLOSING_TITLE}</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">
                  {CAREERS_CLOSING_LINE}
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
