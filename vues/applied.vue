
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
                <h1 class="text-center">Applied Jobs</h1>
                <p id="resultText" class="text-center"> Results {{ x }} to {{ y }} of {{ total }} </p>
                <hr id="apply-text">
                <div v-for="r in results">
                    <!-- <a v-bind:href="'/job/' + r.id"> -->
                    <div>
                      <div id="apply-text">

                        <a v-if="r.apply_type == 'email'" v-bind:href="'/job/' + r.id"><strong>{{ r.job_title }} </strong></a>

                        <a v-if="r.apply_type == 'url'" target="_blank" v-bind:href="r.apply_url">{{ r.job_title }}</a>
                        <p>
                            <strong>{{ r.company_name }}</strong> - {{ r.location }}
                        </p>

                            <p class="lead float-left">Posted: 02/19/2017</p>

                            <p class="lead text-right">Applied: 02/19/2017</p>

                            <hr>
                        </div>


                    </div>
                    <!-- </a> -->
                </div>

        </div>
        </main>
        <div class="col-sm-3 col-lg-2">

        </div>
        <div class="row">

            <div class="col-12">
                <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages' :page_name='page_name'></paginate>
            </div>

        </div>
    </div>

</div>
</template>

<script>
var moment = require('moment');

export default {

    data: function() {
        return {
          // calculated_offset: (this.x + 1
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
