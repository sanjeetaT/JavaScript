function Color_Function(){
    var Color_Output;
    var Colors = document.getElementById("Color_Input").ariaValueMax;
    var Color_String = " is a great color!";
    switch(Colors){
        case "Red":
            Color_Output  = "Red" + Color_String;
            break;
            case "Yellow":
                Color_Output  = "Yellow" + Color_String;
                break;
                case "Green":
                    Color_Output  = "Green" + Color_String;
                    break;
                    case "Blue":
                        Color_Output  = "Blue" + Color_String;
                        break;
                        case "Pink":
                            Color_Output  = "Pink" + Color_String;
                            break;
                            case "Purple":
                                Color_Output  = "Purple" + Color_String;
                                break;
                                default:
                                Color_Output = "Please enter a color exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML = Color_Output;
}
/* switch statement */

function Food_Function(){
    var Food_Output;
    var Foods = document.getElementById("Food_Input").ariaValueMax;
    var Food_String = " is a great food!";
    switch(Food){
        case "Pizza":
            Color_Output  = "Pizza" + Color_String;
            break;
            case "SeeFood":
                Color_Output  = "SeeFood" + Color_String;
                break;
                case "Chicken":
                    Color_Output  = "Chicken" + Color_String;
                    break;
                    case "Soup":
                        Color_Output  = "Soup" + Color_String;
                        break;
      
                                default:
                                Color_Output = "Please enter a color exactly as written on the above list.";

    }
    document.getElementById("Output").innerHTML = Food_Output;
}

/* get Element class by method */
function Hello_World_Function(){
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML  = "The text has changed";
}
/*  Canves Function left to right */

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);

/* Canvas function top to  button */
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(1, "white");
ctx.fillStyle = my_gradient;
ctx.fillRect(20, 20, 150, 100);