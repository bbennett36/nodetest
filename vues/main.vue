<style>

</style>

<template>
<div class="container">

    <myheader :user_logged='user_logged'></myheader>

    <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
            <searchform></searchform>
        </div>
        <div class="col-md-3"></div>

    </div>

    <div class="row">

        <div class="col-md-3">
            <searchfilter :keyword="keyword" :location="location"></searchfilter>
        </div>
        <div class="col-md-6">

            <results :x='x' :y='y' :total='total' :results="results"></results>

            <paginate :results='results' :current_page='current_page' :last_page='last_page' :pages='pages'></paginate>


        </div>

        <div class="col-md-3"></div>
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
