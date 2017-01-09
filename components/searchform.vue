<template>
<div>
    <form action="/search" method="GET" id="geoForm">
        <div class="input-group">
            <input type="text" id="keyword" name="keyword" class="form-control" placeholder="Job Title" />
            <input type="text" id="location" name="location" class="form-control" placeholder="Enter your city,state or zip" />
            <button type="submit" id="submitForm" class="btn btn-primary">Find Jobs</button>
        </div>
    </form>
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
