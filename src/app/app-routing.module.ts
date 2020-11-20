import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path:'customer', component: CustomerListComponent },
  { path:'', redirectTo:'/customer', pathMatch:'full' },
  { path:'**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
