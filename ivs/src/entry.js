/*jshint esversion: 6 */
import Vue from "vue";
import MuseUI from 'muse-ui';
import './ivs.css';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-dark.css'
import appbar from './components/appbar/appbar.vue';

Vue.use(MuseUI);
Vue.component('appbar', appbar);

window.vmi = new Vue({
    el: "#ivsapp"   
});