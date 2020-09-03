//let path1 = window.location.pathname;
//let page1 = path.split("=").pop();
let search = window.location.search;
let result = search.split("=").pop();
switch (result) {
  case "climateChange":
    climate1();
    break;

  case "extremePoverty":
    poverty();
    break;
}
function climate1() {
  let h4 = document.createElement("h4");
  let a = document.createTextNode(climate.nome);
  h4.appendChild(a);
  let p = document.createElement("p");
  let b = document.createTextNode(climate.description);
  p.appendChild(b);
  document.getElementById("detail").appendChild(h4);
  document.getElementById("detail").appendChild(p);
}

function poverty() {
  let h4 = document.createElement("h4");
  let a = document.createTextNode(extremePoverty.nome);
  h4.appendChild(a);
  let p = document.createElement("p");
  let b = document.createTextNode(extremePoverty.description);
  p.appendChild(b);
  document.getElementById("detail").appendChild(h4);
  document.getElementById("detail").appendChild(p);
}
