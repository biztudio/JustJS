<template>
<div style="width: 400px;height:400px;">
  <ve-gauge :data="chartData" background-color="#303030" :option="option" :settings="chartSettings"></ve-gauge>
  <span style="color:white">PoE Gauge</span>
</div>
</template>

<script>

export default {
  created: function () {
      this.chartData = {
        
        columns: ['type', 'value'],
        rows: [
          //{ type: 'PoE Comsumption', value: 60 },//can be dynamic data array()
          { type: 'PoE Comsumption', value: 85 }
        ]
      }

      this.chartSettings = {
        dataName: {
          'PoE Comsumption': '%'
        },
        
        seriesMap: {
          'PoE Comsumption': {
            min:0,
            max:100,
            splitNumber:10,//仪表盘刻度的分割段数。
            radius: '50%',//仪表盘半径，可以是相对于容器高宽中较小的一项的一半的百分比，也可以是绝对的数值。
            axisLine: {//仪表盘轴线相关配置。
              lineStyle: {
                color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
                width: 3,
                shadowColor: '#fff',
                shadowBlur: 5
              }
            },           
            axisLabel: {//刻度标签
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 5
              }
            },
            axisTick: {//刻度样式
              length:15,
              lineStyle: {
                color: 'auto',
                shadowColor: '#fff',
                shadowBlur: 5
              }
            },
            splitLine: {//分隔线样式。
              length:25,
              lineStyle: {
                width:3,
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 5
              }
            },
            pointer: {//仪表盘指针
              shadowColor: '#fff',
              shadowBlur: 5
            },
            title: {
              textStyle: {
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor: '#fff',
                shadowBlur: 5
              }
            },
            detail: {
              backgroundColor: 'rgba(30,144,255,0.8)',
              borderWidth: 1,
              borderColor: '#fff',
              shadowColor: '#fff',
              shadowBlur: 5,
              offsetCenter: [0, '50%'],
              textStyle: {
                fontWeight: 'bolder',
                color: '#fff'
              }
            }
          }
        }
      }
    }
}
</script>