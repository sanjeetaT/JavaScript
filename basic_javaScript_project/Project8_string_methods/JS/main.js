/* Concat Method */
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3,part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

/* function slice method */
function slice_Method(){
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

/* function upperCase method */
function upperCase_Method(){
    var txt = "How are you.";
    var result = txt.toUpperCase();
    document.getElementById("UpperCase").innerHTML = result;
}

/* function search method */
function search_Method(){
    var txt = "I have a big house";
    var position = txt.search("big")
    document.getElementById("Big").innerHTML = position;
}

/* number to string */
function string_Method(){
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

/* Precision method */
function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

/* To fix method */
function fix_Method(){
    var X = 5.56789;
    document.getElementById("Fix").innerHTML = X.toFixed();
}

/* To value method */
function value_Method(){
    var X = "Hello world!";
    document.getElementById("Value").innerHTML = X.valueOf();
}