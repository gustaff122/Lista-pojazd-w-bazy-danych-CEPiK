import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesListResolver } from './core/resolvers/vehicles-list-resolver.resolver';
import { HomeComponent } from './pages/home/home.component';
import { VehiclesListComponent } from './pages/vehicles-list/vehicles-list.component';
import { VehicleResolver } from './core/resolvers/vehicle-resolver.resolver';
import { VehicleComponent } from './pages/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'list/:code', component: VehiclesListComponent, resolve: [VehiclesListResolver] },
  { path: 'vehicle/:id', component: VehicleComponent, resolve: [VehicleResolver] },
  { path: '**', redirectTo: '/home' }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
