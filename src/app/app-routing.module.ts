import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListServicesComponent } from './customer-list-services/customer-list-services.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path:'customer', component: CustomerListComponent },
  { path:'', redirectTo:'/customer', pathMatch:'full' },
  { path: 'service', component: CustomerListServicesComponent },
  { path:'**', component: ErrorPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
