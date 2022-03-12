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


  userId:string="";
  password:string="";
  msg:string="";
  myClass:boolean=false


    ship : Ship = new Ship()
    constructor(private router: Router,private service:ShipService) { } 
    

  checkLogin(tx1:any){
    this.service.getOneShip(this.userId).subscribe(data=>{
        if(this.password==data.pass){
          this.myClass=true
          this.ship=data
         }else{
     
           this.msg="Invalied User ID or Password";
           this.myClass=false
           tx1.focus();
         }
    })
   
  }

  ngOnInit(): void {}

  onSubmit(){
    if(this.myClass==true){
      this.router.navigateByUrl('/admin');
    }
    else
    console.log("will not")
  }

}

