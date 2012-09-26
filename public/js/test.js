'use strict';

// Declare app level module which depends on filters, and services
var testApp = angular.module('testApp', ['notesService', 'conslog', 'testService'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  /**
 * conslog Module
 *
 * logs to console 
 */
angular.module('conslog', [])
  .directive('logToConsole', [function(){
    // Runs during compile
    return function(scope, elm, attrs) {
      //console.log("scope.message = " + scope.message);
    };
  }]);
