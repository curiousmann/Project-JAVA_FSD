import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service:ShipService) { }

  message:string="";
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message=>this.message=message)
  }
}
