import { setupUnocss } from "./unocss";
import type {PluginOption} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx';
import progress from 'vite-plugin-progress';
import { setupHtmlPlugin } from "./html";
import { setupUnplugin } from "./unplugin";


export function setupVitePlugins(buildTime:string){
  const plugins:PluginOption=[
    vue(),
    vueJsx(),
    setupUnocss(),
    progress(),
    setupHtmlPlugin(buildTime),
    setupUnplugin()
  ]

  return plugins
}