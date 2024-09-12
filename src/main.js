import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import VueTippy from "vue-tippy";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

const app = createApp(App);

// Usa VueTippy en la misma instancia de Vue
app.use(VueTippy, {
  directive: "tippy",
  component: "tippy",
  componentSingleton: "tippy-singleton",
  defaultProps: {
    placement: "auto-end",
    allowHTML: true,
  },
});

// Monta la app después de configurar todos los plugins
app.mount("#app");
