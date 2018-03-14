var appX=angular.module('mainApp', []);

appX.controller('app', function($scope){
	
	$scope.tasks = [];
	
	$scope.searchEnter = function(){
		// console.log(event.keyCode);
		/*
			Check enter button is pressed or not and if string are non-empty or not
		*/
		if(event.keyCode==13 || event.which==13){
			if ($scope.task != "") {
				$scope.addTask();
			}
		}
	};
	$scope.addTask = function(){
		$scope.tasks.push({
			'taskMessage': $scope.task,
			'status': false,

		});
		console.log($scope.tasks);
		$scope.task="";
	};
});