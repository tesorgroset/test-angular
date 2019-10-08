import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Persona } from '../app.persona';
import { ActivatedRoute, Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-anadir-persona',
  templateUrl: './anadir-persona.component.html',
  styleUrls: ['./anadir-persona.component.css']
})
export class AnadirPersonaComponent implements OnInit {

  public persona : Persona;

  constructor(private sevicioPersona : PersonService,
              private route : Router,
              private appComponent : AppComponent) { }


  ngOnInit() {
    this.persona = new Persona();
  }

  public anadirPersona() : void {
    this.sevicioPersona.addPersona(this.persona).subscribe(data =>{
      this.route.navigate(['/personas']);
      
    },err => {
      console.log(err)
      this.appComponent.errorMessages = ["Revise los campos "+err.message];
    });
    

  }

}
