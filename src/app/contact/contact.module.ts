import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {ContactComponent} from './contact.component';
import {ContactdetailsComponent} from './contactdetails/contactdetails.component';
import {ContactbriefComponent} from './contactbrief/contactbrief.component';


const routes:Routes = [
    {path:"contact",component:ContactComponent,
        children:[
            {path:"contactdetails",component:ContactdetailsComponent},
            {path:"contactbrief",component:ContactbriefComponent},
            ]
        }
    ]

@NgModule({
    declarations:[ContactComponent,ContactdetailsComponent,ContactbriefComponent],
    imports:[RouterModule.forChild(routes)]

})

export class ContactModule{

}