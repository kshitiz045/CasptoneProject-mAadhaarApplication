import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FreshCard } from './fresh-card';
@Injectable({
  providedIn: 'root'
})
export class FreshCardService {

  baseUrl:string ="http://localhost:8181/"
  constructor(public http:HttpClient) { }

  storeCardDetails(FreshCard:any):Observable<string> {
    return this.http.post(this.baseUrl+"user/storeFreshAadharCardDetails",FreshCard,{responseType:"text"});
  }
  updateCardDetails(FreshCard:any):Observable<string> {
    return this.http.patch(this.baseUrl+"user/updateAadharCardDetails",FreshCard,{responseType:"text"});
  }
  updateProduct(FreshCard:any):Observable<string> {
    return this.http.patch(this.baseUrl+"user/updateAadharCardDetails",FreshCard,{responseType:"text"});
  }
  findAllProduct():Observable<FreshCard[]> {
    return this.http.get<FreshCard[]>(this.baseUrl+"admin/allCards");
  }
  deleteProductById(id:number):Observable<string> {
    return this.http.delete(this.baseUrl+"admin/deleteCard/"+id,{responseType:"text"});
  }
  
  findAllProductById(id:number):Observable<string> {
    return this.http.get(this.baseUrl+"admin/findCard/"+id,{responseType:"text"});
  }
  
  

}
