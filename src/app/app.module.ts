import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoDCComponent } from './components/logo-dc/logo-dc.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { AccesoComponent } from './components/acceso/acceso.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';
import { DatosPersComponent } from './components/datos-pers/datos-pers.component';
import { EditPersComponent } from './components/edit-pers/edit-pers.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoDCComponent,
    LoginComponent,
    HomeComponent,
    BannerComponent,
    AccesoComponent,
    MenuComponent,
    DatosPersComponent,
    EditPersComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
