import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { ParentComponentComponent } from './Components/parent-component/parent-component.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HomeComponent } from './Components/home/home.component';
import { RoutesGroupComponent } from './Components/routes-group/routes-group.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SuesrAuthComponent } from './Components/suesr-auth/suesr-auth.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { userGuard } from './Guards/user.guard';
import { UserTemplateDrivenFormComponent } from './User/user-template-driven-form/user-template-driven-form.component';
import { ProductTermplateDrivenComponent } from './Products/product-termplate-driven/product-termplate-driven.component';
import { UserModule } from './Components/user/user.module';

const routes: Routes = [
  {
    path: 'Products',
    component: ParentComponentComponent,
    title: 'Products',
    canActivate: [userGuard],
  },
  {
    path: 'ProductDetails/:id',
    component: ProductDetailsComponent,
    title: 'Details',
    canActivate: [userGuard],
  },
  { path: 'Home', component: HomeComponent, title: 'Home Page' },
  { path: 'AboutUs', component: AboutUsComponent, title: 'About Us' },
  { path: 'ContactUs', component: ContactUsComponent, title: 'Contact US' },
  { path: 'userLogIn', component: SuesrAuthComponent, title: 'Log in Page' },
  { path: 'userLogOut', component: SuesrAuthComponent, title: 'Log Out Page' },
  {
    path: 'UserTemplate',
    component: UserTemplateDrivenFormComponent,
    title: 'User Temlate Driven',
    canActivate: [userGuard],
  },
  {
    path: 'ProductTemplate',
    component: ProductTermplateDrivenComponent,
    canActivate: [userGuard],
  },
  {
    path: 'ProductTemplate/:id',
    component: ProductTermplateDrivenComponent,
    canActivate: [userGuard],
  },
  {
    path: 'UserLazy',
    loadChildren: () =>
      import('./Components/user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }, //Default Path
  { path: '**', component: NotFoundComponent, title: '404 Not Found' }, //Not Found Path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
