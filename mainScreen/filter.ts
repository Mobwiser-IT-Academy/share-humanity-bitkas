import {globalIssues} from "./globalIssues";
import {GlobalIssue}  from "./globalIssues";

let filter : HTMLElement;
filter = document.getElementById("submitFilter")!;
filter.addEventListener("click", filterPage);

function filterPage() {
    let input = document.getElementById("filter")! as HTMLInputElement;
    
    let target : string;
    target = input.value;
    
    let filtered : GlobalIssue[];
    filtered = globalIssues.filter(x => x.nome===target);
    
    document.getElementById("unica")!.innerHTML ="";
    
    let bodyFiltered : string;
    bodyFiltered =  `<h3 class="conteudo"> 
        ${filtered[0].nome} </h3>
        <h4 class="conteudo">People Afected:</h4>
        <p class="conteudo">${filtered[0].afetados}</p>
        <h4 class="conteudo">Rank of Priority:</h4>
        <p class="conteudo">${filtered[0].rank}</p>`;

    let sec = document.createElement("section");
    sec.classList.add("subcorpo");
    document.getElementById("unica")!.appendChild(sec);
    sec.innerHTML = bodyFiltered;    
}