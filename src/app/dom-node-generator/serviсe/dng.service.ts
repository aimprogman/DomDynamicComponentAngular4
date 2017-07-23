import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DngService {

  constructor(private http: Http) { }

  loadModel(url : string) {
	  return this.http.get(url).map((response: Response)=>response.json());
  }



}
