<style>

</style>

<template>

  <div>

        <myheader :user_logged='user_logged'></myheader>


    <searchform :keyword="keyword" :location="location"></searchform>
    <div class="container">
    

    <div class="row">
      <div class="col-sm-4 col-md-3 col-lg-3">
        <!-- <p class="lead">Filter Results</p>
        <hr> -->
      </div>
        <div class="col-sm-8 col-md-9 col-lg-9">

            <h2 id="q-results"> {{ keyword }} jobs in {{ location }} </h2>
            <!-- <p class="text-right"> Jobs {{ x }} to {{ y }} of {{ total }} </p> -->

        </div>
    </div>

    <div class="row">

        <div class="col-sm-4 col-md-3 col-lg-3">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
            <!-- <hr> -->
        </div>
        <div class="col-sm-8 col-md-9 col-lg-9">
            <results :x='x' :y='y' :total='total' :results="results" :keyword="keyword" :location="location"></results>

        </div>

        <div class="col-12">
            <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>
        </div>

        <!-- <div class="col-md-3"></div> -->
    </div>

</div>
</div>
</template>

<script>
export default {
    data: function() {
        return {

        }
    }
};
</script>
