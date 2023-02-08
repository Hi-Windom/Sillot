import fs from 'fs'
import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import vitePluginIfdef from 'vite-plugin-ifdef'

// const pkg = require('./package.json')
const env = loadEnv('development', process.cwd())

fs.rmSync('dist-electron', { recursive: true, force: true })

export default defineConfig({
  plugins: [
    react(),
    electron({
      main: {
        entry: 'electron/main.js',
      },
      
      // Enables use of Node.js API in the Renderer-process
      // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
      renderer:{
        entry: 'index.html',
        
      }
    }),
    renderer({
      nodeIntegration: true,
    }),
    vitePluginIfdef(),

  ],
  "ifdef-define":{
    BROWSER: false,
    MOBILE:false, 
    DEBUG: false
     ,
  },
  'ifdef-option':{verbose: false},

  server:{
    port:3000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
      proxy:{
        "/stage":{
          target:"http://127.0.0.1:6806/stage",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/stage/, '')
        },
        "/stage/js":{
          target:"http://127.0.0.1:6806/stage/js",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/stage/, '')
        },
        "/widgets":{
          target:"http://127.0.0.1:6806/widgets",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/widgets/, '')
        },
  
        "/api":{
          target:"http://127.0.0.1:6806/api",
          changeOrigin: true,
         rewrite: path => path.replace(/^\/api/, '')
        },
        "/assets":{
          target:"http://127.0.0.1:6806/assets",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/assets/, '')
        },
        "/appearance":{
          target:"http://127.0.0.1:6806/appearance",
          changeOrigin: true,
          rewrite: path => path.replace(/^\/appearance/, '')
        },
        "/ws":{
          target:"ws://127.0.0.1:6806/ws",
          changeOrigin: true,
          ws:true,
        rewrite: path => path.replace(/^\/ws/, '')
        },
      
  
      },
      cors: {
        allowedHeaders:['Content-Type', 'Authorization']
      },
  },
  define:{
  'process.env': {}
    
  },
  resolve: {
    alias: {
      'path': 'path-browserify',
    }
  }

})
