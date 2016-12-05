<style scoped>
/*.filForm ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}*/
</style>

<template>
<div class="filForm">
    <h3>Filter Results by</h3>
    <form action="/search" method="GET" id='searchForm'>
        <input type="hidden" name="keyword" id="keyword" v-model='keyword' />
        <input type="hidden" name="location" id="filterlocation" v-model='location' />
        <!-- <input type="hidden" name="lat" id="filterLat" />
        <input type="hidden" name="lng" id="filterLng" />-->
        Distance
        <br />
        <select name="radius" id="radius" onchange="this.form.submit()">
            <option value="0">Exact Location</option>
            <option value="25" selected>25 Miles</option>
            <option value="35">35 Miles</option>
            <option value="50">50 Miles</option>
        </select>
    </form>
    <br />
    <div class="jtype">
        <h5>Job Type</h5>
        <ul>
            <li><a v-bind:href="resource_url + '&type=Full-Time'">Full-Time</a></li>
            <li><a v-bind:href="resource_url + '&type=Part-Time'">Part-Time</a></li>
            <li><a v-bind:href="resource_url + '&type=Contract'">Contract</a></li>
            <li><a v-bind:href="resource_url + '&type=Internship'">Internship</a></li>
        </ul>
    </div>

</div>
</template>

<script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
    props: ['keyword', 'location'],
    data: function() {
        return {
            resource_url: ''
        }
    },
    methods: {
        gurl: function() {
          this.resource_url = window.location.search;
          // return currentUrl;
        }
    },
    beforeMount() {
        this.gurl()
    }
};
</script>
