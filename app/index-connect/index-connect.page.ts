import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-index-connect',
  templateUrl: './index-connect.page.html',
  styleUrls: ['./index-connect.page.scss'],
})
export class IndexConnectPage {
  private api = 'getLieu';
  data;
  
  constructor(private http: HttpClient) {
    this.data = this.generate();   
   }
   public message;
  generate(){
    const url = 'http://localhost/ionic/PremierProjet/Server/API.php'; // Link is not really
    const bodys = JSON.stringify({api: this.api});
    const headers = new HttpHeaders();
    const http = this.http;
    
    // Content-Type: application/x-www-form-urlencoded
    headers.set('Content-Type', 'application/json;charset=UTF-8');
    http.post(url, bodys, {headers: headers}).subscribe(
        (data) => {
            // console.log(data['ConnexionMessage']);
            this.data = data;
            // console.log(this.data['lat'])

          },        
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                this.message = 'Erreur';
            } else {
              this.message = 'Erreur';
            }
        });
    
  }
  
  
}
