<template>
<div style="width: 420px; height: 420px;">
  <div :id="gauge_id" ></div>
  <div>{{gauge_title}}</div>
</div>  
</template>
<script>
/*jshint esversion: 6 */
export default{
    props:['gauge_id', 'gauge_title', 'gauge_unit'],
    data(){
        return{
            currentValue:68
        }
    },
    created:function(){
        google.charts.load('current', {'packages':['gauge']});
        google.charts.setOnLoadCallback(drawChart);
        let self = this;
        function drawChart(){
            let data = google.visualization.arrayToDataTable([
                ['Label', 'Value'],
                [self.gauge_unit, self.currentValue]
            ]);

            let options = {
                width: 200, height: 200,
                redFrom: 90, redTo: 100,
                yellowFrom:75, yellowTo: 90,
                greenFrom:10, greenTo:75,
                minorTicks: 5
                //max:17000
            };
            let chart = new google.visualization.Gauge(document.getElementById(self.gauge_id));
            chart.draw(data, options);

            setInterval(function() {
            data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
            chart.draw(data, options);
            }, 13000);
        }
    },
}
</script>
