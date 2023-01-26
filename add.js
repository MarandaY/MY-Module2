
// picture grab, just for practice

document.getElementById("pic").src ="./image/Mike.png";

// Global variables that reflect solved math problems

var x = 10;
var y = 6;
var simple = x + y;

let a = 7;
let z = 50 * (a + x);

document.getElementById("mathOne").innerHTML = simple;
document.getElementById("mathThree").innerHTML = z;

// The block variables that use the same identifiers for a different result:

{
    var x = 25;
    var y = x ** 3;
    document.getElementById("mathTwo").innerHTML = y;
}


// These are string variables that make the text appear on the page:

let words = "JavaScript is tricky! But I'm getting the hang of it.";

document.getElementById("test").innerHTML = words;

//Object variable describing the image:

const picture = {type:"drawing", model:"Mike", size:"little"};

document.getElementById("confirm").innerHTML = "The picture is a " + picture.size + " doodle of a guy named " + picture.model +", a silly "+ picture.type +" of mine to fill space and practice an object variable." ;

var misc = "This is one of the string variables, just in the console!";

console.log (misc);