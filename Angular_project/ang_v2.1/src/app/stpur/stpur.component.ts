import { Component, OnInit } from '@angular/core';
  import { Message } from '../message';
  import { Ship } from '../ship';
  import { ShipService } from '../ship.service';
@Component({
  selector: 'app-stpur',
  templateUrl: './stpur.component.html',
  styleUrls: ['./stpur.component.css']
})
export class StpurComponent implements OnInit {

   
    message2:string="";
    ngOnInit(): void {
      this.service.currentMessage.subscribe(message=>this.message2=message)
    }
  
    ships: Ship[] = []; 
    ships2: Ship[]=[];
    message  : Message = new Message(); 
    message3  : Message = new Message(); 
    ship:Ship = new Ship();
    price:number=0
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
          .indexOf('P')>=0}); 
           console.log(this.ships2)
        })
      
     // this.ships.find(x => x.userId === )
      
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

    done(id:number){
      this.ships2[id].itmInstSts=true
      this.ships2[id].itmPrc=this.price
      this.service.updateShip(this.ships2[id]).subscribe(
        (resp) => {
        console.log(resp);
        this.message3=resp;
        })
    }
  

  
}
