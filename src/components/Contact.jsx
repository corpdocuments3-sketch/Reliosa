import { Mail, Phone, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#f3f4f6]">
      {/* Hero Section */}
      <section className="bg-linear-to-tr from-[#e0f7fa] via-[#f3e5f5] to-[#eddec3] text-[#333333] py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl md:text-2xl text-[#6b7280] max-w-2xl mx-auto">
          Whether you have a question, need support, or want to learn how our
          CRM can boost your business, we’d love to hear from you.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-[#333333] mb-6">
              Get in Touch
            </h2>
            <p className="text-[#6b7280] text-lg leading-relaxed mb-8">
              Curious about features, pricing, integrations, or setup? Fill out
              the form and a CRM expert will reach out soon.
            </p>

            <h3 className="font-bold text-[#333333] text-xl mb-4">
              You can contact us for:
            </h3>
            <ul className="space-y-3 text-[#6b7280] mb-8 list-disc pl-5">
              <li>Product demos and feature inquiries</li>
              <li>Technical support and troubleshooting</li>
              <li>Customization and integration requests</li>
              <li>Pricing and subscription plans</li>
              <li>Feedback and suggestions</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-[#333333] text-xl mb-6">
              Reach Us Directly
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg text-[#e05d38]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Email</p>
                  <p className="text-[#6b7280]">support@reliosa.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg text-[#e05d38]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Phone</p>
                  <p className="text-[#6b7280]"> +91 89057 58042</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg text-[#e05d38]">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-[#333333]">Business Hours</p>
                  <p className="text-[#6b7280]">
                    Monday – Friday, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#ffffff] p-8 rounded-xl border border-[#dcdfe2]">
            <h3 className="font-bold text-[#333333] text-lg mb-2">
              Our Commitment
            </h3>
            <p className="text-[#6b7280]">
              Your questions matter to us. We aim to respond within 24 hours and
              are committed to delivering fast, reliable, and helpful support
              every step of the way.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#ffffff] p-8 md:p-10 rounded-2xl shadow-xl border border-[#dcdfe2] h-fit">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333]">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[#dcdfe2] bg-[#f3f4f6] text-[#333333] focus:ring-2 focus:ring-[#e05d38] focus:border-transparent outline-none transition-all"
                  placeholder="Kishan"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#333333]">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-[#dcdfe2] bg-[#f3f4f6] text-[#333333] focus:ring-2 focus:ring-[#e05d38] focus:border-transparent outline-none transition-all"
                  placeholder="Jangid"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#333333]">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-[#dcdfe2] bg-[#f3f4f6] text-[#333333] focus:ring-2 focus:ring-[#e05d38] focus:border-transparent outline-none transition-all"
                placeholder="kishan@company.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#333333]">
                Subject
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-[#dcdfe2] bg-[#f3f4f6] text-[#333333] focus:ring-2 focus:ring-[#e05d38] focus:border-transparent outline-none transition-all">
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Sales</option>
                <option>Partnership</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#333333]">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-[#dcdfe2] bg-[#f3f4f6] text-[#333333] focus:ring-2 focus:ring-[#e05d38] focus:border-transparent outline-none transition-all resize-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full bg-[#e05d38] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#e05d38e1] transition-colors flex items-center justify-center gap-2"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
