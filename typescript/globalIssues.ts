interface GlobalIssue {
    nome : string;
    afetados : string;
    description : string;
    rank : number;

}
let globalIssues: Array<GlobalIssue> = new Array(10);
export {GlobalIssue};
export {globalIssues};