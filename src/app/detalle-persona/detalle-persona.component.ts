import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';
import { Persona } from '../app.persona';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.css']
})
export class DetallePersonaComponent implements OnInit {

  public persona : Persona;

  constructor(private route: ActivatedRoute,
              private personaService : PersonService) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      var idStrPersona : string = params.get("id");
      if (!isNaN(+idStrPersona)){
        this.personaService.getPerson(+idStrPersona).subscribe(data => {
          this.persona = data;   
        })
      }
    }) 
  }

}
