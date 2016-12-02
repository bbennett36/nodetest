
<template>
<div>
    <h3>Filter Results by</h3>
    <form action="/search" method="GET" id='searchForm'>
        <input type="hidden" name="keyword" id="keyword" v-model='keyword' />
        <!-- <input type="hidden" name="location" id="location" v-model='location' /> -->
        <input type="hidden" name="filterLat" id="filterLat" />
        <input type="hidden" name="filterLng" id="filterLng" /> Radius
        <select id="radius">
                           <option>Exact Location</option>
                           <option value="25">25 Miles</option>
                           <option value="35">35 Miles</option>
                           <option value="50">50 Miles</option>
                       </select>
    </form>
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

<style lang="css">
</style>
