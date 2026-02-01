import {
  Users,
  BarChart,
  Zap,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  Filter,
  TrendingUp,
} from "lucide-react";

export default function Products() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Operational CRM</h1>
        <p className="text-xl md:text-2xl text-[#333333] max-w-3xl mx-auto leading-relaxed">
          Customer Operations, Automated in One Platform
        </p>
      </section>
      {/* Overview Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Overview</h2>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed">
            Reliosa is a cloud-based Operational CRM designed to simplify
            day-to-day customer interactions across sales, marketing, and
            support. From managing leads and automating email campaigns to
            resolving customer tickets, Reliosa centralizes your entire customer
            lifecycle in one seamless platform. By automating routine tasks and
            providing real-time visibility into customer activities, it helps
            teams stay aligned, respond faster, and deliver consistent
            experiences that strengthen customer relationships.
          </p>
          <p className="text-lg text-[#333333] max-w-4xl mx-auto leading-relaxed mt-4">
            Built for teams of all sizes, Reliosa scales effortlessly as your
            business grows while remaining intuitive and easy to use. With smart
            workflows, collaborative tools, and insightful dashboards, it
            streamlines operations and enables data-driven decision-making.
            Whether it's optimizing pipelines, improving support efficiency, or
            enhancing customer engagement, Reliosa transforms everyday processes
            into smooth, automated workflows—driving productivity, consistency,
            and long-term growth.
          </p>
        </div>

        {/* Core Capabilities */}
        <h2 className="text-3xl font-bold text-[#333333] mb-12 text-center">
          Core Capabilities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Card 1: Lead Management */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <Filter className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Lead Management
            </h3>
            <p className="text-[#333333] mb-4">
              Turn every lead into an opportunity with a system that organizes
              and qualifies them automatically.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Lead capture and source tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Lead assignment and routing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Lead qualification and scoring
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Activity history logs
              </li>
            </ul>
          </div>

          {/* Card 2: Contact & Account Management */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <Users className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Contact & Account Mgmt
            </h3>
            <p className="text-[#333333] mb-4">
              Maintain a single source of truth for all contacts, accounts, and
              communications.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                360-degree customer view
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Custom fields for data
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Relationship tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Advanced search & segmentation
              </li>
            </ul>
          </div>

          {/* Card 3: Pipeline Management */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <TrendingUp className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Pipeline Management
            </h3>
            <p className="text-[#333333] mb-4">
              See your deals progress visually, customize stages to fit your
              workflow, and forecast with confidence.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Customizable pipeline stages
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Deal value & probability tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Expected close dates/milestones
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Drag-and-drop deal movement
              </li>
            </ul>
          </div>

          {/* Card 4: Sales Automation */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <Zap className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Sales Automation
            </h3>
            <p className="text-[#333333] mb-4">
              Streamline workflows and ensure every sales step is executed
              consistently with automation.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Automatic task creation
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Lead and deal assignment rules
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Trigger-based notifications
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Follow-up scheduling
              </li>
            </ul>
          </div>

          {/* Card 5: Communication */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <MessageSquare className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Communication Tracking
            </h3>
            <p className="text-[#333333] mb-4">
              Keep every interaction organized by integrating email and calendar
              systems directly into your CRM.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Email sync and tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Meeting and call logging
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Notes and activity timelines
              </li>
            </ul>
          </div>

          {/* Card 6: Reporting & Analytics */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2]">
            <BarChart className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              Reporting & Analytics
            </h3>
            <p className="text-[#333333] mb-4">
              Get clear, actionable insights from every deal and interaction
              with advanced analytics.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Sales performance dashboards
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Pipeline and revenue forecasting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Conversion and win-rate analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Custom report creation
              </li>
            </ul>
          </div>

          {/* Card 7: Security (Centered if odd, or just grid) */}
          <div className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow border border-[#dcdfe2] lg:col-span-3 lg:w-1/3 lg:mx-auto">
            <ShieldCheck className="text-[#e05d38] mb-4" size={40} />
            <h3 className="text-xl font-bold text-[#333333] mb-4">
              User Management & Security
            </h3>
            <p className="text-[#333333] mb-4">
              Ensure your customer information is safe with robust security and
              role-based access.
            </p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Role-based permissions
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                User activity tracking
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Secure cloud hosting
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Compliance-ready architecture
              </li>
            </ul>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white text-[#333333] rounded-2xl p-10 md:p-16 mb-20 shadow-xl border border-[#dcdfe2]">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Benefits of a SaaS Operational CRM
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <CheckCircle className="text-[#e05d38] shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Anytime, anywhere accessibility
                </h3>
                <p className="text-[#333333]">
                  Work on your sales pipeline from any device, wherever you are.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="text-[#e05d38] shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Real-time collaboration
                </h3>
                <p className="text-[#333333]">
                  Centralize collaboration with shared tasks, notes, and
                  real-time updates.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="text-[#e05d38] shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">Scalability</h3>
                <p className="text-[#333333]">
                  Focus on growth while we take care of maintenance and
                  infrastructure.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <CheckCircle className="text-[#e05d38] shrink-0" size={28} />
              <div>
                <h3 className="text-xl font-bold mb-2">Cost-effective</h3>
                <p className="text-[#333333]">
                  A subscription-based CRM that cuts IT costs and ensures
                  ongoing support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#333333] mb-6">Conclusion</h2>
          <p className="text-lg text-[#333333] leading-relaxed">
            The Operational CRM helps teams manage customer interactions,
            streamline operations, and deliver exceptional experiences by
            centralizing data, automating everyday tasks, and offering real-time
            visibility across sales, marketing, and support. Built for modern,
            fast-moving businesses, it simplifies workflows, enhances
            collaboration, and ensures every team stays aligned around the
            customer. With powerful automation and actionable insights, Reliosa
            empowers organizations to operate more efficiently, respond faster,
            and build long-term, profitable customer relationships.
          </p>
        </div>
      </section>
    </div>
  );
}
