<template>
    <div>
        <v-header></v-header>
        <div class="page-content">


            <!--Start section-->

            <section class="text-center">
                <div class="tab-content">
                    <div role="tabpanel" id="tab0" class="tab-pane fade active in">
                        <h3 class="h1-variant-2">
                            {{ _.truncate(detail_data.name, {'length': 30,'separator':'...'})}}
                        </h3>

                        <p class="lead text-base">
                            {{detail_data.description}}
                            <br>
                            <br>
                            <br>
                            <span>Address</span>:{{detail_data.address}}
                            <br>
                            <span>City</span>:south okkalapa township &nbsp;
                            <span>State</span>:south okkalapa township<br>
                            <span>Count of company</span>:south okkalapa township<br>
                            <!--<div >-->
                            <span v-if="qtype == '1'">{{$lang.messages.default.proposal_form.choose}}Company
                            မ်ားမွ တုိက္ရိုက္ဆက္သြယ္လာသည္ကို ေစာင့္မည္။</span><br>
                            <!--</div>-->
                            <!--<div v-if="qtype == '0'">-->
                            <span v-if="qtype == '0'">{{$lang.messages.default.proposal_form.choose}}:Hive
                            Phing မွ ေစ်းႏႈန္း အစအဆံုး စံုစမ္းေပးျခင္းကို ေစာင့္မည္။</span>
                            <br>
                            <!--</div>-->


                            <span>Phone</span>:{{detail_data.phone}}&nbsp;
                            <span>Date</span>:{{detail_data.created_at}}<br>
                            <span>Status</span>:{{status}}<br>
                            <span>Request Count</span>:{{rq_count}}<br>
                        </p>

                    </div>

                </div>

            </section>
            <ul class="nav nav-tabs text-center" style="display: inline;margin: 59px;">
                <li role="presentation" class="round-xl" v-bind:class="{ active: isrqActive}"><a class="round-xl"
                                                                                                 @click="nav_css(pm='rq')">Requested
                    Companies</a></li>
                <li role="presentation" class="round-xl" v-bind:class="{ active: isrecActive}"><a class="round-xl"
                                                                                                  @click="nav_css(pm='rec')">Recomended
                    Companies</a></li>
            </ul>
            <div class="col-xs-12 text-center text-md-left well" style="margin: 59px;">
                <h5>Related Posts:</h5>
                <div class="row no-offset clearleft-2">
                    <paginate-links for="rq_datas" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"
                    >
                    </paginate-links>
                    <br>
                    <paginate
                            name="rq_datas"
                            :list="pg_data"
                            :per="12"
                    >
                        <div class="col-sm-6 col-md-3" v-for="data in paginated('rq_datas')"
                             style="border:2px solid #f1f1f1de;height: 403px;margin-left:11px;">

                            <article class="thumbnail thumbnail-4 section-border well slow-hover">
                                <div class="image-slow-wrapper"></div>
                                <div class="caption">
                                    <h4 style="color:#ffae00;">
                                        <img v-bind:src="'https://www.hivephing.com/companies/public/users/entro/photo/'+ data.logo" class="img_round_logo"
                                             alt="">
                                     <span> {{ _.truncate(data.name, {'length': 30,'separator':'...'})}}
                                     </span>

                                    </h4>
                                    <p class="text-dark-variant-2"
                                       style="word-break: break-all;height:62px;overflow: auto;">
                                        {{ _.truncate(data.description, {'length': 132,'separator':'...'})}}</p>


                                    <div class="blog-info">
                                        <div class="pull-md-left">
                                            Looking for Investment : <i class="fa fa-close" style="color:darkred;"
                                                                        v-if="data.investment == '0'"></i>
                                            <i class="fa fa-check" style="color:#32c5d2;" v-if="data.investment == '1'"></i>
                                            <br>
                                            Registration Status : <i class="fa fa-check" style="color:#32c5d2;"
                                                                     v-if="data.registration_status == '0'"></i>
                                            <i class="fa fa-check" style="color:#32c5d2;"
                                               v-if="data.registration_status == '1'"></i>
                                            <strong style="font-weight:bold;color:#34bfa3"> Date :
                                                {{data.created_at}}</strong>
                                        </div>
                                        <a  @click.prevent="gotocomdetail(id=data.id)" class="btn-link text-bold">Read More</a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </paginate>
                    <br>

                    <paginate-links for="rq_datas" class="col-md-12"
                                    :async="true"
                                    :limit="8"
                                    :show-step-links="true"
                    >

                    </paginate-links>
                </div>


            </div>

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
    import axios from 'axios'

    export default{
        data(){
            return {
                isrqActive: true,
                isrecActive: false,
                detail_data: "",
                status: '',
                message: [],
                rmessage: [],
                com_id: '',
                post_id: '',
                cdetailid: '',
                con_id: '',
                post_id: '',
                btm: '',
                close_id: '',
                coro: '',
                qtype: '',
                per_close: '',
                rq_count: '',
                pg_data: [],
                rq_data: [],
                rec_data: [],
                paginate: ['rq_datas'],
                recomd: [],
                pg_type: 'rq',
                pm: 'rq',
                zu:''

            }
        }
        ,
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        methods: {
            nav_css: function (pm) {
                var self=this;
                self.pg_data=[];
                if (pm == 'rq') {
                    this.isrqActive = true;
                    this.isrecActive = false;
                    this.pg_data = this.rq_data;
                    this.pg_type = 'rq';
                    localStorage.setItem('detail_type', 'rq');
                    console.log(this.pg_data);
                    console.log(this.paginate);
                } else {
                    this.isrqActive = false;
                    this.isrecActive = true;
                    this.pg_data = this.rec_data;
                    localStorage.setItem('detail_type', 'rec');
                    this.pg_type = 'rec';
                    console.log(this.pg_data);
                }


            },
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
            gotoconfirm: function (con_id, post_id) {
                console.log('user' + con_id + 'post' + post_id);
                var self = this;
                return axios({
                    method: 'post',
                    url: 'http://localhost/userHpbk/api/dashboard/confirm_project',
                    data: {
                        token: localStorage.getItem('token'),
                        user_id: con_id,
                        post_id: post_id,

                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    var self = this;
                    console.log(response.data);
                    window.location = '../detail/' + response.data.data;


                });

            },
            gotoclose: function (close_id) {
                var self = this;
                self.coro = '';
                return axios({
                    method: 'post',
                    url: 'hhttp://localhost/userHpbk/api/dashboard/proposals/close_project',
                    data: {
                        token: localStorage.getItem('token'),
                        id: close_id,

                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.data);

                    self.coro = 'closed';
                });

            },
            gotoopen: function (close_id) {
                var self = this;
                self.coro = '';
                self.per_close = '';
                return axios({
                    method: 'post',
                    url: 'hhttp://localhost/userHpbk/api/dashboard/proposals/open_project',
                    data: {
                        token: localStorage.getItem('token'),
                        id: close_id,
                    },
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.data);
                    if (response.data.data == 'open') {
                        self.coro = 'open';
                    } else {
                        self.coro = 'closed';

                        self.per_close = 'yes';
                        console.log(self.coro);
                    }


                });

            },
            gotosend: function (com_id, post_id) {
                localStorage.setItem('com_id', com_id);
                localStorage.setItem('post_id', post_id);
                window.location = '../send_msg/user';

            },
            gotocomdetail: function (cdetailid) {
                window.location = '../com_detail_by_project/' + cdetailid;
            }
        },
        filters: {
            strcat: function (value) {
                return _.truncate(value, {'length': 50});
            }
        },
        created(){
            localStorage.setItem('postid', this.$route.params.pid);
            console.log('post_id' + localStorage.getItem('postid'));
            console.log('post_id');
        },
        beforeCreate() {
            this.pg_data = this.rec_data;
            console.log(this.rec_data);
            console.log(localStorage.getItem('token'));
            console.log(this.$route.params.pid);

            var self = this;
            return axios({
                method: 'get',
                url: 'http://localhost/userHpbk/api/dashboard/proposals/detail/' + this.$route.params.pid + '?token=' + localStorage.getItem('token'),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                //console.log(response.data.success);

                console.log(response.data.requested_com);
                if (response.data.requested_com == '') {
                    self.rq_data = [];
                } else {
                    self.rq_data = _.orderBy(response.data.requested_com, ['name'], ['desc']);

                }
                if (response.data.all_rec == '') {
                    self.rec_data = [];
                } else {
                    self.rec_data = _.orderBy(response.data.all_rec, ['name'], ['desc']);

                }
                self.isrqActive = true;
                self.isrecActive = false;
                self.pg_data = self.rq_data;
                self.pg_type = 'rq';
                localStorage.setItem('detail_type', 'rq');

                console.log('heere' + response.data.requested_com);

                console.log('fff' + response.data);
                self.rq_count = response.data.rq_count;
                if (response.data.data != '') {
                    self.detail_data = response.data.data;
                    if (self.detail_data.close == '1') {
                        self.coro = 'closed';
                    } else {
                        self.coro = 'open';

                    }
                    if (self.detail_data.quotation_type == 1) {
                        self.qtype = '1';
                        console.log(self.qtype);
                    }
                    else {
                        self.qtype = '0';

                    }
                    console.log(response.data.data);
                    self.message = response.data.tmessage;
                    self.rmessage = response.data.fmessage;
                    if (response.data.tmessage != '') {
                        self.btm = 'dd';
                    }
                    if (response.data.data.full != 'full') {
                        self.status = 'open';
                    }
                }
                else {
                    self.detail_data = '';
                }
                console.log(response.data.data);

            });


        },


    }
</script>
