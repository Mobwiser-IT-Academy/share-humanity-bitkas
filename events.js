/*let count = 0;
let section = document.getElementsByClassName('subcorpo');
for(let i = 0; i<section.length; i++) {
    section[i].addEventListener("mouseover", bigger);
    section[i].addEventListener("mouseout", smaller);
}

function bigger() {
    
    //event.target.style.flexGrow = "2";
    if(count == 0) {
        event.target.style.transform = "rotate(10deg)";
        let child =event.target.childNodes;
        for(let i = 0; i<child.length;i++) {
            child[i].style.transform = "rotate(10deg)";
        }
        count++;
    }
}

function smaller() {
    //event.target.style.flexGrow="1";
}*/