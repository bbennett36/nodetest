<template>
<div>
    <p id="resultText"> Showing results {{ x }} - {{ y }} of {{ total }} </p>

    <div v-for="r in results">
        <div>
            <h3 v-if="r.apply_type == 'email'">
                <a target="_blank" v-bind:href="'/job/' + r.id">{{ r.job_title }}</a>
            </h3>
            <h3 v-if="r.apply_type == 'url'">
            <a  target="_blank" v-bind:href="r.apply_url">{{ r.job_title }}</a>
          </h3>
            <p><strong>Google Inc. </strong> - {{ r.location }}
                <p class="lead">{{ r.short_desc }} </p>
                <!-- <p class="lead">{{ r.location }} </p> -->
                <p class="lead">{{ formatDate(r.date_created) }}</p>
        </div>
        <hr>
    </div>



</div>
</template>

<script>
var moment = require('moment');
// import moment from 'moment'

export default {
    props: ['results', 'getURL', 'page', 'x', 'y', 'total'],
    methods: {
        formatDate: function(date) {
            // return moment(date, "YYYYMMDD").fromNow();
            // var date

            return moment(date).fromNow();
        }
    }
};
</script>

<style lang="css">



</style>
