<template>
    <div>
        <div>{{$lang.messages.default.hello_world}}</div>
        <header class="page-header dark">
            <!--RD Navbar-->
            <div class="rd-navbar-wrap">
                <nav class="rd-navbar bg-white" data-layout="rd-navbar-fixed" data-hover-on="false"
                     data-stick-up="false" data-sm-layout="rd-navbar-fullwidth" data-md-layout="rd-navbar-static">
                    <div class="rd-navbar-top-panel">
                        <div class="rd-navbar-inner">
                            <button data-rd-navbar-toggle=".list-inline, .fa-envelope, .fa-phone, .material-icons-shopping_cart"
                                    class="rd-navbar-collapse-toggle"><span></span></button>
                            <a href="/cdn-cgi/l/email-protection#0f2c" class="fa-envelope"><span class="__cf_email__"
                                                                                                >info@hivephing.com</span></a><a
                                href="callto:#" class="fa-phone">09456114442</a>
                            <!--<ul class="list-inline pull-right">-->
                                <!--<li><a href="#" class="fa-facebook"></a></li>-->
                                <!--<li><a href="#" class="fa-pinterest-p"></a></li>-->
                                <!--<li><a href="#" class="fa-twitter"></a></li>-->
                                <!--<li><a href="#" class="fa-google-plus"></a></li>-->
                                <!--<li><a href="#" class="fa-instagram"></a></li>-->
                            <!--</ul>-->
                        </div>
                    </div>
                    <div class="rd-navbar-inner">

                        <!--RD Navbar Panel-->
                        <div class="rd-navbar-panel">
                            <!--RD Navbar Toggle-->
                            <button data-rd-navbar-toggle=".rd-navbar" class="rd-navbar-toggle"><span></span></button>
                            <!--END RD Navbar Toggle-->
                            <!--RD Navbar Brand-->
                            <div class="rd-navbar-brand"><a href="index.html" class="brand-name"></a>
                            </div>
                            <!--END RD Navbar Brand-->
                        </div>
                        <!--END RD Navbar Panel-->
                        <div class="rd-navbar-nav-wrap">
                            <!--END RD Navbar Nav-->
                        </div>
                    </div>
                </nav>
            </div>
            <!--END RD Navbar-->
            <section>
                <!--Swiper-->
                <div class="rd-parallax">
                    <div data-speed="0.6" data-type="media" data-url="/static/images/header-1.jpg"
                         class="rd-parallax-layer"></div>
                    <div data-speed="0.78" data-type="html" data-fade="true"
                         class="well-parallax jumbotron text-center rd-parallax-layer">
                        <img class="logo_img"
                             src="../assets/images/logo.png"
                             alt="" style="width:155px;height:102px;"></a>
                        <h1 style="color:#ffae00;">
                            HivePhing
                            <small>The best real time search engine to browse skillful contractors in Myanmar.</small>
                        </h1>
                        <p class="big">Save time and no cost to get the best reliable contractors<br> Trust us ,we
                            always provide you the best services<br>We are dedicated to your home endurance</p>
                        <div class='btn-group-variant'>
                            <div class="col-sm-2 col-lg-4">&nbsp;</div>
                            <div class="col-sm-8 col-lg-4">
                            <div class="row">

                            <!--<form >-->
                                <!--<div class="form-group col-xs-7">-->
                                    <!--<input type="password" v-model="password" id="exampleInputPass1"-->
                                           <!--class="form-control">-->
                                    <!--<template v-if="status === 'vfalse'">-->
                                        <!--<template v-if="error.phone !== undefined">-->
                                          <!--<span class="help-block">-->
                                                <!--<strong v-for="eps in error.password"-->
                                                        <!--style="color: #ff292996; font-size: 15px;">-->
                                                    <!--{{eps}}-->
                                                <!--</strong>-->
                                             <!--</span>-->
                                        <!--</template>-->
                                    <!--</template>-->
                                <!--</div>-->
                                <!--<a class='btn btn-default round-xl btn-sm' href='login'>Search</a>-->
                            <!--</form>-->
                            </div>
                            <div class="row">
                            <a class='btn btn-default round-xl btn-sm' href='login'>Login</a>
                            <a class='btn btn-default round-xl btn-sm' href='register'>Register</a>
                            </div>
                            </div>
                            <div class="col-sm-2 col-lg-4">&nbsp;</div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    </div>
</template>
<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                title: 'Blog'
            }
        },
        created(){
            console.log('ff')          //
        }
    }
</script>