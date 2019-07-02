import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { TranslateService } from '@ngx-translate/core';
import { Persona } from './app.persona';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private lenguajeActivo = 'es';
  private title : String;
  
  constructor (private personService : PersonService,
               private translateService : TranslateService,
               private titleService : Title){
    this.titleService.setTitle('Angular CRUD');
  }
  
  ngOnInit(): void {
    this.translateService.setDefaultLang(this.lenguajeActivo);
  }


}
