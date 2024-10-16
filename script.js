// Constants and variables

const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");

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





  