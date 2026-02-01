import { CheckCircle } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$199",
    description: "Your ideas, always within reach.",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard",
      "Connect primary Google Calendar",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    name: "Standard",
    price: "$499",
    description: "The perfect balance of power and simplicity.",
    isPopular: true,
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard",
      "Connect primary Google Calendar",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
  {
    name: "Organization",
    price: "$999",
    description: "Gain clear insights into sales performance.",
    features: [
      "Sync unlimited devices",
      "10 GB monthly uploads",
      "200 MB max. note size",
      "Customize Home dashboard",
      "Connect primary Google Calendar",
      "Add due dates, reminders, and notifications to your tasks",
    ],
  },
];

export default function Pricing() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="px-6 py-20 md:py-32 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-[#333333]"
          >
            Choose Your Plan
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6b7280] max-w-2xl mx-auto text-lg"
          >
            Whether you're managing customers, automating workflows, or
            streamlining daily operations, Reliosa has a plan for every
            workflow.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`p-8 rounded-xl border transition-all duration-300 relative flex flex-col ${
                plan.isPopular
                  ? "bg-[#ffffff] text-[#333333] shadow-2xl z-10 border-[#e05d38]"
                  : "bg-[#ffffff] text-[#333333] border-[#dcdfe2] hover:shadow-xl"
              }`}
            >
              <h4 className="font-semibold text-lg mb-2">{plan.name}</h4>
              <p
                className={`text-3xl font-bold mb-4 ${
                  plan.isPopular ? "text-[#e05d38]" : "text-[#333333]"
                }`}
              >
                {plan.price}
              </p>
              <p
                className={`mb-8 ${
                  plan.isPopular ? "text-[#6b7280]" : "text-[#6b7280]"
                }`}
              >
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={20}
                      className={`mt-0.5 shrink-0 ${
                        plan.isPopular ? "text-[#e05d38]" : "text-[#e05d38]"
                      }`}
                    />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/apply/${plan.name}`}
                className={`w-full py-3 rounded-lg font-bold transition-colors inline-block text-center ${
                  plan.isPopular
                    ? "bg-[#e05d38] text-white hover:bg-[#e05d38e1]"
                    : "border border-[#dcdfe2] text-[#333333] hover:bg-[#e05d38e1] hover:text-[#ffffff]"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
