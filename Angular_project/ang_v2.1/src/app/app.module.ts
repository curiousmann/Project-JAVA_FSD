import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { EmployyeComponent } from './employye/employye.component';
import { StoreComponent } from './store/store.component';
import { ShippingComponent } from './shipping/shipping.component';
import { EmpmanComponent } from './empman/empman.component';
import { AdshipComponent } from './adship/adship.component';
import { AdresComponent } from './adres/adres.component';
import { AdstoComponent } from './adsto/adsto.component';
import { StpurComponent } from './stpur/stpur.component';
import { SthisComponent } from './sthis/sthis.component';
import { EmtimComponent } from './emtim/emtim.component';
import { EmtskComponent } from './emtsk/emtsk.component';
import { EmbillComponent } from './embill/embill.component';
import { EnrolComponent } from './enrol/enrol.component';
import { EnrolempComponent } from './enrolemp/enrolemp.component';
import { EnrolstoComponent } from './enrolsto/enrolsto.component';
import { EnroladmComponent } from './enroladm/enroladm.component' 

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    Home2Component,
    RegisterComponent,
    AdminComponent,
    EmployyeComponent,
    StoreComponent,
    ShippingComponent,
    EmpmanComponent,
    AdshipComponent,
    AdresComponent,
    AdstoComponent,
    StpurComponent,
    SthisComponent,
    EmtimComponent,
    EmtskComponent,
    EmbillComponent,
    EnrolComponent,
    EnrolempComponent,
    EnrolstoComponent,
    EnroladmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
