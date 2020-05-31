import Vue from 'vue'
import App from './App'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
Vue.component('chart', ECharts)

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
