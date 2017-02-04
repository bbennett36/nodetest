<template>
<div>

  <myheader :user_logged='user_logged' :user_type='user_type'></myheader>



    <div class="container">
        <div class="row">
            <nav class="col-sm-3 col-md-2 bg-faded sidebar">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link" href="/profile">Profile</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/applied">My Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="/searches">My Searches</a>
                    </li>
                </ul>

            </nav>

            <main class="col-sm-9 col-md-10">
                <h1>Searches</h1>

                <div v-for="s in searches">
                <a v-bind:href="'/search?keyword=' + s.query + '&location=' + s.location"> {{ s.query }} {{ s.location }} {{ formatDate(s.search_date) }} </a>
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
            // return moment(date).fromNow();
            return moment(date).format('MMM Do YYYY, h:mm a');
        }
    }
}
</script>

<style>

</style>
