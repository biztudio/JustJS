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
                text: 'PoE Consumption'
            },
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                
                feature: {
                    restore: {},
                    saveAsImage: {}
                }
                /**/
            },
            series: [
                {
                    name: 'PoE Consumption',
                    //splitNumber:10,//仪表盘刻度的分割段数。
                    radius: '70%',//仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
                    axisLine: {//仪表盘轴线相关配置。
                        lineStyle: {
                            color: [[0.49, 'green'],[0.79, 'orange'],[1, 'red']],
                            width: 5,
                            shadowColor: '#fff',
                            shadowBlur: 5
                        }
                    },   
                    type: 'gauge',
                    detail: {formatter:'{value}%'},
                    data: [{value: 32, name: '%'}]
                }
            ]
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

/*
Echarts主要的内容在于配置option. 

所有数据的更新都通过 setOption实现，你只需要定时获取数据，setOption 填入数据，而不用考虑数据到底产生了那些变化，ECharts 会找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
*/
</script>
<style>
.echart_container{
    display: block;
    width: 400px;
    height: 400px;
}
</style>
