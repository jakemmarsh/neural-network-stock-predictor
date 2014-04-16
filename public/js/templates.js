define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/example.html',
    "Sample Page Contents"
  );
}]); });