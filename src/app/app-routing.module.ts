import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccesoComponent } from './components/acceso/acceso.component';
import { DatosPersComponent } from './components/datos-pers/datos-pers.component';
import { EditPersComponent } from './components/edit-pers/edit-pers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { LogoDCComponent } from './components/logo-dc/logo-dc.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'logo-dc', component: LogoDCComponent},
  {path: 'acceso', component: AccesoComponent},
  {path: 'datos-pers', component: DatosPersComponent},
  {path: 'edit-pers', component: EditPersComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
