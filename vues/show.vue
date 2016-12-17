

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
                <!-- <button type="button" class="btn btn-primary btn-lg center-block" data-toggle="modal" data-target="#myModal">
                  Apply now
                </button> -->



            </div>

            <!-- <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            <form action="/apply" method="POST">

                                <input type="checkbox" id="form1" v-onclick="activeForm()" name="cleaning" value="yes" checked />
                                <p>Apply with resume on file </p>
                                <p> {{ user_file_name }} </p>
                                <input type="text" value={{ user.file_name }} id="apply1" />
                                <br />

                                <input type="checkbox" id="form2" v-onclick="activeForm()" name="cleaning" value="yes" /> Upload resume or use the resume that you have on file

                                <br />
                                <input type="file" name="apply" id="apply2" disabled/>
                                <br />
                                <button type="submit" id="apply" class="btn btn-primary center-block">Apply now!</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default center-block" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
            </div> -->

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
