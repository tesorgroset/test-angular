import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../app.persona';
import { PersonService } from '../person.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  public listaPersonas : Persona[];

  public tipoOrden : string;

  constructor(private personService : PersonService) { }

  ngOnInit() : void {
    console.log('ngOninit');
    this.loadAll();
  }

  orden(tipoOrden : string){
    if (tipoOrden != null && tipoOrden === this.tipoOrden){
      this.listaPersonas = this.listaPersonas.reverse();
    }else{
      this.tipoOrden = tipoOrden;
      this.listaPersonas = _.sortBy(this.listaPersonas,tipoOrden);
    }
  }

  public deletePerson(id : number) : void {
    this.personService.borrarPersona(id).subscribe(data => {
      this.loadAll();
    })
  } 

  private loadAll() : void {
    const observableAll : Observable<any> = this.personService.getAll();
    observableAll.subscribe(data => {
      console.log('despues de suscribir');
      this.listaPersonas = data._embedded.persons;
      
    },err => {
      console.log('error en la suscripcion: '+err);
    });
  } 

}
