<template>
<div>

            <myheader :user_logged='user_logged'></myheader>



          <div class="container">

                <h1>Sign up</h1>


                <form method="POST" action="/signup" enctype="multipart/form-data">
                    <input type="text" name="username" id="username" placeholder="Enter desired username" />
                    <br />
                    <input type="text" name="email" id="email" placeholder="Enter Email Address" />
                    <br />
                    <input type="password" name="password" id="password" placeholder="Enter your password" />
                    <br />
                    <input type="text" name="f_name" id="f_name" placeholder="Enter your first Name" />
                    <br />
                    <input type="text" name="l_name" id="l_name" placeholder="Enter your last name" />
                    <br />
                    <input type="text" name="city" id="city" placeholder="Enter your city" />
                    <br />
                    <input type="text" name="state" id="state" placeholder="Enter your state" />
                    <br />
                    <input type="text" name="zip" id="zip" placeholder="Enter your zip code" />
                    <br />
                    <input type="text" name="bootcamp_attended" id="bootcamp_attended" placeholder="Enter the bootcamp that you attended" />
                    <br />
                    <br />
                    <input type="file" name="file" id="file" />
                    <input type="submit" value="Sign up" />
                </form>

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
