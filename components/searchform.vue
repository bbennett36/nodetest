<template>
<!-- <div class="collapse" id="navbarToggleExternalContent"> -->
<div class="col-12">
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
                <div class="hidden-md-up">
                    <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Filters
                  </button>

                    <div class="collapse" id="collapseExample">

                        <div class="col-12">
                            <form action="/search" method="GET" id='searchForm'>
                                <input type="hidden" name="keyword" id="keyword" v-model='keyword' />
                                <input type="hidden" name="location" id="filterlocation" v-model='location' />
                                <label for="radius">Distance</label>
                                <select class="form-control" name="radius" id="radius" onchange="this.form.submit()">
                                    <option value="0">Exact Location</option>
                                    <option value="25" selected>25 Miles</option>
                                    <option value="35">35 Miles</option>
                                    <option value="50">50 Miles</option>
                                  </select>
                            </form>
                        </div>
                        <div class="col-12">

                            <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Full-Time</span>
                  </label>


                            <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Internship</span>
                  </label>
                        <!-- </div> -->

                        <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Part-Time</span>
                  </label>

                        <label class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input">
                    <span class="custom-control-indicator"></span>
                    <span class="custom-control-description">Contract</span>
                  </label>
                    </div>
                </div>
            </div>
        </div>
    </form>
</div>
<!-- </div> -->
</template>

<script>
export default {
    props: ['keyword', 'location'],
    data: function() {
        return {
            dogs: 3
        }
    }
}
</script>

<style lang="css">
</style>
