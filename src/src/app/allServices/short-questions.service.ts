import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShortQuestionsService {

  constructor(private http:HttpClient) { }
  getshortquestions(id,params){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/short-question/'+id);
  }
}
