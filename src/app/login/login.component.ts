import { Component, OnInit } from '@angular/core';
import { AuthenticacionService } from '../serices/authenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string;

  public pw: string;

  constructor(private authenticacionService: AuthenticacionService) { }

  ngOnInit() {
  }

  login(){
    
  }

}
