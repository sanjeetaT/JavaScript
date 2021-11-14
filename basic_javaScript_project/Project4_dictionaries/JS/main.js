function my_Dictionary(){ // function name
    var Animal = {   // variables
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

function my_Dictionary_one(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"wolf!"
    
    };
    delete Animal.Sound;
    document.getElementById("Dictionary_one").innerHTML = Animal.Sound;
}

document.write(typeof "Word");

document.write(typeof 3);

document.write("10" + 5);