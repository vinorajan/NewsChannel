import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent}
]

@NgModule({
    declarations:[HomeComponent],
    imports:[RouterModule.forChild(routes)]
})

export class HomeModule{}