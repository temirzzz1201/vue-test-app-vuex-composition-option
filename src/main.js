import { createApp } from "vue";
import App from "./App.vue";
import components from "@/UI";
import router from "@/router/router";
// import Vintersection from "./derictivs/Vintersection";
import directives from "@/derictivs";
import store from "@/store";

const app = createApp(App);

// app.directive("intersection", Vintersection);
directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(router).use(store).mount("#app");
