import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { TranslateService } from '@ngx-translate/core';
import { Persona } from './app.persona';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { User } from './models/users';
import { AuthenticacionService } from './serices/authenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  currentUser: User;
  private lenguajeActivo = 'es';
  private title : String;
  public errorMessages : Array<string>;
  
  constructor (private personService : PersonService,
               private translateService : TranslateService,
               private titleService : Title,
               private authenticacionService: AuthenticacionService){
    this.titleService.setTitle('Angular CRUD');
    this.authenticacionService.currentUser.subscribe(x => this.currentUser = x);
  }
  
  ngOnInit(): void {
    this.errorMessages = [];
    this.translateService.setDefaultLang(this.lenguajeActivo);
  }


}
