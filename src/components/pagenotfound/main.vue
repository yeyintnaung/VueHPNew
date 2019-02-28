<template>
    <div>
        <v-header></v-header>
        <main class="f">
        </main>
        <v-footer></v-footer>
    </div>

</template>
<style>
    @import "../../assets/css/style.css";

</style>
<script>
    import Header from '@/components/pagenotfound/header.vue'
    import Footer from '@/components/pagenotfound/footer.vue'

    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        methods: {
            //to sert external js file
            crnode: function (data) {
                let recaptchaScript = document.createElement('script')
                recaptchaScript.setAttribute('src', '/static/js/' + data)
                recaptchaScript.setAttribute('type', 'application/javascript')
                document.getElementById('as').appendChild(recaptchaScript)
            },


        },
        created(){
            this.crnode('bootstrap.min.js');
            this.crnode('jquery.search.min.js');
            this.crnode('jquery.countTo.js');
            this.crnode('jquery.owl-carousel.js');
            this.crnode('progressbar.min.js');
            this.crnode('jquery.rd-navbar.min.js');
            this.crnode('jquery.ui.totop.min.js');
            this.crnode('jquery.rd-parallax.min.js');
            this.crnode('script.js');
            this.crnode('core.min.js');
            //
        }
    }
</script>