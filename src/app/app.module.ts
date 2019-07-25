import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {Componente1Component} from './componente1/componente1.component';
import {GeneradorService} from './service/generador.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    RouterModule,
    HttpClientModule
  ],
  providers: [GeneradorService],
  bootstrap: [Componente1Component]
})
export class AppModule {
}
