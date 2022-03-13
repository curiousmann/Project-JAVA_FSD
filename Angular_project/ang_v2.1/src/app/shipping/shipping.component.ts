import { Component, OnInit } from '@angular/core';
import { Ship } from '../ship';
import { ShipService } from '../ship.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  message:Ship=new Ship();
  constructor(private service:ShipService) { }
  ngOnInit(): void {
    this.service.currentMessage3.subscribe(message2=>this.message=message2)
  }


}
