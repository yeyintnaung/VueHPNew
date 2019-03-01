<template>
    <div>
        <div class="rd-navbar-wrap">
            <div class="rd-navbar top-panel-none-items" data-layout="rd-navbar-fixed" data-hover-on="true"
                 data-stick-up="true" data-sm-layout="rd-navbar-fullwidth" data-md-layout="rd-navbar-static">
                <div class="rd-navbar-top-panel">
                    <div class="rd-navbar-inner">
                        <!--<button data-rd-navbar-toggle=".list-inline, .fa-envelope, .fa-phone, .material-icons-shopping_cart" class="rd-navbar-collapse-toggle"><span></span></button><a href="/cdn-cgi/l/email-protection#486b" class="fa-envelope"><span class="__cf_email__" data-cfemail="7115141c1e1c10181d3115141c1e1d181f1a5f1e0316">[email&#160;protected]</span></a><a href="callto:#" class="fa-phone">+1 (126) 598-89-75</a>-->
                        <ul class="list-inline pull-right">
                            <li><a href="#" class="fa-facebook"></a></li>
                            <li><a href="#" class="fa-pinterest-p"></a></li>
                            <li><a href="#" class="fa-twitter"></a></li>
                            <li><a href="#" class="fa-google-plus"></a></li>
                            <li><a href="#" class="fa-instagram"></a></li>
                        </ul>
                    </div>
                </div>
                <div class="">
                    <!--RD Navbar Panel-->
                    <div class="rd-navbar-panel">
                        <!--RD Navbar Toggle-->
                        <button data-rd-navbar-toggle=".rd-navbar" class="rd-navbar-toggle"><span></span></button>
                        <!--END RD Navbar Toggle-->
                        <!--RD Navbar Brand-->
                        <div class="rd-navbar-brand"><a href="index.html" class="brand-name">
                            <img class="logo_img" src="../../assets/images/logo.png" alt=""></a>

                        </div>
                        <!--END RD Navbar Brand-->
                    </div>
                    <!--END RD Navbar Panel-->

                    <div class="rd-navbar-nav-wrap">
                        <!--RD Navbar Search-->

                        <!--END RD Navbar Search-->

                        <!--RD Navbar Nav-->
                        <ul class="rd-navbar-nav">
                            <li><a href="javascript:void(0)" @click="go(name='all_project',data='')">Home</a></li>
                            <li><a href="javascript:void(0)" @click="go(name='all_project',data='')">Projects</a>

                            </li>
                            <li>
                                <a href="javascript:void(0)" @click="go(name='project_cat_to_up',data='')">{{$lang.messages.default.proposals.upload_proposals}}</a>

                            </li>
                            <li>
                                <a href="javascript:void(0)" @click="go(name='contact',data='')">{{$lang.messages.default.proposals.contact}}</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" @click="go(name='user_profile',data='')">Profile</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" @click="logout">Log Out</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="lan_cl" @click="cc(lang='mm')">MM</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="lan_cl" v-if="lang=='mm'" @click="zawgyi()">Uni</a>
                            </li>
                            <li>
                                <a href="javascript:void(0)" class="lan_cl" @click="cc(lang='en')">en</a>
                            </li>
                        </ul>
                        <!--END RD Navbar Nav-->
                    </div>
                </div>
            </div>
        </div>

        <header class="page-header subpage_header">

            <!--RD Navbar-->
            <!--END RD Navbar-->
            <section>
                <!--Swiper-->
                <div data-autoplay="5000" data-slide-effect="fade" data-loop="false"
                     class="swiper-container swiper-slider">
                    <div class="jumbotron text-center">
                        <h1 style="margin-top:102px;color:#ffae00;">HivePhing</h1>
                        <h3 style="color:white;">{{title}}</h3>
                        <p class="big"></p>
                    </div>
                    <div class="swiper-wrapper">
                        <div data-slide-bg="../../static/images/header-1.jpg" class="swiper-slide">
                            <div class="swiper-slide-caption"></div>
                        </div>
                        <div data-slide-bg="../../static/images/header-2.jpg" class="swiper-slide">
                            <div class="swiper-slide-caption"></div>
                        </div>
                        <div data-slide-bg="../../static/images/header-3.jpg" class="swiper-slide">
                            <div class="swiper-slide-caption"></div>
                        </div>
                        <div data-slide-bg="../../static/images/header-4.jpg" class="swiper-slide">
                            <div class="swiper-slide-caption"></div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    </div>
</template>
<script>
    //    import change_lang from '@/mixins/change_lang.js'
    import middleware from '@/mixins/middleware.js'
    export default {
        mixins: [middleware],
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
            }
        },
        methods: {
            logout: function () {
                localStorage.removeItem('token');
                console.log('deleted');
                window.location = 'http://localhost:8083/';
            },

        },

        created(){
            console.log(this.$route.name)

            if (this.$route.name == 'all_user_projects') {
                this.title = 'Your Projects';
            }
            if (this.$route.name == 'upload_project') {
                this.title = 'Upload Project';
            }
            if (this.$route.name == 'project_detail') {
                this.title = 'Project Detail';
            }
            if (this.$route.name == 'user_profile') {
                this.title = 'Your Profile';
            }
            if (this.$route.name == 'all_project') {
                this.title = 'Your Projects';
            }
            if (this.$route.name == 'project_cat_to_up' || this.$route.name == 'upload_project' ) {
                this.title = 'To Upload Project';
            }
            console.log('header effect')
        }
    }
</script>
