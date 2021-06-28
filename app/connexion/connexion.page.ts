import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { HttpClient, Headers, RequestOptions } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  message = "";
  constructor(private http: HttpClient) {
      // En gros ici je pourrai rajouté la génération d'une clef csrf
   }

  // const datas = "";
  form = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),

  });
  onSubmit(){
    let username = this.form.value.username; 
    let password = this.form.value.password;
    let api = 'newClient';
    this.logIn(api ,username, password);
    
  }
  logIn(api: string, username: string, password: string) {
    // let tetetetete = 'ok';
    const url = 'http://localhost/ionic/PremierProjet/Server/API.php'; // Link is not really
    const bodys = JSON.stringify({api: api,
                                 username: username,
                                 password: password});

    const headers = new HttpHeaders();
    const http = this.http;
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    http.post(url, bodys, {headers: headers}).subscribe(
        (data) => {
            console.log(data['ConnexionMessage']);
            this.message = data['ConnexionMessage'];
            // 
            // if(this.message == 'fasle'){
            //   this.message = 'Mot de passe incorrect ?';
            // }
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                this.message = 'Erreur app';
            } else {
                this.message = 'Erreur erreur réessayer plus tard'
            }
        }
        );
  }
}
