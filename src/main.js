import Vue from 'vue';
import VueMaterial from 'vue-material';
import VueMarkdown from 'vue-markdown';
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import App from './App.vue';

import routes from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(VueMarkdown);

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app');
