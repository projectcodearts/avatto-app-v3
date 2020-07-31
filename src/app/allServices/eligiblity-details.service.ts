import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EligiblityDetailsService {

  constructor(private http:HttpClient) { }
  geteligiblityDetails(id){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/page-details/'+id);
  }
}
