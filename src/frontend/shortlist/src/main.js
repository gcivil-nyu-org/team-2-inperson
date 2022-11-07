import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import mitt from "mitt";

import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const pinia = createPinia();
const emitter = mitt();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.config.globalProperties.emitter = emitter;

app.mount("#app");
