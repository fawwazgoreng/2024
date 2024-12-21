// DOOM SELECTION
//document.getElementById("id")
//document.getElementsByClassName("class")
//document.getElementsByTagName("tag")
//document.querySelector("selector")
//document.querySelectorAll("selector")

// DOM MANIPULATION
//document.getElementById("id").innerHTML = "judul baru";
const id = document.getElementById("judul");
id.style.backgroundColor = "blue";

//document.getElementsByClassName("class")[0].innerHTML = "judul baru";
const class1 = document.getElementsByClassName("p1")[0];
class1.style.backgroundColor = "red";

//document.getElementsByTagName("tag")[0].innerHTML = "judul baru";
const tag = document.getElementsByTagName("p")[2];
tag.style.backgroundColor = "gray";

//document.querySelector("selector").innerHTML = "judul baru";
const selector = document.querySelector("#b p");
selector.style.backgroundColor = "yellow";

//document.querySelectorAll("selector")[0].innerHTML = "judul baru";
const selector2 = document.querySelectorAll("#b p")[0];
selector2.style.fontSize = "50px";

//document.querySelector+document.getElementByTagName
const test = document.querySelector("section#b");
const test2 = test.getElementsByTagName("p")[1];
test2.style.backgroundColor = "green";
