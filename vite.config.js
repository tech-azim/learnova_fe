import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    // Konfigurasi untuk build
    build: {
        outDir: 'dist', // Folder output
        sourcemap: false, // Nonaktifkan sourcemap untuk ukuran lebih kecil
        minify: 'terser', // Minify kode
        rollupOptions: {
            output: {
                manualChunks: {
                    // Memisahkan vendor chunks
                    vendor: ['react', 'react-dom']
                }
            }
        }
    },
    // Base path untuk CPanel (opsional)
    base: './'
})