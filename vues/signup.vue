<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

            <myheader :user_logged='user_logged'></myheader>



            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">

              <h1>Sign up</h1>

            </div>
            <div class="col-md-2"></div>
            <div class="col-md-1"></div>


        </div>

    </div>

</div>
</template>

<script>
export default {
    data: function() {
        return {
            // dogs: 3
        }
    }
}
</script>

<style>

</style>
