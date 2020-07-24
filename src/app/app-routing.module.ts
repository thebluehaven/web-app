import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Bluehaven' }},
  { path: 'home', component: HomeComponent, data: { title: 'Bluehaven' }},
  { path: 'storage', component: StorageComponent, data: { title: 'Bluehaven - Storage Services' }},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
