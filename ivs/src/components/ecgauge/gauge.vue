<template>
<div class="echart_container" :id='container_id'>
    <div :id='id' :style="{width:'400px', height:'400px'}"></div>
</div>
</template>
<script>
export default {
  data(){
      return{
          chart:{},
          chartOptions:{
            title: {
                text: 'ECharts Demo'
            },
            tooltip: {},
            legend: {//
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
          }
      }
  },

  computed:{
      container_id:function(){
          return this.id + '_chart_contaier'
      }
  },

  props:['id'],

  created:function(){
      //this.drawChart();
      console.log('This is created method.')
  },

  mounted(){
      console.log('This is mounted method.')
      this.drawChart();
  },

  methods:{
      drawChart:function(){
          let chartDiv = document.getElementById(this.id)
          this.resizeCharts(chartDiv)
          this.chart = this.$echarts.init(chartDiv)
          this.chart.setOption(this.chartOptions)
      },

      resizeCharts: function(chartDiv) {
        let chartBox = document.getElementById(this.container_id)
        chartDiv.style.width = chartBox.style.width + 'px'
        chartDiv.style.height = chartBox.style.height + 'px'
      }
  }
}
</script>
<style>
.echart_container{
    display: block;
    width: 400px;
    height: 400px;
}
</style>
