<template>
  <div class="echart_bar_container" :id='container_id'>
    <div :id='id' :style="{width:'600px', height:'600px'}"></div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            chart:{},
            chartOptions:{
                title: {
                        text: 'Rack Capacity by Room'
                    },
                color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['Room 01', 'Room 02', 'Room 03', 'Room 04', 'Room 05', 'Room 06', 'Room 07'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'Rack Capacity',
                            type:'bar',
                            barWidth: '60%',
                            data:[10, 52, 200, 334, 390, 330, 220]
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

    mounted(){
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
.echart_bar_container{
    display: block;
    width: 600px;
    height: 600px;
}    
</style>

