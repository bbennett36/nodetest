<template>
<div>
    <div id="wrap">
        <div class="col-md-1"></div>
        <div id="main-container" class="container col-md-10">

            <myheader :user_logged='user_logged'></myheader>



            <div class="col-md-2"></div>
            <div class="col-md-8 text-center">

                <form action="/login" method="post">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" /><br/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>

                <!-- <form v-if="user_logged" action="/login" method="post">
                    Sign up
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username" /><br/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" />
                    </div>
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form> -->

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
