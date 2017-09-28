let app=angular.module('Addmsg',['ngRoute']);
app.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl:'/Views/Addmsgs.html'
        
    })
    .otherwise({
        
        redirectTo:'/'
    });
    
    
});



app.factory('messages',function(){
  let messages={};
    messages.list=[];
    
    messages.add=function(message){
        
        messages.list.push({id:messages.list.length,text:message});
    };
    
    
    return messages;    
});
app.controller('msgcontroller',['$scope','messages',function($scope,$messages){
  $scope.messages =$messages.list;
   $scope.add=function(message){
       
       
       $messages.add(message);
   };
    
    
    
}]);


