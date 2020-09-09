/// <reference path="globalIssues.ts" />
let path : string;
let parentID : string;
path = window.location.search;
parentID = path.split('=').pop()!;

switch(parentID) {
    case "climateChange" :
        choosePage(climateChange);
        break;
    case "extremePoverty":
        choosePage(poverty);
        break;
}

function choosePage(page : GlobalIssues) : void {
    let description : string;
    let sec = document.createElement("section");
	sec.classList.add("subcorpo");
    description = `<h4> ${page.nome}</h4>
                   <p> ${page.description}</p>`;

    document.getElementById('detail')!.appendChild(sec);
    sec.innerHTML = description;
}