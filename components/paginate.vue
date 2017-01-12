<template>
<nav>
    <ul class="pagination justify-content-center" :v-if="last_page > 0">
        <li v-if="showPrevious()" :class="{ 'page-item' : true, 'disabled' : current_page <= 1 }">
            <!-- <span :v-if="current_page <= 1">
                  <span aria-hidden="true">&laquo;</span>
            </span> -->
            <a class="page-link" @click.prevent="changePage(parseInt(current_page) - 1)" aria-label="Previous">
              Prev
            </a>
        </li>
        <li v-for="num in pages" :class="{ 'page-item' : true, 'active': num == current_page }">
        <!-- <li class="page-item"> -->
            <a class="page-link" @click.prevent="changePageURL(num)">{{ num }}</a>
            <!-- <a class="page-link" href="#">1</a> -->

        </li>
        <li v-if="showNext()" :class="{ 'page-item' : true, 'disabled' : current_page == last_page }">
            <a class="page-link" @click.prevent="changePage(parseInt(current_page) + 1)" aria-label="Next">
                Next
            </a>
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
export default {
    props: ['rentals', 'getURL', 'last_page', 'current_page', 'pages'],
    methods: {
        showPrevious() {
            return this.current_page > 1;
        },
        showNext() {
            return this.current_page < this.last_page;
        },
        changePage(page) {
            var url = window.location.toString();
            var newUrl;
            if (/&p=/.test(self.location.href)) {
                window.location = url.replace(/(p=)[^\&]+/, '$1' + page);
            } else {
                newUrl = (url + "&p=" + page);
                window.location = newUrl;
            }
        },
        changePageURL(pageNumber) {
            var url = window.location.toString();
            var newUrl;
            if (/&p=/.test(self.location.href)) {
                window.location = url.replace(/(p=)[^\&]+/, '$1' + pageNumber);
            } else {
                newUrl = (url + "&p=" + pageNumber);
                window.location = newUrl;
            }
        }
    }
}
</script>
