import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent} from './personas/personas.component';
import { EditarPersonaComponent} from './editar-persona/editar-persona.component';
import { DetallePersonaComponent} from './detalle-persona/detalle-persona.component';
import { AnadirPersonaComponent} from  './anadir-persona/anadir-persona.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
      path: 'personas',
      component: PersonasComponent,
      data: { title: 'Listado de personas'}
    },
    {
      path: 'editar-persona/:id',
      component: EditarPersonaComponent,
      data: { title: 'Editar persona'}
    },
    {
      path: 'detalle-persona/:id',
      component: DetallePersonaComponent,
      data: { title: 'Detalle persona'}
    },
    {
      path: 'anadir-persona',
      component: AnadirPersonaComponent,
      data: { title: 'Añadir persona'}
    },
    {
      path: 'login',
      component: LoginComponent,
      data: { title: 'Login'}
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
