import { ComponentFactoryResolver } from '@angular/core';
import { Routes } from '@angular/router';
import { HomepagesComponent } from './home/homepages/homepages.component';
import path from 'path';
import { AdministradorComponent } from './admin/administrador/administrador.component';
import { AccesodenegadoComponent } from './negado/accesodenegado/accesodenegado.component';
import { authGuardFn } from './guard/auth.guard.fn';
import { authGuardFnlogout } from './guard/auth.guard.fn logout';

export const routes: Routes = [
    {
    path:'home',
    component:HomepagesComponent
    },
    {
    path:'accesodenegado',
    component:AccesodenegadoComponent,
    canActivate:[authGuardFnlogout()]
    },
    {
        path:'administrador',
        component:AdministradorComponent,
        canActivate:[authGuardFn]
    },
    {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
    },
];
