define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('analyzeCtrl', ['$scope', '$rootScope', 'apiService', '$location', function ($scope, $rootScope, apiService, $location) {

        $scope.analyzed = false;

        $scope.analyzeSymbol = function(symbol) {
            symbol = symbol.toUpperCase();
            $rootScope.symbol = symbol;

            $scope.analyzing = true;
            apiService.analyzeSymbol(symbol).then(function(data) {
                $rootScope.analysisData = data;
                $scope.analyzing = false;
                $scope.analyzed = true;
                $location.path('/results');
            }, function(err) {
                $scope.analyzing = false;
                $scope.analyzed = false;
                $scope.errorMessage = err;
            });
        };

    }]);
});