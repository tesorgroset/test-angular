import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private translateService : TranslateService) { }

  ngOnInit() {
  }

  public cambiarIdioma(idioma : string) : void {
    this.translateService.use(idioma);
  }

}
