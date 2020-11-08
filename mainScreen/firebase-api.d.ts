import * as firebase from "firebase";
import { globalIssues } from "./globalIssues";
declare class firebaseApi {
    database: firebase.database.Database;
    firebaseConfig: any;
    constructor();
    static acessAccount(): void;
    static acessDatabase(): Promise<typeof globalIssues>;
}
export { firebaseApi };
