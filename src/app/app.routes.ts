import { Routes } from '@angular/router';
import { HomeLoginRegisterComponent } from './home-login-register/home-login-register.component';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { InicioVistaComponent } from './inicio-vista/inicio-vista.component';
import { RegistroMovilComponent } from './registro-movil/registro-movil.component';
import { ServiciosMovilComponent } from './servicios-movil/servicios-movil.component';
import { InformeMovilComponent } from './informe-movil/informe-movil.component';

export const routes: Routes = [
    {path:'login', component:HomeLoginRegisterComponent},
    {path:'register', component:RegisterHomeComponent},
    {path:'vista', component:InicioVistaComponent},
    {path:'vista/movil', component:RegistroMovilComponent},
    {path:'vista/servicios', component:ServiciosMovilComponent},
    {path:'vista/informe', component:InformeMovilComponent},
    {path: '', redirectTo:'/login', pathMatch:'full'}
];
