import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductsComponent } from './Components/products/products.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductCardDirective } from './Directives/product-card.directive';
import { CridtCardPipePipe } from './Pipes/cridt-card-pipe.pipe';
import { ParentComponentComponent } from './Components/parent-component/parent-component.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { RoutesGroupComponent } from './Components/routes-group/routes-group.component';
import { HttpClientModule } from '@angular/common/http';
import { SuesrAuthComponent } from './Components/suesr-auth/suesr-auth.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { UserTemplateDrivenFormComponent } from './User/user-template-driven-form/user-template-driven-form.component';
import { ProductTermplateDrivenComponent } from './Products/product-termplate-driven/product-termplate-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent,
    HeaderComponent,
    ProductCardDirective,
    CridtCardPipePipe,
    ParentComponentComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    HomeComponent,
    ProductDetailsComponent,
    RoutesGroupComponent,
    SuesrAuthComponent,
    OrdersComponent,
    UserTemplateDrivenFormComponent,
    ProductTermplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
