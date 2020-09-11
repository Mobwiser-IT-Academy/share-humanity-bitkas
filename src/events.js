let filter = document.getElementById("submitFilter");
filter.addEventListener("click", filterPage);

function filterPage() {
    let target = document.getElementById("filter").value;
    let filtered = globalIssuess.filter(x => x.nome==target);
    console.log(JSON.stringify(target));
    console.log(JSON.stringify(filtered));
    document.getElementById("unica").innerHTML = "";
    let bodyFiltered = `<h3 class="conteudo"> 
        ${filtered[0].nome} </h3>
        <h4 class="conteudo">People Afected:</h4>
        <p class="conteudo">${filtered[0].afetados}</p>
        <h4 class="conteudo">Rank of Priority:</h4>
        <p class="conteudo">${filtered[0].rank}</p>`;
    
}
   
