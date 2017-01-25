<template>
<div>

    <myheader :user_logged='user_logged'></myheader>



    <div class="container">

        <div class="row">
            <div class="col-md-2 col-lg-3"></div>
            <div class="col-xs-12 col-md-8 col-lg-6" id="login-tab">
                <ul class="nav nav-tabs nav-justified">
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" id="left" role="tab" href="#seeker" aria-controls="seeker">Job Seeker</a>

                    </li>

                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" role="tab" id="right" href="#employer" aria-controls="employer">Employer</a>
                    </li>
                </ul>

                <div class="tab-content">
                    <div class="tab-pane fade show active" id="seeker" role="tabpanel">
                        <h1 class="text-center"><strong>Create Account</strong></h1>


                        <form method="POST" action="/signup" enctype="multipart/form-data">
                            <div class="form-group row">
                                <div class="col-sm-6">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" class="form-control" id="email" />
                                </div>
                                <div class="col-sm-6">
                                    <label for="password">Password</label>
                                    <input type="password" name="password" class="form-control" id="password" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <!-- <div class="row"> -->

                                <div class="col-sm-6">
                                    <label for="f_name">First Name</label>
                                    <input type="text" name="f_name" id="f_name" class="form-control" />
                                </div>
                                <div class="col-sm-6">
                                    <label for="l_name">Last Name</label>
                                    <input type="text" name="l_name" id="l_name" class="form-control" />
                                </div>
                                <!-- </div> -->
                            </div>
                            <div class="form-group row">
                                <!-- <div class="row"> -->
                                <div class="col-sm-6" id="city-state">
                                    <label for="a">City, State</label>
                                    <input type="text" name="l_name" id="a" class="form-control" />
                                </div>
                                <div class="col-sm-6">
                                    <label for="3">Zip</label>

                                    <input type="text" name="l_name" id="3" class="form-control" />

                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <label for="bootcamp_attended">Bootcamp Attended</label>
                                    <input type="text" name="bootcamp_attended" class="form-control" id="bootcamp_attended" />
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-12">
                                    <label for="file">Upload Resume</label>
                                    <input type="file" name="file" id="file" class="form-control-file" />
                                </div>
                            </div>
                            <input type="submit" class="btn btn-success btn-lg btn-block" value="Submit" />
                        </form>
                    </div>
                    <div class="tab-pane fade" id="employer" role="tabpanel">
                      <h1 class="text-center"><strong>Create Account</strong></h1>
                      
                        <form action="/c_signup" method="post">
                            <div class="form-group row">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" name="email" id="email" />
                            </div>
                            <div class="form-group row">
                                <label for="password">Password</label>
                                <input type="password" class="form-control" name="password" />
                            </div>
                            <div class="form-group row">
                                <label for="f_name">First Name</label>
                                <input type="text" class="form-control" name="f_name" />
                            </div>
                            <div class="form-group row">
                                <label for="l_name">Last Name</label>
                                <input type="text" class="form-control" name="l_name" />
                            </div>
                            <div class="form-group row">
                                <label for="job_title">Job Title</label>
                                <input type="text" class="form-control" name="job_title" />
                            </div>
                            <div class="form-group row">
                                <label for="company_name">Company Name</label>
                                <input type="text" class="form-control" name="company_name" id="company_name" />
                            </div>

                            <div>
                                <input type="submit" class="btn btn-success btn-lg btn-block" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <div class="col-md-2 col-lg-3"></div>


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
