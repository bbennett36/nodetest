<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">



            <myheader :user_logged='user_logged' :user_type='user_type'></myheader>



            <div class="col-md-4"></div>
            <div class="col-md-4 text-center">
                <searchform></searchform>


            </div>
            <div class="col-md-4"></div>


        </div>

    </div>

</div>
</template>

<script>
export default {
    data: function() {
        return {
            // dogs: 3
            // user: this.user
        }
    }
}
</script>

<style>

</style>
