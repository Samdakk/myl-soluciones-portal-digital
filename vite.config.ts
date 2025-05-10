import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({  
  base: mode === 'production' ? '/myl-soluciones-portal-digital/' : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
 "@": path.resolve(__dirname, "./docs/src"),
    },
  },
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'docs/index.html')
      }
    }
  }
}));
