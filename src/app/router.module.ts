import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';     // Add this

const routes: Routes = [
    { path: '**', component: PagenotfoundComponent }
  ];

  @NgModule({
      declarations:[PagenotfoundComponent],
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })

  export class AppRoutingModule{

  }