import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    //The base layout serves as the main page. All others are children being redirected.
    path: '',
    component: BaseLayoutComponent,
    children: [

    {
      path: '',
      component: HomeComponent,
      title: "SweetCakes: Home"
    },

    {
    path: 'home',
    component: HomeComponent
    },
    {
      path: 'menu',
      component: MenuComponent
    },
    {
      path: 'about',
      component: AboutUsComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'sign-in',
      component: SignInComponent
    }
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
