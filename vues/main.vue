<style>

</style>

<template>
<div>

    <myheader :user_logged='user_logged'></myheader>


    <!-- <div class="b">
        <searchform :keyword="keyword" :location="location"></searchform>
    </div> -->

    <!-- <div class="a">
        A
    </div> -->
    <div class="container">


        <div class="row">
            <div class="col-sm-4 col-md-3 col-xl-2">
                <!-- <p class="lead">Filter Results</p>
        <hr> -->
            </div>
            <div class="col-sm-8 col-md-9 col-xl-8">

              <div class="hidden-sm-up">
                  <button class="btn btn-outline-success btn-lg btn-block" id="filter-btn" type="button" data-toggle="collapse" data-target="#collapseFilters" aria-expanded="false" aria-controls="collapseExample">
                  Toggle Filters
                </button>

                  <div class="collapse" id="collapseFilters">

                      <div class="row">

                          <div class="col">
                            <div class="custom-controls-stacked">


                              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Full-Time</span>
              </label>


                              <label class="custom-control custom-checkbox">
                                  <input type="checkbox" class="custom-control-input">
                                  <span class="custom-control-indicator"></span>
                                  <span class="custom-control-description">Part-Time</span>
                                </label>



                              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Internship</span>
              </label>
                              <!-- </div> -->

                              <label class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input">
                <span class="custom-control-indicator"></span>
                <span class="custom-control-description">Contract</span>
              </label>
                              </div>
                          </div>

                          <div class="col">
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
                  </div>
              </div>
          </div>

                <h2 id="q-results" class="text-center"> {{ keyword }} jobs in {{ location }} </h2>
                <!-- <p class="text-right"> Jobs {{ x }} to {{ y }} of {{ total }} </p> -->

            </div>

        </div>

        <div class="row">

            <div class="col-sm-4 col-md-3 col-xl-2">
                <!-- <div class="col-xs-4 col-md-3"> -->

                <searchfilter :keyword="keyword" :location="location"></searchfilter>
                <!-- <hr> -->
            </div>
            <div class="col-sm-8 col-md-9 col-xl-8">
                <!-- <div class="col-xs-12 col-md-8"> -->
                <results :x='x' :y='y' :total='total' :results="results" :keyword="keyword" :location="location"></results>
            </div>

            <div class="col-xl-2">
            </div>

        </div>
        <div class="row">

            <div class="col-12">
                <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>
            </div>

        </div>

        <!-- <div class="col-md-3"></div> -->

    </div>
</div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    }

}
</script>
