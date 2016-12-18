<style>

</style>

<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">


        <myheader :user_logged='user_logged'></myheader>

        <div class="col-md-4">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
        </div>
        <div class="col-md-4">
          <div class="text-center">
              <h1>DAYS UNTIL LAUNCH</h1>
              <h1 id="countdown"> </h1>
          </div>
            <searchform></searchform>



            <results :x='x' :y='y' :total='total' :results="results"></results>

            <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>


        </div>
        <div class="col-md-4 text-center">

        </div>
        <div class="col-md-1"></div>


    </div>

</div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    },
    methods: {
        countdown: function() {
            var end = new Date('01/01/2017 12:00 AM');

            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            var timer;

            function showRemaining() {
                var now = new Date();
                var distance = end - now;
                if (distance < 0) {

                    clearInterval(timer);
                    document.getElementById('countdown').innerHTML = 'EXPIRED!';

                    return;
                }
                var days = Math.floor(distance / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) / _minute);
                var seconds = Math.floor((distance % _minute) / _second);

                document.getElementById('countdown').innerHTML = days + 'days ';
                document.getElementById('countdown').innerHTML += hours + 'hrs ';
                document.getElementById('countdown').innerHTML += minutes + 'mins ';
                document.getElementById('countdown').innerHTML += seconds + 'secs';
            }

            timer = setInterval(showRemaining, 1000);
        }

    },
    beforeMount() {
        this.countdown()
    }
};
</script>
