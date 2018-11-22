import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CuentasComponent } from './cuentas/cuentas.component';


const appRoute: Routes =[
  {path: 'tarjetas', component: TarjetasComponent},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: '', redirectTo: '/cuentas', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
