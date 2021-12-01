import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExempleComponent } from './exemple/exemple.component';
import { LoginComponent } from './login/login.component';
import { ProduitsComponent } from './produits/produits.component';
import { RegisterComponent } from './register/register.component';
import { UtilsateurComponent } from './utilsateur/utilsateur.component';

const routes: Routes = [
  {path : "Register" , component:RegisterComponent},
  {path : "Exemple" , component:ExempleComponent},
  {path : "User" , component:LoginComponent},
  {path : "Produits" , component:ProduitsComponent},
  {path : "Utilisateur" , component :UtilsateurComponent}
   ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
