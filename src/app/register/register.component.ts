import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
 password!: string;
 confirmer!: string;
 name!: string;
 email!: string;
 valider:boolean=true;
  constructor() { }

  ngOnInit(): void {
 
  }
save(f:NgForm)
{
}
}
