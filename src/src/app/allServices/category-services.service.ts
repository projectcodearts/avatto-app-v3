import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CategoryServicesService {
  constructor(private http:HttpClient) { }
  public getfeaturedCategory():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredcat");
 }
 public getallCategories():Observable<object>{
  return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredcat");
}
}
