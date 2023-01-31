import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

export function exApp1() {
  // 无需使用 VUE
  const $toast = useToast();
  window.__toast = $toast;
}