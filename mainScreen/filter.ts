import { firebaseApi } from "./firebase-api";
import { globalIssues } from "./globalIssues";
import { GlobalIssue } from "./globalIssues";

let filter: HTMLElement;
filter = document.getElementById("submitFilter")!;
filter.addEventListener("click", filterPage);

function filterPage() {
  let input = document.getElementById("filter")! as HTMLInputElement;

  let target: string;
  target = input.value;

  let filtered: GlobalIssue[];
  filtered = globalIssues.filter((x) => x.nome === target);

  document.getElementById("unica")!.innerHTML = "";

  let bodyFiltered: string;
  bodyFiltered = `<h3 class="conteudo"> 
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

/*for(let i = 0; i<globalIssues.length; i++) {
    console.log('i:' + i + 'object: ' + globalIssues[i]);
    let sec = document.createElement("section");
            sec.classList.add("subcorpo");
            const markup : string =`<h3 class="conteudo"> 
            ${globalIssues[i].nome} </h3>
            <h4 class="conteudo">People Afected:</h4>
            <p class="conteudo">${globalIssues[i].afetados}</p>
            <h4 class="conteudo">Rank of Priority:</h4>
            <p class="conteudo">${globalIssues[i].rank}</p>
            <p class="conteudo" onclick="myFunction()">Descrição</p>`;
            
          document.getElementById("unica")!.appendChild(sec);
          sec.innerHTML = markup;
}*/
firebaseApi.acessDatabase().then((results: typeof globalIssues) =>
  Array.from(results).forEach((globalIssue) => {
    let sec = document.createElement("section");
    console.log(globalIssue);
    sec.classList.add("subcorpo");
    const markup: string = `<h3 class="conteudo"> 
            ${globalIssue.nome} </h3>
            <h4 class="conteudo">People Afected:</h4>
            <p class="conteudo">${globalIssue.afetados}</p>
            <h4 class="conteudo">Rank of Priority:</h4>
            <p class="conteudo">${globalIssue.rank}</p>
            <p class="conteudo" onclick="myFunction()">Descrição</p>`;

    document.getElementById("unica")!.appendChild(sec);
    sec.innerHTML = markup;
  })
);
