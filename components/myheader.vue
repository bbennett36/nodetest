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
                <ul class="navbar-nav mx-auto">

                    <form action="/search" class="form-inline">
                        <input class="form-control mr-sm-2" id="keyword" name="keyword" :value='keyword' type="text" placeholder="Search for jobs" />
                        <!-- <div class="input-group"> -->

                        <input class="form-control mr-sm-2" id="location" name="location" :value='location' type="text" placeholder="Location" />
                        <!-- <button class="btn btn-secondary" type="button">Find Jobs</button> -->
                        <!-- </span> -->
                        <!-- </div> -->

                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Find Jobs</button>
                    </form>

                </ul>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">

                <ul class="navbar-nav ml-auto float-right">
                    <li class="nav-item"><a href="/post" class="nav-link"><strong>Post Job</strong></a></li>

                    <div class="hidden-lg-up">

                    <li v-if="!user_logged" class="nav-item">
                        <a v-if="!user_logged" href="/signup" class="nav-link"><strong>Register</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'user'" class="nav-item">
                        <a v-if="user_logged && user_type === 'user'" href="/profile" class="nav-link"><strong>Profile</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'user'" class="nav-item">
                      <a v-if="user_logged && user_type === 'user'" href="/applied" class="nav-link"><strong>My Jobs</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'user'" class="nav-item">
                      <a v-if="user_logged && user_type === 'user'" href="/searches" class="nav-link"><strong>My Searches</strong></a>
                    </li>

                    <li v-if="user_logged && user_type === 'company'" class="nav-item">
                        <a v-if="user_logged && user_type === 'company'" href="/dashboard" class="nav-link"><strong>Employer Dashboard</strong></a>
                    </li>

                    <li v-if="!user_logged" class="nav-item">
                        <a v-if="!user_logged" href="/login" class="nav-link"><strong>Login</strong></a>
                    </li>

                    <li v-if="user_logged" class="nav-item">
                        <a v-if="user_logged" href="/logout" class="nav-link"><strong>Logout</strong></a>
                    </li>
                  </div>

                    <div class="hidden-md-down">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <strong>Account</strong>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

                                <!-- <li v-if="!user_logged" class="nav-item"> -->
                                <a v-if="!user_logged" href="/signup" class="dropdown-item"><strong>Register</strong></a>
                                <!-- </li> -->

                                <!-- <li v-if="user_logged && user_type === 'user'" class="nav-item"> -->
                                <a v-if="user_logged && user_type === 'user'" href="/profile" class="dropdown-item"><strong>Profile</strong></a>
                                <a v-if="user_logged && user_type === 'user'" href="/applied" class="dropdown-item"><strong>My Jobs</strong></a>
                                <a v-if="user_logged && user_type === 'user'" href="/searches" class="dropdown-item"><strong>My Searches</strong></a>

                                <!-- </li> -->

                                <!-- <li v-if="user_logged && user_type === 'company'" class="nav-item"> -->
                                <a v-if="user_logged && user_type === 'company'" href="/dashboard" class="dropdown-item"><strong>Employer Dashboard</strong></a>
                                <!-- </li> -->

                                <!-- <li v-if="!user_logged" class="nav-item"> -->
                                <a v-if="!user_logged" href="/login" class="dropdown-item"><strong>Login</strong></a>
                                <!-- </li> -->

                                <!-- <li v-if="user_logged" class="nav-item"> -->
                                <a v-if="user_logged" href="/logout" class="dropdown-item">
                                  <div class="dropdown-divider"></div>
                                  <strong>Logout</strong>
                                </a>
                                <!-- </li> -->
                            </div>

                        </li>
                    </div>

                </ul>
            </div>
        </nav>




    </div>
</div>
</template>

<script>
export default {
    props: ['user_logged', 'user_type', 'keyword', 'location'],
    data: function() {
        return {
            // 'user_logged': this.user_logged
        }
    }
}
</script>

<style lang="css">
</style>
