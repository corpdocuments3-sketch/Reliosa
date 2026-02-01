import { Link } from "react-router-dom";
import {
  LifeBuoy,
  BookOpen,
  FileText,
  Headphones,
  ArrowRight,
  Search,
} from "lucide-react";

export default function Resources() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          CRM Software Resources
        </h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-3xl mx-auto leading-relaxed mb-10">
          Everything you need to succeed with our CRM is right here. From
          onboarding and workflow optimization to scaling customer operations,
          our Resources page gives you the guidance and support you need at
          every step.
        </p>
        <button className="bg-[#e05d38] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05d38e1] transition-all flex items-center gap-2 mx-auto shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-1">
          Explore All Resources <ArrowRight size={20} />
        </button>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Help Center */}
          <div className="bg-[#ffffff] p-10 rounded-2xl hover:shadow-xl transition-all border border-[#dcdfe2] flex flex-col items-start">
            <div className=" p-4 rounded-full shadow-lg mb-6">
              <LifeBuoy className="text-[#e05d38]" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Help Center
            </h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed grow">
              Get quick answers and clear, step-by-step guidance through our
              Help Center, so you can resolve issues fast and keep working
              without interruptions.
            </p>
            <Link
              to="/help-center"
              className="text-[#e05d38] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group"
            >
              Visit Help Center
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Knowledge Base */}
          <div className="bg-[#ffffff] p-10 rounded-2xl hover:shadow-xl transition-all border border-[#dcdfe2] flex flex-col items-start">
            <div className="p-4 rounded-full shadow-lg mb-6">
              <BookOpen className="text-[#e05d38]" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Knowledge Base
            </h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed grow">
              Learn how to use our CRM effectively with expert articles, proven
              best practices, and real-world use cases.
            </p>
            <Link
              to="/knowledge-base"
              className="text-[#e05d38] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group"
            >
              Browse Knowledge Base{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Product Documentation */}
          <div className="bg-[#ffffff] p-10 rounded-2xl hover:shadow-xl transition-all border border-[#dcdfe2] flex flex-col items-start">
            <div className="p-4 rounded-full shadow-lg mb-6">
              <FileText className="text-[#e05d38]" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Product Documentation
            </h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed grow">
              Access in-depth documentation on CRM features, configurations,
              integrations, security, and automation.
            </p>
            <Link
              to="/documentation"
              className="text-[#e05d38] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group"
            >
              View Documentation{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Support & Assistance */}
          <div className="bg-[#ffffff] p-10 rounded-2xl hover:shadow-xl transition-all border border-[#dcdfe2] flex flex-col items-start">
            <div className="p-4 rounded-full shadow-lg mb-6">
              <Headphones className="text-[#e05d38]" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#333333] mb-4">
              Support & Assistance
            </h2>
            <p className="text-[#6b7280] mb-8 leading-relaxed grow">
              Get personalized help from our support team, available to provide
              timely and professional assistance whenever you need it.
            </p>
            <Link
              to="/contact"
              className="text-[#e05d38] font-bold text-lg flex items-center gap-2 hover:gap-3 transition-all group"
            >
              Contact Support
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* Optional: Search Bar Section (Common in resource pages) */}
        <div className="mt-20 bg-[#f3f4f6] rounded-2xl p-12 text-center relative overflow-hidden border border-[#dcdfe2]">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Search size={120} className="text-[#333333]" />
          </div>

          <h2 className="text-3xl text-[#333333] font-bold mb-6 relative z-10">
            Can't find what you're looking for?
          </h2>
          <div className="flex max-w-md mx-auto relative z-10">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full px-6 py-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#e05d38] text-[#333333] bg-[#f3f4f6] border-y border-l border-[#dcdfe2]"
            />
            <button className="bg-[#e05d38] text-white px-6 py-4 rounded-r-lg font-bold hover:bg-[#e05d38e1] transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
