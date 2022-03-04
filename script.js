let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    alert("Clicked Add Row")
}
//Add a column
function addC() {
    alert("Clicked Add Col")
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
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
