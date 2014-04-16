define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('searchCtrl', ['$scope', 'apiService', function ($scope, apiService) {

        $scope.analyzed = false;

        $scope.analyzeSymbol = function(symbol) {
            apiService.analyzeSymbol(symbol).then(function(data) {
                $scope.analysisData = data;
                $scope.analyzed = true;
            }, function(err) {
                $scope.analyzed = false;
                $scope.errorMessage = err;
            });
        };

    }]);
});