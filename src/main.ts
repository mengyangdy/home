import { createApp } from 'vue'
import App from './App.vue'
import { setupStore } from './store';

async function setupApp(){
  const app = createApp(App);

  setupStore(app)
  app.mount('#app')
}
setupApp()

