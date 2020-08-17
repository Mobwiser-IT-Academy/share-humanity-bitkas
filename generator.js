let climate = {
	nome : "climate change",
	afetados: "20 million",
	description: "The temperature is predicted to increase leading to disappearence of territory(causing, in many cases permanent, displacemente), change morbidity disease patterns, and promote a monumental shift in global policies, climate change will transform the way humanity appproaches global security and livelihood sustainability",
	rank: "first"
};



let extremePoverty = {
	nome: "Extreme poverty",
	afetados: "Half the world's population",
	description: "Extreme poverty and inequality continue to leave whole communities and households in an almost irreversibly devastating state of vulnerability and need",
	rank: "second"
};

let path = window.location.pathname;
let page = path.split("/").pop();
if(page == "LHGI.html") {
let ls = [climate, extremePoverty];
for(var i = 0; i<ls.length; i++) {
	let sec = document.createElement("section");
	let h3 = document.createElement("h3");
	let h41 = document.createElement("h4");
	let p1 = document.createElement("p");
	let h42 = document.createElement("h4");
	let p2 = document.createElement("p");
	sec.classList.add("subcorpo");
	h3.classList.add("conteudo");
	let a = document.createTextNode(ls[i].nome);
	h3.appendChild(a);
	sec.appendChild(h3);
	h41.classList.add("conteudo");
	let b = document.createTextNode("People Afected:");
	h41.appendChild(b);
	sec.appendChild(h41);
	document.getElementById("unica").appendChild(sec);
}
}
function myFunction(parentId) {
	let page = window.open("./second.html?parentID=" +parentId);
	page.getElementById("teste").innerHTML = "testeTesteTeste";
}
	