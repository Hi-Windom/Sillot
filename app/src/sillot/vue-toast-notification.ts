import { createApp } from 'vue';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export function exApp1() {
  const app = createApp({});
  app.mount('#app1');
  const $toast = useToast();
  window.__toast = $toast;
}