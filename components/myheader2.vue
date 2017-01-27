<template>
  <div id="nav-color">

    <div class="d-flex justify-content-start">
Home
    </div>

    <div class="d-flex justify-content-center">
Search
    </div>

    <div class="d-flex justify-content-end">
Login
    </div>

</div>


</template>

<script>
export default {
    props: ['user_logged', 'user_type'],
    data: function() {
        return {
            // 'user_logged': this.user_logged
        }
    }
}
</script>

<style lang="css">
</style>
