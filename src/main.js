import Vue from 'vue'
import App from './App'
import router from './router'
import Lang from './lang'
import Vuepaginate from 'vue-paginate'
import VueLodash from 'vue-lodash'
import change_lang from './mixins/change_lang.js'


Vue.use(Vuepaginate);
Vue.use(VueLodash);

Vue.mixin(change_lang)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,

    lang: Lang,
    render: h => h(App)
})



