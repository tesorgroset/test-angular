import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Persona } from '../app.persona';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  public persona : Persona;

  constructor(private personService : PersonService,
              private route : ActivatedRoute,
              private routeNav : Router) {  }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      var idStr : string =  map.get("id");
      if (!isNaN(+idStr)){
        this.personService.getPerson(+idStr).subscribe(data =>{
          this.persona = data;
        });
      }
    })
  }

  public modificarPersona() : void{
    this.personService.addPersona(this.persona).subscribe(data => {
      this.routeNav.navigate(['/personas']);
    });
  }

}
