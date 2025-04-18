'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-gradient-to-r from-slate-50/80 via-white/80 to-emerald-50/80 backdrop-blur-md shadow-lg border-b border-emerald-100/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className={`text-2xl font-bold bg-clip-text ${
              scrolled 
                ? 'text-transparent bg-gradient-to-r from-slate-800 to-emerald-700' 
                : 'text-transparent bg-gradient-to-r from-white to-emerald-200'
            } transition-all duration-300 hover:scale-105 transform`}
          >
            MK
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`relative group ${
                  scrolled
                    ? 'text-slate-600'
                    : 'text-slate-200'
                } transition-colors text-sm font-medium tracking-wide`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-emerald-500 to-slate-500' 
                    : 'bg-gradient-to-r from-emerald-200 to-white'
                } group-hover:w-full transition-all duration-300`}></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${
              scrolled 
                ? 'text-slate-800 hover:text-emerald-600' 
                : 'text-white hover:text-emerald-200'
            } transition-colors duration-300`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden py-4 ${
              scrolled 
                ? 'bg-gradient-to-r from-slate-50/90 via-white/90 to-emerald-50/90 backdrop-blur-md' 
                : 'bg-gradient-to-r from-slate-900/90 via-slate-800/90 to-emerald-900/90 backdrop-blur-md'
            }`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Home', 'About', 'Experience', 'Projects', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative group ${
                    scrolled
                      ? 'text-slate-600 hover:text-emerald-600'
                      : 'text-slate-200 hover:text-white'
                  } transition-colors text-sm font-medium tracking-wide`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="relative z-10">{item}</span>
                  <span className={`absolute left-0 bottom-0 w-0 h-0.5 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-emerald-500 to-slate-500' 
                      : 'bg-gradient-to-r from-emerald-200 to-white'
                  } group-hover:w-full transition-all duration-300`}></span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
} 