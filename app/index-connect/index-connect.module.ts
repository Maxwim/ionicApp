import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexConnectPageRoutingModule } from './index-connect-routing.module';

import { IndexConnectPage } from './index-connect.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // HttpClient,
    IonicModule,
    IndexConnectPageRoutingModule
  ],
  declarations: [IndexConnectPage]
})
export class IndexConnectPageModule {}
