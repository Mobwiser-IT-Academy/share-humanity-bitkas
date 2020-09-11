import {globalIssues} from "./globalIssues";
import {GlobalIssue} from "./globalIssues"; 
let path : string;
let parentID : string;
path = window.location.search;
parentID = path.split('=').pop()!;

switch(parentID) {
    case "climateChange" :
        choosePage(globalIssues[0]);
        break;
    case "extremePoverty":
        choosePage(globalIssues[1]);
        break;
}

function choosePage(page : GlobalIssue) : void {
    let description : string;
    let sec = document.createElement("section");
	sec.classList.add("subcorpo");
    description = `<h4> ${page.nome}</h4>
                   <p> ${page.description}</p>`;

    document.getElementById('detail')!.appendChild(sec);
    sec.innerHTML = description;
}