<template>

<div>
  <form action="/search" method="GET" id="geoForm">
      <div class="form-group text-center">
          <input type="text" id="keyword" name="keyword" placeholder="Job Title" />
          <input type="text" id="location" name="location" placeholder="Enter your city,state or zip" />
          <button type="submit" id="submitForm" class="btn btn-primary">Find Jobs</button>
      </div>
  </form>
</div>

</template>

<script>
export default {
    data: function () {
        return {
            dogs: 3
        }
    }
}
</script>

<style lang="css">
</style>
