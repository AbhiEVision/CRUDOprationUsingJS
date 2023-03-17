const FORM = document.getElementById("PopUPForm");
const PID = document.getElementById("PID");

const FORMELEMENTS = {
    ProductName : document.getElementById("PName"),
    ProductImage : document.getElementById("PImage"),
    ProductPrice : document.getElementById("PPrice"),
    ProductDiscription : document.getElementById("PDisc"),
    ProductID : document.getElementById("PID"),
}

const blurThis = [
    document.getElementById("page-title"),
    document.getElementById("core-buttons"),
    document.getElementById("show-data-container"),
]

const Table = document.getElementById("store-here");

let imageString = "";

const noramlForm = {
    btn1 : document.getElementById("add"),
    btn2 : document.getElementById("clear"),
    btn3 : document.getElementById("update")
}

const nothingText = document.getElementById("nothing");

const SearchBar = document.getElementById("search-bar");