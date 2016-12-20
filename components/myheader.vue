cd<template>
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar9">
                             <span class="sr-only">Toggle navigation</span>
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                             <span class="icon-bar"></span>
                         </button>
        </div>

        <div class="brand-centered">
            <a class="navbar-brand" href="${pageContext.request.contextPath}"><img style="margin-right: 10px; padding: 0;" alt="Bootcamp Hire">
            </a>
        </div>

        <div id="navbar9" class="navbar-collapse collapse">
            <ul class="nav navbar-nav nav-pills navbar-left">
                <li><a href="/"><span class="glyphicon glyphicon-home"></span> Home</a></li>
                <li><a href="/post">Post a Job</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li v-if="!user_logged">
                    <a href="/signup"><strong>Sign up</strong></a>
                </li>

                <li v-if="user_logged">
                    <a href="/profile"><strong>Profile</strong></a>
                </li>

                <li v-if="!user_logged">
                    <a href="/login"><strong><span class="glyphicon glyphicon-log-in"></span> Login</strong></a>
                </li>

                <li v-if="user_logged">
                    <a href="/logout"><strong><span class="glyphicon glyphicon-log-out"></span> Logout</strong></a>
                </li>
            </ul>
        </div>
        <!--/.nav-collapse -->
    </div>
    <!--/.container-fluid -->
</nav>
</template>

<script>
export default {
    props: ['user_logged'],
    data: function() {
        return {
            // 'user_logged': this.user_logged
        }
    }
}
</script>

<style lang="css">
</style>
