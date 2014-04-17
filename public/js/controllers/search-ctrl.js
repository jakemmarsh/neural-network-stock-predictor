define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('searchCtrl', ['$scope', 'apiService', function ($scope, apiService) {

        $scope.analyzed = false;

        $scope.analyzeSymbol = function(symbol) {
            $scope.analyzing = true;
            apiService.analyzeSymbol(symbol).then(function(data) {
                $scope.analysisData = data;
                $scope.analyzing = false;
                $scope.analyzed = true;
            }, function(err) {
                $scope.analyzing = false;
                $scope.analyzed = false;
                $scope.errorMessage = err;
            });
        };

    }]);
});