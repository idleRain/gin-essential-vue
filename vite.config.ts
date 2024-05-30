import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueSetupExtend(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/ // .vue
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    port: 12345,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:12321',
    //     changeOrigin: true
    //   }
    // }
  },
  resolve: {
    alias: {
      '@': resolve('./src'), // @代替src
      '#': resolve('./src/types'), // #代替types
      '~': resolve('./') // ~代替根目录
    }
  },
  css: {
    postcss: './postcss.config.js',
    preprocessorOptions: {}
  }
})
