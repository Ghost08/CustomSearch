import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchService {

  //"https://www.googleapis.com/customsearch/v1?key=AIzaSyBeo2rk1Za8EHbX2tXFiK_7MW750-m3qhw&cx=011826286997982010412:rhs0gr_rvda&q=";
  private googleApiUrl: string = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyBeo2rk1Za8EHbX2tXFiK_7MW750-m3qhw&cx=011826286997982010412:rhs0gr_rvda&q=';

  constructor(private http: Http) { }

  public getSearchResult(searchText: string): Observable<any> {   
    return this.http
      .get(this.googleApiUrl + encodeURIComponent(searchText))
      .map(response=>{
        const responseData = response.json();
        return responseData;
      });

     
  }

}
