import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Message } from '../message';
import { Ship } from '../ship';
import { ShipService } from '../ship.service';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
declare var require: any;
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
@Component({
  selector: 'app-adres',
  templateUrl: './adres.component.html',
  styleUrls: ['./adres.component.css']
})
export class AdresComponent implements OnInit {

  ngOnInit(): void {
  }
  ships: Ship[] = []; 
  ships2: Ship[]=[];
  message2  : Message = new Message(); 
  ship:Ship = new Ship();
  sump:number=0
  sumg:number=0


 
  @ViewChild('pdfTable')
  pdfTable!: ElementRef;
  
  public makePdf() {
    const pdfTable = this.pdfTable.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download('customer details.pdf'); 
     
  }





  constructor(private service:ShipService) {
      this.getAllShips();
  } 
  
  getAllShips(){
    this.service.getAllShips().subscribe(
    (resp) => {
    console.log(resp);
    this.ships=resp;
    }).add(() => {
      this.ships2=this.ships.filter((e)=>{return e.userId
        .indexOf('C')==0})

this.ships2.forEach(element => {this.sump=this.sump+element.pep;
  this.sumg=this.sumg+element.god;
});

      })
    
   // this.ships.find(x => x.userId === )
    
    }
  
  // deleteShip(id:number){ 
  //   this.service.deleteOneShip(id).subscribe( 
  //     data=>{         
  //       this.message=data,         
  //       this.getAllShips(); 
  //     }, 
  //     error=>{console.log(error)} 
  //     ); 
  //      } 
  // editShip(id:number){ 
  //   this.router.navigate(['edit',id]); 


}
