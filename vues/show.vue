

<template>
<div>
    <myheader :user_logged='user_logged'> </myheader>

    <!-- <searchform :keyword="keyword" :location="location"></searchform> -->


    <div class="container">
        <div class="row">
            <!-- <div class="col-xs-12 col-sm-12 col-md-8"> -->
            <div class="col-12">
                <div v-for="job in job">


                    <div class="text-center">
                        <h1 class="display-4">{{ job.job_title }}</h1>
                        <p><strong>Google Inc. </strong> - {{ job.location }}</p>
                      </div>

                        <h2><em><strong>Job Description</strong></em></h2>
                        <hr>
                    <p v-html="desc"></p>

                    <div class="text-center">
                      <p>Job Type: {{ job.job_type }}</p>
                    <p>Posted: {{ formatDate(job.date_created) }}</p>
                    <button v-on:click="applyResume()" id="apply-btn" class="btn btn-primary">{{ buttonText }}</button>
                  </div>
                </div>

            </div>
            <!-- <div class="hidden-sm-down col-md-4"></div> -->


        <!-- </div> -->
    </div>
</div>
</template>

<script>
// // var moment = require('moment');
// // var rentals = {};
var moment = require('moment');

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
        },
        formatDate: function(date) {
            return moment(date).fromNow();
        }
    }

};
</script>

<style>

</style>
