import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from './ship'; 
import { Observable } from 'rxjs'; 
import { Message } from './message'; 
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

  private messageSource = new BehaviorSubject<string>("");
  currentMessage = this.messageSource.asObservable();

  changeMssg(message:string){
    this.messageSource.next(message)
  }

  private messageSource2 = new BehaviorSubject<string[]>([]);
  currentMessage2 = this.messageSource2.asObservable();

  changeMssg2(message:string[]){
    this.messageSource2.next(message)
  }

  private messageSource3 = new BehaviorSubject<Ship>(new Ship());
  currentMessage3 = this.messageSource3.asObservable();

  changeMssg3(message:Ship){
    this.messageSource3.next(message)
  }

  private baseUrl : string = 'http://localhost:9898/springboot-crud-rest/rest/ship'
  constructor(private http:HttpClient) { }

  getAllShips():Observable<Ship[]>{ 
    return this.http.get<Ship[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneShip(id:String):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createShip(ship:Ship):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,ship); 
  }  
  getOneShip(id:String):Observable<Ship>{ 
    return this.http.get<Ship>(`${this.baseUrl}/one/${id}`); 
  }  
  updateShip(ship:Ship):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,ship); 
  } 

}
