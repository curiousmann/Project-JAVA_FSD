import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './student'; 
import { Observable } from 'rxjs'; 
import { Message } from './message'; 

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl : string = 'http://localhost:9898/springboot-crud-rest/rest/student'
  constructor(private http:HttpClient) { }

  getAllStudents():Observable<Student[]>{ 
    return this.http.get<Student[]>(`${this.baseUrl}/all`); 
  }  
  deleteOneStudent(id:number):Observable<Message>{ 
    return this.http.delete<Message>(`${this.baseUrl}/remove/${id}`); 
  }  
  createStudent(student:Student):Observable<Message>{ 
    return this.http.post<Message>(`${this.baseUrl}/save`,student); 
  }  
  getOneStudent(id:number):Observable<Student>{ 
    return this.http.get<Student>(`${this.baseUrl}/one/${id}`); 
  }  
  updateStudent(student:Student):Observable<Message>{ 
   return this.http.put<Message>(`${this.baseUrl}/update`,student); 
  } 

}
