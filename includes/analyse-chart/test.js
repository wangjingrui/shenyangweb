const $ = require('jquery');
const echarts = require('echarts');

$(function(){
	var tunnelData = [];
	var strategyData = [];
	var xData = [];
	var one = '';
	var two = '2018-12-23';
	var three = '';
	var four = '';
	var five = '';
	var six = '';
	var seven = '';
	var dataList = dataList2;

doubleOption = {

			title : {
				text : '',
//				offsetCenter : [ 0, '65%' ],
				x : 'left',
				y : 'top',
//				padding: [10,0,0,50],
				textStyle : {
					fontSize : 18,
					fontWeight : 'bolder',
					color : '#FFFFFF'
				}
			},
			tooltip : {
				trigger : 'axis',
				formatter : function(params) {
					return params[0].name + '<br/>' + params[0].seriesName + ' : '
							+ params[0].value + '<br/>' +  params[1].seriesName + ' : '
							+ params[1].value ;
				}
			},
			calculable : false,
			legend : {
				x : 'right',
				y : 'top',
				data : [ '紧急告警曲线','重要告警曲线'],
				itemWidth : 20,
//				padding: 35,
				textStyle : {
					color : '#FFFFFF',
					fontSize : 15,
				}
			},
			
			xAxis : [ {
				type : 'category',
				boundaryGap : true,
				data : xData,
				axisLine: {show:false},
				splitLine :{
					show: false,
					lineStyle:{
						color : '#4491CD',
						type:'dashed'
					}
				},
				axisTick: {
                	show:false,
//              	length:50,
                	lineStyle:{
						color : '#4491CD',
						type:'dashed'
					}
                },			
				axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'white' ,
                        fontSize : 15
                    }
               }
			}
//			,{
//				type : 'category',
//				boundaryGap : false,
//				data : ['','','','','',''],
//				axisLine: {show:false},
//				splitLine :{
//					show: true,
//					lineStyle:{
////						onZero: false,
//						color : '#4491CD',
//						type:'dashed'
//					}
//				},
//				axisTick: {
//              	show:false,
////              	interval: '#4491CD',
//              	length:50,
//              	lineStyle:{
//						color : '#4491CD',
//						type:'dashed'
//					}
//              },			
//				axisLabel: {
//                  show: true,
////                  margin: 58,
//                  textStyle: {
//                      color: 'white' ,
//                      fontSize : 15
//                  }
//             }
//			}
			],
				

			yAxis : [ {
				connectNulls: true,
				type : 'value',
//				splitNumber: 5,
//				max:100,
				min:0,
				axisLabel : {
					formatter : '{value}',
//					margin: 58,
					textStyle: {
                        color: 'white',
                        fontSize : 15
                    }
				},
				axisLine: {
					show:false,
					lineStyle:{
						color : '#4491CD',
						type:'dashed'
					}
				},
                axisTick: {
                	show:true,
//              	length:50,
                	lineStyle:{
						color : '#4491CD',
						type:'dashed'
					}
                },
				splitLine :{
					show:true,
					lineStyle:{
						color : '#4491CD',
						type:'dashed'
					}
				},
//				scale:true
//			} 
//			,{
//				connectNulls: true,
//				type : 'value',
//				splitNumber: 5,
//				max:100,
//				min:0,
//				splitLine :{
//					show:false
//				},
//				axisLabel : {
//					show:false
//				},axisLine: {
//					show:true,
//					lineStyle:{
//						color : '#4491CD',
//						type:'dashed'
//					}
//				},
//              axisTick: {
//              	show:true,
//              	length:50,
//              	lineStyle:{
//						color : '#4491CD',
//						type:'dashed'
//					}
//              },
                scale:true
			} ],
			grid : {
				x : 20,
				y : 35,				
				x2 : 10,
				y2 : 0,
				containLabel: true,
				borderWidth : 1,
				borderColor: 'auto',
//				width:"auto", 
//				height:"100%"
			},
			series : [ {
				connectNulls: true,
				symbol: 'circle',
//				yAxisIndex: 0,
				name : '紧急告警曲线',
				type : 'line',
				color : 'red',
				markLine: {
				symbol:'none',//去掉箭头
//				silent: true,
//				animation: true,
                itemStyle: {
                    normal: { lineStyle: { type: 'dashed', color:'#4491CD' },label: { show: false, position:'left' } }
                },
                data: [
                	{name: '',xAxis: '2018-12-21'},
					{name: '',xAxis: '2018-12-22'},
					{name: '',xAxis: '2018-12-23'},
					{name: '',xAxis: '2018-12-24'},
					{name: '',xAxis: '2018-12-25'},
					{name: '',xAxis: '2018-12-26'},
					{name: '',xAxis: '2018-12-27'},
                ]
            },
				data : tunnelData
			}, {
				connectNulls: true,
				symbol: 'circle',
//				yAxisIndex: 1,
				name : '重要告警曲线',
				type : 'line',
				color : 'yellow',
				data : strategyData
			}

			],		

		};
    
var myChart02 = echarts.init(document.getElementById('chart-analyse_safe'));

//timeTicket = setInterval("setOptionData(data)", 1000);
	function  setOptionData(data) {
		for (i=0;i<data.tunnelData.length;i++) {
			xData.push(data.tunnelData[i][0]);
		};
		one = xData[1] + '';
		two = xData[2] + '';
		three = xData[3] + '';
		four = xData[4] + '';
		five = xData[5] + '';
		six = xData[6] + '';
		seven = xData[7] + '';
		for (i=0;i<data.tunnelData.length;i++) {
			tunnelData.push(data.tunnelData[i][1]);
		};
		for (i=0;i<data.tunnelData.length;i++) {
			strategyData.push(data.tunnelData[i][2]);
		};	
		
		console.log("--"+six);
		myChart02.setOption(doubleOption,true);	
	}	
	setOptionData(dataList); 
	
});