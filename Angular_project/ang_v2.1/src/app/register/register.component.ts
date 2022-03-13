
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Ship } from '../ship';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {
    document.body.className = "selector";
  }

ngOnDestroy(){
    document.body.className="";
  }

col:string="red"
  msg:string=""
  name:string=""
  addr:string=""
  phon:string=""
email:string=""
peop:number=0
god:number=0
today=new Date()

    ship : Ship = new Ship()
    constructor(private service:ShipService,private router: Router) { } 


  submit(){
    this.ship.userId='C'+this.today.getMinutes().toString()+this.today.getSeconds().toString()
    this.ship.name=this.name
    this.ship.addr=this.addr
    this.ship.phon=this.phon
    this.ship.email=this.email
    this.ship.pep=this.peop
    this.ship.god=this.god
    this.ship.pass=this.today.getHours().toString()+this.today.getMinutes().toString()+this.today.getSeconds().toString()
this.service.createShip(this.ship).subscribe(data=>{this.msg=data.type;}).add(()=>{
  if(this.msg!=""){
    setTimeout(()=>{this.router.navigateByUrl("/shipping") }, 4000)
    
  }
});

      this.ship = new Ship() 
  }


}
