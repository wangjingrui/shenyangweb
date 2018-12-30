var grpcInterface = require("./grpcInterface")

var adi = function (adiRequest, request) {
    var promise = new Promise(function (resolve, reject) {
        var resourceType = resourceTypeMap.get(adiRequest.resource)
        switch (resourceType) {
            case "grpc-java":
                grpcInterface.main(adiRequest.params).success(function (DBData) {
                    resolve(DBData);
                }).error(function (DBData) {
                    reject(DBData);
                });
                break;
            default:
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
};

var resourceTypeMap = new Map();
/* public sector start */

resourceTypeMap.set('grpc-java', 'grpc-java');



exports.adi = adi;