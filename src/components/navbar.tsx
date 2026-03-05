'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Layers, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Get Started', path: '/get-started' },
    { name: 'About', path: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl shadow-sm"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setIsOpen(false)}>
            <div className="relative flex items-center justify-center p-2 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors shadow-sm">
              <Layers className="h-5 w-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-slate-800 group-hover:text-slate-900 transition-colors leading-none">
                MagicRemove
              </span>
              <span className="text-[10px] text-slate-500 font-medium tracking-wide mt-0.5">
                Background Remover
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                href={link.path}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${isActive
                  ? 'bg-slate-100 text-slate-900 shadow-sm border border-slate-200'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden md:flex items-center mr-2">
            <span className="px-2 py-0.5 rounded-md text-[10px] uppercase font-bold tracking-widest bg-emerald-50 text-emerald-600 border border-emerald-100">
              Free & Open Source
            </span>
          </div>

          <a href="https://github.com/BagusHidayat21/MagicRemove" target="_blank" rel="noreferrer" className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors bg-white hover:bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-slate-200/60 bg-white/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center ${isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="h-px bg-slate-100 my-2" />

              <a
                href="https://github.com/GameForSmart"
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-3 border border-slate-200 shadow-sm bg-white"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
