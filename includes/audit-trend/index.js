const $ = require('jquery');
const echarts = require('echarts');

var Icons = {
    'arc': require('./img/audit-trend-icon-arc.png')
};


$(function(){
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById("audit-trend__graph"));
	//option.series[0].data 是各类告警数量   option.series[0].data 告警总数
	myChart.setOption(option,true);
});

	// 指定图表的配置项和数据
	option = {
		tooltip: {
			trigger: 'item',
			formatter: function(params){
				return params.name+":"+params.data.value2;
			}
		},
		color:["#31a98f"],
		series: [{
			name: '边界审计',
			type: 'pie',
			avoidLabelOverlap: false,
			hoverAnimation: false,
			stillShowZeroSum: false,
			radius: ['38%', '38%'],
			labelLine:{
				length:50,
				length2:100,
				lineStyle:{
					type:'dotted'
				}
			},
			animation: true,
			label: {
				normal: {
					formatter:function(params){
						return '{arc|  '+params.data.value2+' }\n     {icon|    '+params.name+'   }';
					},
					backgroundColor: 'rgba(0,0,0,0)',
					borderColor: '#aaa',
					borderWidth: 0,
					borderRadius: 4,
					rich: {
						arc:{
							align: 'left',
							height: 35,
							backgroundColor: {
                                image: Icons.arc
                            }
						},
						icon:{
							height: 25,
							lineHeight:10,
							borderColor: '#31a98f',
							borderWidth: 2,
							borderRadius: 4,
							backgroundColor: 'rgba(0,0,0,1)'
						}
						
					}
				}
			},
			data: [ {
				value: 85,
				value2: 45,
				name: 'FTP访问异常',
				labelLine:{
					length:100,
					length2:0,
					lineStyle:{
						type:'dotted'
					}
				}
			}, {
				value: 05,
				value2: 45,
				name: '主机扫描',
				labelLine:{
					length:200,
					length2:0,
					lineStyle:{
						type:'dotted'
					}
				}
			}, {
				value: 15,
				value2: 45,
				name: 'SSL心脏滴血',
				labelLine:{
					length:0,
					length2:150,
					lineStyle:{
						type:'dotted'
					}
				}
			},{
				value: 85,
				value2: 45,
				name: 'NETBIOS服务访问异常',
				labelLine:{
					length:0,
					length2:150,
				}
			},{
				value: 45,
				value2: 145,
				name: 'HTTP服务访问异常',
				labelLine:{
					length:50,
					length2:150,
				}
			}, {
				value: 45,
				value2: 45,
				name: 'UNIXListserv服务访问异常',
				labelLine:{
					length:100,
					length2:0,
				}
			}, {
				value: 85,
				value2: 45,
				name: 'SMB服务访问异常',
				labelLine:{
					length:20,
					length2:40,
				}
			}, {
				value: 45,
				value2: 45,
				name: '00服务访问异常',
				labelLine:{
					length:180,
					length2:0,
				}
			}, {
				value: 15,
				value2: 45,
				name: 'ICMP服务访问异常',
				labelLine:{
					length:180,
					length2:0,
				}
			},  {
				value: 0,
				value2: 45,
				name: 'DNS服务访问异常',
				labelLine:{
					length:50,
					length2:80,
				}
			}, {
				value: 55,
				value2: 45,
				name: 'DHCP服务访问异常',
				labelLine:{
					length:220,
					length2:0,
				}
			}, {
				value: 0,
				value2: 45,
				name: 'SSH弱口令探测',
				labelLine:{
					length:180,
					length2:0,
				}
			},{
				value: 95,
				value2: 45,
				name: 'NTP服务访问',
				labelLine:{
					length:120,
					length2:0,
					lineStyle:{
						type:'dotted'
					}
				}
			}]
		},{
			name: '告警总数',
			type: 'pie',
			voidLabelOverlap: true,
			hoverAnimation: false,
			stillShowZeroSum: false,
			radius: ['30%', '31%'],
			labelLine:{
				show:false,
			},
			tooltip: {
				show: false,
			},
			label: {
				show:true,
				formatter: ' {c} \n {b}',
				position: 'inner',
				color: '#96fef5',
				fontSize: 25,
				align: 'center',
				verticalAlign: 'middle',
				padding: [-180,0,0,0],
				backgroundColor: 'rgba(49,169,143,0.0)',
				borderRadius: 150,
				shadowColor: '#31a98f',
				shadowBlur: 50,
				textShadowColor: '#96fef5',
				textShadowBlur: 85,
				textShadowOffsetX: 0,
				textShadowOffsetY: 0,
			},
			data:[
				{value:335, name:'告警总数'}
			]
		},{
			name: '边界审计2',
			type: 'pie',
			tooltip: {
				show: false,
			},
			hoverAnimation: false,
			radius: ['33%', '38%'],
			labelLine:{
				show:false,
			},
			data:[
				{value:335, name:''}
			]
		},{
			name: '边界审计2',
			type: 'pie',
			tooltip: {
				show: false,
			},
			labelLine:{
				show:false,
			},
			hoverAnimation: false,
			radius: ['38%', '50%'],
			data:[
				{value:335, name:'',itemStyle: {
					color: "rgba(23,36,34,0.3)",
				}}
			]
		},{
			name: '边界审计3', 
			type: 'gauge',
			color:["#31a98f"],
			tooltip: {
				show: false,
			},
			hoverAnimation: false,
			center: ['50%', '50%'],    // 默认全局居中
            radius: '42%',
            startAngle: 225,
			endAngle: 15,
			splitNumber: 1,
			splitLine: {
				show: false
			},
			axisLine: {
				show: true,
				 lineStyle: {       // 属性lineStyle控制线条样式
	                    color: [[1, 'rgba(47,58,56,0)']], 
	                    width: 8 
	                }
			},
			axisLabel: {
				show: false,
			},
			axisTick: {
				show: true,
				splitNumber: 50,
				length: 10,
				lineStyle: {
					color: '#2f3a38',
					width: 3,
				},
			},
			pointer: {
				show: false
			},
			detail: {
				show: false
			},
			data:[
				{value:0, name:''}
			]
		},
		]
	};
