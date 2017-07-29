const jobView = {
  template: '#jobPage',

  data () {
    return {
      //url: 'http://m1ga.win/php/q.php',
      jobCount: null,
      jobList: [],
      params: {
        area: '6001001000',
        cat: 'a',
        role: 0,
        slmin: 22000,
        slmax: 51000,
      },
      message: ''
    }
  },

  computed: {
    url () {
      return 'http://m1ga.win/php/q.php?' + $.param(this.params)
    }
  },

  methods: {
    load (url) {
      if (this.url.length > 0) {
        this.$http.get(url).then(response => {
          // get body data
          console.log(response)
          this.jobCount = Number(response.body.RECORDCOUNT)
          this.jobList = response.body.data
        }, response => {
          // error callback
          console.log(response)
          this.message = response.status + ' ' + response.statusText
        })
      } else {
        this.message = 'Please enter Url...'
      }
    }
  },

  mounted () {
    this.load(this.url)
  }
}
