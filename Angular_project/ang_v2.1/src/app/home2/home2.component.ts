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

    ship : Ship = new Ship()
    constructor(private router: Router,private service:ShipService) { } 
    

  checkLogin(tx1:any){
    this.service.getOneShip(this.userId).subscribe(data=>{
      console.log(this.ship)
        if(this.password==data.pass){
          this.ship=data
         }else{
     
           this.msg="Invalied User ID or Password";
           tx1.focus();
         }
    })
   
  }

  ngOnInit(): void {}

  onSubmit(){
    if(this.ship.userId.charAt(0)=='A'){
      this.router.navigateByUrl('/admin');
    }
    else if(this.ship.userId.charAt(0)=='E'){
      this.router.navigateByUrl('/employye');
    }
    else if(this.ship.userId.charAt(0)=='S'){
      this.router.navigateByUrl('/store');
    }
    // else if(this.ship.userId.charAt(0)=='C'){
    //   this.router.navigateByUrl('/customer');
    // }
    else
    console.log("No UserId Found in Database")
  }

}

