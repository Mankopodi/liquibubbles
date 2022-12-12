import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './Components/Authentication/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Authentication/sign-up/sign-up.component';
import { ContactsComponent } from './Components/contacts/contacts.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ProductsComponent } from './Components/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    ContactsComponent,
    AboutUsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
