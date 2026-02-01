import { ArrowRight } from "lucide-react";
import CRM_business from "../assets/crm_hero.png";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] px-6 py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#333333] text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Operational CRM Platform for{" "}
            <span className="text-[#e05d38]">Scaling Businesses</span>
          </h2>

          <p className="text-[#6b7280] text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
            A single platform to organize data, close deals faster, and build
            stronger relationships.
          </p>

          <motion.button
            onClick={() => navigate("/pricing")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#e05d38] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#e05d38e1] transition-all flex items-center gap-2 mx-auto md:mx-0 shadow-lg hover:shadow-xl"
          >
            Try Reliosa <ArrowRight size={20} />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-[#D946EF] blur-2xl opacity-20 rounded-full"></div>
          <img
            src={CRM_business}
            alt="CRM Dashboard"
            className="relative rounded-xl shadow-2xl border border-white/10 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}
