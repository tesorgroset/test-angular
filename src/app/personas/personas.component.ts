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

  public firstNamesort : boolean = false;
  public edadsort : boolean = false;
  public matriculasort : boolean = false;
  public modeloCochesort : boolean = false;

  public aniomatricula : string = "";

  firstNamecurrentsort: boolean;
  edadcurrentsort: boolean;
  matriculacurrentsort: boolean;
  modeloCochecurrentsort: boolean;

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
    this.changeIcon(tipoOrden);
  }

  private changeIcon(tipoOrden : string) : void {
    this.firstNamecurrentsort = false;
    this.edadcurrentsort = false;
    this.matriculacurrentsort = false;
    this.modeloCochecurrentsort = false;
    eval('this.'+tipoOrden+'currentsort = true');
    eval('this.'+tipoOrden+'sort = !this.'+tipoOrden+'sort');
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
      this.orden('firstName');
    },err => {
      console.log('error en la suscripcion: '+err);
    });
  } 

  public getAnioMatricula(persona : Persona) : void {
    
    this.personService.obtenerAnioMatricula(persona.matricula).subscribe(data => {
      persona.aniomatricula = data;
      console.log('año de matriculacion: '+this.aniomatricula);
    },err =>{
      console.log('error al obtener el anio de la matriucula: '+err.message);
    });
  }

}
