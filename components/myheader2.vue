<template>
  <!-- <div> -->
<nav class="navbar fixed-top navbar-toggleable-md navbar-inverse bg-inverse">


  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


    <a class="navbar-brand" href="#">BootCampHire.com</a>

    <div class="collapse navbar-collapse" id="navbarNav2">


        <ul class="navbar-nav mr-auto">
            <li class="nav-item"><a href="/" class="nav-link"><span class="glyphicon glyphicon-home"></span> Home</a></li>
            <li class="nav-item"><a href="/post" class="nav-link">Post a Job</a></li>
        </ul>
        <ul class="navbar-nav">
            <li v-if="!user_logged" class="nav-item">
                <a href="/signup" class="nav-link"><strong>Sign up</strong></a>
            </li>

            <li v-if="user_logged && user_type === 'user'" class="nav-item">
                <a href="/profile" class="nav-link"><strong>Profile</strong></a>
            </li>

            <li v-if="user_logged && user_type === 'company'" class="nav-item">
                <a href="/profile" class="nav-link"><strong>Employer Dashboard</strong></a>
            </li>

            <li v-if="!user_logged" class="nav-item">
                <a href="/login" class="nav-link"><strong><span class="glyphicon glyphicon-log-in"></span> Login</strong></a>
            </li>

            <li v-if="user_logged" class="nav-item">
                <a href="/logout" class="nav-link"><strong><span class="glyphicon glyphicon-log-out"></span> Logout</strong></a>
            </li>
        </ul>
      </div>
    <!-- </div> -->
    <!--/.nav-collapse -->
</nav>
<!-- </div> -->

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
