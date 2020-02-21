import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProductsComponent } from './component/products/products.component';
import { CartComponent } from './component/cart/cart.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AboutUsComponent } from './component/about-us/about-us.component';



const routes: Routes = [

    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent },
    {path: 'home', component: HomeComponent },
    {path: 'products/:id', component: ProductsComponent },
    {path: 'cart', component: CartComponent },
    {path: 'about-us', component: AboutUsComponent},
    {path : '**', component: PageNotFoundComponent}
    
]



@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]

})

export class AppRoutingModule{

}