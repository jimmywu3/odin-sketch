const container = document.querySelector("#container");
const btn = document.querySelector("#resize");
const INITAL_DIMENSION = 16;

let createCanvas = (dimension) => {
    for(let i = 0; i < dimension; ++i){
        const rowDiv = document.createElement("div");
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



