

<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">

        <myheader :user_logged='user_logged'></myheader>
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div v-for="job in job">


                <div class="text-center">
                    <h1>{{ job.job_title }}</h1>
                    <p><strong>Google Inc. </strong></p>
                </div>
                <h2><u>Job Description</u></h2>
                <p v-html="desc"></p>

                <p class="text-center">Posted: {{ job.date_created }}</p>
                <button v-on:click="applyResume()" class="btn btn-primary center-block">{{ buttonText }}</button>



            </div>

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
var axios = require('axios');

export default {
    data: function() {
        return {
            job: this.job,
            desc: this.desc,
            buttonText: 'Quick Apply'
        }
    },
    methods: {
        activeForm: function() {
            // if (document.getElementById('form1').innerHTML.checked == true) {
            //     // document.getElementById('apply1').removeAttribute('disabled');
            // }
            // else {
            //   // document.getElementById('apply2').removeAttribute('disabled');
            //   // document.getElementById('apply1').setAttribute('disabled', 'disabled');
            //
            //
            // }
        },
        applyResume: function() {
          this.buttonText = "Applied";
            axios.post('/apply');
        }

    }
};
</script>
