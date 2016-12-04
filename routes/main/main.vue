

<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">

        <myheader></myheader>
        <div class="col-md-4">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
        </div>
        <div class="col-md-4">
            <searchform></searchform>

            <results :rentals="rentals"></results>


        </div>
        <div class="col-md-4 text-center">

        </div>
        <div class="col-md-1"></div>


    </div>

</div>
</template>

<script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
    data: function() {
        return {
            rentals: this.rentals,
            keyword: this.keyword,
            location: this.location
        }
    }
};
</script>

<style lang="css">
ul {
    list-style-type: none;
}
</style>
