"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var globalIssues_1 = require("./globalIssues");
var path;
var parentID;
path = window.location.search;
parentID = path.split('=').pop();
switch (parentID) {
    case "climateChange":
        choosePage(globalIssues_1.globalIssues[0]);
        break;
    case "extremePoverty":
        choosePage(globalIssues_1.globalIssues[1]);
        break;
}
function choosePage(page) {
    var description;
    var sec = document.createElement("section");
    sec.classList.add("subcorpo");
    description = "<h4> " + page.nome + "</h4>\n                   <p> " + page.description + "</p>";
    document.getElementById('detail').appendChild(sec);
    sec.innerHTML = description;
}
