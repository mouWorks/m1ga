const jobView = {
  template: '#jobPage',

  data () {
    return {
      url: 'http://m1ga.win/php/q.php',
      jobCount: null,
      jobList: [],
      message: ''
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
