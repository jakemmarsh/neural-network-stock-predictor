define([
    'angular',
    'angular-sanitize',
    'angular-ui-router',
    './controllers/index',
    './services/index'
], function (ng) {
    'use strict';

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'ngSanitize',
        'ui.router'
    ]);
});
