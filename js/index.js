
var fakeData1 = [5, 20, 10];
var fakeData2 = {
  'value': [1, 3, 5, 6, 7, 12, 20, 21, 18, 17, 10, 5],
  'label': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  'color': ['#45b6b0', '#45b6b0', '#45b6b0', '#45b6b0', '#45b6b0', '#ffa300', '#ff6b6b', '#ff6b6b', '#ffa300', '#ffa300', '#45b6b0', '#45b6b0']
}
var fakeData3 = {
  'value': [1, 3, 5, 6, 7, 12, 20, 21, 18, 17, 10, 5],
  'label': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  'color': ['#45b6b0', '#45b6b0', '#45b6b0', '#45b6b0', '#45b6b0', '#ffa300', '#ff6b6b', '#ff6b6b', '#ffa300', '#ffa300', '#45b6b0', '#45b6b0']
}
var fakeData4 = {
  'value': [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  'label': ['车间1工艺用电', '车间2工艺用电', '车间3工艺用电', '2A区空调制水', '2B区动力', '2B物流库', '2c区空调制水', '车间5工艺用电', '车间6工艺用电', '车间7工艺用电'],
  'color': ['#fdee6f', '#c7e47a', '#86ea87', '#67e5bf', '#7ce6e2', '#7cc1f8', '#7e8bf4', '#d473f8', '#f97cda', '#f679a5']
}

var fakeData5 = {
  'label': ['昨日', '今日'],
  'color': ['#ffa200', '#44b5af'],
  'name': '时间',
  'value': [
    [130, 120, 110, 90, 100, 110, 120, 130, 165, 190, 200, 240, 285, 260, 240, 260, 225, 210, 225, 190, 180, 190, 130, 140],
    [110, 100, 90, 70, 80, 90, 100, 110, 145, 170, 180, 220, 265, 240, 220, 240, 205, 190, 205, 170, 160, 170, 110, 120]
  ],
  'xAxis': ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'],
  'barWidth': '6px'
}

var fakeData6 = {
  'label': ['上月', '本月'],
  'color': ['#ffa200', '#44b5af'],
  'name': '日期',
  'value': [
    [130, 120, 110, 90, 100, 110, 120, 130, 165, 190, 200, 240, 285, 260, 240, 260, 225, 210, 225, 190, 180, 190, 130, 140, 225, 190, 180, 190, 130, 140],
    [110, 100, 90, 70, 80, 90, 100, 110, 145, 170, 180, 220, 265, 240, 220, 240, 205, 190, 205, 170, 160, 170, 110, 120, 205, 170, 160, 170, 110, 120]
  ],
  'xAxis': [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  'barWidth': '6px'
}

var fakeData7 = {
  'label': ['去年', '今年'],
  'color': ['#ffa200', '#44b5af'],
  'name': '月份',
  'value': [
    [130, 120, 110, 90, 100, 110, 120, 130, 165, 190, 200, 240],
    [110, 100, 90, 70, 80, 90, 100, 110, 145, 170, 180, 220]
  ],
  'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  'barWidth': '10px'
}

var fakeData8 = {
  'value': [130, 110],
  'label': ['2016', '2017']
}
var fakeData11 = {
  'label': ['酒店', '办公', '医院', '商场'],
  'color': ['#56cdef', '#5691ef', '#7356f0', '#c756f0'],
  'value': [[1, 2, 3, 3, 2, 1, 2, 1, 3, 1, 2, 3], [4, 5, 6, 6, 5, 4, 5, 4, 5, 6, 6, 4], [8, 9, 10, 8, 9, 10, 8, 9, 9, 10, 8, 8], [12, 15, 16, 13, 18, 14, 15, 12, 13, 10, 12, 15]],
  'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  'barWidth': '20px',
  'stack': '用点电'
}
var fakeData11Option = chartOneData(fakeData11)

var fakeData12 = {
  'label': ['去年', '今年', '同比', '环比'],
  'color': ['#56cdef', '#dfad34', '#c756f0', '#44d12a'],
  'value': [[1, 2, 3, 3, 2, 1], [4, 5, 6, 6, 5, 4], [8, 9, 10, 8, 9, 10], [12, 15, 16, 13, 18, 14]],
  'xAxis': ['1月', '2月', '3月', '4月', '5月', '6月'],
  'barWidth': '20px',
  'stack': '用点电'
}
var fakeData12Option = chartOneData(fakeData12)
function chartOneData(data) {
  var dataOption = []
  for (var i = 0; i < data.value.length; i++) {
    dataOption.push(
      {
        data: data.value[i],
        name: data.label[i],
        barWidth: data.barWidth,
        type: 'bar',
        stack: data.stack,
        itemStyle: {
          normal: {
            color: data.color[i]
          }
        }
      }
    )
  }
  return dataOption
}
function randomData() {
  return Math.round(Math.random() * 1000);
}
function chartData(data) {
  var dataOption = []
  for (var i = 0; i < data.value.length; i++) {
    dataOption.push({
      data: data.value[i],
      name: data.label[i],
      barWidth: data.barWidth,
      type: 'bar',
      itemStyle: {
        normal: {
          color: data.color[i]
        }
      }
    })
  }
  return dataOption
}

function canvas1() {
  var myChart = echarts.init(document.getElementById('canvas1'));
  var option = {
    title: {
      text: '报警概况',
      textStyle: {
        fontSize: 14
      },
      x: 'center',
      y: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} - ({d}%)"
    },
    series: [{
      name: '报警概况',
      type: 'pie',
      radius: ['50%', '75%'],
      data: [{
        value: fakeData1[0],
        name: '已读(' + fakeData1[0] + ')',
        itemStyle: {
          normal: {
            color: '#ffa200'
          }
        }
      }, {
        value: fakeData1[1],
        name: '已确认(' + fakeData1[1] + ')',
        itemStyle: {
          normal: {
            color: '#44b5af'
          }
        }
      }, {
        value: fakeData1[2],
        name: '未读(' + fakeData1[2] + ')',
        itemStyle: {
          normal: {
            color: '#ff6c6c'
          }
        }
      }]
    }]
  };
  myChart.setOption(option);
}

function canvas2() {
  var myChart = echarts.init(document.getElementById('canvas2'));
  var option = {
    title: {
      text: '',
      subtext: '能耗(M)',
      x: '10px',
      subtextStyle: {
        fontSize: 12,
        color: '#666'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' + params[0].seriesName + ': ' + params[0].data.value + '(M)'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      name: '月份',
      type: 'category',
      data: fakeData2.label
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      },
    }],
    series: [{
      name: '月耗能',
      type: 'bar',
      barWidth: '10px',
      data: (function () {
        var dataOption = []
        for (var i = 0; i < fakeData2.value.length; i++) {
          dataOption.push({
            value: fakeData2.value[i],
            itemStyle: {
              normal: {
                color: fakeData2.color ? fakeData2.color[i] : ''
              }
            }
          })
        }
        return dataOption
      }())
    }]
  };
  myChart.setOption(option);
}
function canvas3() {
  var myChart = echarts.init(document.getElementById('canvas3'));
  var option = {
    title: {
      text: '',
      subtext: '能耗(M)',
      x: '10px',
      subtextStyle: {
        fontSize: 14,
        color: '#666'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' + params[0].seriesName + ': ' + params[0].data.value + '(M)'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      name: '月份',
      data: fakeData3.label
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      },
    }],
    series: [{
      name: '月耗能',
      type: 'bar',
      barWidth: '20px',
      data: (function () {
        var dataOption = []
        for (var i = 0; i < fakeData3.value.length; i++) {
          dataOption.push({
            value: fakeData3.value[i],
            itemStyle: {
              normal: {
                color: fakeData3.color ? fakeData3.color[i] : ''
              }
            }
          })
        }
        return dataOption
      }())
    }]
  };
  myChart.setOption(option);
}

