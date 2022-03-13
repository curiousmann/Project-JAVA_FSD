import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Ship } from '../ship';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-enrolsto',
  templateUrl: './enrolsto.component.html',
  styleUrls: ['./enrolsto.component.css']
})
export class EnrolstoComponent implements OnInit {



  ngOnInit(): void {
  }
  name:string=""
  pass:string=""
  today=new Date()
  msg:string=""
  userid:string=""
  ship : Ship = new Ship()
  constructor(private service:ShipService,private router: Router) { } 
  
  
  submit(){
  this.ship.userId='S'+this.today.getMinutes().toString()+this.today.getSeconds().toString()
  this.userid=this.ship.userId
  this.ship.name=this.name
  this.ship.pass=this.pass
  this.service.createShip(this.ship).subscribe(data=>{this.msg=data.type;});
  
    this.ship = new Ship() 
  }
}
