
// var data = {
//   labels: ["Chocolate", "Vanilla", "Strawberry"],
//   datasets: [{
//     label: "Blue",
//     backgroundColor: "blue",
//     data: [3, 7, 4]
//   }, {
//     label: "Red",
//     backgroundColor: "red",
//     data: [4, 3, 5]
//   }, {
//     label: "Green",
//     backgroundColor: "green",
//     data: [7, 2, 6]
//   }]
// }

const chartView = {
  template: '#chartPage',

  data () {
    return {
      citiesList: CitiesList,
      selectedCity: null,
      ctx: null,
    }
  },

  computed: {
    chartData () {
      let averageData = CitiesNModel[CitiesList[0]]
      let cityData = CitiesNModel[this.selectedCity]
      return {
        labels: ValueLabelsList,
        datasets: [
          {
            label: this.selectedCity,
            backgroundColor: "#ff7900",
            data: Object.keys(cityData).map(key => cityData[key])
          }, {
            label: CitiesList[0],
            backgroundColor: "#999",
            data: Object.keys(averageData).map(key => averageData[key])
          }
        ]
      }
    }
  },

  watch: {
    selectedCity () {
      this.drwaChart()
    }
  },

  methods: {
    drwaChart () {
      var barChart = new Chart(this.ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          barValueSpacing: 20,
          scales: {
            yAxes: [{
              ticks: { min: 0 }
            }]
          }
        }
      });
    }
  },

  mounted () {
    this.ctx = document.getElementById("canvChart").getContext("2d")
  }
}
