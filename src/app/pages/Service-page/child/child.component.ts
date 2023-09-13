import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../services/comunicacion.service';

@Component({
  selector: 'app-child-service',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  mssgFromParent: string = '';
  childMssgSrvc: string = 'CHILD USING SERVICE';

  constructor(private cs: ComunicacionService) {}

  ngOnInit(): void {
    this.cs.childComp = this;
  }

  useService() {
    /*
    Setting o the parent's component childMssg varibale a new value
    This is possible because there are two variables with a Parent and Child Component type and 
    every component links their properties with them in the inInit
    */
    this.cs.parentComp.childMssg = this.childMssgSrvc;
  }

}
