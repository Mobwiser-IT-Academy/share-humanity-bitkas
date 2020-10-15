

interface GlobalIssue {
  nome: string;
  afetados: string;
  description: string;
  rank: number;
  imagem: string;

  
}
let globalIssues: Array<GlobalIssue> = new Array(15);



export { GlobalIssue };
export { globalIssues };
