const $ = require('jquery');
const Echarts = require('echarts');

$(function() {
		createLeftArc();
		createMiddleArc();
		createMiddleText();
		createLeftArc_1();
		createLeftArc_2();
		createLeftArc_3();
		createLeftArc_4();
		createLeftArc_5();
		
		test();
});
setInterval(function(){
	var data1 = Math.round(Math.random()*1000);
	data2 = Math.round(Math.random()*1000);
	data3 = Math.round(Math.random()*1000);
	data4 = Math.round(Math.random()*1000);
	data5 = Math.round(Math.random()*1000);
	insertData(""+data1,""+data2,""+data3,""+data4,""+data5);
	
},1000);
function test(){
	var data1 = Math.round(Math.random()*1000);
	data2 = Math.round(Math.random()*1000);
	data3 = Math.round(Math.random()*1000);
	data4 = Math.round(Math.random()*1000);
	data5 = Math.round(Math.random()*1000);
	insertData(""+data1,""+data2,""+data3,""+data4,""+data5);
}
function left_arc_radius_f(){
	var dom = $("#left_arc").parent(".graph-system__stats");
	if(dom.length>0){
		var height = dom[0].clientHeight,width = dom[0].clientWidth;
		var left_arc_radius = width>=height?height:width;
		return left_arc_radius;
	}else{
		return null;
	}
}

function createLeftArc(){
		var left_arc_radius  = left_arc_radius_f(); 
		$("#left_arc").css({width:left_arc_radius,height:left_arc_radius,"border":"0px solid red"});
		$("#left_arc").css({"background-size":"100% 100%"});
}

function createMiddleArc(){
	var left_arc_radius  = left_arc_radius_f();
	var middle_arc_radius_left =(left_arc_radius/1854)*341;
	var middle_arc_radius = left_arc_radius-middle_arc_radius_left*2;
	$("#graph-system__stats__center").css({"position":"relative","top":middle_arc_radius_left-10,"left":middle_arc_radius_left});
	$("#graph-system__stats__center").css({width:middle_arc_radius,height:middle_arc_radius,"border":"0px solid red"});
	$("#graph-system__stats__center").css({"background-size":"100% 100%"});
	$("#graph-system__stats__center").css({"color":"#fff",});
	
}

