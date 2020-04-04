import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalheCirurgiaPage } from './detalhe-cirurgia.page';

const routes: Routes = [
  {
    path: '',
    component: DetalheCirurgiaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalheCirurgiaPageRoutingModule {}
