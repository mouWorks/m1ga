const main = {
  template: '#mainPage',

  data () {
    return {
      apiUrl: '',
      data: null,
      message: null,
    }
  },

  methods: {
    load () {
      if (this.apiUrl.length > 0) {
        this.$http.get(this.apiUrl).then(response => {
          // get body data
          console.log(response)
          this.data = response.body
        }, response => {
          // error callback
          console.log(response)
          this.message = response.status + ' ' + response.statusText
        })
      } else {
        this.message = 'Please enter Url...'
      }
    }
  }
}
