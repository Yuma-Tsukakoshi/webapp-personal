'use strict';

var options = {
  series: [{
  data: [2,4,7,8,5,9,5,7,8,7,3,5,6,7,8,9,0,4,6,8,9,3,5,1,3,4,5,6,7,4,5]
}],
  chart: {
  type: 'bar',
  height: 350
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'],
},
fill: {
  opacity: 1,
},
tooltip: {
  y: {
    formatter: function (val) {
      return  val + "hour"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#bar"), options);
chart.render();

