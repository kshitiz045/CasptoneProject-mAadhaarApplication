import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DeleteCardComponent } from './delete-card/delete-card.component';
import { FreshCardComponent } from './fresh-card/fresh-card.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateCardComponent } from './update-card/update-card.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"adminHome",component:AdmindashboardComponent},
  {path:"userHome",component:UserdashboardComponent},
  // {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"userHome/freshcard", component:FreshCardComponent},
  {path:"userHome/updatecard",component:UpdateCardComponent},
  {path:"userHome/deletecard",component:DeleteCardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
