import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 导入全局样式表
import "./assets/css/global.css";

// 完整引入 Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import ZkTable from "vue-table-with-tree-grid";

import axios from "axios";

import VueQuillEditor from "vue-quill-editor";

// require styles
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Vue.use(ElementUI);

Vue.use(ZkTable);

Vue.use(VueQuillEditor /* { default global options } */);

// 配置请求的根路径
axios.defaults.baseURL = "http://timemeetyou.com:8889/api/private/v1/";
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem("token");
  return config;
});
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.filter("dateFormat", function(originVal) {
  const dt = new Date(originVal);
  const y = dt.getFullYear();
  const m = (dt.getMonth() + 1 + "").padStart(2, "0");
  const d = (dt.getDate() + "").padStart(2, "0");

  const hh = (dt.getHours() + "").padStart(2, "0");
  const mm = (dt.getMinutes() + "").padStart(2, "0");
  const ss = (dt.getSeconds() + "").padStart(2, "0");

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
