<template>
<div id="nav-color">
    <div class="container-fluid">
        <nav class="navbar fixed-top navbar-toggleable-md navbar-inverse" style="background-color: #3c763d!important;">

            <button class="navbar-toggler navbar-toggler-right navbar-toggler-custom" type="button" data-toggle="collapse" data-target="#searchNav" aria-controls="searchav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>

    </button>

            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

            <!-- <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button> -->

            <div id="logo">
                <a class="navbar-brand" href="/">BootCamp<span>Hire.com</span></a>
            </div>

            <div class="collapse navbar-collapse" id="searchNav">
                <ul class="navbar-nav mr-auto">

                    <form class="form-inline mx-auto" >
                          <input class="form-control" type="text" placeholder="Search for jobs" />
                          <!-- <div class="input-group"> -->

                          <input class="form-control" type="text" placeholder="Location" />
                            <!-- <span class="input-group-btn"> -->
        <!-- <button class="btn btn-secondary" type="button">Find Jobs</button> -->
      <!-- </span> -->
                        <!-- </div> -->

                        <button class="btn btn-secondary" type="submit">Find Jobs</button>
                    </form>

                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item"><a href="/post" class="nav-link"><strong>Post a Job</strong></a></li>

                    <li v-if="!user_logged" class="nav-item">
                        <a href="/signup" class="nav-link"><strong>Sign Up</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'user'" class="nav-item">
                        <a href="/profile" class="nav-link"><strong>Profile</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'company'" class="nav-item">
                        <a href="/dashboard" class="nav-link"><strong>Employer Dashboard</strong></a>
                    </li>

                    <li v-if="!user_logged" class="nav-item">
                        <a href="/login" class="nav-link"><strong>Login</strong></a>
                    </li>

                    <li v-if="user_logged" class="nav-item">
                        <a href="/logout" class="nav-link"><strong>Logout</strong></a>
                    </li>
                </ul>
            </div>
        </nav>




    </div>
</div>
</template>

<script>
export default {
    props: ['user_logged', 'user_type'],
    data: function() {
        return {
            // 'user_logged': this.user_logged
        }
    }
}
</script>

<style lang="css">
</style>
