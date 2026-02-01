import {
  Target,
  Heart,
  Award,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cloud,
} from "lucide-react";

export default function About() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero / About Us */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Reliosa</h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed">
          Reliosa is a modern CRM platform that helps businesses streamline
          customer management, improve efficiency, and scale with confidence.
        </p>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-6 max-w-4xl mx-auto space-y-16">
        {/* Intro & Founding Story */}
        <div className="text-lg text-[#6b7280] leading-relaxed space-y-6 text-center">
          <p>
            Reliosa enables businesses to unify customer data, streamline
            processes, and access real-time insights—easily and efficiently,
            with no heavy infrastructure required.
          </p>
          <p>
            Reliosa unifies sales, marketing, and customer success, simplifying
            lead management and optimizing pipelines for maximum impact.
            Designed for scalability, security, and performance, it adapts to
            the evolving needs of growing businesses and enterprise teams.
          </p>
          <div className="bg-[#ffffff] p-8 rounded-xl border-l-4 border-[#e05d38] text-left mt-8">
            <p className="italic text-[#6b7280]">
              "Founded by{" "}
              <span className="font-bold text-[#e05d38]">Pintu Poswal</span>,
              Reliosa delivers a SaaS-first Operational CRM that’s intuitive,
              powerful, and built for modern teams. With a focus on scalability
              and customer value, Reliosa creates solutions that help businesses
              succeed today and tomorrow."
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-lg border border-[#dcdfe2]">
            <TrendingUp size={40} className="text-[#e05d38] mb-4" />
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Our Vision
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              To be a trusted global SaaS CRM platform, empowering businesses to
              build meaningful, long-term customer relationships through simple,
              intelligent, and scalable technology.
            </p>
          </div>
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-lg border border-[#dcdfe2]">
            <Target size={40} className="text-[#e05d38] mb-4" />
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Our Mission
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Our mission is to empower organizations to grow smarter with a
              secure, intuitive CRM that drives productivity, deepens customer
              engagement, and turns data into actionable insights—all on a
              flexible cloud platform.
            </p>
          </div>
        </div>

        {/* Culture & Values */}
        <div>
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">
            Our Culture & Values
          </h2>
          <p className="text-center text-[#6b7280] mb-12 max-w-2xl mx-auto">
            Reliosa’s culture is built on collaboration, continuous learning,
            and ownership. We encourage innovation while holding ourselves
            accountable for delivering real value to our customers.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#ffffff] rounded-xl border border-[#dcdfe2]">
              <Heart className="text-[#e05d38] mb-4" size={32} />
              <h3 className="font-bold text-[#333333] mb-2">
                Customer-First Thinking
              </h3>
              <p className="text-sm text-[#6b7280]">
                Reliosa builds features based on real user needs and feedback,
                ensuring products that truly meet customer needs.
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] rounded-xl border border-[#dcdfe2]">
              <Award className="text-[#e05d38] mb-4" size={32} />
              <h3 className="font-bold text-[#333333] mb-2">
                Product Excellence
              </h3>
              <p className="text-sm text-[#6b7280]">
                Reliosa prioritizes performance, reliability, and continuous
                improvement.
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] rounded-xl border border-[#dcdfe2]">
              <Zap className="text-[#e05d38] mb-4" size={32} />
              <h3 className="font-bold text-[#333333] mb-2">
                Innovation at Scale
              </h3>
              <p className="text-sm text-[#6b7280]">
                Reliosa designs solutions that grow with our customers, ensuring
                products that are always up to date and ready for the future.
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] rounded-xl border border-[#dcdfe2]">
              <ShieldCheck className="text-[#e05d38] mb-4" size={32} />
              <h3 className="font-bold text-[#333333] mb-2">
                Transparency & Trust
              </h3>
              <p className="text-sm text-[#6b7280]">
                Reliosa values open communication and long-term partnerships,
                ensuring that customers are always informed and supported.
              </p>
            </div>
            <div className="p-6 bg-[#ffffff] rounded-xl border border-[#dcdfe2]">
              <TrendingUp className="text-[#e05d38] mb-4" size={32} />
              <h3 className="font-bold text-[#333333] mb-2">
                Agility & Ownership
              </h3>
              <p className="text-sm text-[#6b7280]">
                Reliosa moves fast, takes responsibility, and adapts to change,
                ensuring that customers are always supported and always moving
                forward.
              </p>
            </div>
          </div>
        </div>

        {/* SaaS Approach */}
        <div className="bg-[#ffffff] text-[#333333] p-10 rounded-2xl shadow-xl border border-[#dcdfe2]">
          <Cloud size={48} className="text-[#e05d38] mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our SaaS Approach</h2>
          <div className="space-y-4 text-[#6b7280] leading-relaxed">
            <p>
              Built on a cloud-native, subscription-based model, Reliosa
              delivers fast onboarding, automatic updates, and minimal
              maintenance. Ongoing enhancements in features, security, and
              performance help businesses stay agile and competitive.
            </p>
            <p>
              Built for scale, security, and uptime, Reliosa ensures your teams
              have reliable access whenever and wherever they need it.
            </p>
          </div>
        </div>

        {/* Commitment */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Our Commitment
          </h2>
          <p className="text-lg text-[#6b7280] leading-relaxed">
            Reliosa goes beyond software to become a trusted SaaS partner. Our
            focus is on helping businesses simplify operations, deepen customer
            relationships, and grow sustainably with dependable CRM solutions.
          </p>
        </div>
      </section>
    </div>
  );
}
