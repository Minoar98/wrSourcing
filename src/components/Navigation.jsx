import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpeg";

const Navigation = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="WR Sourcing Logo" className="h-12 w-auto" />
            <div className="font-neuropol text-white text-2xl" style={{ fontFamily: "'Neuropol', Arial, sans-serif" }}>
              WIDE RANGE SOURCING
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-orange-500 transition"
            >
              Contact
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full transition">
              Get Started
            </button>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              href="#home"
              className="block text-gray-300 hover:text-orange-500"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-orange-500"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-orange-500"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="block text-gray-300 hover:text-orange-500"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-orange-500"
            >
              Contact
            </a>
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full w-full">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
