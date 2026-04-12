import { Routes } from '@angular/router';
import { TripList } from './components/trip-list/trip-list';
import { TripEdit } from './components/trip-edit/trip-edit';
import { TripAdd } from './components/trip-add/trip-add';

export const routes: Routes = [
  { path: '', component: TripList },
  { path: 'add', component: TripAdd },
  { path: 'edit/:code', component: TripEdit }
];