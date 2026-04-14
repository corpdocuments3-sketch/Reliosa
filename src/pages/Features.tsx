import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  FEATURES_INTRO,
  FEATURES_TAGLINE,
  MARKETING_FEATURES,
  type MarketingFeatureItem,
} from '../constants/featuresMarketing';

function FeatureSectionCard({ feature }: { feature: MarketingFeatureItem }) {
  const Icon = feature.icon;
  const hasBullets = feature.bullets && feature.bullets.length > 0;

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:border-gremso/30 hover:shadow-md sm:p-8">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gremso-soft text-gremso-dark transition-colors duration-200 group-hover:bg-gremso group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h2 className="text-xl font-bold text-gray-900">{feature.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
      {feature.body ? (
        <p className="mt-5 border-t border-gray-100 pt-5 text-sm leading-relaxed text-gray-700">
          {feature.body}
        </p>
      ) : null}
      {hasBullets ? (
        <>
          <h3 className="mt-6 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Highlights
          </h3>
          <ul className="mt-3 space-y-2.5 text-sm text-gray-600">
            {feature.bullets!.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gremso" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </article>
  );
}

export default function Features() {
  const primaryFeatures = MARKETING_FEATURES.slice(0, 8);
  const closingFeatures = MARKETING_FEATURES.slice(8);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <section className="border-b border-gray-100 bg-[#F6F3EE]/60 px-4 pb-14 pt-32 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#1F2937] sm:text-5xl">
              {FEATURES_TAGLINE}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#6B7280] sm:text-xl">
              {FEATURES_INTRO}
            </p>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 sm:grid-cols-2">
              {primaryFeatures.map((feature) => (
                <FeatureSectionCard key={feature.title} feature={feature} />
              ))}
            </div>

            <div className="mt-10 space-y-8">
              {closingFeatures.map((feature) => (
                <FeatureSectionCard key={feature.title} feature={feature} />
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-4 rounded-2xl border border-gremso/25 bg-gremso-soft px-6 py-10 text-center sm:flex-row sm:gap-8">
              <p className="text-sm text-gray-700 sm:text-base">
                Ready to see Gremso in action?
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-gremso px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-gremso-dark"
                >
                  Get started
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-50"
                >
                  View pricing
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
