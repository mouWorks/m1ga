const transView = {
  template: '#transPage',

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
        $('.new_taipei').show().addClass('animated fadeInUp show');}, 500,
    );
    setTimeout(function () {
        $('.new_taichung').show().addClass('animated fadeInUp show');}, 800,
    );
    setTimeout(function () {
        $('.new_tainan').show().addClass('animated fadeInUp show');}, 1100,
    );
    setTimeout(function () {
        $('.new_kaohsiung').show().addClass('animated fadeInUp show');}, 1400,
    );
  }
}
