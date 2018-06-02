(function () {
    //make sure this matches the ng-app in the view
    var varMyApplication =
			angular.module('myApplication', ['myDirectivesApplication']);

		varMyApplication.controller('myController', function ($scope) {

			$scope.users = [
				{ "id": 1, "name": "Friends" },
				{ "id": 2, "name": "Immediate Family" },
				{ "id": 3, "name": "Colleagues" },
				{ "id": 4, "name": "Extended Family" },
				{ "id": 5, "name": "Business" },
			];

			$scope.selectedUserIds = ["select a relationship"];

		});



}())