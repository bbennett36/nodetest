<template>
<div>

  <myheader :user_logged='user_logged'></myheader>


    <div class="container">
        <div class="row">
            <nav class="col-sm-3 col-md-2 bg-faded sidebar">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/applied">Jobs</a>
                    </li>
                </ul>

            </nav>

            <main class="col-sm-9 col-md-10">
                <h1>Applied Jobs</h1>

                <div v-for="a in applied">
                  <!-- <p v-html="a.job_desc"></p> -->
                <p> {{ a.job_title }} {{ a.location }} {{ formatDate(a.date_created) }} </p>
                </div>




        </div>
        </main>
    </div>

</div>
</template>

<script>
var moment = require('moment');

export default {

    data: function() {
        return {

        }
    },
    methods: {
        formatDate: function(date) {
            return moment(date).fromNow();
        }
    }
}
</script>

<style>

</style>
