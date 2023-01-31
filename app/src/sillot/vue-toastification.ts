import { createApp } from "vue";
import Toast, { PluginOptions } from "vue-toastification";
import "vue-toastification/dist/index.css";
import { useToast } from "vue-toastification";
export function exApp2() {
  const app = createApp({
    setup() {
      // Get toast interface
      const toast = useToast();

      // Use it!
      toast("I'm a toast!");

      // or with options
      toast.success("My toast content", {
        timeout: 2000
      });
      // These options will override the options defined in the "app.use" plugin registration for this specific toast

      // Make it available inside methods
      return { toast }
    },

    methods: {
      myMethod() {

        // Since you returned `toast` from setup(), you can access it now
        this.toast.info("I'm an info toast!");
      }
    }
  });

  const options: PluginOptions = {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true
  };
  app.use(Toast, options);
  app.mount('#app2');
}