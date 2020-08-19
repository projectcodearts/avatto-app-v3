import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SyllabusDetailsService {

  constructor(private http:HttpClient) { }
  getsyllabusDetails(id){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/page-details/'+id);
  }
}
