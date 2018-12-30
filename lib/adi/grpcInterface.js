var PROTO_PATH = __dirname + '/data_screen.proto';

var grpc = require('grpc');

var proto = grpc.load(PROTO_PATH).datascreen;

var grpcIpPort = require('../../config/ipconfig');

//"192.100.10.81:20011"
var grpcAddr = grpcIpPort[0].ip + ":" + grpcIpPort[0].port;
var client = new proto.DataScreenService(grpcAddr, grpc.credentials.createInsecure());
var everyMoudleName = new Map();

exports.main = function main(params) {
    var promise = new Promise(function (resolve, reject) {
        /**
         * 下面的case需要对应模块的开发人员自己书写
         */
        switch (params.funcName) {
            case "test":
                client.sayHello({
                    name: params.name
                }, function (err, response) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(response);
                    }
                });
                break;
                // 大屏安防系统及设备在线状态
            case "screenSecuritySystemState":
                var call = client.screenSecuritySystemState({

                });
                everyMoudleName.set('screenSecuritySystemState', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
                // 值班人员
            case "getOnDutyPerson":
                var call = client.getOnDutyPerson({

                });
                everyMoudleName.set('getOnDutyPerson', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
                // 风险告警
            case "getRiskWarning":
                var call = client.getRiskWarning({

                });
                everyMoudleName.set('getRiskWarning', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
                // 首页安全合规率
            case "bidirectionalSafetyCompliance":
                var call = client.bidirectionalSafetyCompliance({

                });
                everyMoudleName.set('bidirectionalSafetyCompliance', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
                // 大屏网络安全运行水平
            case "screenSecretPassOnlineRate":
                var call = client.screenSecretPassOnlineRate({

                });
                everyMoudleName.set('screenSecretPassOnlineRate', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;

                // 当日安全风险top10
            case "screenDayRiskTOPTen":
                var call = client.screenDayRiskTopTen({

                });
                everyMoudleName.set('screenDayRiskTOPTen', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
                // 发生威胁单位top10
            case "screenDayRiskUnitTOPTen":
                var call = client.screenDayRiskUnitTopTen({

                });
                everyMoudleName.set('screenDayRiskUnitTOPTen', call);
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;

                //地图
            case 'bidirectionalDrawingMapsFormat':
                console.log('新建地图流bidirectionalDrawingMapsFormat');
                var call = client.bidirectionalDrawingMapsFormat({
                    // name: params.leftClickAreaName
                    name: params.name
                });
                everyMoudleName.set('bidirectionalDrawingMapsFormat', call);
                call.on("status", function (response) {
                    console.log('bidirectionalDrawingMapsFormat status', response);
                });
                call.on("end", function (response) {
                    console.log('bidirectionalDrawingMapsFormat end', response);
                });

                everyMoudleName.forEach(function (value, key, map) {
                    if (value.writable) {
                        value.write({
                            // name: params.leftClickAreaName
                            name: params.name
                        })
                        console.log('其他流发送参数bidirectionalDrawingMapsFormat', value);
                    }
                });
                resolve(call);
                break;
            // 全网告警监视
            case "bidirectionalAllStation":
                console.log('bidirectionalAllStation: ');
                var call = client.bidirectionalAllStation({});
                everyMoudleName.set('bidirectionalAllStation', call);
                if (call.writable) {
                    call.write({});
                }
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
            // 最新安全事件
            case "bidrectionalSubSecurityEvent":
                console.log('bidrectionalSubSecurityEvent: ');
                var call = client.bidrectionalSubSecurityEvent({});
                everyMoudleName.set('bidrectionalSubSecurityEvent', call);
                if (call.writable) {
                    call.write({});
                }
                call.on("status", function (response) {

                });
                call.on("end", function (response) {

                });
                resolve(call);
                break;
            case "callEndSingle":
                everyMoudleName.get(params.mapKey).end();
                everyMoudleName.delete(params.mapKey);
                resolve({});
                console.log('关闭地图流bidirectionalDrawingMapsFormat');
                break;
            case 'callEnd':
                everyMoudleName.forEach(function (value, key, map) {
                    value.end();
                });
                everyMoudleName.clear();
                resolve({});
                break;
            default:
                console.log("params is Null!");
                break;
        }
    });
    promise.success = function (fun) {
        promise.then(function (result) {
            fun(result);
        });
        return promise;
    };

    promise.error = function (fun) {
        promise.then(null, function (result) {
            fun(result);
        });
        return promise;
    };

    return promise;
}
