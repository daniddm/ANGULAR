import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  {
      path: '',
      component: MainComponent,
      children: [
          {
              path: '',
              redirectTo: 'liquidacion-proveedores',
              pathMatch: 'full',
          },

      ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
