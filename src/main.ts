import { createApp } from "vue";
import "./plugins/assets";
import App from "./App.vue";
import { setupStore } from "./store";
import { setupLoading } from "./plugins";

async function setupApp() {
  setupLoading();
  const app = createApp(App);

  setupStore(app);
  setTimeout(()=>{
    app.mount("#app");

  },100000000)
}
setupApp();
