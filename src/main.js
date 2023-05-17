import Vue from "vue";
import page1 from "./views/page1";
import ElementUI from "element-ui";
import HrUI from "./ui"

import "element-ui/lib/theme-chalk/index.css";
import "./assets/styles/index.scss";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(HrUI);

new Vue({
  render: h => h(page1),
}).$mount("#app");
