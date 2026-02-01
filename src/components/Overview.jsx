import {
  Users,
  TrendingUp,
  Zap,
  BarChart,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Target,
  Briefcase,
  Globe,
} from "lucide-react";

export default function Overview() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliosa CRM – Quick, Simple, and Effective
        </h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-4xl mx-auto leading-relaxed">
          Reliosa empowers businesses to nurture customer relationships,
          accelerate sales, and make data-driven decisions—effortlessly, from a
          single platform.
        </p>
      </section>

      {/* Intro & What Reliosa Does */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-[#6b7280] max-w-4xl mx-auto leading-relaxed mb-6">
            Reliosa connects sales, marketing, and support for growing teams,
            ensuring every interaction is meaningful, measurable, and drives
            results.
          </p>
          <div className="bg-[#ffffff] p-8 rounded-2xl border border-[#dcdfe2] max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              What Reliosa Does
            </h2>
            <p className="text-[#6b7280] mb-6">
              Reliosa handles the data and automation so your team can focus on
              what really matters—strong customer relationships and faster deal
              closures.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <span className="text-[#6b7280]">
                  Track leads and opportunities through the sales lifecycle to
                  keep your pipeline moving.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <span className="text-[#6b7280]">
                  Manage customer interactions in real-time to keep your team
                  connected and productive.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <span className="text-[#6b7280]">
                  Automate follow-ups, tasks, and sales pipelines to keep your
                  team focused on what matters most.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <span className="text-[#6b7280]">
                  Gain visibility into performance with powerful analytics and
                  reporting to keep your team informed and aligned.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#333333] mb-10 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <Users className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Unified Customer Data
              </h3>
              <p className="text-[#6b7280]">
                Access a complete, 360° view of every customer—contacts,
                communication history, deals, and support tickets—all in one
                place, so you can see the big picture.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <TrendingUp className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Sales Pipeline Management
              </h3>
              <p className="text-[#6b7280]">
                Visualize and manage your sales pipeline with customizable
                stages, deal tracking, and forecasting tools to keep your
                revenue predictable.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <Zap className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Automation & Workflows
              </h3>
              <p className="text-[#6b7280]">
                Reduce manual work with automated lead assignment, reminders,
                email sequences, and workflow triggers to keep your team focused
                on what matters most.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <BarChart className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-[#6b7280]">
                Make data-driven decisions with real-time dashboards, sales
                insights, and customizable reports to keep your team informed
                and aligned.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <MessageSquare className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Team Collaboration
              </h3>
              <p className="text-[#6b7280]">
                Keep teams aligned with shared notes, task assignments, and
                activity tracking across departments to keep your team connected
                and productive.
              </p>
            </div>

            <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
              <ShieldCheck className="text-[#e05d38] mb-4" size={36} />
              <h3 className="text-xl font-bold text-[#333333] mb-3">
                Secure & Scalable
              </h3>
              <p className="text-[#6b7280]">
                Reliosa is cloud-based, secure, and built to scale with your
                business as you grow, so you can focus on what really
                matters—growing your business.
              </p>
            </div>
          </div>
        </div>

        {/* Who Reliosa Is For & Why Choose */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-stretch">
          {/* Who Reliosa Is For */}
          <div className="bg-[#ffffff] p-8 rounded-xl shadow-lg border border-[#dcdfe2] h-full">
            <h2 className="text-2xl font-bold text-[#333333] mb-6 flex items-center gap-3">
              <Target className="text-[#e05d38]" /> Who Reliosa Is For
            </h2>
            <p className="text-[#6b7280] mb-6">Reliosa is designed for:</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full mt-2"></div>
                <span className="text-[#6b7280]">
                  Growing businesses that need a simple, scalable CRM
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full mt-2"></div>
                <span className="text-[#6b7280]">
                  Sales teams that want to optimize their pipeline
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full mt-2"></div>
                <span className="text-[#6b7280]">
                  Teams that value clear, actionable insights
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full mt-2"></div>
                <span className="text-[#6b7280]">
                  Companies that value simplicity and ease of use
                </span>
              </li>
            </ul>
          </div>

          {/* Why Choose Reliosa */}
          <div className="bg-[#ffffff] text-[#333333] p-8 rounded-xl shadow-lg h-full border border-[#dcdfe2]">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Briefcase className="text-[#e05d38]" /> Why Choose Reliosa?
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Intuitive & Easy</span>
                  <span className="text-[#6b7280] text-sm">
                    Easy to learn and use
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Customizable</span>
                  <span className="text-[#6b7280] text-sm">
                    Tailor the CRM to your workflow
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Data-Driven</span>
                  <span className="text-[#6b7280] text-sm">
                    Convert data into actionable insights
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-[#e05d38] shrink-0" size={20} />
                <div>
                  <span className="font-bold block">Cloud-Based</span>
                  <span className="text-[#6b7280] text-sm">
                    Work from anywhere, anytime
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Conclusion / CTA */}
        <div className="text-center bg-[#ffffff] rounded-2xl p-12 border border-[#dcdfe2]">
          <Globe className="text-[#e05d38] mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-bold text-[#333333] mb-4">
            Grow Smarter, Faster
          </h2>
          <p className="text-xl text-[#6b7280] max-w-2xl mx-auto mb-8">
            Reliosa helps teams nurture customer relationships, accelerate deal
            closures, and drive smarter growth—all with simplicity.
          </p>
          <p className="text-lg font-bold text-[#e05d38]">
            Reliosa CRM — Turning Customer Intelligence into Results.
          </p>
        </div>
      </section>
    </div>
  );
}
