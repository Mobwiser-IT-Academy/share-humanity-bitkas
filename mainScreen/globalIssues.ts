import { firebaseApi } from "./firebase-api";

interface GlobalIssue {
    nome : string;
    afetados : string;
    description : string;
    rank : number;
    globalIssues: Array<GlobalIssue>[];

}
let globalIssues: Array<GlobalIssue> = new Array(15);


export {GlobalIssue};
export {globalIssues};