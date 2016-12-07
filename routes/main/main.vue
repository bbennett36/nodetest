<style>

</style>

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

    <p>  Showing results {{ x }}-{{ y }} of {{ total }} </p>
            <results :rentals="rentals"></results>

            <!-- <pagination :name='pagination' :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination> -->
            <paginate :rentals='rentals' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>


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
            // items: this.rentals
        }
    }
};
</script>
