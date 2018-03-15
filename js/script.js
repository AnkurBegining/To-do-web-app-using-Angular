var appX=angular.module('mainApp', []);

appX.controller('app', function($scope){
	
	// array to store information about the todo list work
	$scope.tasks = [];
	
	// function for input enter
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

	// function for add information about task
	$scope.addTask = function(){
		$scope.tasks.push({
			'taskMessage': $scope.task,
			'status': false,

		});
		console.log($scope.tasks);
		$scope.task="";
	};

	// function for double click and edit
	$scope.contentEdit = function(){
		console.log("something");
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

	// function for pressing enter key and update after the key
	$scope.enterAgainForEdit = function(){
		console.log(event.which);
		if(event.which==13 || event.keyCode==13 && $scope.task != ""){
			$scope.contentEdit();
			console.log("1");
		}
		console.log("here");
	};
});