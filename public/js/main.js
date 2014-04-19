/*
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
        'lib': './lib',
        'domReady': './lib/requirejs/domReady',
        'angular': './lib/angular/angular.min',
        'angular-sanitize' : './lib/angular/angular-sanitize.min',
        'angular-ui-router' : './lib/angular/angular-ui-router.min',
        'nvd3' : './lib/nv.d3',
        'nvd3-directives' : './lib/angular/angularjs-nvd3-directives.min'
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
        },
        'nvd3': {
            exports: 'nvd3'
        },
        'nvd3-directives': {
            deps: ['nvd3']
        }
    }
});

require(['./bootstrap'], function () {
    //nothing to do here...see bootstrap.js
});