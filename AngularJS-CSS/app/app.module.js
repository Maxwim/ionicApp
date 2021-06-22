var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/index.html"
    })
    .when("/Connexion", {
        templateUrl : "view/Connexion.html"
    })
    .when("/GestComamndes", {
        templateUrl : "view/GestCommandes.html"
    })
    .when("/Article", {
        templateUrl : "view/Article.html"
    })
    .otherwise({
        redirectTo : "/"
    });
});
