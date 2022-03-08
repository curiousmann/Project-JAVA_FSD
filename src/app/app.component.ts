import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';

  username:string="";
  password:string="";
  msg:string="";
  status:string="";
  myClass:string="";

  checkLogin(tx1:any){
    if(this.username=="admin"&&this.password=="admin"){
      this.msg="Succesfully Login";
     // this.status="green"
     this.myClass="success"
    }else{
      this.msg="Invalied Login";
      //this.status="red";
      this.myClass="fail"
      tx1.focus();
    }
  }
}
