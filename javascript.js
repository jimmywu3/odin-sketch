const container = document.querySelector("#container");
const btn = document.querySelector("#resize");
const INITAL_DIMENSION = 16;

let createCanvas = (dimension) => {
    for(let i = 1; i <= Math.pow(dimension, 2); ++i){
        const square = document.createElement("div");
        square.classList.add("square");
        square.style["background-color"] = "red";
        square.style["flex"] = "1 1 0px"
        square.style["height"] = `calc(960px/${dimension} - 1px)`;
        square.style["margin"] = "1px"; 
        square.addEventListener("mouseover", () => {
            square.style["background-color"] = "blue";
        });
        container.appendChild(square);
        if(i % dimension == 0){
            const lineBreak = document.createElement("div");
            lineBreak.classList.add("break");
            lineBreak.style["flex-basis"] = "100%";
            lineBreak.style["width"] = "0";
            lineBreak.style["height"] = "0";
            container.appendChild(lineBreak);
        }
    }    
}


let resize = () => {
    let size = prompt("Enter new grid size (max: 100):");
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    createCanvas(size);
    
};

createCanvas(INITAL_DIMENSION);
btn.addEventListener("click", resize);



