import { Routes } from '@angular/router';
import { TareapageComponent } from './pages/tareapage/tareapage.component';
import { PadreComponent } from './input/padre/padre.component';
import { InicioPageComponent } from './page/tareapage/inicio-page/inicio-page.component';
import { HijoComponent } from './input/hijo/hijo.component';
import { UpdatetareaComponent } from './components/updatetarea/updatetarea.component';
import { PgComponent } from './components/updatetarea/pg/pg.component';

export const routes: Routes = [
    {path:'',
        component:InicioPageComponent,
    },
    {
    path:'tareas',
    component:TareapageComponent,
    },
    {
    path:'update/:id',
    component:PgComponent
    },
    {
        path:'**',
        redirectTo:'',
     }
     //pathMatch:'full'
];
