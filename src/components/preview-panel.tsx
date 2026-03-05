'use client';

import { UploadedImage } from '@/types';
import { Download, RefreshCcw, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ComparisonSlider } from './comparison-slider';
import Image from 'next/image';

interface PreviewPanelProps {
  image: UploadedImage;
  onReset: () => void;
  onProcess: () => void;
}

export function PreviewPanel({ image, onReset, onProcess }: PreviewPanelProps) {
  const handleDownload = () => {
    if (!image.processedUrl) return;
    const link = document.createElement('a');
    link.href = image.processedUrl;
    link.download = `removed-bg-${image.file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-4xl mx-auto space-y-6"
    >
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-500" />
              Image Preview
            </h2>
            <p className="text-sm text-slate-500 font-medium mt-1 truncate max-w-xs sm:max-w-sm">{image.file.name}</p>
          </div>
          {image.status === 'success' && (
            <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Ready to Download
            </span>
          )}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {image.status === 'success' && image.processedUrl ? (
              <motion.div
                key="comparison"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50/50 showcase-checkers"
              >
                <ComparisonSlider
                  originalUrl={image.previewUrl}
                  processedUrl={image.processedUrl}
                />
              </motion.div>
            ) : (
              <motion.div
                key="original"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center shadow-inner"
              >
                <Image
                  src={image.previewUrl}
                  alt="Original Preview"
                  fill
                  className={`object-contain transition-all duration-700 ${image.status === 'processing' ? 'blur-md scale-105 opacity-60' : ''}`}
                />

                {image.status === 'idle' && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] flex items-center justify-center">
                    <button
                      onClick={onProcess}
                      className="group flex flex-col items-center px-8 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 hover:scale-[1.02] transition-all shadow-lg shadow-blue-600/20 active:scale-95 border border-blue-500"
                    >
                      <span className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-blue-200" />
                        Remove Background
                      </span>
                      <span className="text-xs font-normal text-blue-200 mt-1">High quality, automatic precision</span>
                    </button>
                  </div>
                )}

                {image.status === 'processing' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm">
                    <div className="w-16 h-16 relative">
                      <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
                      <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
                    </div>
                    <p className="mt-4 text-lg font-bold text-slate-800 tracking-tight">
                      Removing Background...
                    </p>
                    <p className="text-sm font-medium text-slate-500 mt-1">This usually takes a few seconds</p>
                  </div>
                )}

                {image.status === 'error' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-md">
                    <div className="p-4 bg-red-50 rounded-full text-red-500 mb-4 border border-red-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    </div>
                    <p className="text-lg font-bold text-slate-900">Processing Failed</p>
                    <p className="text-sm font-medium text-slate-500 mt-1 mb-6 text-center max-w-sm">{image.error}</p>
                    <button
                      onClick={onProcess}
                      className="px-6 py-2.5 bg-white hover:bg-slate-50 text-slate-800 rounded-full transition-colors border border-slate-200 shadow-sm font-medium text-sm"
                    >
                      Try Again
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-100">
          <button
            onClick={onReset}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-600 bg-white border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors"
          >
            <RefreshCcw className="h-4 w-4" />
            Upload New Image
          </button>

          <AnimatePresence>
            {image.status === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full sm:w-auto"
              >
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto relative group px-8 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-500/20 hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95 border border-blue-500"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Result
                  </span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
