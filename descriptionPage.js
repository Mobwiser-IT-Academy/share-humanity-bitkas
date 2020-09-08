var path;
var parentID;
path = window.location.search;
parentID = path.split('=').pop();
switch (parentID) {
    case "climateChange":
        choosePage(climateChange);
        break;
    case "extremePoverty":
        choosePage(poverty);
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
