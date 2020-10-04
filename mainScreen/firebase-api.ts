import * as firebase from "firebase";
import { GlobalIssue } from "./globalIssues";
import { globalIssues } from "./globalIssues";

class firebaseApi {
  database: firebase.database.Database;
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
      measurementId: "G-R46VXRKEYW",
    };
    firebase.initializeApp(this.firebaseConfig);
    this.database = firebase.database();
  }

  static async acessDatabase(): Promise<typeof globalIssues> {
    let firebaseObject = new firebaseApi();
    firebaseObject.database.goOnline();
    //let databaseStorage : GlobalIssue[] = new Array(15);
    return new Promise(function (resolve) {
      firebaseObject.database
        .ref("/")
        .once("value")
        .then((results: firebase.database.DataSnapshot) => {
          resolve(results.val());
        });
    });
  }
}

export { firebaseApi };
