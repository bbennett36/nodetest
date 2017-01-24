<template>
<div>
    <myheader></myheader>

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
                        <form action="/login" method="post">
                            <div class="form-group row">
                                <label for="username">Email</label>
                                    <input type="text" class="form-control" name="username" id="username" />
                            </div>
                            <div class="form-group row">
                                <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password" />
                            </div>
                            <div class="form-check">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input" />
                                      Remember me
                                    </label>
                            </div>
                            <div>
                                <input type="submit" class="btn btn-success btn-lg btn-block" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div class="tab-pane fade" id="employer" role="tabpanel">
                      <form action="/emp_login" method="post">
                          <div class="form-group row">
                              <label for="username">Email</label>
                                  <input type="text" class="form-control" name="username" id="username" />
                          </div>
                          <div class="form-group row">
                              <label for="password" class="col-2 col-form-label">Password</label>
                                  <input type="password" class="form-control" name="password" />
                          </div>
                          <div class="form-check">
                              <label class="form-check-label">
                                  <input type="checkbox" class="form-check-input" />
                                    Remember me
                                  </label>
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
    <myfooter></myfooter>

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
