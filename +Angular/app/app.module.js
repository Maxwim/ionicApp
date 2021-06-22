var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    
    $routeProvider
        .when("/", {
        
            templateUrl : "partials/index.html"
        })
        .when("/Connexion", {
            templateUrl : "partials/Connexion.html"
        })
        .when("/GestComamndes", {
            templateUrl : "partials/GestCommandes.html"
        })
        .when("/Article", {
            templateUrl : "partials/Article.html"
        })
        .otherwise({
            redirectTo : "/"
        });
    
});
