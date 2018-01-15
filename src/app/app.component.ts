import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCOwwaF4Es7oGJRGP2kU8L5DiRlkz0s9Gs",
      authDomain: "authentication-test-cf8fd.firebaseapp.com"
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
