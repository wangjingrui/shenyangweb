const $ = require('jquery');
const echarts = require('echarts');

$(function(){
	
	var div_s = $(".alarmAudit_top");
	var myChart = echarts.init(div_s[0]);
	
var	option = {
    title: {
      show:false,
    },
    tooltip: {
        trigger: 'none',
    },
    grid: {
    	top:'4%',
        left: '20%',
        right: '2%',
        bottom:'4%'
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
        axisLine : {
			show : false,
		},
		axisLabel: {
            show:false,
		},
		axisTick: {
                show: false
            },
        
    },
    yAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        axisLine : {
			show : false,
		},
		axisTick: {
                show: false
            },
        axisLabel: {
            textStyle : {
			color :'white',
			fontSize:'16'
			},
			formatter: '{value}'
		},
        data: ['']
    },
    series: [
            {
        type: 'bar',
        stack: 'chart',
        z: 10,
        barWidth: '30%',
        label: {
            normal: {
            	color:'rgb(131,206,248)',
                position: 'right',
                show: true,
            }
        },
        itemStyle: {
        		color:'rgb(18,130,240)',
                barBorderRadius: [25,25,25,25],
            },
        data: ['']
        },
        {
        type: 'bar',
        barGap: '-100%',
        barWidth: '30%',
        itemStyle: {
        		color:'rgb(4,27,43)',
                barBorderRadius: [25,25,25,25],
            },
        data: [50000,50000,50000,50000,50000]
    }
    ]
};
var dataList = {"告警类型1":78203,"告警类型2":63489,"告警类型3":59034,"告警类型4":54970,"告警类型5":41744};

function setOptionData(data){
	var ydata = [],xdata = [],shadowData=[];
	$.each(data,function(i,n){
		ydata.push(i);
		xdata.push(n);
	});
	var shadowNum = upwardRound(Math.max.apply(null,xdata));
	for(i=0;i<5;i++){
		shadowData.push(shadowNum);
	}
	option.yAxis.data=ydata.reverse();
	option.series[0].data = xdata.reverse();
	option.series[1].data = shadowData;
	myChart.setOption(option);	
}
function upwardRound(num){
	var n = 10;
	while(num >= 10){
		num = num/10;
		n = n*10;
	}
	return n;
}
setOptionData(dataList);

	
})
