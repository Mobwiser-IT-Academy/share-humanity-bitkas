var GlobalIssues = /** @class */ (function () {
    function GlobalIssues(nome, afetados, description, rank) {
        this.nome = nome;
        this.afetados = afetados;
        this.description = description;
        this.rank = rank;
    }
    return GlobalIssues;
}());
var nomeClimate;
nomeClimate = "climate change";
var afetadosClimate;
afetadosClimate = "20 million";
var descriptionClimate;
descriptionClimate = "The temperature is predicted to increase leading\n to disappearence of territory(causing, in many cases permanent, \n    displacemente), change morbidity disease patterns, \n    and promote a monumental shift in global policies, \n    climate change will transform the way humanity appproaches global\n     security and livelihood sustainability";
var rankClimate;
rankClimate = 1;
var climateChange = new GlobalIssues(nomeClimate, afetadosClimate, descriptionClimate, rankClimate);
var nomePoverty;
nomePoverty = "estreme Poverty";
var afetadosPoverty;
afetadosPoverty = "Half the world's population";
var descriptionPoverty;
var rankPoverty;
descriptionPoverty = "Extreme poverty and inequality continue to leave whole communities and households in an almost irreversibly \ndevastating state of vulnerability and need";
rankPoverty = 2;
var poverty = new GlobalIssues(nomePoverty, afetadosPoverty, descriptionPoverty, rankPoverty);
var globalIssuess = [climateChange, poverty];
