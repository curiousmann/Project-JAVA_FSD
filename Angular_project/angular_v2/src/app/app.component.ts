import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './student.service'; 

import { Student } from './student'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';


  userId:number=0;
  password:string="";
  msg:string="";

  myClass:string="";


    student : Student = new Student();  
    constructor( private route: ActivatedRoute, 
      private router: Router,private service:StudentService) { } 

      ngOnInit(): void {};

  checkLogin(tx1:any){
    this.service.getOneStudent(this.userId).subscribe(data=>{
      this.student=data
      console.log(this.userId,this.password)
      console.log(this.student)
  
      if(this.userId==this.student.empId&&this.password==this.student.empPass){
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
}
