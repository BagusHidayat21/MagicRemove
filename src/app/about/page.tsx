'use client';

import { Navbar } from '@/components/navbar';
import { motion } from 'framer-motion';
import { Github, Layers, Code, HeartHandshake } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1 w-full relative pt-32 pb-24 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">About This Project</h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              MagicRemove is a beautiful, open-source background removing tool heavily focused on Developer Experience and UI design.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 border border-blue-100">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Powered by Remove.bg</h3>
              <p className="text-slate-600 leading-relaxed">
                The core background removal engine connects seamlessly to the <strong>Remove.bg API</strong>. You bring the API key, and the app provides an incredibly smooth and clean user interface for processing your images.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 border border-purple-100">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Free & Open Source</h3>
              <p className="text-slate-600 leading-relaxed">
                This project is entirely open-source and free to modify. Whether you are building an internal tool or just learning Next.js and Tailwind, feel free to use this as a robust starting point.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-10 rounded-3xl border border-blue-100 shadow-sm text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500" />
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-sm">
              <HeartHandshake className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">The GameForSmart Ecosystem</h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              This application is part of <strong>GameForSmart</strong>—a web-based educational and smart game application ecosystem developed under <strong>PT UBIG</strong>. Our goal is to promote practical learning, high-quality open-source software, and beautiful UX.
            </p>
            <a
              href="https://github.com/GameForSmart"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors shadow-md"
            >
              <Github className="w-5 h-5" /> Visit our GitHub
            </a>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
