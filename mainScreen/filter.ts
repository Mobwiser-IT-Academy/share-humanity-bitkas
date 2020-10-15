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
  filtered = globalIssues.filter((x) => x.nome.toLocaleLowerCase().trim() === target.toLocaleLowerCase().trim() || x.nome.trim().toLocaleLowerCase().includes(target.trim().toLocaleLowerCase()));

  document.getElementById("unica")!.innerHTML = "";
  let bodyFiltered : string;
  for(let i = 0; i<filtered.length; i++) {
     bodyFiltered = `<div class="card"> 
                        <img src="${filtered[i].imagem}" alt="IssueImage" style="width:100% height=50%">
                        <div class="cardcontainer" style="width:100%">
                          <h3>${filtered[i].nome}</h3>
                          <h4>People Afected</h4>
                          <p>${filtered[i].afetados}</p>
                          <h4>Rank of Priority</h4>
                          <p>${filtered[i].rank}</p>                            
                        </div>
                      </div>`
 let sec = document.createElement("section");
 document.getElementById("unica")!.appendChild(sec);
 sec.innerHTML = bodyFiltered;

}
  
}

firebaseApi.acessDatabase().then((results: GlobalIssue[]) => { 
    Object.keys(results).forEach((globalIssue : any) => {
    let sec = document.createElement("section");
    //sec.classList.add("subcorpo");
    sec.id= results[globalIssue].nome.trim().toLocaleLowerCase();
    /*const markup: string = `<h3 class="conteudo"> 
            ${results[globalIssue].nome} </h3>
            <h4 class="conteudo">People Afected:</h4>
            <p class="conteudo">${results[globalIssue].afetados}</p>
            <h4 class="conteudo">Rank of Priority:</h4>
            <p class="conteudo">${results[globalIssue].rank}</p>
            <p class="conteudo" onclick="myFunction()">Descrição</p>`;
    */

    const markup : string = `<div class="card"> 
                                 <img src="${results[globalIssue].imagem}" alt="IssueImage" style="width:100% height=50%">
                                <div class="cardcontainer" style="width:100%">
                                  <h3>${results[globalIssue].nome}</h3>
                                  <h4>People Afected</h4>
                                  <p>${results[globalIssue].afetados}</p>
                                  <h4>Rank of Priority</h4>
                                  <p>${results[globalIssue].rank}</p>                            
                                </div>
                              </div>`
    document.getElementById("unica")!.appendChild(sec);
    sec.innerHTML = markup;
    
    //sec.style.backgroundImage = 'url(' + results[globalIssue].imagem + ')';
    //sec.style.filter = 'blur(5px)';
    
    globalIssues.push(results[globalIssue]);
  })
});
