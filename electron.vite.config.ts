import { resolve } from 'path'
import { bytecodePlugin, defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // main: {
  //   plugins: [externalizeDepsPlugin()]
  // },
  // preload: {
  //   plugins: [externalizeDepsPlugin()]
  // },
  main: {
    plugins: [bytecodePlugin({ protectedStrings: ['KEY_MAIN'] })]
  },
  preload: {
    plugins: [bytecodePlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src')
      }
    },
    plugins: [react(), bytecodePlugin({ protectedStrings: ['KEY_RENDER'] })]
  }
})
