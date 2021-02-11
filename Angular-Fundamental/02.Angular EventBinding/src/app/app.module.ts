import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/interpolation/card/card.component';
import { TourCardComponent } from './components/prop-binding/tour-card/tour-card.component';
import { MessagecardComponent } from './components/eventsbinding/messagecard/messagecard.component';
import { DetailsCardComponent } from './components/template-ref/details-card/details-card.component';
import { ProductComponent } from './components/eventsbinding/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    TourCardComponent,
    MessagecardComponent,
    DetailsCardComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
