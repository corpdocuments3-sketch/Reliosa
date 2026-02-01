import React from "react";
import {
  BookOpen,
  Rocket,
  Users,
  Zap,
  BarChart2,
  Briefcase,
  Shield,
  CheckCircle,
} from "lucide-react";

export default function KnowledgeBase() {
  const cards = [
    {
      icon: <BookOpen className="text-[#e05d38]" size={32} />,
      title: "Knowledge Base Overview",
      content: [
        "A Customer Relationship Management (CRM) system is more than just software—it’s a strategic approach to managing interactions with current and potential customers. A knowledge base bridges the gap between technical functionality and business strategy, helping teams understand how to use the CRM effectively.",

        "By providing a deep understanding of CRM capabilities, organizations can ensure data consistency, improve cross-department communication, and drive better business outcomes. This resource serves as a foundational guide for teams looking to maximize their CRM investment.",
      ],
    },
    {
      icon: <Rocket className="text-[#e05d38]" size={32} />,
      title: "Getting Started",
      content: [
        "Successfully adopting a CRM starts with a clear understanding of its structure and core components. Central to this is the concept of a single source of truth, where all customer data is stored in one centralized location. Configuring user roles and permissions is a critical first step in setting up the system.",

        "Onboarding new users goes beyond providing login credentials—it involves familiarizing them with the dashboard and navigation interface. A well-configured dashboard gives an at-a-glance view of tasks, upcoming appointments, and key performance indicators, enabling users to access information quickly and work efficiently.",
      ],
    },
    {
      icon: <Users className="text-[#e05d38]" size={32} />,
      title: "Sales & Customer Management",
      content: [
        "Effective CRM use centers on managing the sales pipeline and customer relationships. Lead management includes qualification, scoring, and segmentation, helping sales teams focus on the most promising opportunities.",

        "Long-term engagement depends on accurate customer records. With reminders, preference tracking, and support history, teams can manage accounts proactively and communicate personally with each customer.",
      ],
    },
    {
      icon: <Zap className="text-[#e05d38]" size={32} />,
      title: "Automation & Integrations",
      content: [
        "Workflow automation is a powerful feature that eliminates manual effort from daily operations. By automating repetitive tasks—such as data entry, email follow-ups, and task assignments—teams can save time and focus on strategy and relationship building.",

        "CRM integrations amplify this power. Connecting the platform to email clients, marketing automation tools, and customer support systems ensures a seamless flow of information, preventing data silos and enabling teams to work more efficiently across applications.",
      ],
    },
    {
      icon: <BarChart2 className="text-[#e05d38]" size={32} />,
      title: "Advanced Features",
      content: [
        "As businesses scale, CRM needs grow more sophisticated. Custom fields let teams capture industry-specific data, while analytics and reporting turn it into actionable insights.",

        "Forecasting predicts revenue using historical data, and scalability ensures the system stays performant and organized as your business grows.",
      ],
    },
    {
      icon: <Briefcase className="text-[#e05d38]" size={32} />,
      title: "Use Cases & Real-World Applications",
      content: [
        "Small businesses use a CRM to stay organized and efficient, replacing spreadsheets with a centralized system for contacts and simple pipelines.",

        "Enterprise teams rely on the CRM for complex account management, stakeholder tracking, and coordination across distributed sales teams, supporting scalable growth and alignment.",
      ],
    },
    {
      icon: <Shield className="text-[#e05d38]" size={32} />,
      title: "Security & Best Practices",
      content: [
        "Protecting customer data is paramount. Security best practices in a CRM combine technical controls and user protocols to safeguard information. Role-Based Access Control (RBAC) ensures users can only access the data necessary for their role, reducing the risk of unauthorized access.",

        "Data integrity is maintained through regular backups and validation rules. Compliance with regulations such as GDPR and CCPA is supported by features that manage consent and data suppression, making the CRM a secure, trusted repository for customer information.",
      ],
    },
    {
      icon: <CheckCircle className="text-[#e05d38]" size={32} />,
      title: "Summary",
      content: [
        "Mastering a CRM requires continuous learning. By leveraging data management, automation, security, and analytics, teams can turn the CRM into a powerful growth tool.",

        "True success depends on people and processes—consistent training, best practices, and high-quality data keep your CRM effective and valuable over time.",
      ],
    },
  ];

  return (
    <div className="bg-[#f3f4f6] min-h-screen text-[#333333] font-sans">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Knowledge Base
          </h1>
          <p className="text-xl text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Learn how to maximize your CRM with expert articles, proven best
            practices, and practical use cases.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#ffffff] rounded-xl p-8 shadow-lg hover:shadow-[#e05d38]/10 hover:-translate-y-1 transition-all duration-300 border border-[#dcdfe2] hover:border-[#e05d38]/30 group"
            >
              <div className="mb-6 bg-[#e05d38]/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-[#e05d38]/10 transition-colors">
                {card.icon}
              </div>
              <h2 className="text-2xl font-bold text-[#333333] mb-4 group-hover:text-[#e05d38] transition-colors">
                {card.title}
              </h2>
              <div className="space-y-4">
                {card.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="leading-relaxed text-[#6b7280] mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-20 pt-10 border-t border-[#dcdfe2] text-center text-[#6b7280]">
          <p>
            © 2026 Reliosa CRM Platform Knowledge Base. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}
