'use strict';

// Declare app level module which depends on filters, and services
var testApp = angular.module('testApp', ['notesService', 'testService'])
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

testApp.factory('nametrickFactory', function() {
  return {
    reverse : function(name) {
      return name.split("").reverse().join("");
    }
  }
});