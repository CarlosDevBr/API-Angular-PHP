import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/Http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
