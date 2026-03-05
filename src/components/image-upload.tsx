'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { UploadedImage } from '@/types';

interface ImageUploadProps {
  onImageSelected: (image: UploadedImage) => void;
}

export function ImageUpload({ onImageSelected }: ImageUploadProps) {
  const [isHovered, setIsHovered] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      onImageSelected({
        id: Math.random().toString(36).substring(7),
        file,
        previewUrl,
        status: 'idle',
      });
    }
  }, [onImageSelected]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp'],
    },
    maxFiles: 1,
  });

  return (
    <div {...getRootProps()} className="w-full cursor-pointer">
      <input {...getInputProps()} />
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={`bg-white rounded-3xl p-12 text-center border-2 border-dashed shadow-sm
          transition-all duration-300 ease-in-out
          ${isDragActive ? 'border-blue-500 bg-blue-50/50 scale-[1.02]' : 'border-slate-300 hover:border-blue-400 hover:shadow-md'}
          ${isDragReject ? 'border-red-500 bg-red-50/50' : ''}
        `}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          <motion.div
            animate={{
              y: isDragActive ? -10 : 0,
              scale: isHovered || isDragActive ? 1.05 : 1
            }}
            className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-slate-100 group"
          >
            <div className="absolute inset-0 rounded-full bg-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Upload className="w-8 h-8 text-slate-500 group-hover:text-blue-600 relative z-10 transition-colors duration-300" strokeWidth={1.5} />
          </motion.div>

          <div className="space-y-2">
            <p className="text-2xl font-semibold text-slate-800 tracking-tight">
              {isDragActive ? 'Drop your image here' : 'Drag & drop an image'}
            </p>
            <p className="text-sm font-medium text-slate-500">
              or click to browse from your computer
            </p>
            <p className="text-xs text-slate-400 mt-2">
              Supports JPG, PNG, WEBP (max 5MB)
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isHovered || isDragActive ? 1 : 0, scale: isHovered || isDragActive ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
            className="mt-6 flex items-center gap-2 text-blue-600 font-medium text-sm py-2 px-6 rounded-full bg-blue-50 border border-blue-100 shadow-sm"
          >
            <span>Choose File</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
