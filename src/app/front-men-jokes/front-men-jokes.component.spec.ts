import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontMenJokesComponent } from './front-men-jokes.component';

describe('FrontMenJokesComponent', () => {
  let component: FrontMenJokesComponent;
  let fixture: ComponentFixture<FrontMenJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontMenJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontMenJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
