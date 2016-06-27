console.log( 'js sourced' );

myApp = angular.module( 'myApp', [] );

myApp.controller( 'mondayController', ['$scope', '$http', function( $scope, $http ){
//test get user input
$scope.whatAreWeTryingToDo = function(){
  console.log( 'in whatAreWeTryingToDo');
};

}]);//end of mondayController
