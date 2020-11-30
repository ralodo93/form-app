import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from '../models/form';
import { Global } from './global.service';

@Injectable()

export class FormService {

  public url: string;
  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url;
  }

  prueba(){return 'soy el servicio de articulo';}

  postForm(form):Observable<any>{
    let params = JSON.stringify(form);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'save',params,{headers:headers});
  }
}
