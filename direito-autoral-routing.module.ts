import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroDireitoAutoralComponent } from './cadastro-direito-autoral/cadastro-direito-autoral.component';
import { ListaDireitosAutoralComponent } from './lista/lista.component';

const routes: Routes = [
  { path: '', component: ListaDireitosAutoralComponent },
  { path: 'novo', component: CadastroDireitoAutoralComponent },
  { path: 'editar/:id', component: CadastroDireitoAutoralComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireitoAutoralRoutingModule {}
