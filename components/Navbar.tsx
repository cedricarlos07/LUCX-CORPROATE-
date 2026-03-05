'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

import Image from 'next/image';

const navLinks = [
  { name: 'Accueil', href: '/#home' },
  { name: 'À Propos', href: '/#about' },
  { name: 'Expertises', href: '/#services' },
  { name: 'Ressources', href: '/#resources' },
  { name: 'Réalisations', href: '/#references' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/#home" className="flex items-center gap-2">
              <Image 
                src="/logo.png" 
                alt="LUCX CORPORATE" 
                width={150} 
                height={50} 
                className="h-10 w-auto object-contain"
                priority
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-yellow ${
                  isScrolled ? 'text-slate-700' : 'text-white/90'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              className="flex items-center gap-2 bg-brand-yellow text-brand-blue px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-yellow-light transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>07 99 70 47 14</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden p-2 ${isScrolled ? 'text-brand-blue' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-slate-800 font-medium text-lg py-2 border-b border-slate-50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/#contact"
                className="flex items-center justify-center gap-2 bg-brand-blue text-white px-5 py-3 rounded-md font-semibold mt-4"
              >
                <Phone className="w-5 h-5 text-brand-yellow" />
                <span>07 99 70 47 14</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
