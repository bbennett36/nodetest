<style>

</style>

<template>

  <div v-scroll="onScroll">

        <myheader :user_logged='user_logged'></myheader>


<div class="b">
    <searchform :keyword="keyword" :location="location"></searchform>
  </div>

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
var scroll = require('vue-scroll')
export default {
    data: function() {
        return {

        }
    },
    mounted: function () {
      $(window).scroll(function() {

        if ($(this).scrollTop()>0)
         {
            $('.b').fadeOut();
         }
        else
         {
          $('.a').fadeIn();
         }
     });


  },
  methods:{
    onScroll:function(e, position){
      this.position = position;
    }
  }
};
</script>
