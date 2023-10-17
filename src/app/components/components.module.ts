import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamisetasComponent } from './camisetas/camisetas.component';
import { CuadrosComponent } from './cuadros/cuadros.component';



@NgModule({
  declarations: [
    CamisetasComponent,
    CuadrosComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    CamisetasComponent,
    CuadrosComponent,
  ],
})
export class ComponentsModule { }
