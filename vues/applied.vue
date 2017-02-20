
<template>
<div>

    <myheader :user_logged='user_logged' :user_type='user_type'></myheader>

    <div class="container">
        <div class="row">
            <nav class="col-sm-3 col-lg-2 sidebar" id="prof-nav">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/applied">My Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/searches">My Searches</a>
                    </li>
                </ul>

            </nav>

            <main class="col-sm-6 col-lg-8">
                <h1>Applied Jobs</h1>

                <hr>
                <div v-for="r in applied">
                    <!-- <a v-bind:href="'/job/' + r.id"> -->
                    <div>
                        <a v-if="r.apply_type == 'email'" v-bind:href="'/job/' + r.id"><strong>{{ r.job_title }} </strong></a>

                        <a v-if="r.apply_type == 'url'" target="_blank" v-bind:href="r.apply_url">{{ r.job_title }}</a>
                        <p>
                          <strong>{{ r.company_name }}</strong> - {{ r.location }}
                        </p>
                        <div id="apply-text">

                        <p class="float-left">Posted: 02/19/2017</p>

                        <p class="text-right">Applied: 02/19/2017</p>

                        <hr>
                      </div>


                    </div>
                    <!-- </a> -->
                </div>


                <!-- <table class="table table-hover table-responsive">
                    <thead>
                        <tr>
                            <th>Title and Company</th>
                            <th>
                              Location
                            </th>
                            <th>
                              Posted
                            </th>
                            <th>
                              Applied
                            </th>
                        </tr>
                    </thead>
                    <tbody v-for="a in applied">
                            <p v-html="a.job_desc"></p> -->
                <!-- <tr>
                                <td scope="row">
                                    <a v-bind:href="'/job/' + a.job_id">
                                    {{ a.job_title }} at {{ a.company_name }}
                                  </a>

                                </td>
                                <td>
                                  {{ a.location }}

                                </td>
                                <td>
                                  02/16/2017
                                </td>
                                <td>
                                  02/16/2017


                                </td>

                            </tr>
                    </tbody> -->
                <!-- </table>  -->




        </div>
        </main>
        <div class="col-sm-3 col-lg-2">

        </div>
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
