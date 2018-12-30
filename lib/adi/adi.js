(function() {

    var app = angular.module('adi', []);

    app.factory('adi', function() {
        var adi = function(adiRequest, x) {
            var promise = new Promise(function(resolve, reject) {
                adiWebService.adi(adiRequest).success(function(result) {
                    resolve(result);
                }).error(function(result) {
                    console.log(" adi adiElectron error, result : " + result);
                    reject(result);
                });

            });
            promise.success = function(fun) {
                promise.then(function(result) {
                    fun(result, x);
                });
                return promise;
            };

            promise.error = function(fun) {
                promise.then(null, function(result) {
                    fun(result);
                });
                return promise;
            };

            return promise;
        };

        return adi;
    });

})();