define(['angular', 'app'], function(angular, app) { app.run(['$templateCache', function($templateCache) {  'use strict';

  $templateCache.put('partials/analyze.html',
    "<div style=\"margin-top: 5%;\">\n" +
    "    <h2>Analyze a Stock Symbol</h2>\n" +
    "    <div class=\"well\">\n" +
    "        <div ng-hide=\"analyzing\">\n" +
    "            <p>Search for a stock symbol to attempt to analyze using the neural network.</p>\n" +
    "            <form name=\"symbolSearch\" class=\"input-group input-group-lg\" ng-submit=\"analyzeSymbol(symbol)\">\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"symbol\" name=\"symbol\" ng-model=\"symbol\" required autofocus />\n" +
    "                <span class=\"input-group-btn\">\n" +
    "                    <button class=\"btn btn-primary\" type=\"submit\" ng-disabled=\"symbolSearch.$invalid\">Analyze</button>\n" +
    "                </span>\n" +
    "            </form>\n" +
    "            <strong class=\"text-danger\" style=\"margin-top: 8px; display: block;\" ng-bind=\"errorMessage\"></strong>\n" +
    "        </div>\n" +
    "        <div ng-show=\"analyzing\">\n" +
    "            <p>Analyzing <span ng-bind=\"symbol\"></span>...</p>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('partials/results.html',
    "<div class=\"well\">\n" +
    "    <h2 class=\"text-center text-primary\">Results of Analysis for <span ng-bind=\"symbol\"></span></h2>\n" +
    "    <nvd3-line-chart\n" +
    "        data=\"chartData\"\n" +
    "        width=\"100%\"\n" +
    "        height=\"500\"\n" +
    "        showXAxis=\"true\"\n" +
    "        showYAxis=\"true\">\n" +
    "    </nvd3-line-chart>\n" +
    "</div>"
  );
}]); });