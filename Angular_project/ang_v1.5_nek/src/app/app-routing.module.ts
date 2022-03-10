import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';


const routes: Routes = [
  //{path:'',component:HomeComponent},
  {path:'home',component:HomeComponent, 
  children:[
    {path: 'about',component:AboutusComponent},
    {path:'contact',component:ContactusComponent},
    {path:'home2',component:Home2Component}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
