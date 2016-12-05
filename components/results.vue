<template>
<div>
    <div v-for="r in rentals">
        <div>
            <a v-bind:href="'/job/' + r.id">{{ r.job_title }}</a>
            <br />
            <p><strong>Google Inc. </strong> - {{ r.location }}
                <p>{{ r.shortDesc }} </p>
                <p>{{ r.location }} </p>
        </div>
        <hr>
    </div>
    <!-- <paginatelinks name='rentals' for='rentals' :limit="2"></paginatelinks> -->
    <!-- <v-paginator v-bind:resource_url='getURL' @update="updateResource"></v-paginator> -->

</div>
</template>



<script>
// // var moment = require('moment');
// // var rentals = {};
//

// var VuePaginator = require ('../components/VPaginator');
export default {
    props: ['rentals', 'getURL']
};
</script>

<style lang="css">
</style>
