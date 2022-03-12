import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ship } from './ship'; 
import { Observable } from 'rxjs'; 
import { Message } from './message'; 

@Injectable({
  providedIn: 'root'
})
export class ShipService {

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
