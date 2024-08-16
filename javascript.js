const container = document.querySelector("#container");
const btn = document.querySelector("#resize");
const INITAL_DIMENSION = 16;

let createCanvas = (dimension) => {
    for(let i = 0; i < dimension; ++i){
        const rowDiv = document.createElement("div");
        rowDiv.style["display"] = "flex";
        rowDiv.style["flex-direction"] = "column";
        rowDiv.style["flex"] = "1 1 0px";
        rowDiv.style["gap"] = "1px";
        rowDiv.classList.add("row");
        for(let j = 0; j < dimension; ++j){
            const square = document.createElement("div");
            square.style["background-color"] = "red";
            square.style["flex"] = "1 1 0px";
            square.addEventListener("mouseover", () => {
                square.style["background-color"] = "blue";
            });
            rowDiv.appendChild(square);
        }
        container.appendChild(rowDiv);
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



