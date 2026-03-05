export type UploadedImage = { id: string; file: File; previewUrl: string; processedUrl?: string | null; status: 'idle' | 'uploading' | 'processing' | 'success' | 'error'; error?: string; };
