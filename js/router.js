
const router = new VueRouter({
  routes: [
    { path: '/', component: mainView },
    { path: '/job', component: jobView },
    { path: '/new', component: newView },
    { path: '/test', component: testView },
    { path: '/trans', component: transView },
    { path: '/chart', component: chartView },
  ]
})
