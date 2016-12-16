

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
                <!-- <button class="btn btn-primary center-block">Apply Now</button> -->
                <button type="button" class="btn btn-primary btn-lg center-block" data-toggle="modal" data-target="#myModal">
                  Apply now
                </button>



            </div>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 class="modal-title" id="myModalLabel">Modal title</h4>
                        </div>
                        <div class="modal-body">
                            Upload resume or use the resume that you have on file
                            <form action="/apply" method="POST">
                            <input type="file" name="apply" id="apply" />

                            <br />
                            <p>Or apply with </p>
                            <p> {{ user_file_name }} </p>
                            <button type="submit" id="apply" class="btn btn-primary center-block">Apply now!</button>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default center-block" data-dismiss="modal">Close</button>

                        </div>
                    </div>
                </div>
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
export default {
    data: function() {
        return {
            job: this.job,
            desc: this.desc
        }
    },
};
</script>
