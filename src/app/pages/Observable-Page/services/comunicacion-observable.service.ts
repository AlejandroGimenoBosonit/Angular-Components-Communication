import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionObservableService {

   // variable as observable
   private _parentMessage!: string;
   public _parentMessage$ = new BehaviorSubject<string>('');

   private _childMessage!: string;
   private _childMessage$ = new BehaviorSubject<string>('');

  constructor() {

    // default values
    this._parentMessage = '';
    this._childMessage = '';
  }

  fromParentToChild(message: string) {
    //update local value
    this._parentMessage = message;

    // notify every observer that it's subscribed that there is a change
    this._parentMessage$.next(this._parentMessage);
  }

  // We want to subscribe to our observer but they are private, so we need a get
  getChildMessage$(): Observable<string> {
    // conver into obsrvable
    return this._childMessage$.asObservable();
  }

  fromChildToParent(message: string) {
    //update local value
    this._childMessage = message;
    // notify every observer that it's subscribed that there is a change
    this._childMessage$.next(this._childMessage);
  }

  // We want to subscribe to our observer but they are private, so we need a get
  getParentMessage$(): Observable<string> {
    // conver into obsrvable
    return this._parentMessage$.asObservable();
  }
}
