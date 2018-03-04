import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';     // Add this
import { AboutComponent } from './about/about.component';     // Add this
import { ContactComponent } from './contact/contact.component';     // Add this
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';     // Add this

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'about',component: AboutComponent},
    { path: '**', component: PagenotfoundComponent }
  ];

  @NgModule({
      imports:[RouterModule.forRoot(routes)],
      exports:[RouterModule]
  })

  export class AppRoutingModule{

  }
  export const RoutingComponents = [HomeComponent,AboutComponent,ContactComponent,PagenotfoundComponent]