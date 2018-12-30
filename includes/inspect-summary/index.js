const $ = require('jquery');
const echarts = require('echarts');

$(function(){
	var myChart = echarts.init($(".marginal_graph")[0]);

var tunnelData = {"12-21":5000,"12-22":14000,"12-23":6000,"12-24":13500,"12-25":12000,"12-26":13600,"12-27":10000};
var strategyData = {"12-21":8000,"12-22":16000,"12-23":9000,"12-24":19000,"12-25":13800,"12-26":15200,"12-27":11600};

var option = {
    title: {
        show:false,
    },
    legend: {
        top: '0%',
        right:'2.5%',
        data:['问题隧道数',"问题策略数"],
        textStyle:{
        	color:'white',
        	fontSize:'16'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line',
            lineStyle:{
            	type:'dashed',
            	color:'gray',
            }
        },
    },
    xAxis: [{
        type: 'category',
        splitNumber : 6,
        boundaryGap : false,
        position:'bottom',
        splitLine: {
            show: true,
            lineStyle:{
        	type:'dashed',
			color :'rgb(36,73,102)'
        },
        },
        axisLine : {
			show : true,
			lineStyle : {
			type:'dashed',
			color :'rgb(36,73,102)'
		},
		},
		axisLabel : {
			show : true,
			textStyle : {
			color :'white',
			fontSize:'16'
		},
		}
    },{
        type: 'category',
        splitNumber : 6,
        position:'bottom',
        offset: 20,
        boundaryGap : false,
        splitLine: {
            show: false,
        },

        axisLine : {
			show : false,
		},

		axisLabel : {
			show : true,
			textStyle : {
			color :'rgb(26,183,152)',
			fontSize:'16'
		},
		},
		data:['0','0','0','0','0','0','0']
    },{
        type: 'category',
        splitNumber : 6,
        position:'bottom',
        offset: 40,
        boundaryGap : false,
        splitLine: {
            show: false,
        },
        axisLine : {
			show : false,
		},

		axisLabel : {
			show : true,
			textStyle : {
			color :'rgb(18,130,242)',
			fontSize:'16'
		},
		},
		data:['0','0','0','0','0','0','0']
    }
    ],
    yAxis: [{
        type: 'value',
        splitNumber : 4,
        axisTick: {
            inside: true
        },
        splitLine: {
            show: true,
            lineStyle:{
        	type:'dashed',
			color :'rgb(36,73,102)'
        },
        },
        axisLine : {
			show : true,
			lineStyle : {
			type:'dashed',
			color :'rgb(36,73,102)'
		},
		},
        axisLabel: {
            textStyle : {
			color :'white',
			fontSize:'16'
		},
            formatter: '{value}\n'
        },

    },
    {
        type: 'value',
        splitNumber : 4,
        axisTick: {
            inside: true
        },
        splitLine: {
            show: true,
            lineStyle:{
        	type:'dashed',
			color :'rgb(36,73,102)'
        },
        },
        axisLine : {
			show : true,
			lineStyle : {
			type:'dashed',
			color :'rgb(36,73,102)'
		},
		},
        axisLabel: {
            textStyle : {
			color :'white',
			fontSize:'16'
		},
            formatter: '{value}\n'
        },
    }],
    grid: {
        top: '8%',
        left: '6%',
        right: '3%',
        bottom:'15%'
    },
    series: [
        {
            name:'问题隧道数',
            type:'line',
            smooth: true,
            symbol: 'rect',
            symbolSize: 1,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(26,183,152)'
                }
            },
            areaStyle: {
                normal: {
					color : 'rgba(27,188,158,0.35)',
                }
            },
            data: ['']
        },
        {
            name:'问题策略数',
            type:'line',
            smooth:true,
            symbol: 'rect',
            symbolSize: 1,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(18,130,242)'
                }
            },
            areaStyle: {
                normal: {
                    color : 'rgba(23,138,255,0.27)',
                }
            },
            data: ['']
        }

    ]
};

function  setOptionTunnelsData(data) {
	var xdata0 = [],ydata0 = [];
	$.each(data, function(i,e) {
		xdata0.push(i);
		ydata0.push(e);
		option.xAxis[0].data = xdata0;
		option.xAxis[1].data = ydata0;
		option.series[0].data = ydata0;
	});
	myChart.setOption(option);
}

function  setOptionStrategyData(data) {
	var xdata1 = [],ydata1 = [];
	$.each(data, function(i,e) {
		xdata1.push(i);
		ydata1.push(e);
		option.xAxis[2].data = ydata1;
		option.series[1].data = ydata1;
	});
	myChart.setOption(option);
}

setOptionTunnelsData(tunnelData);
setOptionStrategyData(strategyData);

})
