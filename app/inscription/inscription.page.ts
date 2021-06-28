import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  constructor(private http: HttpClient){
    // private auth: AuthService,
  }
   message = '';

  form = new FormGroup({
    emails: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    username: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    password: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(3)]), 
  });
  onSubmit(){
    let emails = this.form.value.emails; 
    let username = this.form.value.username; 
    let password = this.form.value.password; 
    let passwordRepeat = this.form.value.passwordRepeat; 
    let api = 'newRegister';
    this.register(api ,emails, username, password, passwordRepeat);
  }
  
  register(api: string, emails: string, username: string, password: string, passwordRepeat: string) {
    const url = 'http://localhost/ionic/PremierProjet/Server/API.php'; // Link is not really
    const body = JSON.stringify({api: api,
                                 emails: emails,
                                 username: username,  
                                 password: password,
                                 passwordRepeat: passwordRepeat});
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    this.http.post(url, body, {headers: headers}).subscribe(
        (data) => {
            console.log(data);
              this.message = data['InscriptionMessage'];
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
