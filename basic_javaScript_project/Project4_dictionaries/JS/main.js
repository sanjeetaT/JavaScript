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

function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}