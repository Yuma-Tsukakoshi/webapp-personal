'use strict';

var options = {
  series: [{
    name: 'hour',
    data: [2,4,7,8,5,9,5,7,8,7,3,5,6,7,8,9,0,4,6,8,9,3,5,1,3,4,5,6,7,4,5]
  }
  ],
  chart: {
    type: 'bar',
    height: 420,
    toolbar:{
      show:false //toolbar = の非表示
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '50%',
      borderRadius: 5, //グラフの先端
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  // stroke: {
  //   show: true,
  //   width: 2,
  //   colors: ['transparent']
  // },
  xaxis: {
    axisTicks: {
      show:false //x軸の値区切り.-.
    },
    axisBorder:{
      show:false
    },

    labels: {
      formatter: function (value) {
        if (value !== undefined) {
          const categories = value.split(" ")
          const day = categories[0]
          return day % 2 == 1 ? "" : value;
        }
      },
      style: {
        colors:'#F51109'
      },
    },
  },

  grid: {
    yaxis: { 
        lines: {
            show: false
        },
    }, 
  },

  yaxis: {
    labels: {
      formatter: function (value) {
        return value + "h";
      },
      style: {
        colors: '#F51109',
      }
    },
    type:'category',
    axisTicks: {
      show: false,
      width: 1,
    }
  },

  labels: ['1','2','3','4','5','6','7','8','9','10','11','12',  '13','14','15','16','17','18','19','20','21','22','23','24',  '25','26','27','28','29','30','31'],  

  fill: {
    colors:["#9073CE"],
    type: 'gradient', 
    gradient: {
    type: 'vertical', // 上垂直にグラデーション 
    gradientToColors: ['#F51109'], 
    }
  },
  
  // tooltip: {
  //   y: {
  //     formatter: function (val) {
  //       return  val + "hour"
  //     }
  //   }
  // },
  
  responsive: [
    {
    breakpoint: 480,
    options: {
        xaxis: {
            labels: {
                offsetY: -7,
                style: {
                    fontSize: '7.5px',
                }
            }
        },
        chart: {
            height: 200,
        }
    },
    }
  ]
};

var chart = new ApexCharts(document.querySelector("#bar"), options);
chart.render();

