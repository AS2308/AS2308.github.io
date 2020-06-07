let car = {
    type: "",
    model: "",
    color: "",
    seats: ""
}

var x = new Array();
var a = new Array();
var y = new Array();
var b = new Array();

var i = 0
par = ''

function carr(params) {
    car.type= prompt("enter car type:");
    car.model= prompt("enter car model:");
    car.color= prompt("enter car color:");
    car.seats= prompt("enter number of seats:");
    for (let key in car) {
        x.push(car[key]);
        par = document.createElement("P");
        par.innerText = x
        par.id = "carp"
    }
    document.getElementById("del").appendChild(par);
    search();
    a.push(x);
    x = [];
    i=i+1
}

function search(params) {
    var z = 0
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            let y = x.includes(a[i][j]);   
            console.log(y);
            
            if (y == true) {
                z = z+1
                console.log(z)
            }
                if (z>2 && z<5) {
                    alert("You already have an object with some of the same elements.");
                    z = 0
                    a.pop(x);
                    document.getElementById("del").removeChild(par);
                    x = [];

                }
        
    }             
    }
}

function delet() {
    let e = document.getElementById("del").childNodes;
    e[i].style.visibility = "hidden";
    i = i-1
}

function show() {
    var e = document.getElementById("del").children;
    var j;
    for (j = 0; j < e.length; j++) {
        e[j].style.visibility = "visible";
    }
    i = e.length;
}

function cop() {
    for (let key in car) {
        x.push(car[key]);
        var par = document.createElement("P");
        par.innerText = x
        par.id = "carp"
    }
    document.getElementById("del").appendChild(par);
    a.push(x);
    x = [];
    i=i+1
}
let book = {
    title: "",
    author: "",
    genre: "",
    pages: "",
    yr: ""
}

function b00k(params) {
    book.title= prompt("enter book title:");
    book.author= prompt("enter book author:");
    book.genre= prompt("enter book genre:");
    book.pages= prompt("enter number of pages:");
    book.yr= prompt("enter year of publication:");
    for (let key in book) {
        y.push(book[key]);
        var par = document.createElement("P");
        par.innerText = y
    }
    document.getElementById("dele").appendChild(par);
    y = []

}

function deletee(params) {
    document.getElementById("dele").innerHTML = " "
}
