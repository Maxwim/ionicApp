import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {HttpClient} from '@angular/common/http';
// import { registerLocaleData } from '@angular/common';
import { LoadingController } from '@ionic/angular';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage {
  constructor(private http: HttpClient, public loadingController: LoadingController){
    // private auth: AuthService,
  }
   message = '';

  form = new FormGroup({
    emails: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    username: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    password: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    passwordRepeat: new FormControl('', [Validators.required, Validators.minLength(3)]), 
    checkbox: new FormControl('',  [Validators.required,]),
  });
  onSubmit(){
    let emails = this.form.value.emails; 
    let username = this.form.value.username; 
    let password = this.form.value.password; 
    let passwordRepeat = this.form.value.passwordRepeat; 
    let api = 'newRegister';
    this.register(api ,emails, username, password, passwordRepeat);
  }
  
  async register(api: string, emails: string, username: string, password: string, passwordRepeat: string) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Chargement...',
      // duration: 5000
    });
    await loading.present();
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
              loading.dismiss();

        },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                this.message = 'Erreur app';
                loading.dismiss();

            } else {

                this.message = 'Erreur erreur r??essayer plus tard'
                loading.dismiss();

            }
        }
    );
}

}