function canvas4() {
  var myChart = echarts.init(document.getElementById('canvas4'));
  var option = {
    title: {
      text: '分项占比示意图',
      textStyle: {
        fontSize: 14
      },
      x: 'center',
      y: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      right: '10%',
      top: 'middle',
      padding: [0, 0],
      data: fakeData4.label
    },
    series: [{
      name: '分项占比',
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false,
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: (function () {
        var dataOption = []
        for (var i = 0; i < fakeData4.value.length; i++) {
          dataOption.push({
            value: fakeData4.value[i],
            name: fakeData4.label[i],
            itemStyle: {
              normal: {
                color: fakeData4.color ? fakeData4.color[i] : ''
              }
            }
          })
        }
        return dataOption
      }())
    }]
  };
  myChart.setOption(option);
}

function canvas5(opt) {
  var myChart = echarts.init(document.getElementById(opt.domId));
  var option = {
    title: {
      text: '',
      subtext: '能耗(M)',
      x: '10px',
      subtextStyle: {
        fontSize: 14,
        color: '#666'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' + params[0].seriesName + ': ' + params[0].data + '(M)' + '<br>' + params[1].seriesName + ': ' + params[1].data + '(M)'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      right: '50px',
      top: '20px',
      data: opt.legendData
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      name: opt.xAxisName,
      data: opt.xAxisData
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      },
    }],
    series: opt.seriesData
  };
  myChart.setOption(option);
}

