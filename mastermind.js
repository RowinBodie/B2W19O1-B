var colors=[
    "purple",
    "blue",
    "green",
    "red",
    "yellow",
    "black"
];
var arrayColors = [
    "first",
    "second",
    "third",
    "fourth"
];

var arrayBlock=[];
var arraySquircles=[];
var arrayCircles=[];
var theCode=[];
var tempArray=[];
var next;
var counter=11;
var chosenOne;
var answerColor=[];
var playerChoice;
var checkIfLost = false;
var holdSelect;

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

    var div3 = document.createElement("div");
    div3.id = "answerText";
    div3.innerHTML = "The Answer:";
    document.body.appendChild(div3);

    next = document.createElement("button");
    next.id = "next";
    next.innerHTML = "Next Game";
    next.addEventListener("click", function(){reset()});
    document.body.appendChild(next);

    for(j=0;j<4;j++){
        var circle = document.createElement("span");
        circle.className = "circles";
        document.getElementById("answer").appendChild(circle);
        answerColor.push(circle);
    }

    var checkButton = document.createElement("button");
    checkButton.id = "check";
    checkButton.innerHTML = "Check";
    checkButton.addEventListener("click", function(){checkForCheck()});
    document.body.appendChild(checkButton);

    var div = document.createElement("div");
    div.id = "colorPallet";
    document.body.appendChild(div);

    for(i=0;i<6;i++){
        var choice = document.createElement("span");
        choice.className = "circles";
        choice.color = colors[i];
        choice.style.background = colors[i];
        choice.addEventListener("click", function(){changeColor(this.color)});
        document.getElementById("colorPallet").appendChild(choice);
    }
    console.log(arrayCircles);
    console.log(arraySquircles);
    console.log(arrayBlock);
}
function code(){
    singleCode = [];
    for(i=0;i<4;i++){
        var number = Math.floor(Math.random() * 6);
        singleCode = colors[number];
        if(number = number){
            var number = Math.floor(Math.random() * 6);
            singleCode = colors[number];
        }
        theCode.push(singleCode);
        console.log(theCode);
    }
    giveClick();
}
function giveClick(){
    console.log(counter)
    for(i=0;i<4;i++){
        if(counter != -1){
            var temp = arrayCircles[counter][i];
            temp.number = i;
            temp.addEventListener("click", function(){selected(this.number)});
        }
    }
}
function removeClick(){
    for(i=0;i<4;i++){
        var temp = arrayCircles[counter][i];
        temp.number = i;
        temp.removeEventListener("click", function(){selected(this.number)});
    }
    counter--
    if(counter == -1){
        lose();
    }
    giveClick();
}
function selected(select){
    holdSelect = select;
    playerChoice = arrayCircles[counter][holdSelect];
    var border = document.getElementById("borderColor")
    if(border != null) border.id = "";
    playerChoice.id = "borderColor";
    chosenOne = holdSelect;
}
function changeColor(color){
    playerChoice.style.backgroundColor = color;
    arrayColors[chosenOne] = color;
    if(holdSelect<3){
        holdSelect+=1;
    selected(holdSelect);
    }
}
function checkForCheck(){
    if(arrayColors[0] != "first"){
        if(arrayColors[1] != "second"){
            if(arrayColors[2] != "third"){
                if(arrayColors[3] != "fourth"){
                    check();
                }
            }
        }
    }
}
function check(){
    var holdArray = [];
    var progress = [];
    for (i = 0; i < arrayColors.length; i++) {
        holdArray[i] = arrayColors[i];
    }
    for(i=0;i<4;i++){
        if(holdArray[i]==theCode[i]){
            holdArray[i] = "rightP";
            progress.push("r");
        }
    }
    var holdCode = [];
    for (i = 0; i < theCode.length; i++) {
        holdCode[i] = theCode[i];
    }
    for(i=0;i<4;i++){
        if(holdArray[i] != "rightP"){
            for(n=0;n<4;n++){
                if(holdArray[i]==theCode[n]){
                    if(holdArray[n]!="rightP"&&holdCode[n]!="checked"){
                        holdCode[n] = "checked";
                        holdArray[i] = "wrongP";
                        progress.push("w");
                    }
                }
            }
        }
    }
    checkProgress(progress);
}
function checkProgress(progress){
    var tempProgress = progress;
    for(i=0;i<tempProgress.length;i++){
        var tempHoldSquircle = arraySquircles[counter][i];
        if(tempProgress[i] == "r"){
            tempHoldSquircle.style.backgroundColor = "red";
        }
        else if(tempProgress[i] =="w"){
            tempHoldSquircle.style.backgroundColor = "white";
        }
    }
    if(tempProgress[0] == "r"){
        if(tempProgress[1] == "r"){
            if(tempProgress[2] == "r"){
                if(tempProgress[3] == "r"){
                    victory()
                }
            }
        }
    }
    arrayColors = [
        "first",
        "second",
        "third",
        "fourth"
    ];
    removeClick();
    holdSelect = 0;
    selected(holdSelect);
}
function showCode(){
    for(i=0;i<4;i++){
        var tempholdObj = answerColor[i];
        var tempHoldC = theCode[i];
        tempholdObj.style.backgroundColor = tempHoldC;
    }
}
function victory(){
    alert("You Won!");
    showCode();
    next.style.display = "inline-block";
    checkIfLost = false;
    removeClick();
    selected(0);
}
function lose(){
    alert("You Lose!");
    showCode();
    next.style.display = "inline-block";
    checkIfLost = false;
    removeClick();
    selected(0);
}
function reset(){
    for(i=0;i<4;i++){
        var tempholdObj = answerColor[i];
        tempholdObj.style.backgroundColor = "lavender";
    }
    for(i=11;i>=0;i--){
        for(n=0;n<4;n++){
            var holdCircle = arrayCircles[i][n];
            var holdSquircle = arraySquircles[i][n];
            holdCircle.style.backgroundColor = "lavender";
            holdSquircle.style.backgroundColor = "";
        }
    }
    checkIfLost = true;
    counter = 11;
    next.style.display = "none";
    theCode=[];
    code();
}
generate();
code();
selected(0);