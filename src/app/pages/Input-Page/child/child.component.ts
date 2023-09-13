import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  // Output decorator to send data to the parent component
  @Output() mssgFromChild: EventEmitter<string> = new EventEmitter<string>();
  childMssgOutput: string = 'CHILD USING OUTPUT';

  // Recieve any data from parent component
  @Input() mssgFromParent!: String;

  constructor() {}

  ngOnInit(): void {
  }

  useInput() {
    // In this case we want to send data to de parent component, that's because
    // we need a @Output
    this.mssgFromChild.emit(this.childMssgOutput);
  }

}
