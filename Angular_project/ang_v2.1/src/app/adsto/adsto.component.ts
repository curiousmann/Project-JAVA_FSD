import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-adsto',
  templateUrl: './adsto.component.html',
  styleUrls: ['./adsto.component.css']
})
export class AdstoComponent implements OnInit {


    ngOnInit(): void {
  }

  ships: Ship[] = []; 
ship2:Ship[]=[]
  ship:Ship = new Ship();
  ship3:Ship = new Ship();
  today=new Date
  msg:String=""
  constructor(private service:ShipService) {
     this.getAllShips2();
  } 


  name:string=""
  submit(){
    this.ship3 = new Ship();
    this.ship3.prchsId='P'+this.today.getMinutes().toString()+this.today.getSeconds().toString()
    this.ship3.userId=this.ship3.prchsId
    this.ship3.eqmtNm=this.name
  
    this.service.createShip(this.ship3).subscribe(data=>{this.msg=data.type;})
    this.getAllShips2()
  }


  getAllShips2(){     
    this.service.getAllShips().subscribe(
    (resp) => {
    this.ships=resp; 
    }).add(() => {
      this.ship2=this.ships.filter((e)=>{return e.prchsId})
  
      });
    
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
  // editShip(id:number){ 
  //   this.router.navigate(['edit',id]); 
  // } 

 
}
