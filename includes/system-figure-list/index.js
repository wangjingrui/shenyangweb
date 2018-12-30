const $ = require('jquery');
const Echarts = require('echarts');
// 基于准备好的dom，初始化echarts实例

// 指定图表的配置项和数据

function getOption(data,count=0,interval=0) {
    return {
        title: {},
        // barWidth: 20,
        dataset: {
            source: data
        },
        // animationDurationUpdate: 500,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['纵向建设数量', '隔离建设数量'],
            textStyle: {
                color: "#fff"
            },
            left: 'right'
        },
        dataZoom: [
            {
                show:false,
                type: 'slider',
                yAxisIndex: 0,
                zoomLock: true,
                width: 10,
                right: 10,
                top: 70,
                bottom: 20,
                start: count,
                end: interval+count,
                handleSize: 10,
                showDetail: false,
            },
        ],
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            position: 'top',
            splitLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#353e48'
                }
            },
            axisLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#0e2648'
                },
            },
            axisTick: {
                show: false
            },
            axisLabel: {},
            max: 640000
        },
        yAxis: {
            type: 'category',
            axisLine: {
                lineStyle: {
                    type: 'dashed',
                    color: '#0e2648'
                }
            },
            axisTick: {
                show: false
            },

        },
        series: [
            {
                name: '纵向建设数量',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#1181F1'
                    },
                },
                color: '#1181F1',
                itemStyle: {
                    barBorderRadius: [10, 10, 10, 10],
                },
                // animation:false,
                animationDuration:0,
            },
            {
                name: '隔离建设数量',
                type: 'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#1bdaca'
                    }
                },
                color: '#1bdaca',
                itemStyle: {
                    barBorderRadius: [10, 10, 10, 10],
                },
                // animation:false,
                animationDuration:0,
            },
        ],
        textStyle: {
            color: '#fff'
        }
    };
}

// 使用刚指定的配置项和数据显示图表。
let data1 = [
    [''],
    ['北京', 18203, 19325],
    ['重庆', 23438, 23489],
    ['广州', 29024, 31000],
    ['深圳', 104970, 121594],
    ['天津', 134141, 134141],
    ['沈阳', 630230, 681807],
    ['北京1', 18203, 19325],
    ['重庆1', 23438, 23489],
    ['广州1', 29024, 31000],
    ['深圳1', 104970, 121594],
    ['天津1', 134141, 134141],
    ['沈阳1', 111111, 111111],
    ['重庆2', 23438, 23489],
    ['广州2', 29024, 31000],
    ['深圳21', 104970, 121594],
    ['天津2', 134141, 134141],
    ['沈阳2', 111111, 111111],
    ['广州3', 29024, 31000],
    ['深圳3', 104970, 121594],
    ['天津3', 134141, 134141],
    ['沈阳3', 111111, 111111],
    ['重庆3', 23438, 23489],
    ['广州3', 29024, 31000],
    ['深圳31', 104970, 121594],
    ['天津3', 134141, 134141],
    ['沈阳3', 111111, 111111],
];

let setOption = function (data = [], ms, count,interval) {
    let myChart = Echarts.init(document.getElementById('figure-list'));
    console.log(data)
    let index = 0;
    let length = data.length;
    myChart.setOption(getOption(data,0,interval));
    setInterval(function(){
        if(index+interval>100){
            index = 0
            myChart.setOption(getOption(data,index,interval));
        }
        else {
            myChart.setOption(getOption(data,index+=count,interval));
        }
    },ms)
};

window.InitFigureList = setOption;


window.InitFigureList(data1,2000,5,40)
