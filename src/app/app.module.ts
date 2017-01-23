import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    BrandLogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
