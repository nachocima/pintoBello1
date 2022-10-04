import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './dashboard/login/login.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AltaClienteComponent } from './dashboard/alta-cliente/alta-cliente.component';
import { ModificarClienteComponent } from './dashboard/modificar-cliente/modificar-cliente.component';
import { NabvarComponent } from './dashboard/nabvar/nabvar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    AltaClienteComponent,
    ModificarClienteComponent,
    NabvarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
