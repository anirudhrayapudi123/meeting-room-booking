import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import SvgTransition from 'vue-svg-transition';
import 'vue-material-design-icons/styles.css';
import 'vue-material/dist/vue-material.min.css';
import Vuematerial from "vue-material";
import 'vue-material/dist/theme/default.css';
import feather from 'vue-icon';
import VueResource from 'vue-resource';
import * as mdbvue from "mdbvue";
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
Vue.use(VueResource);
Vue.config.productionTip = false;
Vue.use(SvgTransition);
Vue.use(feather,'v-icon');
Vue.use(Vuematerial);

// Vue.use( mdbTimePicker, mdbContainer, mdbRow, mdbCol)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
