function Call_Loop() {
    var Digit = "";
    var X = 1; 
    while (X < 11) {
        Digit += "<br>" = X; 
        X++; 
    }
    document.getElementById("Loop").innerHTML = Digit; 
}

var str = "Hello World!";
var n = str.length;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "violin", "trumpet", "Flute"];
var Content = "";
var Y; 
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content  += INstruments[Y] = "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content; 
}

function cat_pics() {
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function(){
    const Musical_Instrument = {type: "guitar", brand:"Fender", color:"black"}; 
    Musical_Instrument.color = "blue";
    Musical_Instrument.price="$900"; 
    document.getElementById("constant").innerHTML = "The cost of the " +
        Musical_Instrumenttype +", was" + Musical_Instrumentprice; 
}

var X = 82; 
document.write(X); 
{
    var X = 33; 
    document.write("<br>" = X);
}
document.write("<br>" + X);
