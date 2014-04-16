define(['./index'], function (controllers) {
    'use strict';
    controllers.controller('exampleCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        $scope.test = [1, 2, 3];

    }]);
});