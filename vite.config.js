import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // src 路径
      '~': path.resolve(__dirname, 'src/pages'), // src/pages 路径
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/styles/variables.scss";',
      },
    },
  },
  server: {
    port: 5173,
    // 开发环境启动的端口
    proxy: {
      '/api': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了github的请求地址
        target: 'https://api.github.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // 将 /api 重写为空
      },
      '/dragonball': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了github的请求地址
        // target: 'http://10.59.116.235:8088',
        target: 'http://10.57.237.13:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dragonball/, ''), // 将 /api 重写为空
      },
      '/dragonclaw': {
        // 当遇到 /api 路径时，将其转换成 target 的值，这里我们为了测试，写了github的请求地址
        // target: 'http://10.59.192.191:8088',
        target: 'http://10.57.237.13:8009',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dragonclaw/, ''), // 将 /api 重写为空
        // configure: (proxy) => {
        //   proxy.on('proxyReq', (proxyReq, req, res) => {
        //     res.setHeader('x-clientId', `dragon-ball`);
        //     res.setHeader(
        //       'x-secretKey',
        //       `b31fe76e56556443622fae8cb9e4680d0b76500405bdf70d11916c21ef5a2d78`
        //     );
        //     proxyReq.pipe(res);
        //   });
        // },
      },
    },
  },
});
