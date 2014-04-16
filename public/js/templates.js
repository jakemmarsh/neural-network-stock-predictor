define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/results.html',
    "Results of stock search"
  );


  $templateCache.put('partials/search.html',
    "<div style=\"margin-top: 5%;\" ng-hide=\"analyzed\">\n" +
    "    <h2>Analyze a Stock Symbol</h2>\n" +
    "    <div class=\"well\">\n" +
    "        <p>Search for a stock symbol to attempt to analyze using the neural network.</p>\n" +
    "        <form name=\"symbolSearch\" class=\"input-group input-group-lg\" ng-submit=\"analyzeSymbol(symbol)\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"symbol\" name=\"symbol\" ng-model=\"symbol\" required />\n" +
    "            <span class=\"input-group-btn\">\n" +
    "                <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"symbolSearch.$invalid\">Analyze</button>\n" +
    "            </span>\n" +
    "        </form>\n" +
    "        <strong class=\"text-danger\" style=\"margin-top: 8px; display: block;\" ng-bind=\"errorMessage\"></strong>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<div ng-show=\"analyzed\" ng-ctrl=\"resultsCtrl\" ng-include=\"'partials/results.html'\"></div>"
  );
}]); });