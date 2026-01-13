import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [
    react(),
    svgr({
      svgrOptions: {
        svgoConfig: {
          plugins: [
            {
              name: "removeAttrs",
              params: { attrs: "(fill|stroke)" } // remove all fill and stroke attributes
            }
          ]
        }
      }
    })
  ],  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
