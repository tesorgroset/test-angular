import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';
import { Persona } from './app.persona';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  private title : String;
  
  constructor (private personService : PersonService){
    this.title = 'prueba de angular';
  }
  
  ngOnInit(): void {
  }


}
