<template>
    <div @mousemove.prevent="cl()" v-bind:class="zu">
        <v-header></v-header>


        <div class="page-content" style="margin-top: 54px;">

            <!--Start section-->
            <section class="text-center text-md-left offset-1">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 section-border">
                            <div class="blog-info blog-info-inset text-center text-lg-left">
                                <div class="pull-lg-left"><span class="tags wrap-normal">
                                <a class="badge material-icons-local_offer"></a>
                                    <a href="#" class="post-tag round-xl small" @click.prevent="get_by_type(type='fr')">{{$lang.messages.default.proposals.Setup}} </a>
                                    <a href="#" class="post-tag round-xl small" @click.prevent="get_by_type(type='fn')">{{$lang.messages.default.proposals.inner_beauty}} </a>
                                    <a href="#" class="post-tag round-xl small" @click.prevent="get_by_type(type='rb')">{{$lang.messages.default.proposals.rebuild}} </a>
                                    <a href="#" class="post-tag round-xl small" @click.prevent="get_by_type(type='b')">{{$lang.messages.default.proposals.build}}</a>
                                    <a href="project_cat_to_up" class="post-tag round-xl small">{{$lang.messages.default.proposals.upload_proposals}}</a>
                               </span></div>

                            </div>
                        </div>
                        <div class="col-xs-12 text-center text-md-left well">
                            <h5>Related Posts:</h5>
                            <div class="row no-offset clearleft-2">
                                <paginate-links for="repairdatas" class="col-md-12"
                                                :async="true"
                                                :limit="8"
                                                :show-step-links="true"
                                >
                                </paginate-links>
                                <br>
                                <paginate
                                        name="repairdatas"
                                        :list="repairdata"
                                        :per="6"
                                >
                                    <div class="col-sm-6 col-md-4" v-for="data in paginated('repairdatas')"
                                         style="border:2px solid #f1f1f1de;">
                                        <article class="thumbnail thumbnail-4 section-border well slow-hover">
                                            <!--<div class="image-slow-wrapper"><img src="../../assets/images/blog-4.jpg"-->
                                            <!--alt=""></div>-->
                                            <div class="caption">
                                                <h4 style="color:#ffae00;">{{ _.truncate(data.name, {'length':
                                                    12,'separator': '...'})}}</h4>
                                                <p class="text-dark-variant-2"
                                                   style="word-break: break-all;height:152px;overflow: auto;"> {{
                                                    _.truncate(data.description, {'length': 132,'separator':
                                                    '...'})}}</p>
                                                <template
                                                        v-if="$lang.messages.default.proposals.upload_proposals=='စံုစမ္းမည္'">
                                                    <template v-if="spantype=='fr'">
                                                <span class="label" style="background-color:#555555;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                                    </template>
                                                    <template v-if="spantype=='fn'">
                                                <span class="label" style="background-color:#1BA39C;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                                    </template>
                                                    <template v-if="spantype=='rb'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                                    </template>
                                                    <template v-if="spantype=='b'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.dd}}</span>
                                                    </template>
                                                </template>
                                                <template v-else>
                                                    <template v-if="spantype=='fr'">
                                                <span class="label" style="background-color:#555555;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                                    </template>
                                                    <template v-if="spantype=='fn'">
                                                <span class="label" style="background-color:#1BA39C;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                                    </template>
                                                    <template v-if="spantype=='rb'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                                    </template>
                                                    <template v-if="spantype=='b'">
                                                <span class="label" style="background-color:#F36A5A;"><i
                                                        class="fa fa-home"
                                                        style="font-size:18px;"></i>{{data.eng}}</span>
                                                    </template>
                                                </template>
                                                <div class="blog-info">
                                                    <div class="pull-md-left">
                                                        <a href="#"
                                                           class="badge material-icons-file_download font-secondary"
                                                           @click="download(dwn_file=data.att1)">Draw 1</a>
                                                        <a href="javascript:void(0)"
                                                           class="badge material-icons-file_download font-secondary"
                                                           @click="download(dwn_file=data.att2)">Draw 2</a>
                                                        <a href="javascript:void(0)"
                                                           class="badge material-icons-file_download font-secondary"
                                                           @click="download(dwn_file=data.att3)">Draw 3</a>
                                                    </div>
                                                    <a href="javascript:void(0)" class="btn-link text-bold" @click="go(name='project_detail',data=data.id)">Read More</a>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </paginate>
                                <br>
                                <paginate-links for="repairdatas" class="col-md-12"
                                                :async="true"
                                                :limit="8"
                                                :show-step-links="true"
                                >
                                </paginate-links>
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
    import axios from 'axios'
    export default {
        name: 'HelloWorld',
        data () {
            return {
                type: 'fr',
                repairdata: ['empty'],
                paginate: ['repairdatas'],
                spantype: 'fr',
                id: '',
                dwn_file: '',
                zu:''
            }
        },
        methods: {
            gotoaddnew: function () {
                window.location = '../formq/all';
            },
            download: function (dwn_file) {
                var url = window.URL.createObjectURL(new Blob(['http://localhost/public/user_attachments/' + dwn_file]));
                console.log(dwn_file);
                var link = document.createElement('a');
                link.href = 'http://' + window.location.hostname + '/userHpbk/public/user_attachments/' + dwn_file;
                link.setAttribute('download', dwn_file); //or any other extension
                document.body.appendChild(link);
                link.click();
                console.log(url);
//                axios({
//                    url: 'https://'+window.location.hostname+'/constructback/api/rr/'+dwn_file,
//                    method: 'GET',
//                    responseType: 'blob', // important
//                }).then((response) => {
//                    if (!window.navigator.msSaveOrOpenBlob){
//                        // BLOB NAVIGATOR
//                        const url = window.URL.createObjectURL(new Blob([response.data]));
//                        const link = document.createElement('a');
//                        link.href = url;
//                        link.setAttribute('download', 'download.pdf');
//                        document.body.appendChild(link);
//                        link.click();
//                    }else{
//                        // BLOB FOR EXPLORER 11
//                        const url = window.navigator.msSaveOrOpenBlob(new Blob([response.data]),"download.pdf");
//                    }
//                });
            },
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
            get_by_type: function (type) {
                var self = this;
                return axios({
                    method: 'get',
                    url: "http://localhost/userHpbk/api/dashboard/" + type + "/proposals?token=" + localStorage.getItem('token'),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then(function (response) {
                    console.log(response.data.success);
                    self.repairdata = _.orderBy(response.data.data, ['id'], ['desc'])
                    self.spantype = type;
                    console.log(response.data.data);
                });
            },
            gotodetail: function (id) {
                window.location = '../detail/' + id;
            },
        },
        components: {
            'v-header': Header,
            'v-footer': Footer
        },
        mounted() {
            console.log(localStorage.getItem('token'))
            var self = this;
            return axios({
                method: 'get',
                url: 'http://localhost/userHpbk/api/dashboard/fr/proposals?token=' + localStorage.getItem('token'),
                headers: {
                    'Content-type': 'application/json'
                }
            }).then(function (response) {
                console.log(response.data.success);
                self.repairdata = _.orderBy(response.data.data, ['id'], ['desc'])
                console.log(response.data.data);
            });
        },
    }
</script>