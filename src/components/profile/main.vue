<template>
    <div @mousemove.prevent="cl()" v-bind:class="zu">
        <v-header></v-header>
        <section class="well well-sm well-sm--inset-2" id="login">
            <div class="container text-center">
                <div class="row flow-offset-1">
                    <div class="col-md-6 col-md-offset-3 btn-shadow inset-sm-min bg-white">
                        <h5 class="text-center">Your Profile</h5>
                        <template v-if="status == 'jfalse'">
                            <div>
                                <div class="alert alert-danger">
                                    <strong>{{error}}</strong>
                                </div>
                            </div>
                        </template>
                        <form class="row label-insets" v-on:submit.prevent="gologin">
                            <div class="form-group col-sm-12 text-left">
                                <label for="exampleInputText2" class="">{{$lang.messages.default.proposal_form.name}}</label>
                                <input type="text" v-model="name" id="exampleInputText2" class="form-control">


                            </div>
                            <div class="form-group col-sm-6 text-left">
                                <label for="exampleInputPass1"
                                       class="text-uppercase font-secondary">Phone</label>
                                <input type="number" v-model="phone" id="exampleInputPass1"
                                       class="form-control">

                            </div>
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary btn-xs round-xl btn-block form-el-offset-1"
                                        @click='edit'>
                                    Update
                                </button>
                            </div>
                        </form>
                        <div class="col-xs-12 text-center">
                            <p class="small text-uppercase text-light-clr font-secondary max-width separate">
                                or</p>
                            <div class="btn-elements-group-2">
                                <!--<a href="#" class="btn btn-info btn-xs round-small btn-icon-left btn-min-width"><span-->
                                <!--class="icon fa-facebook"></span> facebook</a><a href="#"-->
                                <!--class="btn btn-info-2 btn-xs round-small btn-icon-left btn-min-width"><span-->
                                <!--class="icon fa-twitter"></span> Twitter</a><a href="#"-->
                                <!--class="btn btn-danger btn-xs round-small btn-icon-left btn-min-width"><span-->
                                <!--class="icon fa-google-plus"></span> Google+</a>-->

                            </div>
                        </div>

                    </div>
                </div>
                <a href="index.html" class="btn btn-default btn-default--mod-1 btn-sm round-xl offset-2">Back to
                    homepage</a>
            </div>
        </section>

        <v-footer></v-footer>
    </div>
</template>
<style>
    @import "../../assets/css/style.css";

</style>
<script>
    import Header from '@/components/shot_h_and_f/header.vue'
    import Footer from '@/components/shot_h_and_f/footer.vue'
    import injects from '@/mixins/injects.js'
    import middleware from '@/mixins/middleware.js'
    import axios from 'axios'
    export default{
        mixins: [injects],
        data(){
            return {
                name: '',
                phone: '',
                password: '',
                status: '',
                error: '',
                zu:''

            }
        },
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        created(){
            var self = this;
            axios({
                method: 'get',
                url: 'http://localhost/userHpbk/api/user_data?token=' + localStorage.getItem('token'),

            }).then(function (response) {
                self.name = response.data.data.name;
                console.log(response.data);
                self.phone = response.data.data.phone;

            });
        },
        methods: {
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
            edit: function () {
                var self = this;
                self.status = '';
                self.error = '';
                return axios({
                    method: 'post',
                    url: 'https://www.hivephing.com/constructback/api/user_data/edit',
                    data: {
                        token: localStorage.getItem('token'),
                        name: self.name,
                        phone: self.phone
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    if (response.data.success == 'error') {
                        self.status = 'error';
                        self.error = response.data.error;
                        console.log(response.data.error);
                    } else {
                        self.name = response.data.data.name;
                        self.phone = response.data.data.phone;
                        self.status = 'success';

                        console.log(response.data);
                    }

                });
            },
            paschange: function () {
                var self = this;

            }

        },

    }
</script>