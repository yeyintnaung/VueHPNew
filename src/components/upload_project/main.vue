<template>
    <div @mousemove.prevent="cl()" v-bind:class="zu">
        <v-header></v-header>
        <div class="page-content" style="margin-top: 54px;">

            <br>
            <br>
            <br>
            <!--Start section-->
            <section class="text-center text-md-left offset-1">
                <div class="container">
                    <form class="row label-insets" v-on:submit.prevent="gotosave">
                       <div class="form-group col-sm-6">
                            <label for="exampleInputText1" class="text-uppercase">{{$lang.messages.default.proposal_form.name}}</label>
                            <input type="text" v-bind:placeholder="$lang.messages.default.proposal_form.name"
                                   id="exampleInputText1" class="form-control"
                                   v-model="name">
                            <template v-if="status === 'error'">
                                <template v-if="error.name !== undefined">
                                             <span class="help-block">
                                            <strong v-for="ep in error.name"
                                                    style="color: #ff292996; font-size: 15px;">
                                                {{ep}}
                                            </strong>
                                           </span>
                                </template>
                            </template>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="exampleInputText2"
                                   class="text-uppercase">{{$lang.messages.default.auth.phone}}</label>
                            <input type="text" v-bind:placeholder="$lang.messages.default.auth.phone"
                                   id="exampleInputText2"
                                   class="form-control" v-model="phone">
                            <template v-if="status === 'error'">
                                <template v-if="error.phone !== undefined">
                                             <span class="help-block">
                                              <strong v-for="ep in error.phone"
                                                      style="color: #ff292996; font-size: 15px;">
                                                {{ep}}
                                              </strong>
                                           </span>
                                </template>
                            </template>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="exampleInputEmail1" class="text-uppercase">{{$lang.messages.default.project_detail.address}}</label>
                            <input type="text" v-bind:placeholder="$lang.messages.default.project_detail.address"
                                   id="exampleInputEmail1"
                                   class="form-control" v-model="address">
                            <template v-if="status === 'error'">

                                <template v-if="error.address !== undefined">

                                            <span class="help-block">

                                            <strong style="color: #ff292996; font-size: 15px;"
                                                    v-for="ead in error.address">
                                                {{ead}}
                                            </strong>
                                            </span>
                                </template>
                            </template>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="exampleInputPass1" class="text-uppercase">{{$lang.messages.default.proposal_form.choose}}</label>
                            <select class="form-control">
                                <option value="0">{{$lang.messages.default.proposal_form.sub_choose1}}</option>
                                <option value="1">{{$lang.messages.default.proposal_form.sub_choose2}}</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-12">
                            <label for="exampleInputPass1" class="text-uppercase">{{$lang.messages.default.proposal_form.description}}</label>
                            <textarea id="exampleTextarea" rows="3" placeholder="Write your message here"
                                      class="form-control" v-model='description'></textarea>
                            <template v-if="status === 'error'">
                                <template v-if="error.description !== undefined">
                                             <span class="help-block">
                                             <strong style="color: #ff292996; font-size: 15px;"
                                                     v-for="edes in error.description">
                                                {{edes}}
                                             </strong>
                                             </span>
                                </template>
                            </template>
                        </div>
                        <div class="form-group col-sm-6">
                            <label for="exampleInputPass1" class="text-uppercase">{{$lang.messages.default.proposal_form.count_com}}</label>
                            <select class="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6" v-if="$lang.messages.default.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                            <label for="exampleInputPass1" class="text-uppercase">ျပည္နယ္၊ တိုင္း </label>
                            <select class="form-control" v-model="state" @change="get_cities(id=state)">
                                <option v-for="state in states" :value="state.id">
                                    {{ state.mm_name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6" v-else>
                            <label for="exampleInputPass1" class="text-uppercase">  States/Divisions</label>
                            <select class="form-control"  v-model="state" @change="get_cities(id=state)">
                                <option v-for="state in states" :value="state.id">
                                    {{ state.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6" v-if="$lang.messages.default.proposal_form.count_com == 'ကုမၸဏီအေရအတြက္'">
                            <label for="exampleInputPass1" class="text-uppercase">ၿမိဳ့နယ္ </label>
                            <select class="form-control"  v-model="city">
                                <option v-for="city in cities" :value="city.id">
                                    {{ city.myan_name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group col-sm-6" v-else>
                            <label for="exampleInputPass1" class="text-uppercase">Cities/Towns</label>

                            <select class="form-control"  v-model="city">
                                <option v-for="city in cities" :value="city.id">
                                    {{ city.name }}
                                </option>
                            </select>

                        </div>
                        <div class="row">&nbsp;</div>
                        <div class="field-wrap">
                            <h3 style="font-size: 18px;font-weight:bold;">
                                Attachment
                            </h3>
                            <br>
                             <!--<input type="file" name="file" @change="touploadfile" class="col-sm-12 col-md-4"-->
                            <!--autofocus required autocomplete="off"-->
                            <!--style="color:rgb(0, 186, 255);float:left ;"/>-->
                            <input type="file" name="file1" ref="file1" @change="touploadfile"
                                   class="form-group col-sm-12 col-md-4"
                                   autofocus  autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>

                            <input type="file" name="file2" ref="file2" @change="touploadfile2"
                                   class="form-group col-sm-12 col-md-4"
                                   autofocus  autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>

                            <input type="file" name="file3" ref="file3" @change="touploadfile3"
                                   class="form-group col-sm-12 col-md-4"
                                   autofocus  autocomplete="off"
                                   style="color:rgb(0, 186, 255);"/>

                        </div>
                        <div class="field-wrap">
                            <div class="col-sm-12 col-md-4">
                                <template v-if="status === 'error'">
                                    <template v-if="error.file1 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf1 in error.file1">{{edesf1}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <template v-if="status === 'error'">
                                    <template v-if="error.file2 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf2 in error.file2">{{edesf2}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                            <div class="col-sm-12 col-md-4">
                                <template v-if="status === 'error'">
                                    <template v-if="error.file3 !== undefined">
                                        <span class="label label-danger">
                                         <strong v-for="edesf3 in error.file3">{{edesf3}}</strong>
                                        </span>
                                    </template>
                                </template>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <button type="submit" class="btn btn-primary btn-xs round-xl btn-block form-el-offset-1">
                                {{$lang.messages.default.auth.login}}
                            </button>
                        </div>
                    </form>

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

    export default{
        data(){
            return {
                name: '',
                phone: '',
                address: '',
                description: '',
                status: '',
                cities: [],
                states: [],
                city: '',
                state: '2537',
                quotation_type: '0',
                quotation: '1',
                id: '',
                file1: '',
                file2: '',
                file3: '',
                zu:''

            }
        },
        components: {
            'v-header': Header,
            'v-footer': Footer,

        },
        created(){
            var ss = this;
            axios({
                method: 'get',
                url: 'https://www.hivephing.com/constructback/api/get_states?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.states = _.orderBy(response.data.states, ['mm_name'], ['asc']);
                console.log('states');

            });
            axios({
                method: 'get',
                url: 'https://www.hivephing.com/constructback/api/get_cities/' + 2537 + '?token=' + localStorage.getItem('token'),
            }).then(function (response) {
                ss.cities = _.orderBy(response.data.cities, ['myan_name'], ['asc']);
                ss.city = ss.cities[0].id;
                console.log(ss.cities);
            });
        },
        methods: {
            cl: function () {
                var self = this;
                self.zu = localStorage.getItem('fonts')
                console.log(self.zu)
            },
            touploadfile: function () {
                var self = this;
                self.file1 = this.$refs.file1.files[0];
                console.log(self.file1);
            },
            touploadfile2: function () {
                var self = this;

                self.file2 = this.$refs.file2.files[0];

                console.log(self.file2);

            },
            touploadfile3: function () {
                var self = this;
                self.file3 = this.$refs.file3.files[0];

            },
            get_cities: function (id) {
                const self = this;
                return axios({
                    method: 'get',
                    url: 'https://www.hivephing.com/constructback/api/get_cities/' + id + '?token=' + localStorage.getItem('token'),
                }).then(function (response) {
                    self.cities = _.orderBy(response.data.cities, ['name'], ['asc']);
                    self.city = self.cities[0].id;
                    console.log(ss.cities);
                });
            },
            gotosave: function () {
                const self = this;
                self.status = '';
                var formData = new FormData()
                formData.append('file1', self.file1)
                formData.append('file2', self.file2)
                formData.append('file3', self.file3)
                formData.append('token', localStorage.getItem('token'))
                formData.append('name', self.name)
                formData.append('phone', self.phone)
                formData.append('address', self.address)
                formData.append('description', self.description)
                formData.append('quotation', self.quotation)
                formData.append('city', self.city)
                formData.append('quotation_type', self.quotation_type)
                formData.append('state', self.state)
                formData.append('fr', self.$route.params.fr)
                formData.append('close', 0)
     //                var self = this;
//
//                console.log(self.file1);
//
                //if you send  data as formData you will use axios.post
                return axios.post('http://localhost/userHpbk/api/dashboard/addfr', formData
//                    method: 'post',
//                    url: 'https://www.hivephing.com/constructback/api/dashboard/addfr',
//                    data: {
//////                        name: self.name,
//////                        phone: self.phone,
//////                        address: self.address,
//////                        description: self.description,
//////                        quotation: self.quotation,
//////                        city: self.city,
//////                        quotation_type:self.quotation_type,
//////                        state: self.state,
//                          token: localStorage.getItem('token'),
//////                        fr: self.$route.params.fr,
//////                        file1:reader.readAsDataURL(self.file1),
//////                        file2:self.file2,
//////                        file3:self.file3,
//////                        close:0
//                    }
//            }
                ).then(function (response) {
                    console.log(response)
                    if (response.data.success === 'error') {
                        self.status = 'error';
                        self.error = response.data.error;
                        console.log(self.error);
                    }
                    if (response.data.success === 'true') {
                        window.location = '/all_project';
                    } else {
                        console.log(response.data.success);
                    }
                });
            }

        }
    }
</script>