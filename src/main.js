import Vue from "vue";
import page1 from "./views/page1/index";
import "./assets/styles/index.scss";

Vue.config.productionTip = false;

new Vue({
  render: h => h(page1),
}).$mount("#app");
