<template>
    <div class="vld-parent">
        <loading :active.sync="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"
                 :color="color"
                 :opacity="opacity"
                 ></loading>


    </div>
</template>

<script>
    // Import component
    import Loading from 'vue-loading-overlay';
    // Import stylesheet
    import 'vue-loading-overlay/dist/vue-loading.css';

    export default {
        data() {
            return {
                isLoading: false,
                fullPage: true,
                color:"#00c5dc",
                opacity: 0.9,

            }
        },
        components: {
            Loading
        },
        methods: {
                doAjax() {

                },
                onCancel() {
                    console.log('User cancelled the loader.')
                }
        },
        created(){
            this.isLoading = true;
    // simulate AJAX
            setTimeout(() => {
             this.isLoading = false
             }, 2500)

    }
    }
</script>