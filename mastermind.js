var colors=[
    "purple",
    "blue",
    "green",
    "red",
    "yellow",
    "white"
];

var arrayBlock=[];
var arraySquircles=[];
var arrayCircles=[];
var theCode=[];
var tempArray=[];
var counter = 11;
var chosenOne;

function generate(){
    var block;

    for(i=1;i<=12;i++){
        block = document.createElement("div");
        block.className = "block";
        block.id = "row"+i;
        document.body.appendChild(block);
        arrayBlock.push(block);
    }

    for(i=1;i<=12;i++){
        var tempArray0 = [];
        var tempArray1 = [];
        var div = document.createElement("div");

        div.id = "div"+i;
        div.className = "div";
        document.getElementById("row"+i).appendChild(div);

        for(n=0;n<4;n++){
            var squircle = document.createElement("span");
            squircle.className = "squircles";
            document.getElementById("div"+i).appendChild(squircle);
            tempArray0.push(squircle);
        }
        arraySquircles.push(tempArray0);
        for(j=0;j<4;j++){
            var circle = document.createElement("span");
            circle.className = "circles"
            document.getElementById("row"+i).appendChild(circle);
            tempArray1.push(circle);
        }
        arrayCircles.push(tempArray1);
    }
    var div2 = document.createElement("div");
    div2.id = "answer";
    document.body.appendChild(div2);

    for(j=0;j<4;j++){
        var circle = document.createElement("span");
        circle.className = "circles";
        document.getElementById("answer").appendChild(circle);
    }

    var checkButton = document.createElement("button");
    checkButton.id = "check";
    checkButton.innerHTML = "Check";
    checkButton.addEventListener("click", function(){check()});
    document.body.appendChild(checkButton);

    var div = document.createElement("div");
    div.id = "colorPallet";
    document.body.appendChild(div);

    for(i=0;i<6;i++){
        var choice = document.createElement("span");
        choice.className = "circles";
        if(i == 0){
            choice.addEventListener("click", function(){changeColor("red")});
            choice.style.background = "red";
        }
        if(i == 1){
            choice.addEventListener("click", function(){changeColor("yellow")});
            choice.style.background = "yellow";
        }
        if(i == 2){
            choice.addEventListener("click", function(){changeColor("green")});
            choice.style.background = "green";
        }
        if(i == 3){
            choice.addEventListener("click", function(){changeColor("blue")});
            choice.style.background = "blue";
        }
        if(i == 4){
            choice.addEventListener("click", function(){changeColor("purple")});
            choice.style.background = "purple";
        }
        if(i == 5){
            choice.addEventListener("click", function(){changeColor("black")});
            choice.style.background = "black";
        }
        document.getElementById("colorPallet").appendChild(choice);
    }
    console.log(arrayCircles);
    console.log(arraySquircles);
    console.log(arrayBlock);
}

function code(){
    for(i=0;i<4;i++){
        var number = Math.floor(Math.random() * 6);
        singleCode = colors[number];
        if(number = number){
            var number = Math.floor(Math.random() * 6);
            singleCode = colors[number];
        }
        theCode.push(singleCode)
    }
    start();
}

function start(){
    var number1 = 0
    var number2 = 1
    var number3 = 2
    var number4 = 3
    for(i=0;i<4;i++){
        var temp = arrayCircles[counter][i];
        if(i == 0){
            temp.addEventListener("click", function(){selected(number1)});
        }
        else if(i == 1){
            temp.addEventListener("click", function(){selected(number2)});
        }
        else if(i == 2){
            temp.addEventListener("click", function(){selected(number3)});
        }
        else if(i == 3){
            temp.addEventListener("click", function(){selected(number4)});
        }
    }
}

function selected(select){
    playerChoice = arrayCircles[counter][select];
    var border = document.getElementById("borderColor")
    if(border != null) border.id = "";
    playerChoice.id = "borderColor";
    chosenOne = select;
}

var playerChoice;
var arrayColors = [
    "first",
    "second",
    "third",
    "fourth"
];

function changeColor(color){
    playerChoice.style.backgroundColor = color;
    arrayColors[chosenOne] = color;
}

generate();
code();