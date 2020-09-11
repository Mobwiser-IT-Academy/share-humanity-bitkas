"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalIssues_1 = require("./globalIssues");
for (var i = 0; i < globalIssues_1.globalIssues.length; i++) {
    var sec = document.createElement("section");
    sec.classList.add("subcorpo");
    var markup = "<h3 class=\"conteudo\"> \n                            globalIssuess[i].nome </h3>\n                            <h4 class=\"conteudo\">People Afected:</h4>\n                            <p class=\"conteudo\">" + globalIssues_1.globalIssues[i].afetados + "</p>\n                            <h4 class=\"conteudo\">Rank of Priority:</h4>\n                            <p class=\"conteudo\">" + globalIssues_1.globalIssues[i].rank + "</p>";
    document.getElementById("unica").appendChild(sec);
    sec.innerHTML = markup;
}
function myFunction(parentId) {
    var page = window.open("./second.html?parentID=" + parentId);
}
