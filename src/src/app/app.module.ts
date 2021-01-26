import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetallesProductosComponent } from './components/detalles-productos/detalles-productos.component';
import { ProductoComponent } from './components/producto/producto.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';

//import { AgmCoreModule } from '@agm/core';
import { NgxPayPalModule } from 'ngx-paypal';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { SesionErrorComponent } from './components/sesion-error/sesion-error.component';
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ListaProductosComponent,
    DetallesProductosComponent,
    ProductoComponent,
    SesionErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    MatIconModule,
    MatDialogModule,
    NgxPayPalModule
    /*AgmCoreModule.forRoot({
      apiKey: ''    
   })*/
    

  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
