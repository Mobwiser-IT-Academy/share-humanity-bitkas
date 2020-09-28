import { firebaseApi } from "./firebase-api";

interface GlobalIssue {
    nome : string;
    afetados : string;
    description : string;
    rank : number;

}
let globalIssues: Array<any> = firebaseApi.acessDatabase();
export {GlobalIssue};
export {globalIssues};