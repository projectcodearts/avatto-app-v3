import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PracticeQuestionDetailsServicesService {

  constructor(private http:HttpClient) { }
  public getPracticeQuestionDetails(id):Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/practice-question-details/"+id);
 }
}
