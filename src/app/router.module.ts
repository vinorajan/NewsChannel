import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';     // Add this
import { ContactComponent } from './contact/contact.component';     // Add this

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about',component: AboutComponent}
  ];

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })

  export class AppRoutingModule{

  }
  export const RoutingComponents = [HomeComponent,AboutComponent,ContactComponent]