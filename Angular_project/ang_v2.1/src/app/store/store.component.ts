import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private service:ShipService) { }

  message:string="";
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message=>this.message=message)
  }

}
