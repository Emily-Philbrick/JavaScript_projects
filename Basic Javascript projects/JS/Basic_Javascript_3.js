
function addition_Function() {
    var addition = 2 + 2; 
document.getElementById("math") .innerHTML = "2 + 2 = " + addition;
}


function subtraction_Function() {
    var subtraction = 2 - 2; 
document.getElementById("more_math") .innerHTML = "2 - 2 = " + subtraction;
}

function multiplication() {
    var simple_Math= 2 * 2;
    document.getElementById("and_more_math") .innerHTML = "2 x 2 = " + simple_Math;
}

function division() {
    var simple_Math = 48 / 6; 
    document.getElementById("last_time_math.").innerHTML = "48 / 6 = " + simple_Math;
}

function the_most_Math() {
    var simple_Math= (1+2) * 10 / 2-5; 
    document.getElementById("the_most_Math").innerHTML = "1 plus 2 multiplied BY 10, divided in half and then subtraceted by 5 equals " + simple_Math;
}

function modulus_operator() {
    var simple_Math = 25 % 6; 
    document.getElementById ("Mod_Math").innerHTML = " When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var x = 10;
    document.getElementById("yes").innerHTML = -x; 

}

var X = 5;
X++;
document.write(X);

var X = 5.25; 
X--; 
document.write(X);

window.alert(Math.random());

window.alert(Math.random() * 100); 