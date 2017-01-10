<template>
<div class="collapse" id="navbarToggleExternalContent">
<div class="col-lg-12">
    <form action="/search" method="GET" id="geoForm">
        <div class="row" id="search">
            <div class="col-sm-5">
                <input type="text" id="keyword" name="keyword" class="form-control" placeholder="Job Title" />
            </div>
            <div class="col-sm-4">
                <input type="text" id="location" name="location" class="form-control" placeholder="Location" />
            </div>
            <div class="col-sm-3">
                <button type="submit" id="submitForm" class="btn btn-primary">Find Jobs</button>
            </div>
    </form>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            dogs: 3
        }
    }
}
</script>

<style lang="css">
</style>
