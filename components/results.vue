<template>
<div id="resultComp">

    <p id="resultText" class="text-center"> Jobs {{ x }} to {{ y }} of {{ total }} </p>

    <hr>

    <div v-for="r in results">
        <div>
            <h3 v-if="r.apply_type == 'email'">
                <a v-bind:href="'/job/' + r.id">{{ r.job_title }}</a>
            </h3>
            <h3 v-if="r.apply_type == 'url'">
            <a  target="_blank" v-bind:href="r.apply_url">{{ r.job_title }}</a>
          </h3>
            <p><strong>Google Inc. </strong> - {{ r.location }}</p>
                <p class="lead">{{ r.short_desc }} </p>
                <!-- <p class="lead">{{ r.location }} </p> -->
                <p class="lead float-left">{{ formatDate(r.date_created) }}</p>
                <p class="lead text-right">Quick Apply</p>

        </div>
        <hr>
    </div>



</div>
</template>

<script>
var moment = require('moment');
// import moment from 'moment'

export default {
    props: ['results', 'getURL', 'page', 'x', 'y', 'total', 'keyword', 'location'],
    methods: {
        formatDate: function(date) {
            return moment(date).fromNow();
        }
    }
};
</script>

<style lang="css">



</style>
