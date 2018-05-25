(function (app)
{
    //registers the controller with the main module

    var app = angular.module("myApplication");
    //capitalized to indicate constructor function
    var MyController = function ($scope) {


			$scope.users = [
				{ "id": 1, "name": "Ali" },
				{ "id": 2, "name": "Sara" },
				{ "id": 3, "name": "Babak" },
				{ "id": 4, "name": "Sanaz" },
				{ "id": 5, "name": "Dariush" },
			];

			$scope.selectedUserIds = [3, 5];

    };
    app.controller("MyController", MyController);


    //put directive here for now

});

//varMyApplication.controller('MyController', function ($scope) {

//			$scope.users = [
//				{ "id": 1, "name": "Ali" },
//				{ "id": 2, "name": "Sara" },
//				{ "id": 3, "name": "Babak" },
//				{ "id": 4, "name": "Sanaz" },
//				{ "id": 5, "name": "Dariush" },
//			];

//			$scope.selectedUserIds = [3, 5];

//		});
