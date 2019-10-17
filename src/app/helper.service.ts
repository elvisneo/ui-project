import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  private readonly baseUri: string ='http://localhost:3001'

  constructor(private http:HttpClient) { 

  }
  public getVotes():Observable<object>{
    
    return this.http.get(`${this.baseUri}/`);
  }
}
