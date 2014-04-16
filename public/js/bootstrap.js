/**
 * bootstraps angular onto the window.document node
 * NOTE: the ng-app attribute should not be on the index.html when using ng.bootstrap
 */
define([
    'require',
    'angular',
    'app',
    'routes',
    'impl'
], function (require, ng, app) {
    'use strict';

    app.run(['$rootScope', function ($rootScope) {

        // any functions or variables to declare at runtime

        // change page title based on state
        $rootScope.$on('$stateChangeSuccess', function(event, toState) {
            if(toState.title) {
                $rootScope.pageTitle = toState.title;
            }
        });

    }]);

    require(['domReady!'], function (document) {
        return ng.bootstrap(document, ['app']);
    });
});