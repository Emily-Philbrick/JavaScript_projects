function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue; 
    Can_ride = (Height < 52) ? "you are too short": "you are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var age, Can_vote;
    age = document.getElementById("Age").nodeValue;
    Can_vote = (age < 18) ? "you are not old enough": "you are old enough";
    document.getElemendById("Ride").innerHTML = can_vote + "Vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; 
    this.Vehicle_Model = Model; 
    this.Vehicle_Year = Year; 
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "viper", 2020, "red");
var Emily = new Vehicle("Jeep", "trail hawk", 2019, "white and black");
var Erik = new Vehicle("Ford", "pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + " -colored " + Erik.Vehicle_MOdel +
    "manufactured in " + Erik.Vehicle_Year; 
}

function Person(first, last, age, eye) {
    this.firstName = first; 
    this.lastName = last; 
    this.age = age; 
    this.eyeColor = eye; 
    this.nationaility = "English";
    this.break = break; 
}

function Nested_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9; 
        function Plus_one() {starting_point += 1;}
        Plus_one(); 
        return Starting_point; 
    }
}

