<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

            <myheader :user_logged='user_logged'></myheader>



            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">

                <div v-if="edit == false">
                    <h1>Username: {{ user.username }} </h1>
                    <p>Name: {{ user.f_name}} {{ user.l_name}} </p>
                    <p>Email:{{ user.email }} </p>
                    <p>Location: {{ user.city }} {{ user.state }} {{ user.zip }}</p>
                    <p>Bootcamp Attended: {{ user.bootcamp_attended }}</p>
                    <p>Resume File: {{ user.file_name }}
                </div>

                <div v-if="edit == true">
                    <form v-on:submit="updateUser">
                        <input type="hidden" :value="user.id" name="id" id="id" />
                        <br /> First Name: <input v-model="user.f_name" type="text" name="f_name" id="f_name" /> Last Name: <input v-model="user.l_name" type="text" name="l_name" id="l_name" />
                        <br /> Email: <input v-model="user.email" type="text" name="email" id="email" />
                        <br /> City: <input v-model="user.city" type="text" name="city" id="city" /> State: <input v-model="user.state" type="text" name="state" id="state" /> Zip: <input v-model="user.zip" type="text" name="zip" id="zip" />
                        <br /> Bootcamp Attended: <input v-model="user.bootcamp_attended" type="text" name="bootcamp_attended" id="bootcamp_attended" />
                        <button v-if="edit == true" type="submit" v-on:click="saveProfile" class="btn btn-lg btn-primary">Save Profile</button> {{ edit }}
                    </form>
                </div>

                <button v-if="edit == false" type="button" v-on:click="editProfile" class="btn btn-lg btn-primary">Edit Profile</button>




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
            edit: false
        }
    },
    methods: {
        editProfile: function() {
            this.edit = true;
        },
        saveProfile: function() {
            this.edit = false;
        },
        updateUser: function(event) {
            event.preventDefault();

            var formData = JSON.stringify({
                id: this.user.id,
                f_name: this.user.f_name,
                l_name: this.user.l_name,
                email: this.user.email,
                city: this.user.city,
                state: this.user.state,
                zip: this.user.zip,
                bootcamp_attended: this.user.bootcamp_attended
            });


            $.ajax({
                type: "PUT",
                url: "/user/" + this.user.id,
                data: formData,
                beforeSend: function(xhr) {
                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.setRequestHeader("Content-type", "application/json");
                },
                success: function postForm(response) {

                    alert("success");
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
