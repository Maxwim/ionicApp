
var App = angular.module('app', ['ngRoute']);

// Envoyé le sur le module compo ? 
App.controller('header',  function header($scope) {
  $scope.logo = {'name':'website'};

  $scope.menu = [
    
    {
      "menu": "Accueil",
      "link": ""
    },
    {
      "menu": "Connexion",
      "link": "/Connexion"
    },
    {
      "menu": "Gestion commandes",
      "link": "/GestComamndes"
    },
    {
      "menu": "Article",
      "link": "/Article"
    },
  ];

});

App.controller('footer', function footer($scope) {
    $scope.footer = [
        {
          "title": "Contacts",
          "dn": "060102004",
          "dn": "emails@exemple.com",
          "dn": "10 rue de Paris, Paris, 60200"
    
        },
        {
          "title": "service",
          "dn": "Liste",
          "dn": "De service",
          "dn": "J\'ai pas",
          "dn": "Trop",
          "dn": "D\'idée"
        },
        {
          "title": "horaire",
          "dn": "Lundi 8h - 19h",
          "dn": "Mardi 8h - 19h",
          "dn": "Jeudi 8h - 19h",
          "dn": "Vendredi 8h - 19h"
        }
    
      ];
});



  
app.
module('app').
config(['$routeProvider',
  function ($routeProvider) {
    $routeProvider.
      when('/', {templateUrl: 'part/index.html'}).
      when('/Connexion', {
        templateUrl: 'part/Connexion.html'
      })
      .otherwise({
        redirectTo: '/'
      });
     
  }
]);