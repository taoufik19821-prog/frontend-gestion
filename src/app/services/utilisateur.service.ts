import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {

  tdata :any = [];
   constructor(private http: HttpClient) {
   
   }
  getalldata <Array> ()
  {

    this.http.get('http://localhost:3000/all').subscribe(data => {
      this.tdata=data; 
      }, error => console.error(error));
      return this.tdata;
   
  }
  deletedata(idd:number)
  {
    this.http.delete('http://localhost:3000/delete/'+idd).subscribe(data => {
      this.tdata=data; 
      }, error => console.error(error));
      return this.tdata;  
  }
  getdataname(namesearche:string)
  {
    this.http.get('http://localhost:3000/'+namesearche).subscribe(data => {
      this.tdata=data; 
      }, error => console.error(error));
      
      return this.tdata;
     
  }
  
}