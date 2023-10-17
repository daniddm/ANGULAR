import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/template/main/main.component';
import { CamisetasPagesComponent } from './pages/camisetas-pages/camisetas-pages.component';
import { CuadrosPagesComponent } from './pages/cuadros-pages/cuadros-pages.component';


const routes: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      // { path: 'inicio', component: MainComponent },
     
      { path: 'cuadros', component: CuadrosPagesComponent },
      { path: 'camisetas', component: CamisetasPagesComponent },
     
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
