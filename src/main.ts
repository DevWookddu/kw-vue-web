import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import KwVueLibrary from 'kw-vue-library';
import 'kw-vue-library/dist/kw-vue-library.css';

Vue.config.productionTip = false;

Vue.use(KwVueLibrary);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
