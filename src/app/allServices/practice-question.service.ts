import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PracticeQuestionService {

  constructor(private http:HttpClient) { }

  getPQSdata(id,params){
    params = new HttpParams().set('id', id);
    return this.http.get('https://avatto.in/wp-json/avatto/v2/practice-question/'+id);
    
  }
}
