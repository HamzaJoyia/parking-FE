import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Import the FormsModule






import { AppComponent } from './app.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
// import { CustomerPortalComponent } from './customer-portal.component';
import { CustomerPortalComponent } from './customer-portal/customer-portal.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminPortalComponent,
    CustomerPortalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
