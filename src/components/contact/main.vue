<template>
    <div>
        <v-header></v-header>
        <section class="well well-sm">
            <div class="container">
                <div class="row flow-offset-1">
                    <div class="col-md-8 inset-sm-min bg-white">
                        <h5 class="text-center">Mastery ကုမၼဏီသုိ႔ အၾကံေပးစာပို႔မည္</h5>
                        <form @submit.prevent="contact()" class="row label-insets rd-mailform">
                            <!--RD Mailform Type-->
                            <input type="hidden" name="form-type" value="contact">
                            <!--END RD Mailform Type-->
                            <div class="form-group col-sm-12">
                                <label for="exampleInputText1" class="text-uppercase font-secondary form-label"> {{$lang.messages.default.contact.subject}} </label>
                                <input type="text" placeholder="Title" v-model="title" data-constraints="@NotEmpty @LettersOnly" id="exampleInputText1" class="form-control">
                                <template v-if="status === 'error'">
                                    <template v-if="error.title !== undefined">
                                                 <span class="label label-danger">
                                                  <strong v-for="epp in error.title">{{epp}}</strong>
                                                 </span>
                                    </template>
                                </template>
                            </div>
                            <div class="form-group col-sm-12">
                                <label for="exampleTextarea" class="text-uppercase font-secondary">{{$lang.messages.default.contact.Des}} </label>
                                <textarea id="exampleTextarea" rows="3" placeholder="Write your message here" v-model="subscription" data-constraints="@NotEmpty" class="form-control"></textarea>
                                <template v-if="status === 'error'">
                                    <template v-if="error.subscription !== undefined">
                                                <span class="label label-danger">
                                                <strong v-for="epps in error.subscription">{{epps}}</strong>
                                                </span>
                                    </template>
                                </template>
                            </div>

                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary btn-xs round-xl btn-block form-el-offset-1">
                                    {{$lang.messages.default.contact.send}}
                                </button>
                                <div class="mfInfo"></div>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 text-center text-md-left">
                        <address class="contact-block inset-sm-min-2 bg-white">
                            <dl>
                                <dt class="h6">ADDRESS</dt>
                                <dd> Address
                                    No.628/636 Merchant Road,(10th Floor,Royal River View Condo)Between 29th and 30th street,Yangon</dd>
                                <dt class="h6">WE ARE OPEN</dt>
                                <dd>Open hours: 9.00-17.00 Mon-fri</dd>
                                <dt class="h6">PHONE</dt>
                                <dd><a href="callto:#">09773777445 &nbsp;</a><a href="callto:#">09425029854</a></dd>
                                <dt class="h6">E-MAIL</dt>
                                <dd><a href="/cdn-cgi/l/email-protection#3013"><span class="__cf_email__" data-cfemail="11787f777e5175747c7e7d787f7a3f7e6376">admin@hivephing.com</span></a></dd>
                            </dl>
                            <ul class="list-inline list-inline-3">
                                <li><a href="#" class="fa-facebook-square"></a></li>
                                <li><a href="#" class="fa-twitter-square"></a></li>
                                <li><a href="#" class="fa-google-plus-square"></a></li>
                            </ul>
                        </address>
                    </div>
                </div>
            </div>
        </section>
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
    .img_round_logo{
        width: 65px;
        border-radius: 37px;
        height: 62px;
    }
</style>
<script>
    import Header from '@/components/shot_h_and_f/header.vue'
    import Footer from '@/components/shot_h_and_f/footer.vue'
    import injects from '@/mixins/injects.js'
    import middleware from '@/mixins/middleware.js'
    import axios from 'axios'
    export default{
        data(){
            return {
                title: '',
                subscription: '',
                status:'',
                error:'',
                zu:''
            }
        },
        components:{
               'v-header':Header,
               'v-footer':Footer
        },
        methods: {
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
            contact: function () {
                var self=this;
                return axios({
                    method: 'post',
                    url: 'https://www.hivephing.com/constructback/api/dashboard/contact',
                    data: {
                        title: self.title,
                        subscription: self.subscription,
                        token:localStorage.getItem('token'),
                    }, headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log('sending');
                    console.log(response.data);
                    if (response.data.success === 'error') {
                        self.status = 'error';
                        self.error = response.data.error;
                        console.log(self.error);
                    }
                    if (response.data.success === 'success') {

                        console.log(response.data.success);
                        self.status='success';
                        self.title='';
                        self.subscription='';
                    }
                });
            }

        }
    }
</script>

