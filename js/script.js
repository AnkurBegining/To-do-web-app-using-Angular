var appX=angular.module('mainApp', []);

appX.controller('app', function($scope){
	
	$scope.tasks = [];
	
	$scope.searchEnter = function(){
		// console.log(event.keyCode);
		if(event.keyCode==13 || event.which==13){
			
			$scope.addTask();
		}
	};
	$scope.addTask = function(){
		$scope.tasks.push($scope.task);
		console.log($scope.tasks);
	};
});