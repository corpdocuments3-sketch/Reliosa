import { Facebook, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className={`bg-[#f3f4f6] text-[#333333] pt-20 pb-10 px-6 md:px-10 border-t border-[#dcdfe2]`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="text-3xl font-bold">
            Reliosa
          </Link>
          {/* <h1 className="text-3xl font-bold">Reliosa</h1> */}
          <p className="text-[#6b7280] leading-relaxed text-sm mt-4">
            Built for teams that streamline operations and deliver excellence.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Product</h4>
          <ul className="space-y-4 text-[#6b7280] text-sm">
            <li>
              <Link
                to="/products"
                className="hover:text-[#e05d38] cursor-pointer"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                to="/overview"
                className="hover:text-[#e05d38] cursor-pointer"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-[#e05d38] cursor-pointer"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/customer-stories"
                className="hover:text-[#e05d38] cursor-pointer"
              >
                Customer stories
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-4 text-[#6b7280] text-sm">
            <li>
              <Link
                to="/help-center"
                className="hover:text-[#e05d38] cursor-pointer"
              >
                Help Center
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-[#6b7280] text-sm">
            <li>
              <Link to="/about" className="hover:text-[#e05d38] cursor-pointer">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6">Contact</h4>
          <ul className="space-y-4 text-[#6b7280] text-sm">
            <li>
              <span className="block text-[#393838]">Email</span>
              <a
                href="mailto:support@reliosa.com"
                className="hover:text-[#e05d38]"
              >
                support@reliosa.com
              </a>
            </li>
            <li>
              <span className="block text-[#393838]">Phone</span>
              <a className="hover:text-[#e05d38]">+91 89057 58042</a>
            </li>
            <li>
              <span className="block text-[#393838]">ADDRESS</span>
              <a className="hover:text-[#e05d38]">
                S/O: Ravindra Gurjar, Balwanta, Rajosi, Bhwani Khera, Ajmer,
                Rajasthan – 305401, India
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-sm text-[#6b7280]">
          <Link to="/terms-services">Terms & Services</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>

        <p className="text-sm text-[#6b7280]">© 2026 Reliosa LLC.</p>

        <div className="flex gap-6">
          <Facebook
            className="hover:text-[#e05d38] cursor-pointer transition-colors"
            size={20}
          />
          <FaXTwitter
            className="hover:text-[#e05d38] cursor-pointer transition-colors"
            size={20}
          />
          <Linkedin
            className="hover:text-[#e05d38] cursor-pointer transition-colors"
            size={20}
          />
        </div>
      </div>
    </footer>
  );
}
