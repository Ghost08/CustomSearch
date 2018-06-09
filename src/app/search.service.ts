import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
  
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class SearchService {

  

  constructor(private http:HttpClient) { }

  getSearchResult(searchText){

    return this.http.get('');


  }

}
