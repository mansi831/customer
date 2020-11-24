import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomerListServicesComponent } from './customer-list-services/customer-list-services.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    ErrorPageComponent,
    CustomerListServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
