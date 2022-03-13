import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-adship',
  templateUrl: './adship.component.html',
  styleUrls: ['./adship.component.css']
})
export class AdshipComponent implements OnInit {

  constructor(private service:ShipService) { }

  message:string[]=[];
  ngOnInit(): void {
    this.service.currentMessage2.subscribe(message=>this.message=message)
  }
ships2:string[]=[]
name:string=""

submit(){
this.ships2.push(this.name)
this.service.changeMssg2(this.ships2)
}
delete(i:number){
  this.ships2.splice(i)
  this.service.changeMssg2(this.ships2)
}
}
