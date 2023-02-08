import { invoke } from "@tauri-apps/api";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

invoke("greet", { name: "World" }).then((response) => console.log(response));

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
