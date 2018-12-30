const $ = require('jquery');
const Echarts = require('echarts');
console.log(Echarts)
console.log(document)

function getOption(data) {
    return {
        title: {},
        tooltip: {
            trigger: 'item',
            formatter:function(params){
                if(params.componentIndex !==1){
                    return params.name
                }
            }
        },
        legend: {
            show: false,
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 20,
            bottom: 20,
            // selected: data.selected
        },
        series: [
            {
                name: '姓名',
                type: 'pie',
                hoverAnimation: false,
                cursor: 'mouse',
                radius: '55%',
                center: ['40%', '50%'],
                data: data,
                itemStyle: {
                    normal: {
                        color: function (params) {
                            var colorList = [
                                '#21a085', '#28a6cf', '#2971ac', '#E87C25', '#27727B',
                                '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                                '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0',
                            ];
                            return colorList[params.dataIndex]
                        }
                    },
                    emphasis: {
                        // shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                },
                label: {
                    cursor: 'mouse',
                    align: 'right',
                    color: '#4bb9bf',
                    padding: [0, 0, 20, 0],
                    formatter: function (params) {
                        return params.data.name
                    },
                    fontWeight: 500,
                    fontSize: 15

                },
                labelLine: {
                    lineStyle: {
                        color: '#4bb9bf'
                    },
                    length2: 30,
                    length: 30,
                },
                z: 10
            },
            {
                name: '',
                hoverAnimation: false,
                legendHoverLink: false,
                axisPointer: false,
                cursor: 'mouse',
                type: 'pie',
                center: ['40%', '50%'],
                radius: ['60%', '66%'],
                data: [1],
                itemStyle: {
                    normal: {
                        shadowBlur: 15,
                        shadowColor: '#106374',
                        color: '#106374'
                    },
                    emphasis: {
                        show: false,
                        shadowBlur: 0,
                        shadowColor: '#fff',
                    }
                },
                label: {
                    formatter: 'dd',
                    show: false
                },
                labelLine: {
                    show: false
                },
                z: 5
            }
        ]
    };
}

let initPiechart = function (data) {
    let piechartChart = Echarts.init(document.getElementById('piechart'));
    piechartChart.setOption(getOption(data));
};
let data = [{value: 10, name: '纵向变更'}, {value: 10, name: '横向变更'}, {value: 10, name: '防火墙变更'}];

window.InitPiechart = initPiechart;
window.InitPiechart(data);
