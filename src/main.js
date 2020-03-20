import Vue from 'vue'
import App from './App'
import store from './store';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app')