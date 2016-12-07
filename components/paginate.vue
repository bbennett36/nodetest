<template>
<nav>
    <ul class="pagination" :v-if="last_page > 0">
        <!-- <li v-if="showPrevious()" :class="{ 'disabled' : pagination.current_page <= 1 }">
            <span v-if="pagination.current_page <= 1">
                    <span aria-hidden="true">{{ config.previousText }}</span>
            </span>

            <a href="#" v-if="pagination.current_page > 1 " :aria-label="config.ariaPrevioius" @click.prevent="changePage(pagination.current_page - 1)">
                <span aria-hidden="true">{{ config.previousText }}</span>
            </a>
        </li> -->
        <li v-for="num in pages" :class="{ 'active': num === 'current_page' }">
            <a href="#" >{{ num }}</a>
        </li>
        <!-- <li v-if="showNext()" :class="{ 'disabled' : pagination.current_page === pagination.last_page || pagination.last_page === 0 }">
            <span v-if="pagination.current_page === pagination.last_page || pagination.last_page === 0">
                    <span aria-hidden="true">{{ config.nextText }}</span>
            </span>

            <a href="#" v-if="pagination.current_page < pagination.last_page" :aria-label="config.ariaNext" @click.prevent="changePage(pagination.current_page + 1)">
                <span aria-hidden="true">{{ config.nextText }}</span>
            </a>
        </li> -->
    </ul>
</nav>
</template>
<script>

export default{
  props: ['rentals', 'getURL', 'last_page', 'current_page', 'pages']
}
</script>
