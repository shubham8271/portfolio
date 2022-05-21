
var counter1 = document.getElementById("count1");
var counter2 = document.getElementById("count2");
var counter3 = document.getElementById("count3");

counter1.innerText = 0;
counter2.innerText = 0;
counter3.innerText = 0;
function increasecounter1(){
    counter1.innerText++;
    if(counter1.innerText == 100){
        clearInterval(counter1increase)
    }
}

var counter1increase = setInterval(increasecounter1,15);

function increasecounter2(){
    counter2.innerText++;
    if(counter2.innerText == 250){
        clearInterval(counter2increase)
    }
}

var counter2increase = setInterval(increasecounter2,15);

function increasecounter3(){
    counter3.innerText++;
    if(counter3.innerText == 80){
        clearInterval(counter3increase)
    }
}

var counter3increase = setInterval(increasecounter3,15);




