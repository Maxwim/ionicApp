import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IndexConnectPageRoutingModule } from './index-connect-routing.module';

import { IndexConnectPage } from './index-connect.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HttpClient,
    IonicModule,
    IndexConnectPageRoutingModule
  ],
  declarations: [IndexConnectPage]
})
export class IndexConnectPageModule {}
