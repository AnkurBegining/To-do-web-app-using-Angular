var appX=angular.module('mainApp', []);

appX.controller('app', function($scope){
	
	// array to store information about the todo list work
	$scope.tasks = [];

	// Local Storage
	var taskData = localStorage['tasksList'];

	if (taskData !== undefined){
		$scope.tasks = JSON.parse(taskData);
	}
	
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
		$scope.task='';

		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		// console.log(localStorage);
	};

	// function for double click and edit
	$scope.contentEdit = function(msg){
		console.log("something");

		for(i=0;i<$scope.tasks.length;i++){
			if($scope.tasks[i].taskMessage == msg){
				$scope.tasks[i].taskMessage = event.target.innerText;
				console.log("Reached Here");
			}
		}

		localStorage['tasksList'] = JSON.stringify($scope.tasks);
		console.log($scope.tasks);

		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
	};

	// function for pressing enter key and update after the key
	$scope.enterAgainForEdit = function( msg){
		console.log(event.which);
		if((event.which==13 || event.keyCode==13) && msg != ""){
			$scope.contentEdit(msg);
			console.log("1");
		}
		console.log("here");
	};
});