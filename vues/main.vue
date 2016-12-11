<style>

</style>

<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">

        <myheader :user_logged="user_logged" :rentals='rentals'></myheader>
        <div class="col-md-4">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
        </div>
        <div class="col-md-4">
            <searchform></searchform>
            <div id="countdown"></div>


            <results :x='x' :y='y' :total='total' :rentals="rentals"></results>

            <!-- <pagination :name='pagination' :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination> -->
            <paginate :rentals='rentals' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>


        </div>
        <div class="col-md-4 text-center">

        </div>
        <div class="col-md-1"></div>


    </div>

</div>
</template>

<script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
    data: function() {
        return {
            // items: this.rentals
        }
    },
    methods: {
        countdown() {
            var end = new Date('02/19/2012 10:1 AM');

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
    beforeMount: {
        countdown(),
    };
};
</script>
