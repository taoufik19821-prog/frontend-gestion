import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemple',
  templateUrl: './exemple.component.html',
  styleUrls: ['./exemple.component.sass']
})
export class ExempleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  personne :string='ali';
  age :number =25;
  adresse: any= {rue :'rue de .....',city:'boughrara'};
  hide :boolean=true;
  activated:boolean=true;
  hideinter:boolean=false;
  couleur:string="red";
getemail()
{
  return this.personne+'@gmail.com'
}
affichage ()
{
  if ( this.hide===true )
  this.hide=false;
  else
  this.hide=true;
}
hideinterp()
{
if (this.hideinter===true)
this.hideinter=false;
else
this.hideinter=true;
}
changeBackground():string{
  return "background-color:" + this.couleur + ";";
}

}
