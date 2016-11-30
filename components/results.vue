<template>
<ul id="example-1">
    <li v-for="item in rentals">
        {{ item.id }}
    </li>
</ul>
<h1>Hi</h1>
</template>



    <script>
// // var moment = require('moment');
// // var rentals = {};
//
export default {
  // props: ['rentals'],

    data: function() {
        return {
            rentals: this.rentals
        }
    },
};
</script>

<style lang="css">
</style>
