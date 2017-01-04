<style>

</style>

<template>
<div id="wrap">
    <div class="col-md-1"></div>
    <div id="main-container" class="container col-md-10">


        <myheader :user_logged='user_logged'></myheader>

        <div class="col-md-4">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
        </div>
        <div class="col-md-4">

            <searchform></searchform>



            <results :x='x' :y='y' :total='total' :results="results"></results>

            <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>


        </div>
        <div class="col-md-4 text-center">

        </div>
        <div class="col-md-1"></div>


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
