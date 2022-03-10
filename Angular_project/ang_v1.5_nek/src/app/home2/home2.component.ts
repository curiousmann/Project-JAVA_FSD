import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShipService } from '../ship.service'; import { Ship } from '../ship'; 
@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  title = 'login-app';


  userId:number=0;
  password:string="";
  msg:string="";

  myClass:string="";


    ship : Ship = new Ship();  
    constructor( private route: ActivatedRoute, 
      private router: Router,private service:ShipService) { } 
    

  checkLogin(tx1:any){
    this.service.getOneShip(this.userId).subscribe(data=>{
      this.ship=data
      console.log(this.userId,this.password)
      console.log(this.ship)
  
      if(this.userId==this.ship.userId&&this.password==this.ship.pass){
        this.msg="Succesfully Login";
       // this.status="green"
       this.myClass="success"
      }else{
  
        this.msg="Invalied Login";
        //this.status="red";
        this.myClass="fail"
        tx1.focus();
      }
    })
   
  }

  ngOnInit(): void {
  }

}

