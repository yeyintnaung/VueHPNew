<template>
    <div>
        <v-header></v-header>
        <main class="page-content" >
        </main>
        <v-footer></v-footer>
    </div>

</template>
<style>
    @import "../../assets/css/style.css";

</style>
<script>
    import Header from '@/components/auth/header.vue'
    import Footer from '@/components/auth/footer.vue'
    import injects from '@/mixins/injects.js'

    export default {
        mixins:[injects],
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

    }
</script>