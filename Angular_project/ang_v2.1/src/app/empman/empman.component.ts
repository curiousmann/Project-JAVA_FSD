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


  ngOnInit(): void {
  }
  ships: Ship[] = []; 
  message  : Message = new Message(); 
  ship:Ship = new Ship();
  
  constructor(private service:ShipService, private router:Router,
    private route: ActivatedRoute) {
      this.getAllShips();
  } 
  
  getAllShips(){
    this.service.getAllShips().subscribe(
    (resp) => {
    console.log(resp);
    this.ships=resp;
    },
    (err) => {
    console.log(err);
    }
    
    );
    
    }
  
  // deleteShip(id:number){ 
  //   this.service.deleteOneShip(id).subscribe( 
  //     data=>{         
  //       this.message=data,         
  //       this.getAllShips(); 
  //     }, 
  //     error=>{console.log(error)} 
  //     ); 
  //      } 
  // editShip(id:number){ 
  //   this.router.navigate(['edit',id]); 
  // } 
}