function canvas8() {
  var myChart = echarts.init(document.getElementById('canvas8'));
  var option = {
    title: {
      text: '',
      subtext: '能耗(M)',
      x: '10px',
      subtextStyle: {
        fontSize: 14,
        color: '#666'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' + params[0].seriesName + ': ' + params[0].data + '(M)'
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '8%',
      bottom: '3%',

      containLabel: true
    },
    xAxis: [{
      type: 'category',
      name: '年',
      data: fakeData8.label
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false
      },
    }],
    series: [{
      name: '月耗能',
      type: 'bar',
      barWidth: '30px',
      itemStyle: {
        normal: {
          color: '#ffa300',
        },
        emphasis: {
          color: '#45b6b0'
        }
      },
      data: fakeData8.value
    }]
  };
  myChart.setOption(option);
}
function canvas9() {
  var myChart = echarts.init(document.getElementById('canvas9'));
  var option = {
    tooltip: {
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params.name + '<br>' + params.seriesName + ': ' + params.value + '个'
      },
    },
    series: [{
      name: '项目',
      type: 'map',
      mapType: 'china',
      barWidth: '30px',
      itemStyle: {
        normal: {
          label: { show: false },
          areaColor: '#56cdef'
        },
        emphasis: {
          label: { show: true },
          areaColor: '#628ee7'
        }
      },
      label: {
        normal: {
          show: false,
        },
        emphasis: {
          show: false,
        }
      },
      data: [
        { name: '北京', value: randomData() },
        { name: '天津', value: randomData() },
        { name: '上海', value: randomData() },
        { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() },
        { name: '河南', value: randomData() },
        { name: '云南', value: randomData() },
        { name: '辽宁', value: randomData() },
        { name: '黑龙江', value: randomData() },
        { name: '湖南', value: randomData() },
        { name: '安徽', value: randomData() },
        { name: '山东', value: randomData() },
        { name: '新疆', value: randomData() },
        { name: '江苏', value: randomData() },
        { name: '浙江', value: randomData() },
        { name: '江西', value: randomData() },
        { name: '湖北', value: randomData() },
        { name: '广西', value: randomData() },
        { name: '甘肃', value: randomData() },
        { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() },
        { name: '陕西', value: randomData() },
        { name: '吉林', value: randomData() },
        { name: '福建', value: randomData() },
        { name: '贵州', value: randomData() },
        { name: '广东', value: randomData() },
        { name: '青海', value: randomData() },
        { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() },
        { name: '宁夏', value: randomData() },
        { name: '海南', value: randomData() },
        { name: '台湾', value: randomData() },
        { name: '香港', value: randomData() },
        { name: '澳门', value: randomData() }
      ]
    }]
  };
  myChart.setOption(option);
}

function canvas10() {
  var myChart = echarts.init(document.getElementById('canvas10'));
  var option = {
    title: {
      text: '能耗分布',
      textStyle: {
        fontSize: 16,
        color: '#fff'
      },
      x: 'center',
      y: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [{
      name: '分项占比',
      type: 'pie',
      radius: ['45%', '70%'],
      center: ['50%', '50%'],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: false,
          position: 'center'
        },
        emphasis: {
          show: false,
          textStyle: {
            fontSize: '18',
            fontWeight: 'bold'
          }
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: (function () {
        var dataOption = []
        for (var i = 0; i < fakeData4.value.length; i++) {
          dataOption.push(
            {
              value: fakeData4.value[i],
              name: fakeData4.label[i],
              itemStyle: {
                normal: {
                  color: fakeData4.color ? fakeData4.color[i] : ''
                }
              }
            }
          )
        }
        return dataOption
      }())
    }]
  };
  myChart.setOption(option);
}

function canvas11() {
  var myChart = echarts.init(document.getElementById('canvas11'));
  var option = {
    title: {
      text: '',
      subtext: '单位：(对应单位)',
      x: '10px',
      subtextStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' +
          params[0].seriesName + ': ' + params[0].data + '<br>' +
          params[1].seriesName + ': ' + params[1].data + '<br>' +
          params[2].seriesName + ': ' + params[2].data + '<br>' +
          params[3].seriesName + ': ' + params[3].data
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      right: '30px',
      top: '20px',
      textStyle: {
        color: '#fff'
      },
      padding: [0, 0],
      data: fakeData11.label
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      nameGap: '10px',
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#56cdef'
        }
      },
      data: fakeData11.xAxis
    }],
    yAxis: [{
      type: 'value',
      splitLine: {
        show: false,
        lineStyle: {
          color: '#56cdef'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#56cdef'
        }
      },
    }],
    series: fakeData11Option
  };
  myChart.setOption(option);
}

