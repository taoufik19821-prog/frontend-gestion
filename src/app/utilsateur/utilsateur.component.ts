import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { Observable} from 'rxjs';
import { interval } from 'rxjs';
@Component({
  selector: 'app-utilsateur',
  templateUrl: './utilsateur.component.html',
  styleUrls: ['./utilsateur.component.sass']
})
export class UtilsateurComponent implements OnInit {
 id!: number;
   table:any = [];
   namesearche:string="";
   
   
 constructor( private utilisateurservice :UtilisateurService) {

  }
  ngOnInit(): void {
   this.affichername();
  }
 
  supprimer(idd:number)
  { 
     this.table = this.utilisateurservice.deletedata(idd); 
     this.namesearche="";
   
  }
  affichername()
  {
 if(this.namesearche!="" && this.namesearche!=null)
 {
  this.table = this.utilisateurservice.getdataname(this.namesearche); 
 }
else
 this.table = this.utilisateurservice.getalldata();

  }
  edit()
  {
    
  }
}
