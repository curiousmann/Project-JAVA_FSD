import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { AdresComponent } from './adres/adres.component';
import { AdshipComponent } from './adship/adship.component';
import { AdstoComponent } from './adsto/adsto.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmbillComponent } from './embill/embill.component';
import { EmployyeComponent } from './employye/employye.component';
import { EmpmanComponent } from './empman/empman.component';
import { EmtimComponent } from './emtim/emtim.component';
import { EmtskComponent } from './emtsk/emtsk.component';
import { EnrolComponent } from './enrol/enrol.component';
import { EnroladmComponent } from './enroladm/enroladm.component';
import { EnrolempComponent } from './enrolemp/enrolemp.component';
import { EnrolstoComponent } from './enrolsto/enrolsto.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RegisterComponent } from './register/register.component';
import { ShippingComponent } from './shipping/shipping.component';
import { SthisComponent } from './sthis/sthis.component';
import { StoreComponent } from './store/store.component';
import { StpurComponent } from './stpur/stpur.component';


const routes: Routes = [
  {path:'admin',component:AdminComponent,
children:[
  {path:'empman',component:EmpmanComponent},
  {path:'adship',component:AdshipComponent},
  {path:'adres',component:AdresComponent},
  {path:'adsto',component:AdstoComponent},
  {path:'enrol',component:EnrolComponent,children:[
    {path:'enroladm',component:EnroladmComponent},
    {path:'enrolemp',component:EnrolempComponent},
    {path:'enrolsto',component:EnrolstoComponent}
  ]}
]},    {path:'shipping',component:ShippingComponent},
  {path:'store',component:StoreComponent,
  children:[
    {path:'stpur',component:StpurComponent},
    {path:'sthis',component:SthisComponent}
  ]},
  {path:'employye',component:EmployyeComponent,
  children:[
    {path:'emtim',component:EmtimComponent},
    {path:'emtsk',component:EmtskComponent},
    {path:'embill',component:EmbillComponent}
  ]},
  {path:'home',component:HomeComponent, 
  children:[
    {path: 'about',component:AboutusComponent},
    {path:'contact',component:ContactusComponent},
    {path:'home2',component:Home2Component},
  ]},{path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