function canvas12() {
  var myChart = echarts.init(document.getElementById('canvas12'));
  var option = {
    title: {
      text: '',
      subtext: '单位：(对应单位)',
      x: '10px',
      subtextStyle: {
        fontSize: 14,
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'axis',
      padding: [10, 13, 10, 13],
      formatter: function (params) {
        return params[0].axisValueLabel + '<br>' +
          params[0].seriesName + ': ' + params[0].data + '<br>' +
          params[1].seriesName + ': ' + params[1].data + '<br>' +
          params[2].seriesName + ': ' + params[2].data + '<br>' +
          params[3].seriesName + ': ' + params[3].data
      },
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      right: '30px',
      top: '20px',
      padding: [0, 0],
      textStyle: {
        color: '#fff'
      },
      data: fakeData12.label
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    dataZoom: {
      show: false,
      start: 0,
      end: 100
    },
    xAxis: [{
      type: 'category',
      nameGap: '10px',
      nameTextStyle: {
        color: '#fff'
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#56cdef'
        }
      },
      data: fakeData12.xAxis
    }, {
      //隐藏第二条x轴
      show: false,
      type: 'category',
      nameGap: '10px',
      data: fakeData12.xAxis
    }],
    yAxis: [{
      type: 'value',
      max: 30,
      min: 0,
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#56cdef'
        }
      },
    }, {
      type: 'value',
      max: 1200,
      min: 0,
      splitLine: {
        lineStyle: {
          color: '#294962'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#56cdef'
        }
      },
    }],
    series: [
      {
        name: fakeData12.label[0],
        type: 'bar',
        barGap: 0,
        xAxisIndex: 1,
        yAxisIndex: 1,
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: fakeData12.color[0]
          }
        },
        data: (function () {
          var res = [];
          var len = 6;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: fakeData12.label[1],
        type: 'bar',
        barGap: 0,
        xAxisIndex: 1,
        yAxisIndex: 1,
        barWidth: '20px',
        itemStyle: {
          normal: {
            color: fakeData12.color[1]
          }
        },
        data: (function () {
          var res = [];
          var len = 6;
          while (len--) {
            res.push(Math.round(Math.random() * 1000));
          }
          return res;
        })()
      },
      {
        name: fakeData12.label[2],
        type: 'line',
        itemStyle: {
          normal: {
            color: fakeData12.color[2]
          }
        },
        data: (function () {
          var res = [];
          var len = 0;
          while (len < 6) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      },
      {
        name: fakeData12.label[3],
        type: 'line',
        itemStyle: {
          normal: {
            color: fakeData12.color[3]
          }
        },
        data: (function () {
          var res = [];
          var len = 0;
          while (len < 6) {
            res.push((Math.random() * 10 + 5).toFixed(1) - 0);
            len++;
          }
          return res;
        })()
      }
    ]
  };
  myChart.setOption(option);
}

function rateCanvas(opt) {
  var myChart = echarts.init(document.getElementById(opt.domId));
  var option = {
    title: {
      text: opt.val + '%',
      textStyle: {
        fontSize: 10,
        fontWeight: 'normal'
      },
      x: 'center',
      y: 'center'
    },
    toolbox: {
      show: false
    },
    series: [
      {
        silent: true,
        type: 'pie',
        center: ['50%', '50%'],
        radius: ['45%', '70%'],
        itemGap: 10,
        x: 'center',
        y: 'center',
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
          }
        },
        labelLine: {
          show: false
        },
        data: [
          {
            name: opt.val + '%', value: opt.val, itemStyle: {
              normal: {
                color: opt.color,
              },
            }
          },
          {
            name: '', value: (100 - opt.val), itemStyle: {
              normal: {
                color: '#d7d7d7',
              }
            }
          }
        ]
      }
    ]
  };
  myChart.setOption(option);
}


canvas1()
canvas2()
canvas3()
canvas4()
canvas5({
  domId: 'canvas5',
  legendData: fakeData5.label,
  xAxisData: fakeData5.xAxis,
  xAxisName: fakeData5.name,
  seriesData: chartData(fakeData5)
})
canvas5({
  domId: 'canvas6',
  legendData: fakeData6.label,
  xAxisData: fakeData6.xAxis,
  xAxisName: fakeData6.name,
  seriesData: chartData(fakeData6)
})
canvas5({
  domId: 'canvas7',
  legendData: fakeData7.label,
  xAxisData: fakeData7.xAxis,
  xAxisName: fakeData7.name,
  seriesData: chartData(fakeData7)
})
canvas8()
canvas9()
canvas10()
canvas11()
canvas12()
rateCanvas({
  domId: 'rateCanvas1',
  val: '82',
  color: '#ff6b6b'
})
rateCanvas({
  domId: 'rateCanvas2',
  val: '82',
  color: '#ffa200'
})
rateCanvas({
  domId: 'rateCanvas3',
  val: '22',
  color: '#65c3df'
})