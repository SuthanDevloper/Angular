import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { StudentmanagenetComponent } from './studentmanagenet/studentmanagenet.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';

const routes: Routes = [
 //{ path:'',component:StudentmanagenetComponent},
  {path:'studentmanagement',component:StudentmanagenetComponent},
  {path:'updatestudent/:id',component:UpdatestudentComponent}, // step 2 getting from routelink
  { path:'home', component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'add-student',component:AddstudentsComponent}
  
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
