import { Routes } from '@angular/router';
import { TareapageComponent } from './pages/tareapage/tareapage.component';
import { PadreComponent } from './input/padre/padre.component';

export const routes: Routes = [
    {path:'',
        component:TareapageComponent,
    },
    {
    path:'papa',
    component:PadreComponent,
    },
    {
        path:'**',
        redirectTo:'',
     }

];
