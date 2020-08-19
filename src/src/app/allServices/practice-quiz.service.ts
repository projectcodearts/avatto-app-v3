import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PracticeQuizService {

  constructor(private http:HttpClient) { }
  getQuizdata(id,params){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/practice-quiz/'+id);
  }
}
