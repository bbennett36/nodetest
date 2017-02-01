<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

          <myheader :user_logged='user_logged' :user_type='user_type'></myheader>




            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">

                <h1>Sign up</h1>


                <form method="POST" action="/c_signup">
                    <input type="text" name="username" id="username" placeholder="Enter desired username" />
                    <br />
                    <input type="text" name="email" id="email" placeholder="Enter Email Address" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <br />
                    <input type="text" name="name" id="name" placeholder="Enter your full Name" />
                    <br />
                    <input type="text" name="location" id="location" placeholder="Enter your city, state" />
                    <br />
                    <input type="text" name="job_title" id="job_title" placeholder="Enter your job title" />
                    <br />
                    <input type="submit" value="Sign up" />
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
            // dogs: 3
        }
    }
}
</script>

<style>

</style>
