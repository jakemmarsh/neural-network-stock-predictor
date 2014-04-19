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
            templateUrl: 'partials/analyze.html',
            controller: 'analyzeCtrl'
        })
        .state('results', {
            url: '/results',
            templateUrl: 'partials/results.html',
            controller: 'resultsCtrl',
            resolve: {
                checkIfAnalyzed: ['$rootScope', '$location', function($rootScope, $location) {
                    if(!$rootScope.analysisData) {
                        $location.path('/');
                    }
                }]
            }
        });

        $urlRouterProvider.otherwise("/");

    }]);
});