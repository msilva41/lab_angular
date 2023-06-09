import { Routes } from '@angular/router'


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProyectsComponent } from './proyects/proyects.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

const appRoutes : Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path:'proyects',
        component:ProyectsComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'services',
        component:ServicesComponent
    }
]

export default appRoutes;