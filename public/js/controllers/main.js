'use strict';

testApp.controller('MainCtrl', function($scope, Note, MyTest) {
	
  $scope.notes = Note.query();
<<<<<<< HEAD
  $scope.myFoo = MyTest.foo;
  
  console.log($scope.myFoo(10, 25));
=======
  $scope.message = "Hey there everyone";

>>>>>>> Stuff
});
