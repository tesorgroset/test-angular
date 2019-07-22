import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PersonService } from './person.service';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { AnadirPersonaComponent } from './anadir-persona/anadir-persona.component';
import { EditarPersonaComponent } from './editar-persona/editar-persona.component';
import { FormsModule} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { fas } from '@fortawesome/free-solid-svg-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';

//Translations

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoaderComponent } from './components/shared/loader/loader.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';

library.add(fas);


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    DetallePersonaComponent,
    AnadirPersonaComponent,
    EditarPersonaComponent,
    MenuComponent,
    LoaderComponent
  ],
  imports: [
    MatProgressSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,    
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    FormsModule,
    FontAwesomeModule
  ],
  providers: [PersonService,LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
