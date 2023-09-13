import { Component, OnInit } from '@angular/core';
import { ComunicacionObservableService } from '../services/comunicacion-observable.service';

@Component({
  selector: 'app-child-observable',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  mssgFromParent!: String;
  childMssgObsrv: string = 'CHILD USING OBSERVABLE';

  constructor(private comunicationObservableService: ComunicacionObservableService) {}

  ngOnInit(): void {
    // subscribe to the observable
    this.comunicationObservableService.getParentMessage$()
     .subscribe((mssg) => {
      this.mssgFromParent = mssg;
      console.log(mssg);
      
    });
  }

  useObservable() {
    // call observable method
    this.comunicationObservableService.fromChildToParent(this.childMssgObsrv);
  }

}
