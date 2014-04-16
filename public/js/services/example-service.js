define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('exampleService', ['$q', '$http', function($q, $http) {
    return {
    	apiPath: '/api/v1/auth/',
		login: function(user) {
			var deferred = $q.defer();

			$http.post(this.apiPath + 'login', user).success(function(data) {
				deferred.resolve(data);
			}).error(function(err, status) {
				deferred.reject(err, status);
			});

			return deferred.promise;
		}
    };
  }]);
});