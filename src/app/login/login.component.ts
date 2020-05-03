import { Component, OnInit } from '@angular/core';
import { AuthenticacionService } from '../serices/authenticacion.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string;
  public pw: string;
  public error: string;
  returnUrl: string;

  constructor(private authenticacionService: AuthenticacionService,
              private route: ActivatedRoute,
              private router: Router,
              private appComponent : AppComponent) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login(){
    console.log(this.user,this.pw);
    this.authenticacionService.login(this.user, this.pw)
    .pipe(first())
    .subscribe(
        data => { 
            this.router.navigate([this.returnUrl]);
        },
        error => {
          this.appComponent.errorMessages = [];
          this.appComponent.errorMessages.push(error);
        });    
  }

}
