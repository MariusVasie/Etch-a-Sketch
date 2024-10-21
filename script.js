// Constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let gridBtn = document.getElementById("grid-size-btn");

//Get grid size from user
gridBtn.addEventListener("click", function getGridSize(e) {
    clearGrid();
    let gridSize = Number(window.prompt("Please enter the size of the grid (max 100)", ""));
    if (gridSize <= 100) {
        return gridSize;
    } else {
        alert('Incorrect value');
        getGridSize();
    }
})

//Clear the existing grid
function clearGrid()
{
    document.getElementById("container").innerHTML = "";
}

// Create a default grid sized 16x16
function defaultGrid() {
    makeRows(16);
    makeColumns(16);
}

function makeRows(rowNum) {
    for (r = 0; r < rowNum; r++) {
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
    };
};

function makeColumns(cellNum) {
    for (i = 0; i < rows.length; i++) {
        for (j = 0; j < cellNum; j++) {
            let newCell = document.createElement("div");
            rows[j].appendChild(newCell).className = "cell";
        };

    };
};

defaultGrid();


for(let i=0;i<cells.length;i++){ 
    cells[i].addEventListener("mouseenter", function (e) {
        cells[i].classList.add('hover');
    });
    // cells[i].addEventListener("mouseleave", function (e) {
    //     cells[i].classList.remove('hover');
    // }); 
}





  