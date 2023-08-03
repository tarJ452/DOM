// var a = document.querySelector("h1")
// a.innerHTML = "Hello friends DOM padhlo";
// a.style.backgroundColor = "red";
// a.style.color = "black"

// a.addEventListener("click", function() {
//     a.innerHTML = "hiii meri ex ki maa kii jaiii hooo";
//     a.style.backgroundColor = "yellow";
//     a.style.fontSize = "100px";
// });
var b = document.querySelector("#bulb");
var a = document.querySelector("button");

var c = 0;
a.addEventListener("click", function() {

    if (c == 0) {
        b.style.backgroundColor = "yellow";
        c = 1;
        a.innerHTML = "OFF";
        console.log("Clicked on button");
    } else {
        b.style.backgroundColor = "Transparent";
        c = 0;
        a.innerHTML = "ON";
        console.log(" Again Clicked on button");
    }


});