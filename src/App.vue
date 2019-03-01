<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->

       <loader></loader>
       <router-view/>
    </div>
</template>

<script>
    import Loader from './components/overlay/loader.vue'
    export default {
        name: 'App',
        components: {
            'loader': Loader
        }
    }

</script>

<!--<style>-->
<!--#app {-->
<!--font-family: 'Avenir', Helvetica, Arial, sans-serif;-->
<!-- -webkit-font-smoothing: antialiased;-->
<!-- -moz-osx-font-smoothing: grayscale;-->
<!--text-align: center;-->
<!--color: #2c3e50;-->
<!--margin-top: 60px;-->
<!--}-->
<!--</style>-->
