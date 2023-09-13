import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './pages/Input-Page/parent/parent.component';
import { ParentComponent as ParentObservableComponent } from './pages/Observable-Page/parent/parent.component';
import { ParentComponent as ParentServiceComponent } from './pages/Service-page/parent/parent.component';

const routes: Routes = [
  { path: 'input-page', component: ParentComponent },
  { path: 'observable-page', component: ParentObservableComponent },
  { path: 'service-page', component: ParentServiceComponent },
  {path: '**', redirectTo: 'input-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
