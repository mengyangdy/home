import { defineConfig, loadEnv } from "vite";
import { setupVitePlugins } from "./build/plugins";
import { getBuildTime } from "./build/config";

export default defineConfig((configEnv) => {
  console.log(configEnv, "configEnv");

  const viteEnv = loadEnv(
    configEnv.mode,
    process.cwd()
  ) as unknown as Env.ImportMeta;

  const buildTime = getBuildTime();

  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./src/styles/scss/global.scss" as *;`,
        },
      },
    },
    plugins: setupVitePlugins(buildTime),
  };
});
