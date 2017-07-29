const newView = {
  template: '#newPage',

  data () {
    return {
      //
    }
  },

  methods: {
    //
  },

  mounted () {
    setTimeout(function () {
        $('.new_pen').show().addClass('animated fadeInUp show');}, 500,
    );
    setTimeout(function () {
        $('.new_chemical').show().addClass('animated fadeInUp show');}, 800,
    );
    setTimeout(function () {
        $('.new_math').show().addClass('animated fadeInUp show');}, 1100,
    );
    setTimeout(function () {
        $('.new_travel').show().addClass('animated fadeInUp show');}, 1400,
    );
  }
}
