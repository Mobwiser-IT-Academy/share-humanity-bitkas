//import { GlobalIssues } from "./globalIssues";

/// <reference path="globalIssues.ts" />
for(var i = 0; i<globalIssuess.length; i++) {
    let sec = document.createElement("section");
    sec.classList.add("subcorpo");
    const markup : string =`<h3 class="conteudo"> 
                            globalIssuess[i].nome </h3>
                            <h4 class="conteudo">People Afected:</h4>
                            <p class="conteudo">${globalIssuess[i].afetados}</p>
                            <h4 class="conteudo">Rank of Priority:</h4>
                            <p class="conteudo">${globalIssuess[i].rank}</p>`;

    document.getElementById("unica")!.appendChild(sec);
	sec.innerHTML = markup;
}

function myFunction(parentId : string) {
	let page = window.open("./second.html?parentID=" +parentId);
}