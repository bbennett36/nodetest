<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

            <myheader :user_logged='user_logged'></myheader>



            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">

                <form method="POST" action="/create" id="geoForm">
                    <input type="text" name="jobTitle" id="jobTitle" class="form-control" placeholder="Job Title" />
                    <br />
                    <br />
                    <!--<textarea id="mytextarea" class="form-control" name="description" placeholder="Job Description"></textarea>-->
                    <textarea type="text" name="description" id="newPostBody" class="tinyMceBody form-group" style="height:500px; width: 800px"></textarea>
                    <br />
                    <textarea id="mytextarea" class="form-control" name="shortDesc" placeholder="Short version of job desc (150 characters max)"></textarea>
                    <br />
                    <br />
                    <br />
                    <input type="text" class="form-control" id="location" name="location" placeholder="City, State" />
                    <br />
                    <br />
                    <br />
                    <br /> Job Type:
                    <select name="jobType" id="jobType">
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Contract</option>
                          <option>Internship</option>
                      </select>
                    <br />


                    <div class="row-fluid control-group">
                        <label class="radio" for="discount-dollars">
                              <input type="radio" name="discount" id="discount-dollars" value="dollars" checked="checked" />
                              Apply by Email
                          </label>
                        <input type="text" name="applyURL" id="applyURL" class="input-small dollars">

                        <label class="radio" for="discount-percent">
                              <input type="radio" name="discount" id="discount-percent" value="percent">
                              Apply by URL
                          </label>
                        <input type="text" name="applyURL" id="applyURL" class="input-small percent" disabled="disabled">
                    </div>

                    <br />
                    <br />
                    <input type="text" class="form-control" name="salary" id="salary" placeholder="Salary (Optional)" />
                    <br />
                    <br />
                    <input type="hidden" name="lat" id="lat" />
                    <input type="hidden" name="lng" id="lng" />

                    <button @click.prevent="getGeo()" type="submit" id="submitForm" class="btn btn-success">Submit</button>
                </form>

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
            dogs: 3
        }
    },
    methods: {
        getGeo() {
            var a = $('#location').val();
            $.ajax({
                type: "GET",
                url: "http://www.mapquestapi.com/geocoding/v1/address?key=LIhb6pFxB7qAlFC4Aiul9rM9i7R5BcgB&location=" + a,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-type", "application/json");
                },
                success: function postForm(response) {

                    var lat = response.results[0].locations[0].latLng.lat;
                    var lng = response.results[0].locations[0].latLng.lng;
                    // Extract latitude and longitude
                    $('#lat').val(lat);
                    $('#lng').val(lng);

                    $('#geoForm').submit();
                },
                error: function(status, error) {
                    console.log(status)
                    console.log(error)
                }
            });
        }
    }
}
</script>

<style>

</style>
