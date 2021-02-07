import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }  from '@angular/forms';
import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SamplecustomDirective } from './samplecustom.directive';
import { BasicapplieddirectiveComponent } from './basicapplieddirective/basicapplieddirective.component';
import { BasicdrivenformsComponent } from './basicdrivenforms/basicdrivenforms.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { StudentmanagenetComponent } from './studentmanagenet/studentmanagenet.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { BasictitlePipe } from './basictitle.pipe';
import { BasicinputandoutputsComponent } from './basicinputandoutputs/basicinputandoutputs.component';
import { BasicreactiveformComponent } from './basicreactiveform/basicreactiveform.component';


@NgModule({
  declarations: [
    AppComponent,
    Sample1Component,
    PipeComponent,
    HomeComponent,
    ContactusComponent,
    SamplecustomDirective,
    BasicapplieddirectiveComponent,
    BasicdrivenformsComponent,
    UsermanagementComponent,
    StudentmanagenetComponent,
    AddstudentsComponent,
    UpdatestudentComponent,
    BasictitlePipe,
    BasicinputandoutputsComponent,
    BasicreactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
