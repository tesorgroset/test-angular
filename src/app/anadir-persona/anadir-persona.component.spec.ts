import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirPersonaComponent } from './anadir-persona.component';

describe('AnadirPersonaComponent', () => {
  let component: AnadirPersonaComponent;
  let fixture: ComponentFixture<AnadirPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
