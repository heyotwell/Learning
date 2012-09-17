/**
 * Learning Module
 *
 * Description
 */
angular.module('notesService', ['ngResource']).
	factory('Note', function($resource){
		return $resource('/api', {}, {
			query: {method: 'GET', params: {id: 'id'}, isArray:true}
		});
	});

