'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Calculator', href: '#calculator' },
    { name: 'Our Process', href: '#how-it-works' },
    { name: 'Why Elyvate', href: '#why-choose-us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`glass backdrop-blur-xl rounded-2xl border transition-all duration-300 ${
            isScrolled
              ? 'bg-white/95 border-gray-200 shadow-2xl'
              : 'bg-white/80 border-gray-100 shadow-lg'
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-3 group">
              <img 
                src="/elyvate-logo.png" 
                alt="Elyvate AI" 
                className="h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold" style={{ color: '#0e2a54' }}>
                ELYVATE <span className="text-teal-600">AI</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-medium transition-colors duration-200 relative group"
                  style={{ color: '#0e2a54' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00999c'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0e2a54'}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#00999c' }}></span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-xl text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)', boxShadow: '0 4px 6px -1px rgba(0, 153, 156, 0.3)' }}
                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 153, 156, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 153, 156, 0.3)'}
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div id="mobile-menu" className="hidden md:hidden border-t border-gray-200">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block font-medium py-2 transition-colors"
                  style={{ color: '#0e2a54' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#00999c'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0e2a54'}
                  onClick={() => {
                    const menu = document.getElementById('mobile-menu');
                    menu?.classList.add('hidden');
                  }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="block text-center px-6 py-2.5 rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #00999c 0%, #00b8bc 100%)' }}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

