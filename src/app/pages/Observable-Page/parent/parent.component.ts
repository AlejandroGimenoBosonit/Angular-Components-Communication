import { Component, OnInit } from '@angular/core';
import { ComunicacionObservableService } from '../services/comunicacion-observable.service';

@Component({
  selector: 'app-parent-observable',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  childMssg: string = '';
  parentMssgObsrv: string = 'PARENT USING OBSERVABLE';

  constructor(private comunicationObservableService: ComunicacionObservableService) {}

  ngOnInit(): void {
    this.comunicationObservableService
        .getChildMessage$()
        .subscribe((mssg: string) => {
          this.childMssg = mssg;
        });
  }

  useObservable() {
    // call observable method
    this.comunicationObservableService.fromParentToChild(this.parentMssgObsrv);
  }

  

}
