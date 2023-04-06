//when the script is loaded do the following

//a map with all the categories
var categories = new Map();

//set the current category
var currentCategory = null;

//set current selected cells
var selectedCells = null;

//get the div with id "categories"
const categoriesDiv = document.getElementById("categories");

//create a button that says "add category"
var buttonAddCategory = document.createElement("button");
buttonAddCategory.innerHTML = "Add Category";

//add the button to the categories div
categoriesDiv.appendChild(buttonAddCategory);

//create a button that says "export"
var buttonExport = document.createElement("button");
buttonExport.innerHTML = "Export";

//add the button to the categories div
categoriesDiv.appendChild(buttonExport);


//add a button that will add the values to the category
var buttonAddValue = document.createElement("button");
buttonAddValue.innerHTML = "Add Value";
categoriesDiv.appendChild(buttonAddValue);

//this button when clicked will create a new category
buttonAddCategory.onclick = function() {
    //get the name of the category
    var name = prompt("Enter the name of the category");
    //add the category to the map
    categories.set(name, new Map());

    //set the current category
    currentCategory = name;

    //add the category to the div
    var categoryP = document.createElement("p");
    categoryP.innerHTML = name;
    categoriesDiv.appendChild(categoryP);


    
    
    }

buttonAddValue.onclick = function() {
    //add selcted cells to the categories map   
    categories.set(selectedCells, selectedCells);

    }

buttonExport.onclick = function() {
    console.log("momenteel enkel nog maar een console log van de map");
    console.log(categories);
    }
