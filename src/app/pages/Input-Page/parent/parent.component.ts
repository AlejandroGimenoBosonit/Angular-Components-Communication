import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent  implements OnInit{

  parentMssg!: String;
  parentMssgInput: string = 'PARENT USING INPUT';

  childMssg: string = '';

  constructor() {}

  ngOnInit(): void {
  }

  useInput(): void {
    // Update mssgFromChild with the message that we want to send to the child component
    this.parentMssg = new String(this.parentMssgInput);
  }

  getMssgFromChild(event: string) {
    this.childMssg = event;
  }


}
