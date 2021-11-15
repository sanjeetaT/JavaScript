/*
function Ride_Function(){
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride .";
}
    */
   /* Ternary function */
function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not unough age to vote":"You are enough to vote";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote .";
}
    /*Constructor function */

    /*
  
function Vehicle (Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + " manufactured in " + Erik.Vehicle_Year;
}



function Vehicle (Make, Model, Year, Color)
{
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;

}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_this").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + " manufactured in " + Erik.Vehicle_Year;
}

  */


function User(first, last, age, eye)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
const mySister = new User("Kali", "Roy", 48, "blue" );
function myFunction() {
    document.getElementById("New_this").innerHTML = " firstName is " + mySister.firstName + " lastName is " + mySister.lastName +  " age is 27 " + " eye color is " + mySister.eyeColor;
}

/* Nested function */

function count_Function(){
    document.getElementById("Counting").innerHTML = Count();
    function Count(){
        var String_point = 19;
        function Plus_one() {String_point += 1;}
        Plus_one();
        return String_point;
    }
}

