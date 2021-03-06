// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
require('./assets/style.css')
require('./assets/font-awesome/css/font-awesome.min.css')
require('./assets/fontawesome/css/all.css')
import { store } from './store/store';
import firebase from "firebase";
import './firebase';
import { firestorePlugin } from 'vuefire'


Vue.use(firestorePlugin)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})