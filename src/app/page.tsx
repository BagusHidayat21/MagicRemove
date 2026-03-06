'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { ImageUpload } from '@/components/image-upload';
import { PreviewPanel } from '@/components/preview-panel';
import { UploadedImage } from '@/types';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [currentImage, setCurrentImage] = useState<UploadedImage | null>(null);

  const handleImageSelected = (image: UploadedImage) => {
    setCurrentImage(image);
  };

  const processImage = async () => {
    if (!currentImage) return;

    setCurrentImage((prev) => prev ? { ...prev, status: 'processing' } : null);

    try {
      const formData = new FormData();
      formData.append('image', currentImage.file);

      const response = await axios.post('/api/remove-bg', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCurrentImage((prev) =>
        prev ? {
          ...prev,
          status: 'success',
          processedUrl: response.data.processedUrl || currentImage.previewUrl
        } : null
      );
    } catch (error) {
      console.error(error);
      setCurrentImage((prev) =>
        prev ? {
          ...prev,
          status: 'error',
          error: 'Local processing failed. Check your console logs.'
        } : null
      );
    }
  };

  const handleReset = () => {
    setCurrentImage(null);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1 w-full relative pt-32 pb-24 overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[url('/bg-grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center space-y-6 mb-12 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Open Source Release v1.0.0
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Open Source Background <br className="hidden md:block" />
              Removal Tool
            </h1>
            <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              A beautifully crafted, privacy-first tool built for developers, students,
              and open-source contributors. Powered by the Remove.bg API.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!currentImage ? (
              <motion.div
                key="upload"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                className="w-full max-w-3xl"
              >
                <ImageUpload onImageSelected={handleImageSelected} />
              </motion.div>
            ) : (
              <motion.div
                key="preview"
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-4xl"
              >
                <PreviewPanel
                  image={currentImage}
                  onReset={handleReset}
                  onProcess={processImage}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Dev notes grid */}
          {!currentImage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-24 w-full max-w-4xl border-t border-slate-200 pt-12"
            >
              <div className="flex items-center justify-between mb-8">
                <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Built for the community
                </p>
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent ml-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Privacy First', desc: 'Images are processed directly via API and not stored on our servers. Your data remains yours.' },
                  { title: 'Developer Ready', desc: 'Drop this into your Next.js project. Clear abstractions, easy to configure.' },
                  { title: 'Community Driven', desc: 'Part of the GameForSmart ecosystem, powered by PT UBIG, bringing high-quality UX and open-source learning forward.' }
                ].map((feature, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-100 transition-all cursor-default relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full blur-2xl group-hover:bg-blue-100 transition-colors pointer-events-none -mr-8 -mt-8" />
                    <h3 className="text-slate-800 font-semibold mb-2 text-sm relative z-10">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed relative z-10">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
