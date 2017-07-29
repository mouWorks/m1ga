const jobView = {
  template: '#jobPage',

  data () {
    return {
      //url: 'http://m1ga.win/php/q.php',
      jobCount: null,
      jobList: [],
      selectedCity: CitiesList[2],
      params: {
        area: '6001002000',
        cat: this.$route.params.cat,
        role: this.$route.params.role,
        slmin: 22000,
        slmax: 99999,
      },
      message: ''
    }
  },

  computed: {
    status () {
      return this.$route.params.role == '0' ? '菜鳥出巢' : '老鳥跳巢'
    },
    chartData () {
      let averageData = CitiesNModel[CitiesList[0]]
      let cityData = CitiesNModel[this.selectedCity]
      return {
        labels: ValueLabelsList,
        datasets: [
          {
            label: this.selectedCity,
            backgroundColor: "rgba(255,121,0,1)",
            data: Object.keys(cityData).map(key => cityData[key])
          }, {
            label: CitiesList[0],
            backgroundColor: "rgba(94,134,158,1)",
            data: Object.keys(averageData).map(key => averageData[key])
          }
        ]
      }
    },
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
    },
    chart () {
      let ctx = document.getElementById("canvas").getContext("2d")
      var barChart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          legend: {
            display: false
          },
          barValueSpacing: 20,
          scales: {
            yAxes: [{
              ticks: { min: 0 }
            }]
          }
        }
      });
    },
    love () {
      $(".loveyes").click(function(){
         $( this ).toggleClass('loveyeson');
      });
    },
    btn_up () {
        $('.gotop').click(function() {
            $('html,body').animate({scrollTop:0},500);
        });
    }
  },

  mounted () {
    this.load(this.url)
    //
    $(() => {
        this.btn_up();
        this.love();
        this.chart();
    })

    switch (this.$route.params.sl) {
      case '3k':
        this.params.slmin = 22000
        this.params.slmax = 39999
        break;
      case '4k':
        this.params.slmin = 40000
        this.params.slmax = 49999
        break;
      case '5k':
        this.params.slmin = 50000
        this.params.slmax = 99999
        break;
      default:
        this.params.slmin = 22000
        this.params.slmax = 99999
    }
  }
}
