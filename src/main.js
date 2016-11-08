import Vue from 'vue'
import App from './App'
import * as filter from './filter' //自定义过滤器

Object.keys(filter).forEach(k => Vue.filter(k, filter[k])) //注册过滤器


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
