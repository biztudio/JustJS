/*jshint esversion: 6 */
import Vue from "vue";
import MuseUI from 'muse-ui';
import VCharts from 'v-charts';
import echarts from 'echarts';
import './ivs.css';
import 'muse-ui/dist/muse-ui.css';
import 'muse-ui/dist/theme-light.css';

import appbar from './components/appbar/appbar.vue';
import googlegauge from './components/googlegauge/gauge.vue';
import blackgauge from './components/vcgauge/blackgauge.vue';
import ecgauge from './components/ecgauge/gauge.vue';

Vue.prototype.$echarts = echarts; 

Vue.use(MuseUI);
Vue.use(VCharts);

Vue.component('appbar', appbar);
Vue.component('googlegauge', googlegauge);
Vue.component('blackgauge', blackgauge);
Vue.component('ecgauge', ecgauge);

window.vmi = new Vue({
    el: "#ivsapp"   
});