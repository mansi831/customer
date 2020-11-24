import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  
  constructor(private httpClient : HttpClient) {
    this.getJson().subscribe(data => {
      
  });
   }

   public getJson() : Observable<any>{
    return this.httpClient.get("../assets/data/customer-list.json");
   }
}
