import { firebaseApi } from "./firebase-api";

interface GlobalIssue {
    nome : string;
    afetados : string;
    description : string;
    rank : number;
    globalIssues: Array<GlobalIssue>[];

}
let globalIssues: Array<GlobalIssue> = new Array(15);
firebaseApi.acessDatabase().then(function(snapshot) {
    snapshot.forEach(function(child) {
      globalIssues.push(child);
      console.log('aqui');
    })
    

});
export {GlobalIssue};
export {globalIssues};