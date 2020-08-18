import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PapersService {
  constructor(private http: HttpClient) { }
  public getpapers():Observable<object>{
    return this.http.get("https://avatto.in/wp-json/avatto/v2/featuredprevious");
  }

  getmpaperstabledata(id,params){
    return this.http.get('https://avatto.in/wp-json/avatto/v2/previous-papers/'+id);
  }
}
