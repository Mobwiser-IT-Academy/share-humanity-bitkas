import * as firebase from 'firebase';
import { GlobalIssue } from './globalIssues';


class firebaseApi { 
  database;
  firebaseConfig: any;
  

  constructor() {
    this.firebaseConfig = {
        apiKey: "AIzaSyAYWdQTsLGyJRfjc2Vnuu_FF4HkqkLfyRg",
        authDomain: "global-issues-8284f.firebaseapp.com",
        databaseURL: "https://global-issues-8284f.firebaseio.com",
        projectId: "global-issues-8284f",
        storageBucket: "global-issues-8284f.appspot.com",
        messagingSenderId: "405491061871",
        appId: "1:405491061871:web:8d9b82412361a7096d699a",
        measurementId: "G-R46VXRKEYW"
    };
    firebase.initializeApp(this.firebaseConfig);
    this.database = firebase.database();
  }

  static acessDatabase() {
      let firebaseObject = new firebaseApi();
      let databaseStorage : GlobalIssue[] = new Array(15);
      firebaseObject.database.ref('/')
      .once('value').then(function(snapshot) {
          snapshot.forEach(function(child) {
            console.log();
            let globalIssue : GlobalIssue;
            globalIssue = child.exportVal();
            databaseStorage.push(globalIssue);
          })

      });
      return databaseStorage;
  }
}



export {firebaseApi};