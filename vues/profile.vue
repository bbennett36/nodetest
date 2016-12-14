<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

            <myheader :user_logged='user_logged'></myheader>



            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">



                <!-- <h1> Username: {{ user.username }} </h1>
                <p>Name: {{ user.f_name}} {{ user.l_name}} </p>
                <p>Email:{{ user.email }}</p>
                <p>Location: {{ user.city }} {{ user.state }} {{ user.zip }}</p>
                <p>Bootcamp Attended: {{ user.bootcamp_attended }}</p> -->

                <form>
                    <h1> Username: {{ user.username }} <input v-model="user.username" type="text" name="username" id="username" /> </h1>
                    <p>Name: {{ user.f_name}} {{ user.l_name}} </p>
                    <p>Email:{{ user.email }} <input v-model="user.email" type="text" name="email" id="email" /> </p>
                    <p>Location: {{ user.city }} {{ user.state }} {{ user.zip }}</p>
                    <p>Bootcamp Attended: {{ user.bootcamp_attended }} <input v-model="user.bootcamp_attended" type="text" name="bootcamp_attended" id="bootcamp_attended" /> </p>
                </form>

                <!-- <h1> {{ f_name }} </h1> -->




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
            // user: this.user
        }
    }
}
</script>

<style>

</style>
