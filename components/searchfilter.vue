<style lang="css">
h5  {
font-weight: bold;
}
</style>

<template>

<div>
    <h3>Filter Results by</h3>
    <form action="/search" method="GET" id='searchForm'>
        <input type="hidden" name="keyword" id="keyword" v-model='keyword' />
        <input type="hidden" name="location" id="filterlocation" v-model='location' />
        <input type="hidden" name="lat" id="filterLat" />
        <input type="hidden" name="lng" id="filterLng" /> Distance
        <br />
        <select name="radius" id="radius">
            <option value="0">Exact Location</option>
            <option value="25">25 Miles</option>
            <option value="35">35 Miles</option>
            <option value="50">50 Miles</option>
        </select>
    </form>
    <br />
    <div  class="jtype">
        <h5>Job Type</h5>
        <ul>
            <li><a href='window.location.href'>Full-Time</a></li>
            <li><a href='#'>Part-Time</a></li>
            <li><a href='#'>Contract</a></li>
            <li><A href='#'>Internship</a></li>
        </ul>
    </div>
</div>

</template>

<script>

// // var moment = require('moment');
// // var rentals = {};
//
export default {
    props: ['keyword', 'location']
};

</script>
