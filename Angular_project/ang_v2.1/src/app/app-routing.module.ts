import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployyeComponent } from './employye/employye.component';
import { EmpmanComponent } from './empman/empman.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StoreComponent } from './store/store.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,
children:[
  {path:'empman',component:EmpmanComponent}
]},
  {path:'store',component:StoreComponent},
  {path:'employye',component:EmployyeComponent},
  {path:'home',component:HomeComponent, 
  children:[
    {path: 'about',component:AboutusComponent},
    {path:'contact',component:ContactusComponent},
    {path:'home2',component:Home2Component},
    {path:'shipping',component:ShippingComponent}
  ]},{path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
