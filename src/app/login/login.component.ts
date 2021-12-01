import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilisateurService } from '../services/utilisateur.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  password!: string;
  email!: string;
  table:any = [];
  trouve:boolean=false;
  constructor(private utilisateurservice :UtilisateurService) { }

  ngOnInit(): void {
  }
  connect()
  {
  
  }
  verfifier()
  {
    this.table = this.utilisateurservice.tdata;
    const resultat = this.table.find( (em: { email: string; }) => em.email === this.email);
     
      if(resultat!=null)
      
        this.trouve=true;
      else
      this.trouve=false;
    
  }
}
