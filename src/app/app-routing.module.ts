import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'lista-medicos',
    loadChildren: () => import('./lista-medicos/lista-medicos.module').then( m => m.ListaMedicosPageModule)
  },  {
    path: 'medico',
    loadChildren: () => import('./medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'cotacao',
    loadChildren: () => import('./cotacao/cotacao.module').then( m => m.CotacaoPageModule)
  },
  {
    path: 'calendario',
    loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
  },
  {
    path: 'detalhe-cirurgia',
    loadChildren: () => import('./detalhe-cirurgia/detalhe-cirurgia.module').then( m => m.DetalheCirurgiaPageModule)
  },
  {
    path: 'lista-materiais',
    loadChildren: () => import('./lista-materiais/lista-materiais.module').then( m => m.ListaMateriaisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
