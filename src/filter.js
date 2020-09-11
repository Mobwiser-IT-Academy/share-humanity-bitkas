"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalIssues_1 = require("./globalIssues");
var filter;
filter = document.getElementById("submitFilter");
filter.addEventListener("click", filterPage);
function filterPage() {
    var input = document.getElementById("filter");
    var target;
    target = input.value;
    var filtered;
    filtered = globalIssues_1.globalIssues.filter(function (x) { return x.nome === target; });
    document.getElementById("unica").innerHTML = "";
    var bodyFiltered;
    bodyFiltered = "<h3 class=\"conteudo\"> \n        " + filtered[0].nome + " </h3>\n        <h4 class=\"conteudo\">People Afected:</h4>\n        <p class=\"conteudo\">" + filtered[0].afetados + "</p>\n        <h4 class=\"conteudo\">Rank of Priority:</h4>\n        <p class=\"conteudo\">" + filtered[0].rank + "</p>";
    var sec = document.createElement("section");
    sec.classList.add("subcorpo");
    document.getElementById("unica").appendChild(sec);
    sec.innerHTML = bodyFiltered;
}
