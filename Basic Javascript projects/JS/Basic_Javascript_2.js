function My_First_Function () {
    var str = "this text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
}

function My_Second_Function () {
    var str ="this text is purple!";
    var result = str.fontcolor("Lavender");
    document.getElementById("Purple_Text").innerHTML = result; 
}

function MyFunction () {
    var sentence = "i am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate") .innerHTML = sentence; 
}

