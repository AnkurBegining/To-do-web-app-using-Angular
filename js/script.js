var appX=angular.module('mainApp', []);

appX.controller('app', function($scope){
	$scope.searchEnter = function(){
		// console.log(event.keyCode);
		if(event.keyCode==13 || event.which==13){
			// Make a function for getting the value of input
			$scope.addTask();
		}
	};
	$scope.addTask() = function(){

	};
});