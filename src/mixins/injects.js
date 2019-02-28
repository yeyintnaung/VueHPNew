//this is global mixins

import Vue from 'vue';

const injects = Vue.mixin({
    methods: {
        go:function(name,data){
            this.$router.push({name:name,params:{pid:data}})
        },
//to sert external js file
        crnode: function (data) {
            let recaptchaScript = document.createElement('script')
            recaptchaScript.setAttribute('src', '/static/js/' + data)
            recaptchaScript.setAttribute('type', 'application/javascript')
            document.getElementById('as').appendChild(recaptchaScript)
        },
    },

    created(){
        this.crnode('bootstrap.min.js');
        this.crnode('jquery.search.min.js');
        this.crnode('jquery.countTo.js');
        this.crnode('jquery.owl-carousel.js');
        this.crnode('progressbar.min.js');
        this.crnode('jquery.swiper.min.js');
        this.crnode('jquery.rd-navbar.min.js');
        this.crnode('jquery.ui.totop.min.js');
        this.crnode('jquery.rd-parallax.min.js');
        this.crnode('script.js');
        this.crnode('core.min.js');
        var self = this;
        self.$lang.setLang('mm')

    }
});
export default injects;