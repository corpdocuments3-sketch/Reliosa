import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import gremsoLogo from "../assets/gremso-logo.png";

export default function Footer() {
  const linkHover = "hover:text-gremso-dark";
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src={gremsoLogo}
                alt="Gremso"
                className="h-12 w-12 object-contain shrink-0"
                width={48}
                height={48}
              />
              <span className="text-xl font-bold text-gray-800 tracking-tight">
                GREMSO
              </span>
            </div>
            <p className="text-base text-gray-500 mb-8 max-w-sm leading-relaxed">
              The modern workspace for construction teams to organize documents,
              manage projects, and collaborate.
            </p>
            <Link
              to="/contact"
              className={`inline-flex items-center gap-2 text-base text-gray-500 transition-colors ${linkHover}`}
            >
              <Mail className="w-5 h-5 shrink-0" />
              Contact us
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/features"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/about"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/help"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-800 tracking-wider uppercase mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/terms"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/security"
                  className={`text-base text-gray-500 transition-colors ${linkHover}`}
                >
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-center space-y-1 mb-4">
            <p className="text-sm text-gray-500 text-center font-medium">
              Gremso is operated by Babu Lal Gurjar.
            </p>
            <p className="text-sm text-gray-500 text-center">
              Questions?{" "}
              <Link
                to="/contact"
                className="text-gremso-dark hover:text-gremso underline"
              >
                Get in touch
              </Link>
              .
            </p>
          </div>
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Babu Lal Gurjar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
