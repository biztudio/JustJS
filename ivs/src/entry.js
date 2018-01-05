/*jshint esversion: 6 */
import Vue from "vue";
import MuseUI from 'muse-ui';
import './ivs.css';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-light.css';
import appbar from './components/appbar/appbar.vue';
import googlegauge from './components/googlegauge/gauge.vue';

Vue.use(MuseUI);
Vue.component('appbar', appbar);
Vue.component('googlegauge', googlegauge);

window.vmi = new Vue({
    el: "#ivsapp"   
});