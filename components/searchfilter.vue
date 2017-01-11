<style scoped>
/*.filForm ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}*/
</style>

<template>
<div class="col-lg-12 hidden-sm-down">
    <!-- <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
      Filters
    </button>

    <div class="collapse" id="collapseExample"> -->

        <div class="row">
            <div class="col-md-12">
                <form action="/search" method="GET" id='searchForm'>
                    <input type="hidden" name="keyword" id="keyword" v-model='keyword' />
                    <input type="hidden" name="location" id="filterlocation" v-model='location' />
                    <label for="radius">Distance</label>
                    <select class="form-control" name="radius" id="radius" onchange="this.form.submit()">
                      <option value="0">Exact Location</option>
                      <option value="25" selected>25 Miles</option>
                      <option value="35">35 Miles</option>
                      <option value="50">50 Miles</option>
                    </select>
                </form>
            </div>
            <div class="col-md-12">
                <div class="custom-controls-stacked">

                    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input">
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Full-Time</span>
    </label>


                    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input">
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Internship</span>
    </label>

                    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input">
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Part-Time</span>
    </label>

                    <label class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input">
      <span class="custom-control-indicator"></span>
      <span class="custom-control-description">Contract</span>
    </label>
                </div>
            </div>
        </div>
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
