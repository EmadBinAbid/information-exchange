import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EDLoginComponent } from './components/edlogin/edlogin.component';
import { IELoginComponent } from './components/ie-login/ie-login.component';
import { IERegisterComponent } from './components/ie-register/ie-register.component';
import { IEHeaderComponent } from './components/ie-header/ie-header.component';
import { IEFooterComponent } from './components/ie-footer/ie-footer.component';
import { IEAppComponent } from './components/ie-app/ie-app.component';
import { IELandingPageComponent } from './components/ie-landing-page/ie-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    EDLoginComponent,
    IELoginComponent,
    IERegisterComponent,
    IEHeaderComponent,
    IEFooterComponent,
    IEAppComponent,
    IELandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
