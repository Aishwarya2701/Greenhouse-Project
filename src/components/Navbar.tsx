import { Link, useLocation } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: '/', label: 'Intro' },
    { path: '/aim-motivation', label: 'Aim & Motivation' },
    { path: '/aqi-project', label: 'AQI Project' },
    { path: '/plant-health', label: 'Plant Health' },
    { path: '/gallery', label: 'Gallery' },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="text-green-500 h-8 w-8" />
            <span className="text-2xl font-bold text-gray-800">Smart Greenhouse</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-lg transition-colors ${
                  location.pathname === link.path
                    ? 'text-green-500'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-green-500"
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pt-4"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 px-4 text-lg ${
                  location.pathname === link.path
                    ? 'text-green-500 bg-green-50'
                    : 'text-gray-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}