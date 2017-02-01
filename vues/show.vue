

<template>
<div>
  <myheader :user_logged='user_logged' :user_type='user_type'></myheader>


    <!-- <searchform :keyword="keyword" :location="location"></searchform> -->


    <div class="container">
        <div class="row">
            <!-- <div class="col-xs-12 col-sm-12 col-md-8"> -->
            <div class="col-sm-1"></div>
            <div class=" col-xs-12 col-sm-10">

                <div v-for="job in job">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript: history.back()">Search Jobs</a></li>
                        <li class="breadcrumb-item active">{{ job.job_title }}</li>
                    </ol>

                    <div class="text-center">
                        <h1 class="display-4"><strong>{{ job.job_title }}</strong></h1>
                        <p><strong>Google Inc. </strong> - {{ job.location }}</p>
                    </div>

                    <!-- <h2><em>Job Description</em></h2> -->
                    <hr>
                    <p v-html="desc"></p>
                    <hr>
                    <div class="text-center">
                        <p>Job Type: {{ job.job_type }}</p>
                        <p>Posted: {{ formatDate(job.date_created) }}</p>
                        <button v-on:click="applyResume()" id="apply-btn" class="btn btn-success btn-lg">{{ buttonText }}</button>
                        <br />
                        <br />

                        <a id="apply-btn" href="javascript: history.back()" class="btn btn-success btn-lg">Go Back</a>
                    </div>
                </div>

            </div>
            <div class="col-sm-1"></div>
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
            // job_id: this.job[1],
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
            axios.post('/apply/' + this.job_id);
                //     id: this.job.id
                // })
                // .then(function(response) {
                //     console.log(response);
                // })
                // .catch(function(error) {
                //     console.log(error);
                // });
        },
        formatDate: function(date) {
            return moment(date).fromNow();
        }
    }

};
</script>

<style>

</style>
