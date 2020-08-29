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
	sec.classList.add("subcorpo");
	//document.getElementById("unica").appendChild(sec);
	const markup = {tag:'<h3 class="conteudo">' + 
							globalIssues[i].nome + 
						' </h3>' +
						'<h4 class="conteudo">People Afected:</h4>' +
						'<p class="conteudo">' + globalIssues[i].afetados + '</p>' +
						'<h4 class="conteudo">Rank of Priority:</h4>' +
						'<p class="conteudo">' + globalIssues[i].rank + '</p>'};
	

	//let node = document.createElement(markup.tag);
	//document.getElementById("").innerHTML = markup;
	document.getElementById("unica").appendChild(sec);
	sec.innerHTML = markup.tag;	
}

function myFunction(parentId) {
	let page = window.open("./second.html?parentID=" +parentId);
}
	