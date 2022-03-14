import { Component, OnInit, ViewChild } from '@angular/core';
import { ShipService } from '../ship.service';
import { jsPDF } from "jspdf"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:ShipService) { }

  message:string="";
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message=>this.message=message)
  }
//@ViewChild() 

  makePdf(){
    let pdf = new jsPDF();
    pdf.text("Manu Joy",10,10);
    pdf.save();
  }
}
