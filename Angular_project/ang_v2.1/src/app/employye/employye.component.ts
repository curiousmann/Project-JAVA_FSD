import { Component, OnInit } from '@angular/core';
import { ShipService } from '../ship.service';
@Component({
  selector: 'app-employye',
  templateUrl: './employye.component.html',
  styleUrls: ['./employye.component.css']
})
export class EmployyeComponent implements OnInit {
  constructor(private service:ShipService) { }

  message:string="";
  ngOnInit(): void {
    this.service.currentMessage.subscribe(message=>this.message=message)
  }
}
