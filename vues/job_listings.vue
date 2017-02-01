<template>
<div>
    <myheader :user_logged='user_logged' :user_type='user_type'></myheader>


    <div class="container">
        <div class="row">
            <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/dashboard">Profile <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/emp_jobs">Jobs</a>
                    </li>
                </ul>


            </nav>

            <main class="col-sm-9 col-md-10">
                <h1>Dashboard</h1>
                <div v-for="l in listings">
                  <a v-bind:href="'/job/' + l.id"> {{ l.job_title }} {{ l.location }} {{ formatDate(l.date_created) }} </a>

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
            // edit: false
        }
    },
    methods: {
        formatDate: function(date) {
            return moment(date).fromNow();
        }
    }
};
</script>

<style>

</style>
