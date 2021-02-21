import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*import { CardComponent } from './components/interpolation/card/card.component';
import { TourCardComponent } from './components/prop-binding/tour-card/tour-card.component';
import { MessagecardComponent } from './components/eventsbinding/messagecard/messagecard.component';
import { DetailsCardComponent } from './components/template-ref/details-card/details-card.component';
import { ProductComponent } from './components/eventsbinding/product/product.component';*/
import {FormsModule} from '@angular/forms';
import { MesaageCardComponent } from './components/mesaage-card/mesaage-card.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { SmsAppComponent } from './components/sms-app/sms-app.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    // CardComponent,
   // TourCardComponent,
    //MessagecardComponent,
   // DetailsCardComponent,
   // ProductComponent,
    MesaageCardComponent,
    UserCardComponent,
    SmsAppComponent,
    ChangePasswordComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
