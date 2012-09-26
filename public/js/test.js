'use strict';

// Declare app level module which depends on filters, and services
<<<<<<< HEAD
var testApp = angular.module('testApp', ['notesService', 'testService'])
=======
var testApp = angular.module('testApp', ['notesService', 'conslog'])
>>>>>>> Stuff
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

<<<<<<< HEAD
testApp.factory('nametrickFactory', function() {
  return {
    reverse : function(name) {
      return name.split("").reverse().join("");
    }
  }
});
=======

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
      console.log(scope, elm, attrs);
    };
  }]);
>>>>>>> Stuff
