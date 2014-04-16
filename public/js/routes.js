/**
 * Defines the main routes in the application.
 */
define(['./app'], function (app) {
    'use strict';
    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'partials/example.html',
            controller: 'exampleCtrl',
            title: 'Home'
        });

        $urlRouterProvider.otherwise("/");

    }]);
});