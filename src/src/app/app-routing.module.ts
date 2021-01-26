import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesProductosComponent } from './components/detalles-productos/detalles-productos.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';


const routes: Routes = [
  {path: '',redirectTo:'/login', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'main', component: MainComponent},
  {path:'Detalles', component: DetallesProductosComponent},
  {path:'Detalles/:id', component: DetallesProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
