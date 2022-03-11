
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { Ship } from '../ship';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {
  }

  msg:string=""
  name:string=""
  addr:string=""
  phn:string=""
email:string=""
peop:number=0
god:number=0
today=new Date()

    ship : Ship = new Ship()
    constructor(private service:ShipService) { } 


  submit(){
    this.ship.userId=this.today.getHours().toString()+this.today.getMinutes().toString()+this.today.getSeconds().toString()
    this.ship.userType="cust"
    this.ship.name=this.name
    this.ship.addr=this.addr
    this.ship.phn=this.phn
    this.ship.email=this.email
    this.ship.pep=this.peop
    this.ship.god=this.god
this.service.createShip(this.ship).subscribe(data=>{this.msg=data.type})
 alert("Reservation Successfull") 
      this.ship = new Ship() 
  }

}
