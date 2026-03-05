'use client';

import { Navbar } from '@/components/navbar';
import { CodeBlock } from '@/components/code-block';
import { motion } from 'framer-motion';
import { DownloadCloud, Terminal, ServerCog, Sparkles } from 'lucide-react';

export default function GetStartedPage() {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Get Started with <span className="text-blue-600">MagicRemove</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Follow this quick setup guide to clone, configure, and run the application on your local machine.
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-100 mt-1">
                <DownloadCloud className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Step 1 — Clone the repository</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Download the source code to your local machine using Git.
                </p>
                <CodeBlock language="bash" code="git clone https://github.com/GameForSmart/backgroundremover.git&#10;cd backgroundremover" />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center border border-indigo-100 mt-1">
                <Terminal className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Step 2 — Install dependencies</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Install all required Node.js packages using npm or your preferred package manager.
                </p>
                <CodeBlock language="bash" code="npm install" />
              </div>
            </motion.div>

            {/* Step 3 & 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center border border-emerald-100 mt-1">
                <ServerCog className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Step 3 & 4 — Configure API Key</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Create a <code>.env.local</code> file in the root directory and add your Remove.bg API key. You can get one for free from the <a href="https://www.remove.bg" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Remove.bg Dashboard</a>.
                </p>
                <CodeBlock language="env" code="REMOVE_BG_API_KEY=your_api_key_here_12345" />
              </div>
            </motion.div>

            {/* Step 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 md:items-start"
            >
              <div className="shrink-0 w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center border border-purple-100 mt-1">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Step 5 — Run the project</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Start the local development server. Once running, you can open your browser to begin testing the background removal tool.
                </p>
                <CodeBlock language="bash" code="npm run dev" />
                <p className="text-xs font-semibold text-slate-500 mt-4 uppercase tracking-wider">
                  Navigate to <a href="http://localhost:3000" className="text-blue-600 hover:underline normal-case">http://localhost:3000</a>
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
