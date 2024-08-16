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
            square.style["background-color"] = "black";
            square.style["opacity"] = "0"
            square.style["flex"] = "1 1 0px";
            square.className = "0"; 
            square.addEventListener("mouseover", () => {
                if(Number(square.className) < 1){
                    square.className = Number(square.className) + 0.1;
                    square.style["opacity"] = square.className;
                }
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



