
const router = new VueRouter({
  routes: [
    { path: '/', component: mainView },
    { name: 'job', path: '/job/:role/:cat/:sl/', component: jobView },
    { path: '/new', component: newView },
    { name: 'test', path: '/test/:role', component: testView },
    { name: 'test2', path: '/test2/:role/:cat', component: test2View },
    { name: 'test3', path: '/test3/:role/:cat/:sl', component: test3View },
    { path: '/trans', component: transView },
    { path: '/chart', component: chartView },
  ]
})
