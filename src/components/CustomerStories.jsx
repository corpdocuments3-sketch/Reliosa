import {
  Users,
  TrendingUp,
  Zap,
  BarChart,
  MessageSquare,
  ShieldCheck,
  Target,
  Briefcase,
  Globe,
  Quote,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerStories() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-[#e05d38]/20 px-4 py-1 rounded-full text-[#e05d38] text-sm font-semibold mb-6">
          <Star size={16} fill="currentColor" /> Customer Success Stories
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliosa CRM – Quick, Simple, and Effective
        </h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-4xl mx-auto leading-relaxed">
          Discover how leading businesses rely on Reliosa to manage customer
          relationships, optimize sales workflows, and transform data into
          meaningful, actionable insights—all in one seamless platform.
        </p>
      </section>

      {/* Main Story Content - "What Reliosa Does" adapted as a feature highlight or story context */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-20">
          <Quote className="text-[#e05d38] mx-auto mb-6 opacity-50" size={60} />
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            What We Deliver
          </h2>
          <p className="text-lg text-[#6b7280] max-w-4xl mx-auto leading-relaxed mb-8">
            Designed for growing teams, Reliosa seamlessly connects sales,
            marketing, and customer support—ensuring every interaction is
            unified, contextual, and measurable.
          </p>
          <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#dcdfe2] max-w-5xl mx-auto">
            <p className="text-xl text-[#6b7280] italic">
              "Reliosa unifies your customer data and automates your most
              important workflows, enabling your team to prioritize meaningful
              relationships and drive more revenue."
            </p>
          </div>
        </div>

        {/* Benefits Grid (from "With Reliosa you can") */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          <div className="bg-[#ffffff] p-6 rounded-xl shadow-md border-t-4 border-[#e05d38] text-center">
            <TrendingUp className="mx-auto text-[#6b7280] mb-4" size={32} />
            <p className="font-semibold text-[#6b7280]">
              Follow leads and opportunities through every stage of the sales
              journey.
            </p>
          </div>
          <div className="bg-[#ffffff] p-6 rounded-xl shadow-md border-t-4 border-[#e05d38] text-center">
            <MessageSquare className="mx-auto text-[#6b7280] mb-4" size={32} />
            <p className="font-semibold text-[#6b7280]">
              Stay on top of every customer interaction in real time so nothing
              slips through the cracks.
            </p>
          </div>
          <div className="bg-[#ffffff] p-6 rounded-xl shadow-md border-t-4 border-[#e05d38] text-center">
            <Zap className="mx-auto text-[#6b7280] mb-4" size={32} />
            <p className="font-semibold text-[#6b7280]">
              Let automation handle follow-ups and tasks so your team stays
              focused on meaningful customer interactions.
            </p>
          </div>
          <div className="bg-[#ffffff] p-6 rounded-xl shadow-md border-t-4 border-[#e05d38] text-center">
            <BarChart className="mx-auto text-[#6b7280] mb-4" size={32} />
            <p className="font-semibold text-[#6b7280]">
              Empower your team with real-time analytics and reporting that
              drive clarity, alignment, and smarter decisions.
            </p>
          </div>
        </div>

        {/* Key Features Section - Reframed slightly for a "Stories" feel (Impact) */}
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
          Driving Success Through Key Features
        </h2>
        <div className="space-y-12 mb-24">
          {/* Feature 1 & 2 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <Users size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Customer Intelligence
                </h3>
                <p className="text-[#6b7280]">
                  See your sales pipeline clearly and stay in control with
                  customizable stages, real-time tracking, and forecasting that
                  keeps your team focused and your revenue predictable.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <TrendingUp size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Pipeline Visibility & Deal Tracking
                </h3>
                <p className="text-[#6b7280]">
                  See your sales pipeline at a glance with customizable stages,
                  real-time deal tracking, and reliable forecasting—helping your
                  team focus, prioritize, and drive predictable revenue.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 3 & 4 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <Zap size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Automation & Workflows for Efficiency
                </h3>
                <p className="text-[#6b7280]">
                  Reduce manual work with automated lead assignment, reminders,
                  email sequences, and workflow triggers to keep your team
                  focused on what matters most.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <BarChart size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Analytics & Reporting for Data-Driven Decisions
                </h3>
                <p className="text-[#6b7280]">
                  Make data-driven decisions with real-time dashboards, sales
                  insights, and customizable reports to keep your team informed
                  and aligned.
                </p>
              </div>
            </div>
          </div>
          {/* Feature 5 & 6 */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <MessageSquare size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Team Collaboration for Alignment
                </h3>
                <p className="text-[#6b7280]">
                  Keep teams aligned with shared notes, task assignments, and
                  activity tracking across departments to keep your team
                  connected and productive.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start p-6 rounded-xl hover:shadow-lg hover:bg-white transition-colors">
              <div className="bg-[#ffffff] p-3 rounded-lg text-[#e05d38] shrink-0">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">
                  Secure & Scalable for Growth
                </h3>
                <p className="text-[#6b7280]">
                  Reliosa is cloud-based, secure, and built to scale with your
                  business as you grow, so you can focus on what really
                  matters—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Who Reliosa Is For & Why Choose - Split Layout */}
        <div className="bg-[#ffffff] text-[#333333] rounded-3xl p-10 md:p-16 mb-20 overflow-hidden relative border border-[#dcdfe2]">
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Globe size={300} />
          </div>

          <div className="grid md:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="text-[#e05d38]" /> Who Reliosa Is For
              </h2>
              <ul className="space-y-4 text-[#6b7280]">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#e05d38] rounded-full"></span>{" "}
                  Growing businesses that need a simple, scalable CRM
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#e05d38] rounded-full"></span>{" "}
                  Sales teams that want to optimize their pipeline
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#e05d38] rounded-full"></span>{" "}
                  Teams that value clear, actionable insights
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#e05d38] rounded-full"></span>{" "}
                  Companies that value simplicity and ease of use
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="text-[#e05d38]" /> Why Choose Reliosa?
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/10 p-4 rounded-lg shadow-md border border-[#dcdfe2]">
                  <h3 className="font-bold text-[#e05d38] mb-1">
                    Intuitive & Easy
                  </h3>
                  <p className="text-sm text-[#6b7280]">
                    Easy to learn and use
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md border border-[#dcdfe2]">
                  <h3 className="font-bold text-[#e05d38] mb-1">
                    Customizable
                  </h3>
                  <p className="text-sm text-[#6b7280]">
                    Tailor the CRM to your workflow
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md border border-[#dcdfe2]">
                  <h3 className="font-bold text-[#e05d38] mb-1">Data-Driven</h3>
                  <p className="text-sm text-[#6b7280]">
                    Convert data into actionable insights
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg shadow-md border border-[#dcdfe2]">
                  <h3 className="font-bold text-[#e05d38] mb-1">Cloud-Based</h3>
                  <p className="text-sm text-[#6b7280]">
                    Work from anywhere, anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">
            Grow Smarter, Faster
          </h2>
          <p className="text-xl text-[#6b7280] mb-8 leading-relaxed">
            Reliosa helps teams nurture customer relationships, accelerate deal
            closures, and drive smarter growth—all with simplicity.
          </p>
          {/* <button className="bg-[#D946EF] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#C026D3] transition-transform hover:-translate-y-1 shadow-lg">
                        Start Your Story
                    </button> */}

          <Link
            to="/pricing"
            className="bg-[#e05d38] text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-[#e05d38e1] transition-transform hover:-translate-y-1 shadow-lg"
          >
            Start Your Story
          </Link>

          <p className="mt-8 text-sm font-bold text-[#e05d38] tracking-wider uppercase opacity-80">
            Reliosa CRM — Turning Customer Intelligence into Results.
          </p>
        </div>
      </section>
    </div>
  );
}
