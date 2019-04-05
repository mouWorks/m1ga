const JobNameHash = {"a":"\u7d93\u71df \/ \u4eba\u8cc7\u985e ","b":"\u884c\u92b7\u4f01\u5283 \/ \u5c08\u6848\u7ba1\u7406\u985e ","c":"\u9910\u98f2\u65c5\u904a\u985e","d":"\u64cd\u4f5c\u7dad\u4fee \/ \u6280\u8853\u985e","e":"\u71df\u5efa \/ \u88fd\u5716\u985e","f":"\u6587\u5b57\u5de5\u4f5c \/ \u50b3\u5a92\u985e","g":" \u5b78\u8853\u6559\u80b2 \/ \u8f14\u5c0e\u985e","h":" \u751f\u7522\u88fd\u9020 \/ \u54c1\u7ba1\u985e","i":" \u8ca1\u6703 \/ \u91d1\u878d\u985e","j":" \u5ba2\u670d \/ \u696d\u52d9 \/ \u8cbf\u6613\u985e","k":" \u8cc7\u8a0a\u8edf\u9ad4\u7cfb\u7d71\u985e","l":" \u8cc7\u6750 \/ \u7269\u6d41 \/ \u904b\u8f38\u985e","m":" \u85dd\u8853\u8a2d\u8a08\u985e","n":" \u91ab\u7642 \/ \u4fdd\u5065\u985e","o":" \u7814\u767c\u76f8\u95dc\u985e","p":" \u8ecd\u8b66\u6d88 \/ \u4fdd\u5168\u985e","q":" \u5176\u4ed6\u8077\u985e"}

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
      jobNameHash: JobNameHash,
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
      return 'http://localhost:9090/php/q.php?' + $.param(this.params)
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
    remove (job, event) {
      $(event.target).parents('.job').hide('slow')
      //this.jobList.splice(this.jobList.indexOf(job), 1)
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
