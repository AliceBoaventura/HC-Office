const routes: Routes = [
  { path: 'direitos', loadChildren: () => import('./direito-autoral/direito-autoral.module').then(m => m.DireitoAutoralModule) },
  { path: '', redirectTo: 'direitos', pathMatch: 'full' }
];
