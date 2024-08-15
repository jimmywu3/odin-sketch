const container = document.querySelector("#container");
const btn = document.querySelector("#resize");

for(let i = 1; i <= 256; ++i){
    const square = document.createElement("div");
    square.classList.add("square");
    square.style["background-color"] = "red";
    square.style["width"] = "10px";
    square.style["height"] = "10px";
    square.style["margin"] = "1px"; 
    square.addEventListener("mouseover", () => {
        square.style["background-color"] = "blue";
    });
    container.appendChild(square);
    if(i % 16 == 0){
        const lineBreak = document.createElement("div");
        lineBreak.classList.add("break");
        lineBreak.style["flex-basis"] = "100%";
        lineBreak.style["width"] = "0";
        container.appendChild(lineBreak);
    }
}

let resize = () => {
    let size = prompt("Enter new grid size (max: 100):")
    
};

btn.addEventListener("click", resize);



