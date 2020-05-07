document.write(typeof "Word");


document.write(-3E310) ;

document.write(10 > 2);

document.write(10 < 2);

console.log(2 + 2);

document.write("10" + 5);

document.write(10 == 10);

document.write(3 == 11);

X = 10; 
Y = 10;
document.write (X === Y);

X = 82; 
Y = "82";
document.write(X === Y);

X = "Magnus";
B = "Magnus";
document.write(A === B);

document.write(5 > 2 && 10 > 4);

document.write(5 > 10 && 10 > 4);

document.write(5 > 10 || 10 > 4 );

document.write(5> 10 || 10 > 2);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;

}

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNAN('This is a string');
}

function not_Function() {
    document.getElementById("Not").innerHTML = ! (20 > 10);
}

document.write(bigger = 5 >1) ? "left number is bigger":"Right number is bigger") ;

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue; 
    Can_ride = (Height < 52) ? "you are too short": "you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}