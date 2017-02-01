<template>
<div>
    <myheader :user_logged='user_logged' :user_type='user_type'></myheader>



    <div class="container">
        <div class="row">
            <nav class="col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar">
                <ul class="nav nav-pills flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="/dashboard">Profile <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/listings">Jobs</a>
                    </li>
                </ul>


            </nav>

            <main class="col-sm-9 col-md-10">
                <h1>Profile Settings</h1>

                <p>{{ user.f_name }}  {{ user.l_name }}</p>
                <p>{{ user.job_title }} {{ user.company_name }} </p>


        </div>
        </main>
    </div>
</div>
</div>
</template>

<script>
export default {
    data: function() {
        return {
            // edit: false
        }
    }
};
</script>

<style>

</style>
