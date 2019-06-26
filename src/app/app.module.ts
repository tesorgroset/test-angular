import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { PersonService } from './person.service';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { AnadirPersonaComponent } from './anadir-persona/anadir-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    DetallePersonaComponent,
    AnadirPersonaComponent,
    EditarPersonaComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
