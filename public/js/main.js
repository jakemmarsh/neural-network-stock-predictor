/*
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'domReady': '../../node_modules/requirejs-domready/domReady',
        'angular': '../../node_modules/angular/angular.min',
        'angular-sanitize' : '../../node_modules/angular-sanitize/angular-sanitize.min',
        'angular-ui-router' : '../../node_modules/angular-ui-router/release/angular-ui-router.min'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});
