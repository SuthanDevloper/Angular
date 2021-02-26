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
import { MesaageCardComponent } from './components/Form Binding/mesaage-card/mesaage-card.component';
import { UserCardComponent } from './components/Form Binding/user-card/user-card.component';
import { SmsAppComponent } from './components/Form Binding/sms-app/sms-app.component';
import { ChangePasswordComponent } from './components/Form Binding/change-password/change-password.component';
import { RegisterFormComponent } from './components/Form Binding/register-form/register-form.component';
import { LoginuserComponent } from './components/Structure Directives/loginuser/loginuser.component';
import { HobbySelectorComponent } from './components/Structure Directives/hobby-selector/hobby-selector.component';
import { NgSwithComponent } from './components/Structure Directives/ng-swith/ng-swith.component';
import { NgIfEmployeeComponent } from './components/Structure Directives/ng-for-employee/ng-if-employee.component';

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
    RegisterFormComponent,
    LoginuserComponent,
    HobbySelectorComponent,
    NgSwithComponent,
    NgIfEmployeeComponent
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
