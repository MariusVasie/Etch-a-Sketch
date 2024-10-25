// Constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
let gridBtn = document.getElementById("grid-size-btn");



//Initial default grid
defaultGrid(100);
hoverEfect();

// Create the grid
function defaultGrid(number) {
    makeRows(number);
    makeColumns(number);
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

//Get new grid size from user

//Clear the existing grid
function clearGrid()
{
    document.getElementById("container").innerHTML = "";
}

//Get new size
const getGridSize = function () {
    let gridSize = Number(window.prompt("Please enter the size of the grid (max 100)", ""));
    if (gridSize <= 100) {
        return gridSize;
    } else {
        alert('Incorrect value. Please choose a number between 1 and 100');
        getGridSize();
    }
};

// Generate new grid
gridBtn.addEventListener("click", function(e) {
    clearGrid();
    defaultGrid(getGridSize());
    hoverEfect();
})

//Add hover efect
function hoverEfect() {
    let cellOpacity = [];
    for(let i=0;i<cells.length;i++){
        cellOpacity[i] = 0.1; 
        cells[i].addEventListener("mouseenter", function (e) {
            // cells[i].classList.add('hover');

            //Generate random color
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
  
            cells[i].style.backgroundColor = "#" + randomColor;
            if (cellOpacity[i] == 1) {
                cells[i].style.opacity = "1";
            } else {
                cellOpacity[i] = cellOpacity[i] + 0.1;
                cells[i].style.opacity = cellOpacity[i];
            }

        });
    }
}
  