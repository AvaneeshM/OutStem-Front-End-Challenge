import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetMFAService {
  url = '/echo';

  constructor(
    private http:HttpClient
  ) {}

  mfaCall(){
    return this.http.get(this.url);
  }

  mfaSave(data:any){
    return this.http.post(this.url,data);
  }
}
