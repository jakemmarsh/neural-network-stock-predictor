define(['./index'], function (directives) {
    directives.directive("exampleDirective", [function () {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {
          element.bind('click', function() {
            element.select();
          });
        }
      };
    }]);
});