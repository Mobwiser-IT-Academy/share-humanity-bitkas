import * as firebase from 'firebase';
import {GlobalIssue} from './globalIssues';
import {globalIssues} from './globalIssues';

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
      firebaseObject.database.ref('/')
      .once('value').then(function(snapshot) {
          let globalIssue : GlobalIssue;
          snapshot.forEach(function(child) {
            globalIssue = child.exportVal();
            let sec = document.createElement("section");
            sec.classList.add("subcorpo");
            const markup : string =`<h3 class="conteudo"> 
            ${globalIssue.nome} </h3>
            <h4 class="conteudo">People Afected:</h4>
            <p class="conteudo">${globalIssue.afetados}</p>
            <h4 class="conteudo">Rank of Priority:</h4>
            <p class="conteudo">${globalIssue.rank}</p>
            <p class="conteudo" onclick="myFunction()">Descrição</p>`;
            globalIssues.push(globalIssue);
          document.getElementById("unica")!.appendChild(sec);
          sec.innerHTML = markup;
          })

      });
  }
}



export {firebaseApi};