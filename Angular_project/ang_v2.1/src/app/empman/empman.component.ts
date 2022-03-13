import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Message } from '../message';
import { Ship } from '../ship';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-empman',
  templateUrl: './empman.component.html',
  styleUrls: ['./empman.component.css']
})
export class EmpmanComponent implements OnInit {

logmn:string=""
  ngOnInit(): void {
  }
  ships: Ship[] = []; 
  ships2: Ship[]=[];
  message2  : Message = new Message(); 
  ship:Ship = new Ship();
  
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
        .indexOf('E')==0})
      })
    
   // this.ships.find(x => x.userId === )
    
    }
  
  // deleteShip(id:number){ 
  //   this.service.deleteOneShip(id).subscribe( 
  //     data=>{         
  //       this.message2=data,         
  //       this.getAllShips(); 
  //     }, 
  //     error=>{console.log(error)} 
  //     ); 
  //      } 
  // editShip(id:number){ 
  //   this.router.navigate(['edit',id]); 
  // } 


 
}
