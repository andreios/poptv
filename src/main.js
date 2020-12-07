/*
Name:  Andrew Luehrs
Class: CIS131-W01
Date:  11-01-2020
Assn:  VueCLI/Axios Popular TV Shows

Base JS file that imports the App component and performs basic Vue setup. 
*/

import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
