import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EligiblityService {
  constructor(private http: HttpClient) { }
  public geteligiblity():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredeligibility");
 }
}
