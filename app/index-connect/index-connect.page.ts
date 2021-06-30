import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { DOCUMENT } from '@angular/common'; 
// import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-index-connect',
  templateUrl: './index-connect.page.html',
  styleUrls: ['./index-connect.page.scss'],
})

export class IndexConnectPage {
  private api = 'getLieu'; // Permet de récupèrer tout les lieux de la base de donnée
  // La c'est une simple requête, mais en ajoutant des fonctions à la requête http et la requête sql ça peu faire des choses bien
  data;
  // element: HTMLElement; 
  constructor(private http: HttpClient, protected router: Router) {
    this.data = this.generate();   
   }
   public message;
   form = new FormGroup({
    id_article: new FormControl('', [Validators.required]), 
  });

  //  box = new FormGroup({
  //   id_article: new FormControl('', [Validators.required]),   
  // });
   generate(){ 
     
    const url = 'http://localhost/ionic/PremierProjet/Server/API.php'; // Simple API avec base de donnée et clef 
    const bodys = JSON.stringify({api: this.api});
    const headers = new HttpHeaders();
    const http = this.http;
    
    // header requête
    headers.set('Content-Type', 'application/json;charset=UTF-8');

    http.post(url, bodys, {headers: headers}).subscribe(
        (data) => {
            // Réponse de la requête en JSON utilisable avec angular directement dans .html
            this.data = data; 
         

          },        
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                this.message = 'Erreur';
            } else {
              this.message = 'Erreur';
            }
        });
      }
  index(){
    this.router.navigate(['/']);
  }
  goArticle(){

    // console.log(this.form.value.id_article); ?

    // console.log(id_article);
    this.router.navigate(['/articles']);
  }
  
}
