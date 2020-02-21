import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http'


import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { FooterComponent } from './component/footer/footer.component';

import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { AppRoutingModule } from "./app-routing.module";
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { FormsModule ,ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    
    ProductsComponent,
    
    CartComponent,
    
    LoginComponent,
    
    RegisterComponent,
    
    PageNotFoundComponent,
    
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
