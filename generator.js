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

let currentWindow = window.location.pathname;
let page = currentWindow.split("/").pop();
if(page == "humanitariumIssues.html") {
let globalIssues = [climate, extremePoverty];
for(var i = 0; i<globalIssues.length; i++) {
	/*let sec = document.createElement("section");
	let h3 = document.createElement("h3");
	let firstH4 = document.createElement("h4");
	let firstP = document.createElement("p");
	let secondH4 = document.createElement("h4");
	let secondP = document.createElement("p");
	sec.classList.add("subcorpo");
	h3.classList.add("conteudo");
	let textH3 = document.createTextNode(globalIssues[i].nome);
	h3.appendChild(textH3);
	sec.appendChild(h3);
	firstH4.classList.add("conteudo");
	let textFirstH4 = document.createTextNode("People Afected:");
	firstH4.appendChild(textFirstH4);
	sec.appendChild(firstH4);
	document.getElementById("unica").appendChild(sec);
}*/ console.log("here");
	let sec = document.createElement("section");
	sec.classList.add("subCorpo");
	document.getElementById("unica").appendChild(sec);
	const markup = {tag:'<h3 class="conteudo">' + 
							globalIssues[i].nome + 
						' </h3>' +
						'<h4 class="conteudo">People Afected:</h4>'};
	sec.outerHTML = markup.tag;

	//let node = document.createElement(markup.tag);
	//document.getElementById("").innerHTML = markup;
	document.getElementById("unica").appendChild(sec);
		
}
}
function myFunction(parentId) {
	let page = window.open("./second.html?parentID=" +parentId);
	page.getElementById("teste").innerHTML = "testeTesteTeste";
}
	