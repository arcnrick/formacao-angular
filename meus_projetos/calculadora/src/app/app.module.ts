import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// import { CalculadoraModule } from './calculadora/calculadora.module';
// o import acima pode ser substituído pelo debaixo por causa do index.ts criado dentro de calculadora
import { CalculadoraModule } from './calculadora';


@NgModule({
  declarations: [
    AppComponent
  ],
  
  imports: [
    BrowserModule,
    CalculadoraModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
