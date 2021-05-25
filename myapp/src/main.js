import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";

import router from "@/router";
import { dollarFilter, precentFilter } from "@/filter";

Vue.filter("dollar", dollarFilter);
Vue.filter("percent", precentFilter);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
