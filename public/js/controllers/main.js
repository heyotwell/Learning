'use strict';

testApp.controller('MainCtrl', function($scope, Note) {
	
  $scope.notes = Note.query();

});
