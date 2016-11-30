<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">

        <myheader></myheader>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <searchform></searchform>
            <!-- <ul>
                <li v-for="item in rentals">
                    {{ item.id }}
                </li>
            </ul> -->

            <div v-for="r in rentals">
                <div>
                  <a v-bind:href="'/job/' + r.id">{{ r.job_title }}</a>
                    <br />
                    <p><strong>Google Inc. </strong> - {{ r.location }}
                        <p>{{ r.shortDesc }} </p>
                        <p>{{ r.location }} </p>
                </div>
                <hr>

            </div>
            <!-- <results :rentals="rentals"></results> -->


        </div>
        <div class="col-md-4 text-center">

        </div>
        <div class="col-md-1"></div>


    </div>
</div>
<!-- <myfooter></myfooter> -->
</template>

 <script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
    data: function() {
        return {
            rentals: this.rentals
        }
    },
};
</script>
