const container = document.querySelector("#container");

for(let i = 1; i <= 256; ++i){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["background-color"] = "red";
    square.style["width"] = "5px";
    square.style["height"] = "5px";
    square.style["margin"] = "1px"; 
    container.appendChild(square);
    if(i % 16 == 0){
        const lineBreak = document.createElement("div");
        lineBreak.classList.add("break");
        lineBreak.style["flex-basis"] = "100%";
        lineBreak.style["width"] = "0";
        container.appendChild(lineBreak);
    }
}



