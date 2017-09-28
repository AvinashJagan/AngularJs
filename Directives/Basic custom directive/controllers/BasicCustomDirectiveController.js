let app= angular.module('directives',['ngRoute']);

app.config(function($routeProvider){
    
    $routeProvider
    .when('/',{
        templateUrl:'/Views/CustomDirective.html'
        
    })
    .otherwise({
        
        redirectTo:'/'
    });
    
    
});
app.directive('myFirstDirective',function(){
    
    return {
        
        template:'<strong>{{msg}}</strong>'
        
        
    };
    
});


app.controller('directiveContoller',['$scope',function($scope){
    
    $scope.msg="Hey this is first Directive Message";
   
}]);


