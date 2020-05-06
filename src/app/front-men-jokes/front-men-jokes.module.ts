import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontMenJokesComponent } from './front-men-jokes.component';
import { JokesEpic } from './front-men-jokes.epics';
import { JokesServiceService } from '../jokes-service.service';
import { HttpClient } from '@angular/common/http';
import { JokesActions } from './front-men-jokes.actions';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FrontMenJokesComponent],
  providers: [JokesEpic, JokesActions, JokesServiceService, HttpClient],
  exports: [FrontMenJokesComponent],
  entryComponents: [FrontMenJokesComponent]
})
export class FrontMenJokesModule { }
