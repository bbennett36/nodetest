<template>
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

            <form v-if="user_logged" action="/login" method="post">
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
            </form>

        </div>
        <div class="col-md-2"></div>
        <div class="col-md-1"></div>


    </div>

</div>

<!-- <div class="main">
        <h1>Innovative Login Form</h1>
        <div class="main-info">
            <div class="sap_tabs">
                <div id="horizontalTab" style="display: block; width: 100%; margin: 0px;">
                    <ul class="resp-tabs-list">
                        <li class="resp-tab-item" aria-controls="tab_item-0">
                            <h2><span>Job Seeker</span></h2></li>
                        <li class="resp-tab-item" aria-controls="tab_item-1"><span>Employer</span></li>
                    </ul>
                    <div class="clear"> </div>
                    <div class="resp-tabs-container">
                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                            <div class="agileits-login">
                                <form action="#" method="post">
                                    <input type="text" class="email" name="Email" placeholder="Email" required="" />
                                    <input type="password" class="password" name="Password" placeholder="Password" required="" />
                                    <div class="wthree-text">
                                        <ul>
                                            <li>
                                                <label class="anim">
													<input type="checkbox" class="checkbox">
													<span> Remember me ?</span>
												</label>
                                            </li>
                                            <li> <a href="#">Forgot password?</a> </li>
                                        </ul>
                                        <div class="clear"> </div>
                                    </div>
                                    <div class="w3ls-submit">
                                        <div class="submit-text">
                                            <input type="submit" value="Login">
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
                            <div class="login-top sign-top">
                                <div class="agileits-login">
                                    <form action="#" method="post">
                                        <input type="text" class="email" name="Email" placeholder="Email" required="" />
                                        <input type="password" class="password" name="Password" placeholder="Password" required="" />
                                        <div class="wthree-text">
                                            <ul>
                                                <li>
                                                    <label class="anim">
														<input type="checkbox" class="checkbox">
														<span> Remember me ?</span>
													</label>
                                                </li>
                                                <li> <a href="#">Forgot password?</a> </li>
                                            </ul>
                                            <div class="clear"> </div>
                                        </div>
                                        <div class="w3ls-submit">
                                            <div class="submit-text">
                                                <input type="submit" value="Login">
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="clear"> </div>
            </div>
        </div>
        <!- copyright -->
<!-- <div class="copyright">
            <p> © 2016 Innovative Login Form . All rights reserved | Design by <a href="http://w3layouts.com/" target="_blank">W3layouts</a></p>
        </div> -->
<!-- //copyright -->
<!-- </div> -->
<!-- //main -->-->
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
