

// Menu Header 
app.controller('header',  function header($scope) {
    $scope.logo = {'name':'website'};
  
    $scope.menu = [
      
      {
        "menu": "Accueil",
        "link": ""
      },
      {
        "menu": "Connexion",
        "link": "Connexion"
      },
      {
        "menu": "Gestion commandes",
        "link": "GestComamndes"
      },
      {
        "menu": "Article",
        "link": "Article"
      },
    ];
  
  });
  app.controller('mainIndex', function($scope){
    $scope.articles= [{
        "id" : "1",
        "titre" : "Le titreee",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "1",
        "titre" : "Le titreeefdfds",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "2",
        "titre" : "Le titreee Le titreee",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "3",
        "titre" : "Lorem ipsum dolor sit ",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "4",
        "titre" : "Lorem ipsum dolor sit ",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "5",
        "titre" : "Lorem ipsum dolor sit ",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "6",
        "titre" : "Lorem ipsum dolor sit ",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },{
        "id" : "7",
        "titre" : "Lorem ipsum dolor sit  Lorem ipsum dolor sit ",
        "imgLink" : "https://picsum.photos/200",
        "text" : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores.Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, magnam eum. Et ex voluptas dolores."
    },

]

  });
// Footer 

app.controller('footer', function footer($scope) {
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
//   Permet de récupèrer les informations du fichier JSON.
app.controller('mainCommandes', function($scope, $http){
    // curl "http://localhost/AngularJS-CSS/JustePourTest/index.html"
    $http({
        method: 'GET',//or POST
        url: 'http://localhost/AngularJS-CSS/JustePourTest/index.json',
    }).then(function successCallback(response) {
        $scope.data = response.data;
    });
});
