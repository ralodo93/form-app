// Importar módulos del router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


// Array de rutas

const appRoutes: Routes = [
    {path:'',component: AppComponent},
    {path:'home',component: AppComponent}
]

// Exportar el módulo de rutas

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);