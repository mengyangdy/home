import { defineConfig, loadEnv } from "vite";
import { setupVitePlugins } from "./build/plugins";
import { getBuildTime } from "./build/config";
import { URL, fileURLToPath } from 'node:url';

export default defineConfig((configEnv) => {
  console.log(configEnv, "configEnv");

  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as Env.ImportMeta;

  const buildTime = getBuildTime();

  return {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/global.scss" as *;`,
        },
      },
    },
    plugins: setupVitePlugins(buildTime),
    server:{
      host: '0.0.0.0',
      open:true
    }
  };
});
