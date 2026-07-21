import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('framer-motion')) return 'framer-motion';
          if (id.includes('lucide-react')) return 'lucide';
          if (id.includes('@supabase/supabase-js')) return 'supabase';
        },
      },
    },
    sourcemap: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
  },
  optimizeDeps: {
    include: ['framer-motion', 'lucide-react', '@supabase/supabase-js'],
    esbuildOptions: {
      target: 'esnext',
    },
  },
  esbuild: {
    target: 'esnext',
    minify: true,
  },
});
