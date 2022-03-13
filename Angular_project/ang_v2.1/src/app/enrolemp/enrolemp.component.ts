import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Ship } from '../ship';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-enrolemp',
  templateUrl: './enrolemp.component.html',
  styleUrls: ['./enrolemp.component.css']
})
export class EnrolempComponent implements OnInit {

  ngOnInit(): void {
  }
name:string=""
pass:string=""
today=new Date()
msg:string=""
userid:string=""
tskDtl:string=""
ship : Ship = new Ship()
constructor(private service:ShipService,private router: Router) { } 


submit(){
this.ship.userId='E'+this.today.getMinutes().toString()+this.today.getSeconds().toString()
this.userid=this.ship.userId
this.ship.name=this.name
this.ship.pass=this.pass
this.ship.tskDtl=this.tskDtl
this.service.createShip(this.ship).subscribe(data=>{this.msg=data.type;});

  this.ship = new Ship() 
}
}
