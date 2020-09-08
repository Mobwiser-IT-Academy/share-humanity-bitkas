 class GlobalIssues {
    nome : string;
    afetados : string;
    description : string;
    rank : number;

    constructor(nome : string, afetados : string, description : string, rank : number) {
        this.nome = nome;
        this.afetados = afetados;
        this.description = description;
        this.rank = rank;
    }
}

let nomeClimate : string;
nomeClimate = "climate change";
let afetadosClimate : string;
afetadosClimate = "20 million";
let descriptionClimate : string;
descriptionClimate = `The temperature is predicted to increase leading
 to disappearence of territory(causing, in many cases permanent, 
    displacemente), change morbidity disease patterns, 
    and promote a monumental shift in global policies, 
    climate change will transform the way humanity appproaches global
     security and livelihood sustainability`;
let rankClimate : number;
rankClimate = 1;
let climateChange = new GlobalIssues(nomeClimate, afetadosClimate, descriptionClimate, rankClimate);

let nomePoverty : string;
nomePoverty = "estreme Poverty";
let afetadosPoverty : string;
afetadosPoverty = "Half the world's population";
let descriptionPoverty : string;
let rankPoverty : number;
descriptionPoverty = `Extreme poverty and inequality continue to leave whole communities and households in an almost irreversibly 
devastating state of vulnerability and need`;
rankPoverty = 2;
let poverty = new GlobalIssues(nomePoverty, afetadosPoverty, descriptionPoverty, rankPoverty);

let globalIssuess : object = [climateChange, poverty];