describe('myMovieController', function() {
	beforeEach(module('myMovieApp'));

	var $controller;
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));

	describe('$scope.bodycheck', function() {
		var $scope, controller;

		beforeEach(function(){
		  $scope = {};
		  controller = $controller('myMovieController', { $scope: $scope });
		});

		it('Add A New Movie In MovieList', function(){
			$scope.Movie = {
				title: 'L.A. Confidential (1997)',
				rank: '101',
				id: 'tt0119488',
			};
			$scope.AddMovie(Movie);
			expect($scope.ShowTable).toEqual([]);
		});
	});
});