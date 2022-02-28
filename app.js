//Boros Zoltán, Szoft I N, 2022.02.28
var oldalElem = document.getElementById("oldal");
var alfaElem = document.getElementById("alfa");
var gombElem = document.getElementById("gomb");
var sugElem = document.getElementById("sug")

gombElem.addEventListener("click", function() {
    var oldal = Number(oldalElem.value);
    var alfa = Number(alfaElem.value);
    var sug =  (1/2) *  Math.sin(oldal) * (alfa);
        console.log(sug);
        sugElem.value = sug;


})
