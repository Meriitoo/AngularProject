import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorComponent } from './core/error/error.component';
import { LocationsComponent } from './locations/locations.component';
import { AuthActivate } from './core/guards/auth.activate';
import { ReduxSimulationComponent } from './redux-simulation/redux-simulation.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import ('./user/user.module').then((m) => m.UserModule), //chunking one module for lazy loading
  },
  {
    path: 'locations',
    component: LocationsComponent,
    canActivate: [AuthActivate],
  },
  {
    path: 'game',
    component: ReduxSimulationComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //CommonModule,
  exports: [RouterModule]
})
export class AppRoutingModule { }
