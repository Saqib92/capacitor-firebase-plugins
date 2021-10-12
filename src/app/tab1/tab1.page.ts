import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-community/firebase-crashlytics';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
    this.setContext();
  }

  async crash() {
    await FirebaseCrashlytics.crash({ message: 'New testing again' });
  };


  async setContext(){
    await FirebaseCrashlytics.setContext({ 
      key: 'page',
      value: 'tab 2',
      type: 'string'
    });
  };

}
