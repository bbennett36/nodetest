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
</div>
</template>



    <script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
    props: ['rentals']
};
</script>

<style lang="css">
</style>
