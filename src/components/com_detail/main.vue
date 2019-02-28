<template>
    <div>
        <v-header></v-header>
        <div class="page-content">


            <!--Start section-->

            <section class="text-center">
                <div class="tab-content text-sm-left">
                    <div role="tabpanel" id="tab0" class="tab-pane fade active in"
                         style="margin-left:4%;margin-right:4%;">
                        <h3 class="h1-variant-2">
                        {{com_data.name}}
                        </h3>
                        <p class="lead text-base">
                            {{com_data.description}}
                            <br>
                            <br>
                            <br>
                            <span>Address</span>:{{com_data.address}}
                            <br>
                            <span>City</span>:south okkalapa township &nbsp;
                            <span>State</span>:south okkalapa township<br>
                            <span>Count of company</span>:south okkalapa township<br>
                            <!--<div >-->
                            <!--<span v-if="qtype == '1'">{{$lang.messages.default.proposal_form.choose}}Company-->
                            <!--မ်ားမွ တုိက္ရိုက္ဆက္သြယ္လာသည္ကို ေစာင့္မည္။</span><br>-->
                            <!--&lt;!&ndash;</div>&ndash;&gt;-->
                            <!--&lt;!&ndash;<div v-if="qtype == '0'">&ndash;&gt;-->
                            <!--<span v-if="qtype == '0'">{{$lang.messages.default.proposal_form.choose}}:Hive-->
                            <!--Phing မွ ေစ်းႏႈန္း အစအဆံုး စံုစမ္းေပးျခင္းကို ေစာင့္မည္။</span>-->
                            <!--<br>-->
                            <!--</div>-->


                            <span>Phone</span>:{{com_data.phone}}&nbsp;
                            <span>Date</span>:{{com_data.created_at}}<br>
                            <span>Status</span>:{{status}}<br>
                            <span>Request Count</span>:{{rq_count}}<br>
                            <span>Looking for Investment</span> : <i class="fa fa-close" style="color:darkred;" v-if="com_data.investment == '0'"></i>
                                                                   <i class="fa fa-check" style="color:#32c5d2;" v-if="com_data.investment == '1'"></i>
                            <span> Registration Status : </span><i class="fa fa-check" style="color:#32c5d2;" v-if="com_data.registration_status == '0'"></i>
                                                                <i class="fa fa-check" style="color:#32c5d2;" v-if="com_data.registration_status == '1'"></i>








                            <!--<div class="col-md-6">-->
                                <!--Business Type :-->
                                <!--<span v-if="com_data.business_hub==1">ေရလိုင္း</span>-->
                                <!--<span v-if="com_data.business_hub==2">-->
                                     <!--မီးလိုင္း-->
                                    <!--</span>-->
                                <!--<span v-if="com_data.business_hub==3">လွ်ပ္စစ္သြယ္တန္းျခင္း</span>-->
                                <!--<span v-if="com_data.business_hub==4">Air-con တပ္ဆင္ျခင္း</span>-->
                                <!--<span v-if="com_data.business_hub==5">Aluminium လုပ္ငန္း</span>-->
                                <!--<span v-if="com_data.business_hub==6">Painting</span>-->
                                <!--<span v-if="com_data.business_hub==7">ကမ္းခင္း/ ပါေကးခင္းျခင္း</span>-->
                                <!--<span v-if="com_data.business_hub==8">CCTV ႏွင့္ လံုျခံဳေရးပစၥည္းမ်ား တပ္ဆင္ျခင္း</span>-->
                                <!--<span v-if="com_data.business_hub==9">အေဆာက္အဦးေဆာက္လုပ္ျခင္း</span>-->
                            <!--</div>-->

                            <!--<div class="col-md-6">-->
                                <!--Website Link : <span><a :href="website" style="word-wrap: break-word;">{{com_data.website}}</a></span>-->
                            <!--</div>-->
                            <template v-if="alert == false">
                                <template v-if="detail_type=='rq'">
                                    <a href="" class="btn btn-info btn-sm round-xl btn-shadow"
                                       @click.prevent="gotoconfirm(con_id=com_data.user_id)">
                                        Confirm
                                    </a>

                                </template>
                            </template>
                            <template v-if="alert ==true">
                                <template v-if="detail_type=='rq'">
                                    <a class="btn btn-success m--pull-right"
                                       disabled="disabled">
                                        Confirmed
                                    </a>
                                </template>
                            </template>
                            <template v-if="detail_type != 'rq'">
                                <template v-if="check_invite==false">
                                    <a href="" class="btn btn-primary btn-sm round-xl btn-shadow" @click.prevent="gotoinvite()">
                                        Invite
                                    </a>
                                </template>
                            </template>
                            <template v-if="check_invite==true">
                                <a href="" class="btn btn-info btn-sm round-xl btn-shadow" @click.prevent="gotoinvite()"
                                   disabled>
                                    Invited
                                </a>
                            </template>

                            <!--<div class="col-md-6">-->
                                <!--Facebook Link : <a :href="facebook" style="word-wrap: break-word;">{{facebook}}</a>-->
                            <!--</div>-->

                        </p>

                    </div>



                    <div class="col-xs-12 text-center text-md-left well">
                        <h5>Related Posts:</h5>
                        <div class="row no-offset clearleft-2">
                            <paginate-links for="ports" class="col-md-12"
                                            :async="true"
                                            :limit="8"
                                            :show-step-links="true"
                            >
                            </paginate-links>
                            <br>
                            <paginate
                                    name="ports"
                                    :list="port"
                                    :per="12"
                            >
                                <div class="col-sm-6 col-md-3" v-for="data in paginated('ports')"
                                     style="border:2px solid #f1f1f1de;height: 403px;">
                                    <article class="thumbnail thumbnail-4 section-border well slow-hover">
                                        <div class="image-slow-wrapper"></div>
                                        <div class="caption">
                                            <h4 style="color:#ffae00;">
                                                <img v-bind:src="'https://www.hivephing.com/companies/public/users/entro/photo/portfolio/'+data.photo" class="img_round_logo"
                                                     alt="">
                                                <span>  {{ _.truncate(data.project_name, {'length': 30,'separator':'...'})}}
                                     </span>

                                            </h4>
                                            <p class="text-dark-variant-2"
                                               style="word-break: break-all;height:62px;overflow: auto;">
                                                {{data.description}}<br>
                                            </p>


                                            <div class="blog-info">
                                                <div class="pull-md-left">
                                                    {{data.address}}<br>
                                                    <strong style="font-weight:bold;color:#34bfa3"> Start Date :
                                                        {{data.start_date}}</strong>
                                                    <br>
                                                    <strong style="font-weight:bold;color:#34bfa3"> End Date :
                                                        {{data.end_date}}
                                                    </strong>
                                                </div>

                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </paginate>
                            <br>

                            <paginate-links for="ports" class="col-md-12"
                                            :async="true"
                                            :limit="8"
                                            :show-step-links="true"
                            >

                            </paginate-links>
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
        mixins:['injects','middleware'],
        data(){
            return {
                com_data: '',
                website: '',
                port: [],
                paginate: ['ports'],
                facebook: '',
                rate: '',
                check_invite: '',
                com_id: '',
                rate_sign: '',
                detail_type: '',
                isActive: true,
                check_emp: "",
                alert: 'false',
            }
        },
        components:{
          'v-header':Header,
          'v-footer':Footer
        },
        methods: {
            gotoconfirm: function (con_id) {
                var self = this;
                return axios({
                    method: 'post',
                    url: 'https://www.hivephing.com/constructback/api/dashboard/confirm_project',
                    data: {
                        token: localStorage.getItem('token'),
                        user_id: con_id,
                        post_id: localStorage.getItem('postid'),
                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log('cc' + response.data.data);
                    if (self.alert == true) {
                        self.alert = false;
                    } else {
                        self.alert = true;
                    }
                });
            },
            gotoinvite: function () {
                var self = this;
                self.rate_sign = '';
                return axios({
                        method: 'post',
                        url: 'http://localhost/userHpbk/api/dashboard/addinvite',
                        data: {
                            'com_id': this.$route.params.cid,
                            'token': localStorage.getItem('token'),
                            'postid': localStorage.getItem('postid')
                        },
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }
                ).then(function (response) {
                    console.log(response);
                    if (response.data != '') {
                        self.isActive = false;
                    }
                    console.log(self.isActive);
                    self.check_invite = true;
                })
            }
            ,
            close: function () {
                console.log('ff');
                this.isActive = true;

            }
            ,
            ratethis: function () {
                var self = this;
                self.rate_sign = '';
                return axios({
                        method: 'post',
                        url: 'https://www.hivephing.com/constructback/api/dashboard/addrate',
                        data: {
                            'com_id': self.com_id,
                            'token': localStorage.getItem('token'),
                        },
                        headers: {
                            'Content-type': 'application/json'
                        }
                    }
                ).then(function (response) {
                    self.rate = response.data.rate;
                    self.rate_sign = response.data.rate_sign;
                    console.log(response);
                });
            }
            ,
            activity: function () {
                window.location = '../activity/' + this.$route.params.fr;
            }
        },
        created()
        {
            console.log(localStorage.getItem('postid'));

            var self = this;
            this.detail_type = localStorage.getItem('detail_type');
            console.log('dt' + this.detail_type);
            console.log(this.$route.params.fr);
            return axios({
                    method: 'get',
                    url: 'http://localhost/userHpbk/api/dashboard/comdetail/' + this.$route.params.cid + '?token=' + localStorage.getItem('token') + '&postid=' + localStorage.getItem('postid'),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            ).then(function (response) {
                self.com_data = response.data.data;
                self.website = response.data.data.website;
                self.facebook = response.data.data.facebook;
                self.rate = response.data.data.rate;
                self.check_invite = response.data.data.check;
                self.rate_sign = response.data.data.rate_sign;
                self.port = response.data.port;
                self.alert = response.data.data.confirm;
                console.log(response.data.data.confirm);

//              console.log(response.data.data);

            });
        }
    }
</script>
