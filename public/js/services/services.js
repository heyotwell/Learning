/**
 * Learning Module
 *
 * Description
 */
angular.module('notesService', ['ngResource']).
	factory('Note', function($resource){
		return $resource('/api');
	});

/**
 * funnyService Module
 *
 * Description
 */
angular.module('testService', []).
	factory('MyTest', function(){
		return {
			ao: "Andrew",
			foo: function(a, b){
				return a + b;
			}
		}
	});

