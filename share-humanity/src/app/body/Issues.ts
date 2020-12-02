export class Issue {
    imagem: string;
    name: string;
    afetados: string;
    rank: number;
    
    
    public constructor(imagem: string, name: string, afetados: string, rank: number) {
        this.imagem = imagem;
        this.name = name;
        this.rank = rank;
        this.afetados = afetados;
    }

    
}

let IssueList: Array< Issue > = new Array(15);
export { IssueList };