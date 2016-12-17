<style lang="css">



</style>

<template>

<div>
  <p> Showing results {{ x }} - {{ y }} of {{ total }} </p>

    <div v-for="r in rentals">
        <div>
            <a target="_blank" v-bind:href="'/job/' + r.id">{{ r.job_title }}</a>
            <br />
            <p><strong>Google Inc. </strong> - {{ r.location }}
                <p>{{ r.shortDesc }} </p>
                <p>{{ r.location }} </p>
                <p>{{ r.date_created }}</p>
        </div>
        <hr>
    </div>



</div>

</template>

<script>

// // var moment = require('moment');
// // var rentals = {};
//

// var VuePaginator = require ('../components/VPaginator');
export default {
    props: ['rentals', 'getURL', 'page', 'x', 'y', 'total']
};

</script>
