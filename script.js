let container = document.getElementById("container");

function createGrid() {
    size = prompt("What size?")
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)` 
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add("cell");
        container.appendChild(cell);
    };
};




const startBtn = document.querySelector("#startBtn");
startBtn.addEventListener('click', () => {
    
    container.innerHTML= "";
    
    createGrid();

    let cells = container.querySelectorAll('.cell');
    cells.forEach(cell => cell.addEventListener('mouseover', colorGrid)); 
    
    function colorGrid() {
        this.style.backgroundColor = "black";
    }

});