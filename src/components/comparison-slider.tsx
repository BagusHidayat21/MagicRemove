'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ComparisonSliderProps {
  originalUrl: string;
  processedUrl: string;
}

export function ComparisonSlider({ originalUrl, processedUrl }: ComparisonSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative w-full aspect-square rounded-2xl overflow-hidden showcase-checkers select-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Processed Image (Background) - Transparent */}
      <Image
        src={processedUrl}
        alt="Processed image"
        fill
        className="object-contain pointer-events-none"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Original Image (Foreground) */}
      <div
        className="absolute inset-0 right-0 overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <Image
          src={originalUrl}
          alt="Original image"
          fill
          className="object-contain pointer-events-none bg-slate-100"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 cursor-ew-resize flex items-center justify-center group"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        role="slider"
        aria-label="Image comparison slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
      >
        <div className="absolute inset-y-0 w-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
        <div className="absolute w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L21 12L15 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 18L3 12L9 6" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm pointer-events-none">
        Original
      </div>
      <div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-white border border-blue-500 shadow-sm shadow-blue-500/20 pointer-events-none">
        Removed
      </div>
    </motion.div>
  );
}