function createMiddleText(){
	var left_arc_radius  = left_arc_radius_f();
	var width = (left_arc_radius/1854)*648,height = (left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*1050,
		left = (left_arc_radius/1854)*697.5;
	$("#graph-system__stats__middle_square").css({width:width,height:height});
	$("#graph-system__stats__middle_square").css({"position":"absolute","top":top,"left":left});
}

function createLeftArc_1(){
	var left_arc_radius  = left_arc_radius_f();
	var middle_arc_radius_left =(left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*330,
		left = (left_arc_radius/1854)*637.5;
	$("#graph-system__stats__1").css({"position":"absolute"});
	$("#graph-system__stats__1").css({"top":top,"left":left});
	$("#graph-system__stats__1").css({width:middle_arc_radius_left,height:middle_arc_radius_left});
	$("#graph-system__stats__1").css({"background-size":"100% 100%"});
	var fontSize = (left_arc_radius/1854)*40;
	$("#graph-system__stats__1").append("<div id='graph-system__stats__1_1'>厂站</div>").css({"font-size":fontSize});
	$("#graph-system__stats__1_1").css({"position":"relative",top:middle_arc_radius_left,left:fontSize/2});
	$("#graph-system__stats__1_1").append("<div id='graph-system__stats__1_text' class='graph-system__stats__1_text'></div>");
}

function createLeftArc_2(){
	var left_arc_radius  = left_arc_radius_f();
	var middle_arc_radius_left =(left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*330,
		left = (left_arc_radius/1854)*1207.5;
	$("#graph-system__stats__2").css({"position":"absolute"});
	$("#graph-system__stats__2").css({"top":top,"left":left});
	$("#graph-system__stats__2").css({width:middle_arc_radius_left,height:middle_arc_radius_left});
	$("#graph-system__stats__2").css({"background-size":"100% 100%"});
	var fontSize = (left_arc_radius/1854)*40;
	$("#graph-system__stats__2").append("<div id='graph-system__stats__2_1'>调度数据网节点数</div>");
	$("#graph-system__stats__2_1").css({"font-size":fontSize,width:fontSize*9});
	$("#graph-system__stats__2_1").css({"position":"relative",top:middle_arc_radius_left,left:-fontSize*2});
	$("#graph-system__stats__2_1").append("<div id='graph-system__stats__2_text' class='graph-system__stats__2_text'></div>");
}

function createLeftArc_3(){
	var left_arc_radius  = left_arc_radius_f();
	var middle_arc_radius_left =(left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*830,
		left = (left_arc_radius/1854)*257.5;
	$("#graph-system__stats__3").css({"position":"absolute"});
	$("#graph-system__stats__3").css({"top":top,"left":left});
	$("#graph-system__stats__3").css({width:middle_arc_radius_left,height:middle_arc_radius_left});
	$("#graph-system__stats__3").css({"background-size":"100% 100%"});
	var fontSize = (left_arc_radius/1854)*40;
	$("#graph-system__stats__3").append("<div id='graph-system__stats__3_1'>主站</div>").css({"font-size":fontSize});
	$("#graph-system__stats__3_1").css({"position":"relative",top:middle_arc_radius_left,left:fontSize/2});
	$("#graph-system__stats__3_1").append("<div id='graph-system__stats__3_text' class='graph-system__stats__3_text'></div>");
}
/**
 *
 * @param {Object} data1 厂站
 * @param {Object} data2 调度数据网节点数
 * @param {Object} data3 主站
 * @param {Object} data4 全网纵向数量
 */
function createLeftArc_4(){
	var left_arc_radius  = left_arc_radius_f();
	var middle_arc_radius_left =(left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*1130,
		left = (left_arc_radius/1854)*1637.5;
	$("#graph-system__stats__4").css({"position":"absolute"});
	$("#graph-system__stats__4").css({"top":top,"left":left});
	$("#graph-system__stats__4").css({width:middle_arc_radius_left,height:middle_arc_radius_left});
	$("#graph-system__stats__4").css({"background-size":"100% 100%"});
	var fontSize = (left_arc_radius/1854)*40;
	$("#graph-system__stats__4").append("<div id='graph-system__stats__4_1'>全网纵向数量</div>");
	$("#graph-system__stats__4_1").css({"font-size":fontSize,width:fontSize*6});
	$("#graph-system__stats__4_1").css({"position":"relative",top:middle_arc_radius_left,left:-fontSize});
	$("#graph-system__stats__4_1").append("<div id='graph-system__stats__4_text' class='graph-system__stats__4_text'></div>");
	
}
/**
 *
 * @param {Object} data1 厂站
 * @param {Object} data2 调度数据网节点数
 * @param {Object} data3 主站
 * @param {Object} data4 全网纵向数量
 * @param {Object} data5 全网隔离数量
 */
function createLeftArc_5(){
	var left_arc_radius  = left_arc_radius_f();
	var fontSize = (left_arc_radius/1854)*40;
	var middle_arc_radius_left =(left_arc_radius/1854)*157;
	var top = (left_arc_radius/1854)*1700,
		left = (left_arc_radius/1854)*837.5;
	$("#graph-system__stats__5").css({"position":"absolute"});
	$("#graph-system__stats__5").css({"top":top,"left":left});
	$("#graph-system__stats__5").css({width:middle_arc_radius_left,height:middle_arc_radius_left});
	$("#graph-system__stats__5").css({"background-size":"100% 100%"});
	
	$("#graph-system__stats__5").append("<div id='graph-system__stats__5_1'>全网隔离数量</div>");
	$("#graph-system__stats__5_1").css({"font-size":fontSize,width:fontSize*6});
	$("#graph-system__stats__5_1").css({"position":"relative",top:middle_arc_radius_left,left:-fontSize});
	$("#graph-system__stats__5_1").append("<div id='graph-system__stats__5_text' class='graph-system__stats__5_text'></div>");
}


function insertData(data1,data2,data3,data4,data5){
	var left_arc_radius  = left_arc_radius_f();
	var fontSize = (left_arc_radius/1854)*40;
	var textLeft = data1.length>=4?0:fontSize/data1.length;
	$("#graph-system__stats__1_text").html(data1);
	$("#graph-system__stats__1_text").css({"font-size":fontSize,left:textLeft});
	
	textLeft = (fontSize*9-data2.length*fontSize)/2;
	$("#graph-system__stats__2_text").html(data2);
	$("#graph-system__stats__2_text").css({"font-size":fontSize,left:textLeft});
	
	textLeft = data3.length>=4?0:fontSize/data3.length;
	$("#graph-system__stats__3_text").html(data3);
	$("#graph-system__stats__3_text").css({"font-size":fontSize,left:textLeft});
	
	textLeft = (fontSize*7-data2.length*fontSize)/2;
	$("#graph-system__stats__4_text").html(data4);
	$("#graph-system__stats__4_text").css({"font-size":fontSize,left:textLeft});
	
	textLeft = (fontSize*7-data2.length*fontSize)/2;
	$("#graph-system__stats__5_text").html(data5);
	$("#graph-system__stats__5_text").css({"font-size":fontSize,left:textLeft});
}
