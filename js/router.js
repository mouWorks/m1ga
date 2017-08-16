
const router = new VueRouter({
  routes: [
    { path: '/', component: mainView },
    { name: 'job', path: '/job/:role/:cat/:sl/', component: jobView },
    { path: '/new', component: newView },
    { name: 'question', path: '/question/:role', component: questionView },
    { name: 'question2', path: '/question2/:role/:cat', component: question2View },
    { name: 'question3', path: '/question3/:role/:cat/:sl', component: question3View },
    { path: '/trans', component: transView },
    { path: '/chart', component: chartView },
  ]
})
