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
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
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
