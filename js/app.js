$(document).ready(function(){

    var startCounter = function () {
      var counter = 0;
      var limit = 100000;

      function numberWithCommas(x) {
        return x.toFixed(2).replace(/(\d)(?=(\d{3})+\.\d\d$)/g,"$1,");
      }

      var startCounter = setInterval(function() {
      	if(counter < limit) {
          ++counter;
        } else {
          $('.saved').text('You could have saved over');
          clearInterval(startCounter);
        }
    		$('.money').text("$" + numberWithCommas(counter) + "*");
      }, 1200);
    }

    $('#neuro_button').click(function(){
        $('#neuro_specs').toggle();
    });

    $('#ortho_button').click(function(){
        $('#ortho_specs').toggle();
    });

    $('#cardio_button').click(function(){
        $('#cardio_specs').toggle();
    });

    $('#abs_button').click(function(){
        $('#abs_specs').toggle();
    });

    $('#headneck_button').click(function(){
        $('#headneck_specs').toggle();
    });

    $('#highrisk_button').click(function(){
        $('#highrisk_specs').toggle();
    });

    startCounter();
});
