interface GlobalIssue {
    nome : string;
    afetados : string;
    description : string;
    rank : number;

}
//mudanças climaticas
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

//pobreza extrema
let nomePoverty : string;
nomePoverty = "extreme Poverty";
let afetadosPoverty : string;
afetadosPoverty = "Half the world's population";
let descriptionPoverty : string;
let rankPoverty : number;
descriptionPoverty = `Extreme poverty and inequality continue to leave whole communities and households in an almost irreversibly 
devastating state of vulnerability and need`;
rankPoverty = 2;


let globalIssues : GlobalIssue[] = [{
    nome: nomeClimate,
    afetados: afetadosClimate,
    description: descriptionClimate,
    rank: rankClimate
},{
    nome: nomePoverty,
    afetados: afetadosPoverty,
    description: descriptionPoverty,
    rank: rankPoverty
}];

export {globalIssues};
export {GlobalIssue};