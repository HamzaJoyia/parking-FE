import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';

// have added routes
const routes: Routes = [
  { path: 'admin', component: AdminPortalComponent },
  { path: 'customer', component: CustomerPortalComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
