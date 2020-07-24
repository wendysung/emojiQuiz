var score = 0;

function check1(){
    var answer1In = document.getElementById("sex-education");
    var answer = answer1In.value.toLowerCase();
    if (answer == "sex education"){
        document.getElementById("answer1").innerHTML= "&#9989; correct!";
        score++;
    }
    else{
        document.getElementById("answer1").innerHTML= "Sorry, its actually... <b>Sex Education</b>!";
    }
}


function check2(){
    var answer2In = document.getElementById("how-i-met-your-mother");
    var answer = answer2In.value.toLowerCase();
    if (answer == "how i met your mother"){
        document.getElementById("answer2").innerHTML= "&#9989; correct!";
        score++;
    }
    else{
        document.getElementById("answer2").innerHTML= "Sorry, its actually... <b>How I Met Your Mother</b>!";
    }
}


function check3(){
    var answer3In = document.getElementById("umbrella-academy");
    var answer = answer3In.value.toLowerCase();
    if (answer == "umbrella academy"){
        document.getElementById("answer3").innerHTML= "&#9989; correct!";
    }
    else{
        document.getElementById("answer3").innerHTML= "Sorry, its actually... <b>Umbrella Academy</b>!";
    }
}


function check4(){
    var answer4In = document.getElementById("flea-bag");
    var answer = answer4In.value.toLowerCase();
    if (answer == "flea bag"){
        document.getElementById("answer4").innerHTML= "&#9989; correct!";
        score++;
    }
    else{
        document.getElementById("answer4").innerHTML= "Sorry, its actually... <b>Flea Bag</b>!";
    }
}


function check5(){
    var answer5In = document.getElementById("killing-eve");
    var answer = answer5In.value.toLowerCase();
    if (answer == "killing eve"){
        document.getElementById("answer5").innerHTML= "&#9989; correct!";
        score++;
        alert("your total score is: " + score);
    }
    else{
        document.getElementById("answer5").innerHTML= "Sorry, its actually... <b>Killing Eve</b>!";
        alert("your total score is: " + score);
    }
}


// prevents page refresh when a button is clicked
$("button").click(function(event){
    event.preventDefault();
  });