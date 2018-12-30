const $ = require('jquery');
const echarts = require('echarts');

$(function(){
	var tunnelData = [];
	var strategyData = [];
	var xData = [];
	var dataList = dataList1;	
	
	option00 = {
    title : {
        text: '',
        textStyle : {
			fontSize : 18,
			fontWeight : 'bolder',
			color : 'white'
		}
    },
    tooltip : {
        trigger: 'axis',
        formatter : function(params) {
			return params[0].name + '<br/>' + params[0].seriesName + ' : '
				+ params[0].value + '<br/>' +  params[1].seriesName + ' : '
				+ params[1].value ;
		}
    },
    legend: {
    	x : 'right',
		y : 'top',
		
        data:[
            '待解决','',
            '已解决'
        ],
        textStyle : {
			fontSize : 15,
			fontWeight : 'bolder',
			color : 'white',
			padding:[0,40,0,0]
		}
    },
    calculable : true,
    grid: {y: 0, y2:25, x2:0,x:0},
    xAxis : [
        {
            type : 'category',
            axisLabel: {
                show: true,
                textStyle: {
                	fontSize : 15,
                    color: '#FFFFFF' ,
                }
            },
            data : xData
        },
        {
            type : 'category',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false},
            data : xData
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:true},
            splitArea: {show:false},
            splitLine: {show:false},
            axisLabel:{formatter:'',textStyle: {color: 'white' }},
            scale:true
        }
    ],
    series : [
        
        {
            name:'已解决',
            type:'bar',
            itemStyle: {normal: {color:'rgba(90,218,159,1)'}},
            data:tunnelData
        },
        
        {
            name:'待解决',
            type:'bar',
            xAxisIndex:1,
            itemStyle: {normal: {color:'rgba(90,218,159,0.5)', label:{show:true,position: 'top',textStyle:{color:'white',fontSize : 15}}}},
            data:strategyData
        }
    ]
};

var myChart01 = echarts.init(document.getElementById('border-analyse_alarm'));
function  setOptionData(data) {
		for (i=0;i<data.tunnelData.length;i++) {
			xData.push(data.tunnelData[i][0]);
		};
		for (i=0;i<data.tunnelData.length;i++) {
			tunnelData.push(data.tunnelData[i][1]);
		};
		for (i=0;i<data.tunnelData.length;i++) {
			strategyData.push(data.tunnelData[i][2]);
		};	
		console.log(strategyData);
		myChart01.setOption(option00);
	}	
	setOptionData(dataList); 
//myChart01.setOption(option00);
})