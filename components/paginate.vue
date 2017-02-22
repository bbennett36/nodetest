<template>
<nav>
    <ul class="pagination justify-content-center" :v-if="last_page > 0">
        <li v-if="showPrevious()" :class="{ 'page-item' : true, 'disabled' : current_page <= 1 }">
            <a class="page-link" @click.prevent="changePage(parseInt(current_page) - 1)" aria-label="Previous">
              Prev
            </a>
        </li>
        <li v-for="num in pages" :class="{ 'page-item' : true, 'active': num == current_page }">
            <a class="page-link" @click.prevent="changePageURL(num)">{{ num }}</a>
        </li>
        <li v-if="showNext()" :class="{ 'page-item' : true, 'disabled' : current_page == last_page }">
            <a class="page-link" @click.prevent="changePage(parseInt(current_page) + 1)" aria-label="Next">
                Next
            </a>
        </li>
    </ul>
</nav>
</template>
<script>
export default {
    props: ['results', 'getURL', 'last_page', 'current_page', 'pages', 'page_name'],
    data: function() {
        return {
            // result_page: false;
        }
    },
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
            if (this.page_name == "results") {
                if (/&p=/.test(self.location.href)) {
                    window.location = url.replace(/(p=)[^\&]+/, '$1' + page);
                } else {
                    newUrl = (url + "&p=" + page);
                    window.location = newUrl;
                }
            } else {
                if (/&p=/.test(self.location.href)) {
                    window.location = url.replace(/(p=)[^\&]+/, '$1' + page);
                } else {
                    newUrl = (url + "?&p=" + page);
                    window.location = newUrl;
                }
            }
        },
        changePageURL(pageNumber) {
            var url = window.location.toString();
            var newUrl;
            if (this.page_name == "results") {
                if (/&p=/.test(self.location.href)) {
                    window.location = url.replace(/(p=)[^\&]+/, '$1' + pageNumber);
                } else {
                    newUrl = (url + "&p=" + page);
                    window.location = newUrl;
                }
            } else {
                if (/&p=/.test(self.location.href)) {
                    window.location = url.replace(/(p=)[^\&]+/, '$1' + pageNumber);
                } else {
                    newUrl = (url + "?&p=" + page);
                    window.location = newUrl;
                }
            }
        }
    }
}
</script>
