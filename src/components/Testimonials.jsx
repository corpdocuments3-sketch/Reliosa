import { Quote } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Reliosa cuts the noise and keeps me focused on the deal. My workflow has never been sharper.",
    name: "Marcus Thorne",
    role: "Senior Sales Manager",
    avatar: "https://i.pravatar.cc/150?img=17",
  },
  {
    quote:
      "The automation in Reliosa handles the heavy lifting so I can focus on the big wins. It’s the engine driving our team’s success.",
    name: "Kiara Martinez",
    role: "Marketing Specialist",
    avatar: "https://i.pravatar.cc/150?img=16",
  },
  {
    quote:
      "Reliosa's visual pipeline makes it easy to track where every deal stands. I close more deals than ever before.",
    name: "James Hargreaves",
    role: "Sales Director",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export default function Testimonials() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="px-6 py-20 md:py-32 bg-[#f3f4f6]">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-16 text-center text-[#333333]"
        >
          What Our Clients Say
        </motion.h3>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-[#ffffff] p-8 rounded-2xl shadow-lg border border-[#dcdfe2] flex flex-col hover:shadow-xl transition-all"
            >
              <Quote size={40} className="text-[#e05d38] mb-6" />
              <p className="text-[#333333] mb-8 text-lg italic leading-relaxed grow">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#333333]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-[#6b7280]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
