define(['./index'], function (services) {
  'use strict';
  // expand input and show post button on focus
  services.service('apiService', ['$q', '$http', function($q, $http) {
    return {
    	apiPath: '/api/',
		analyzeSymbol: function(symbol) {
			var deferred = $q.defer();

			$http.get(this.apiPath + 'analyze/' + symbol).success(function(data) {
				deferred.resolve(data);
			}).error(function(err, status) {
				deferred.reject(err, status);
			});

			return deferred.promise;
		}
    };
  }]);
});