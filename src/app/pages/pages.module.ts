import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ChildComponent } from './Input-Page/child/child.component';
import { ParentComponent } from './Input-Page/parent/parent.component';

import { ChildComponent as ChildObservableComponent } from './Observable-Page/child/child.component';
import { ParentComponent as ParentObservableComponent } from './Observable-Page/parent/parent.component';

import { ChildComponent as ChildServiceComponent } from './Service-page/child/child.component';
import { ParentComponent as ParentServiceComponent } from './Service-page/parent/parent.component';

@NgModule({
  declarations: [
    ChildComponent,

    ParentComponent,
    ChildComponent,

    ChildObservableComponent,
    ParentObservableComponent,

    ChildServiceComponent,
    ParentServiceComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
