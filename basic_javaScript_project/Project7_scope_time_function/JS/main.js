/* global variable*/
var X = 10;
function Add_number_1() {
    document.write(20 + X + "<br>");
}
function Add_number_2() {
    document.write( X + 100);
}
Add_number_1();
Add_number_2();

/* local variable */

function Add_number_3() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_number_4() {
    document.write( X + 100);
}
Add_number_3();
Add_number_4();

/* concole.log method */
function Add_number_5() {
    var X = 10;
    console.log(15 + X);
}
function Add_number_6() {
    console.log( X + 100);
}
Add_number_5();
Add_number_6();

/* If statement */
function get_data(){
    if(new Date().getHours()< 18){
        document.getElementById("Greeting").innerHTML= "How are you today";
    }
}

/*  My own If statement */
function get_time(){
    if(new Date().getHours()< 15){
        document.getElementById("Greet").innerHTML= "How are you doing today";
    }
}

/* else statement */
function Age_Function(){
    Age = document.getElementById("Age").value;
    if(Age >= 18)
    {
        Vote = "You are old enough to vote!";
    }
    else{
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you").innerHTML = Vote;
}

/* Else If Statement */
function Time_function(){
    var Time = new Date().getHours();
    var Reply;
    if(Time < 12 == Time > 0){
        Reply = "It is morning time!";
    }
    else if(Time >= 12 == Time < 18){
        Reply = "It is afternoon!";
    }
    else{
        Reply = "It is evening time.";
    }
      document.getElementById("Time_of_day").innerHTML = Reply;
}
