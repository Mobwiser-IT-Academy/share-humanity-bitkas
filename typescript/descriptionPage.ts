import {globalIssues} from "../mainScreen/globalIssues";
import {GlobalIssue} from "../mainScreen/globalIssues"; 
let path : string;
let parentID : string;
path = window.location.search;
parentID = path.split('=').pop()!;
for(let i = 0; i<globalIssues.length; i++) {
    if(globalIssues[i].nome.trim() === parentID){
        let description : string;
        let sec = document.createElement("section");
        sec.classList.add("subcorpo");
        description = `<h4> ${globalIssues[i].nome}</h4>
               <p> ${globalIssues[i].description}</p>`;

        document.getElementById('detail')!.appendChild(sec);
        sec.innerHTML = description;
}}