import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import gremsoLogo from "../assets/gremso-logo.png";

export default function Navbar() {
  const primaryBtn =
    "px-4 py-2 text-sm font-medium text-white rounded-lg shadow-sm transition-colors bg-gremso hover:bg-gremso-dark";
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-[#F6F3EE]/80 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "shadow-sm border-b border-[#E5DED6]"
          : "border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src={gremsoLogo}
              alt="Gremso"
              className="h-10 w-10 object-contain shrink-0"
              width={40}
              height={40}
            />
            <span className="text-xl font-semibold text-[#1F2937]">GREMSO</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "bg-[#EFE9E1] text-[#1F2937]"
                    : "text-[#6B7280] hover:text-[#1F2937] hover:bg-[#EFE9E1]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              Log in
            </Link>
            <Link to="/signup" className={primaryBtn}>
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#6B7280] hover:text-[#1F2937] hover:bg-[#EFE9E1]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-[#E5DED6] bg-[#F6F3EE]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive(link.path)
                    ? "bg-[#EFE9E1] text-[#1F2937]"
                    : "text-[#6B7280] hover:text-[#1F2937] hover:bg-[#EFE9E1]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-[#EFE9E1] hover:text-[#1F2937]"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center ${primaryBtn}`}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
