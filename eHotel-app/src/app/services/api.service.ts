import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  postHotel(data: any) {
    return this.http.post<any>("http://localhost:3000/listings", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getHotel(){
    return this.http.get<any>("http://localhost:3000/listings")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateHotel(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/listings/"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteHotel(id: number) {
    return this.http.delete<any>("http://localhost:3000/listings/"+id )
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
