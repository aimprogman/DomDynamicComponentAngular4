import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DngService {

  constructor(private http: Http) { }

  loadModelService(url : string) {
	  return this.http.get(url).map((response: Response)=>response.json());
  }



}
