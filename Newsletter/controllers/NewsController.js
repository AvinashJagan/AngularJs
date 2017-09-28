var app=angular.module('News',['ngRoute']);
app.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl:'/Views/NewsMain.html'
        
    })
    .when('/success',{
        templateUrl:'/Views/success.html'
    }).otherwise({
        
        redirectTo:'/'
    });
    
    
});
    app.controller('NewsLetterControl', ['$scope','$location',function ($scope,$location){
       $scope.arr=[];
  
  $scope.updateMessage = function(fname,email)
  {
      let obj={}
    
      if(fname.length<10)
      {
          $scope.name = fname;
          $scope.eemail =email;
          
          obj.fname=fname;
          obj.email=email;
         $scope.arr.push(obj)
         $location.path('/success');
      }
  else{
     alert('WRONG CREDENTIALS') 
      }
   
  };
}]);
