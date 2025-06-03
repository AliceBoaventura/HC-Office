import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DireitoAutoralRoutingModule } from './direito-autoral-routing.module';

import { CadastroDireitoAutoralComponent } from './cadastro-direito-autoral/cadastro-direito-autoral.component';
import { ListaDireitosAutoralComponent } from './lista/lista.component';

@NgModule({
  declarations: [
    CadastroDireitoAutoralComponent,
    ListaDireitosAutoralComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DireitoAutoralRoutingModule
  ]
})
export class DireitoAutoralModule {}
