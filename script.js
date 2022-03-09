let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById("grid"); //grab grid
    let rows = document.getElementsByTagName("tr"); //grab existing rows
    console.log(rows.length);

    if (rows.length == 0){ //in case of empty grid
        let row = document.createElement("tr"); //create row
        let col = document.createElement("td"); //create cell in row
        col.onclick = function (){
            this.style.backgroundColor = colorSelected; //set color
        };
        row.appendChild(col); //add cell to row
        grid.appendChild(row); //add row to grid
    }else{
        let row = document.createElement("tr"); //create row
        for(let i = 0; i < rows[0].childElementCount; i++){
            let col = document.createElement("td"); //create cell in row
            col.onclick = function (){
                this.style.backgroundColor = colorSelected; //set color
            };
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

//Add a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);

    if(rows.length == 0){
        let row = document.createElement("tr"); //create row
        let col = document.createElement("td"); //create cell in row
        col.onclick = function (){
            this.style.backgroundColor = colorSelected; //set color
        };
        row.appendChild(col); //add cell to row
        grid.appendChild(row); //add row to grid
    }else{
        
        for(let i = 0; i < rows.length; i++){ //for every row, add one column
            let col = document.createElement("td");
            col.onclick = function (){
                this.style.backgroundColor = colorSelected; //set color
            };
            rows[i].appendChild(col);
        }

    }
}

//Remove a row
function removeR() {
    let row = grid.lastElementChild;
    grid.removeChild(row);
}
//Remove a column
function removeC() {
    let row = document.querySelectorAll("tr"); //returns list of all row elements 
    for(let i = 0; i < row.length; i++){ //iterates for each row
        let col = row[i].lastElementChild; //grabs last element within row which is column
        grid.removeChild(col);  //removes column
    }
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    let cells = document.querySelectorAll("td"); //grab all cells in grid
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = colorSelected; //set cell to selected color
    }
}

function clearAll(){
    let cells = document.querySelectorAll("td"); //grab all cells in grid
    for(let i = 0; i < cells.length; i++){
        cells[i].style.backgroundColor = "white"; //set cell back to white
    }
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
