import {
  Rocket,
  LayoutDashboard,
  Users,
  TrendingUp,
  Calendar,
  FileBarChart,
  ShieldCheck,
  HelpCircle,
  Search,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-[#ffffff] p-4 rounded-full">
            <BookOpen size={48} className="text-[#e05d38]" />
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliosa Operational CRM Help Center
        </h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed mb-10">
          Welcome to the Reliosa Operational CRM Help Center. This guide helps
          you quickly understand and use the core CRM features to manage leads,
          track deals, and improve sales performance with confidence.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for articles, guides, and help..."
            className="w-full pl-12 pr-4 py-4 rounded-lg text-[#333333] bg-[#ffffff] border border-[#dcdfe2] focus:outline-none focus:ring-4 focus:ring-[#e05d38]/50 shadow-lg"
          />
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b7280]"
            size={24}
          />
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Getting Started */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <Rocket
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Getting Started
            </h2>
            <p className="text-[#6b7280] mb-4 leading-relaxed">
              The Operational CRM enables sales teams to organize leads, track
              deals through every stage, automate follow-ups, and gain clear
              insights into sales performance from one centralized platform.
            </p>
            <p className="text-[#6b7280] font-medium bg-[#ffffff] p-3 rounded border border-[#dcdfe2] text-sm">
              Log in using your registered email and password. Use{" "}
              <span className="text-[#e05d38]">Forgot Password</span> if needed.
            </p>
          </div>

          {/* Card 2: Dashboard */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <LayoutDashboard
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Dashboard
            </h2>
            <p className="text-[#6b7280] mb-4">Dashboard highlights include:</p>
            <ul className="space-y-2 text-sm text-[#6b7280]">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Leads and deals
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Pipeline status
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Tasks and follow-ups
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#e05d38] rounded-full"></div>{" "}
                Sales performance metrics
              </li>
            </ul>
          </div>

          {/* Card 3: Leads & Contacts */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <Users
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Leads & Contacts
            </h2>
            <ul className="space-y-3 text-[#6b7280] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Add leads manually, via imports, or integrations
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Monitor lead status and priority
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Keep all contact info, notes, and interactions in one place
              </li>
            </ul>
          </div>

          {/* Card 4: Deals & Pipeline */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <TrendingUp
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Deals & Pipeline
            </h2>
            <ul className="space-y-3 text-[#6b7280] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Add deals with values and expected close dates
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Progress deals through customizable pipeline stages
              </li>
            </ul>
          </div>

          {/* Card 5: Tasks & Activities */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <Calendar
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Tasks & Activities
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Easily schedule calls, emails, meetings, and reminders so no
              follow-up is ever missed.
            </p>
          </div>

          {/* Card 6: Automation & Reports */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <FileBarChart
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Automation & Reports
            </h2>
            <ul className="space-y-3 text-[#6b7280] leading-relaxed">
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Automatically assign leads, schedule follow-ups, and update
                records
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#e05d38] font-bold">•</span>
                Track pipeline progress, sales performance, and team
                productivity
              </li>
            </ul>
          </div>

          {/* Card 7: Users & Security */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <ShieldCheck
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Users & Security
            </h2>
            <p className="text-[#6b7280] leading-relaxed">
              Manage users, roles, and permissions seamlessly. Keep data safe
              with enterprise-grade role-based security
            </p>
          </div>

          {/* Card 8: Support */}
          <div className="bg-[#ffffff] p-8 rounded-xl hover:shadow-lg transition-all border border-[#dcdfe2] group">
            <div className="bg-[#ffffff] w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#e05d38] transition-colors">
              <HelpCircle
                className="text-[#e05d38] group-hover:text-[#ffffff] transition-colors"
                size={28}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">Support</h2>
            <p className="text-[#6b7280] leading-relaxed">
              For help, visit FAQs, contact support, or submit a ticket directly
              from the CRM.
            </p>
            <Link
              to="/contact"
              className="mt-4 text-[#e05d38] font-bold hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 pt-12 border-t border-[#dcdfe2]">
          <p className="text-[#6b7280] italic">
            This Help Center is your quick reference for using the Reliosa
            Operational CRM efficiently.
          </p>
        </div>
      </section>
    </div>
  );
}
