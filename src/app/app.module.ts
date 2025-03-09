import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { BaseLayoutComponent } from './layouts/base-layout/base-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutsComponent,
    BaseLayoutComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AboutUsComponent,
    ContactComponent,
    MenuComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
