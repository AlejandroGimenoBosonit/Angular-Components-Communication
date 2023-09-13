import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';

@Component({
  selector: 'app-parent-service',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  childMssg: string = '';
  parentMssgSrvc: string = 'PARENT USING SERVICE';

  constructor(private cs: ComunicacionService) {}

  ngOnInit(): void {
    this.cs.parentComp = this;
  }

  useService(): void {
    this.cs.childComp.mssgFromParent = this.parentMssgSrvc;
  }

}
