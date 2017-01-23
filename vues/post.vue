<template>
<div>
    <myheader :user_logged='user_logged'></myheader>

    <div class="container">

        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">

            <form method="POST" action="/create" id="geoForm">
                <input type="text" name="jobTitle" id="jobTitle" class="form-control" placeholder="Job Title" />
                <br />
                <br />
                <!--<textarea id="mytextarea" class="form-control" name="description" placeholder="Job Description"></textarea>-->
                <!-- <textarea name="description" id="description" class="tinyMceBody form-group" rows="10" col="80" style="height:500px; width: 800px"></textarea> -->
                <ckeditor v-model="content" :height="'300px'" :toolbar="[['Format']]"></ckeditor>

                <br />
                <!-- <textarea class="form-control" name="shortDesc" placeholder="Short version of job desc (150 characters max)"></textarea> -->
                <br />
                <br />
                <br />
                <input type="text" class="form-control" id="location" name="location" placeholder="City, State" />

                <br /> Job Type:
                <select name="jobType" id="jobType">
                          <option>Full-Time</option>
                          <option>Part-Time</option>
                          <option>Contract</option>
                          <option>Internship</option>
                      </select>
                <br />
                <br />


                <div class="row">
                    <label class="radio" for="emailApply">
                              <input type="radio" name="applyType" id="emailApply"  value="email" v-model="checked" v-on:change="emailChosen()"/>
                              Apply by Email
                          </label>
                    <input type="text" name="applyURL" id="applyURL" class="input-small dollars" :disabled="emailDisabled">

                    <label class="radio" for="apply">
                              <input type="radio" name="applyType" id="apply" value="url" v-model="checked" v-on:change="urlChosen()">
                              Apply by URL
                          </label>
                    <input type="text" name="applyURL" id="applyURL" class="input-small percent" :disabled="urlDisabled">
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

</template>

<script>
var Ckeditor = require('./node_modules/vue-ckeditor/src/components/ckeditor.vue');

export default {
    data: function() {
        return {
            emailChecked: false,
            emailDisabled: false,
            urlChecked: false,
            urlDisabled: false,
            checked: ""
        }
    },
    components: { Ckeditor },
    methods: {
        getGeo() {
            tinyMCE.triggerSave();
            var strBody = tinyMCE.activeEditor.getContent();
            var a = $('#location').val();

            // e.preventDefault();

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
        },
        emailChosen() {
            this.urlDisabled = true;
            this.emailChecked = true;
            this.emailDisabled = false;
        },
        urlChosen() {
            this.emailDisabled = true;
            this.urlChecked = true;
            this.urlDisabled = false;
        }

    }

    // ,beforeMount() {


        // tinymce.init({
        //     selector: ".tinyMceBody",
        //     plugins: ['lists link paste'],
        //     // paste_as_text: true,
        //     // paste_word_valid_elements: "b,strong,i,em,ul,ol",
        //     toolbar: "undo redo bold italic | bullist",
        //     toolbar_items_size: 'small',
        //     menubar: false,
        //     statusbar: false,
        //     height: "300",
        //     width: "700"
        // });
    // }
}
</script>

<style>

</style>
