angular.module('tabApp', ['ui.bootstrap'])

.controller("RevController",['$scope',function($scope){
    $scope.isActive=false;
$scope.dateOptions = {
    //dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };    
   $scope.open1 = function() {
    $scope.popup1.opened = true;
  };    
 
 $scope.popup1 = {
    opened: false
  };
  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };    
 
 $scope.popup2 = {
    opened: false
  };   
  //$scope.user = {};
  $scope.results=[];    
 
$scope.user={
      fname:"",
      lname:"",
      email:"",
      tel:"",
      ddt:new Date(),
      rdt:new Date(),
      location:""
 }
 $scope.step2=function(tabindex){
   
     $scope.indextab=tabindex;
     if($scope.results.length>0){
         $scope.results.pop();
         $scope.results.push($scope.user);
     }
     else{
      $scope.results.push($scope.user);
     }
     $scope.user={
      fname:"",
      lname:"",
      email:"",
      tel:"",
      ddt:new Date(),
      rdt:new Date(),
      location:""
 }

 }
 $scope.nextpage = function(tabindex) {    
     
    $scope.indextab = tabindex; 
    $scope.reserveForm.$setPristine(); 
     
};  

}]);
