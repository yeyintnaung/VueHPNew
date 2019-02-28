<template>
    <div @mousemove.prevent="cl()" v-bind:class="zu" >
        <v-header></v-header>
        <div class="page-content" style="margin-top: 54px;">

            <!--Start section-->
            <section class="text-center text-md-left offset-1">
                <div class="container">
                    <ul class="nav nav-tabs text-center" style="display:inline;">
                        <!-- to change font-family  in nav nav tabs class-->
                        <li role="presentation" class="round-xl"><a @click.prevent="to_show_cat(show_id='setup')"
                                                                    class="round-xl">{{$lang.messages.default.proposals.Setup}}</a>

                        </li>
                        <li role="presentation" class="round-xl"><a @click.prevent="to_show_cat(show_id='inner_beauty')"
                                                                    class="round-xl">{{$lang.messages.default.proposals.inner_beauty}}</a>
                        </li>
                        <li role="presentation" class="round-xl"><a @click.prevent="to_show_cat(show_id='rebuild')"
                                                                    class="round-xl">{{$lang.messages.default.proposals.rebuild}}</a>
                        </li>
                        <li role="presentation" class="round-xl"><a @click.prevent="to_show_cat(show_id='build')"
                                                                    class="round-xl">{{$lang.messages.default.proposals.build}}</a>
                        </li>

                    </ul>
                    <div class="row">

                        <div class="col-xs-12 section-border" v-if="to_show=='setup'">
                            <div class="blog-info blog-info-inset text-center text-lg-left">
                                <div class="pull-lg-left">
                                    <span class="tags wrap-normal">
                                    <a @click.prevent="go_b(data='fr1')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.water_services}} </a>
                                    <a @click.prevent="go_b(data='fr3')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.Electric}} </a>
                                    <a @click.prevent="go_b(data='fr4')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.Air_con}} </a>
                                    <a @click.prevent="go_b(data='fr5')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.Aluminum}}</a>
                                    <a @click.prevent="go_b(data='fr6')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.paint}}</a>
                                    <a @click.prevent="go_b(data='fr7')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.floor}}</a>
                                    <a @click.prevent="go_b(data='fr8')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.security}}</a>
                                    <a @click.prevent="go_b(data='fr10')" class="post-tag round-xl small">{{$lang.messages.default.project_detail.lift}}</a>
                                    </span></div>

                            </div>
                        </div>


                        <div class="col-xs-12 section-border" v-if="to_show=='inner_beauty'">
                            <div class="blog-info blog-info-inset text-center text-lg-left">
                                <div class="pull-lg-left">
                                    <span class="tags wrap-normal">

                        <a @click.prevent="go_b(data='fn1')"
                           class="post-tag round-xl small">
                               {{$lang.messages.default.project_detail.innerhome}}
                        </a>


                        <a @click.prevent="go_b(data='fn2')"
                           class="post-tag round-xl small">
                                {{$lang.messages.default.project_detail.innershop}}


                        </a>

                        <a @click.prevent="go_b(data='fn3')"
                           class="post-tag round-xl small">
                                 {{$lang.messages.default.project_detail.innerbuilding}}
                        </a>

                        <a @click.prevent="go_b(data='fn4')"
                           class="post-tag round-xl small">
                               {{$lang.messages.default.project_detail.innermall}}
                        </a>
                                    </span></div>
                            </div>
                        </div>
                        <div class="col-xs-12 section-border" v-if="to_show=='rebuild'">
                            <div class="blog-info blog-info-inset text-center text-lg-left">
                                <div class="pull-lg-left">
                                    <span class="tags wrap-normal">

                        <a @click.prevent="go_b(data='rb1')" class="post-tag round-xl small">
                 {{$lang.messages.default.project_detail.Build}}
              </a>

              <a @click.prevent="go_b(data='rb2')" class="post-tag round-xl small">
            {{$lang.messages.default.project_detail.water_services}}
              </a>

              <a @click.prevent="go_b(data='rb3')" class="post-tag round-xl small">
             {{$lang.messages.default.project_detail.Electric}}
              </a>

              <a @click.prevent="go_b(data='rb4')" class="post-tag round-xl small">
            {{$lang.messages.default.project_detail.Air_con}}
              </a>

                <a @click.prevent="go_b(data='rb5')" class="post-tag round-xl small">
              {{$lang.messages.default.project_detail.security}}
                </a>
                                    </span></div>
                            </div>
                        </div>
                        <div class="col-xs-12 section-border" v-if="to_show=='build'">
                            <div class="blog-info blog-info-inset text-center text-lg-left">
                                <div class="pull-lg-left">
                               <span class="tags wrap-normal">
                               <a @click.prevent="go_b(data='b1')" class="post-tag round-xl small">
                                {{$lang.messages.default.project_detail.Build}}
                                </a>
                                <a @click.prevent="go_b(data='b2')" class="post-tag round-xl small">
                                {{$lang.messages.default.project_detail.Road}}
                                </a>
                                <a @click.prevent="go_b(data='b3')" class="post-tag round-xl small">
                                  {{$lang.messages.default.project_detail.Bridge}}
                                </a>
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <v-footer></v-footer>
    </div>
</template>
<style>
    @import "../../assets/css/style.css";

    .paginate-links li {
        width: 22px;
        float: left;
        margin: 2px;
        background: #ffae00;
        text-align: center;
        color: white;
    }

    .paginate-links .active {
        background: #eaad2ade !important;
    }


</style>
<script>
    import Header from '@/components/shot_h_and_f/header.vue'
    import Footer from '@/components/shot_h_and_f/footer.vue'
    import injects from '@/mixins/injects.js'
    import middleware from '@/mixins/middleware.js'
    import axios from 'axios'

    export default {
        mixins: [injects, middleware],
        name: 'HelloWorld',
        data () {
            return {
                to_show: 'setup',
                show_id: '',
                data: '',
                zu: ''
            }
        },
        methods: {
            to_show_cat: function (show_id) {
                var self = this;
                self.to_show = show_id;
                console.log(self.to_show);
            },
            go_b: function (data) {

                window.location = 'upload_project/' + data;
            },
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
        },

        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        mounted() {
            console.log(localStorage.getItem('token'))

        },


    }
</script>