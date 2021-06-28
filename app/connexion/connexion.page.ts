import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  // Message qui serra remplis grâce à la response HTTP
  message = "";
  // PHP a besoin du format "api" pour sélectionné l'action
  private api = 'newClient';
  constructor(private http: HttpClient) {

   }

  // const datas = "";
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),

  });
  // Click sur le bouton onSubmit()
  onSubmit(){
    // Récupération des champs de la form
    let username = this.form.value.username; 
    let password = this.form.value.password;
    // Initialisation de logIn pour les requêtes
    this.logIn(username, password);
    
  }
  logIn(username: string, password: string) {
    // Déclaration de l'url du serveur 
    // Autorisé la prauvenance de service externe sur php
    const url = 'http://localhost/ionic/PremierProjet/Server/API.php'; // Link is not really
    // Informations a passer dans la requête
    const bodys = JSON.stringify({api: this.api,
                                 username: username,
                                 password: password});

    const headers = new HttpHeaders();
    const http = this.http;
      // Déclaration du contenu du header
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    // Envoie de la quête
    http.post(url, bodys, {headers: headers}).subscribe(
        (data) => {
            console.log(data['ConnexionMessage']);
            // La c'est juste un exemple pour tester les réponses d'un serveur
            this.message = data['ConnexionMessage'];
            // Si jamais le serveur vérifier dans la base de donnée 
            // 
            // if(this.message == 'fasle'){
            //   this.message = 'Mot de passe incorrect ?';
            // }
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                // Erreur client, non déterminé
                this.message = 'Erreur app';
            } else {
                // Erreur serveur, connexion mysql ou script.
                this.message = 'Erreur erreur réessayer plus tard'
            }
        }
        );
  }
}
