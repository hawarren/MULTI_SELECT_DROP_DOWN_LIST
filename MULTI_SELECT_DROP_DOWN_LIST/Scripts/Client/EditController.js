(function () {
     var varMyApplication =
			angular.module('contactsRouting', ['myDirectivesApplication']);

		varMyApplication.controller('EditController', function ($scope) {

			$scope.users = [
				{ "id": 1, "name": "Friends" },
				{ "id": 2, "name": "Immediate Family" },
				{ "id": 3, "name": "Colleagues" },
				{ "id": 4, "name": "Extended Family" },
				{ "id": 5, "name": "Business" },
			];

			$scope.selectedUserIds = ["select 1 or many relationship(s)"];

		});



}())