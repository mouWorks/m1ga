//
// header
//
Vue.component('header-section', {
  template: '#headerSec'
})

//
// footer
//
Vue.component('footer-section', {
  template: '#footerSec'
})

//
// js for index.pug
//
var app = new Vue({
  el: '#wrapper',
  router: router,
})
