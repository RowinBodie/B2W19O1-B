var colors=[
    "black",
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
    console.log(arrayCircles);
    console.log(arraySquircles);
    console.log(arrayBlock);
}
function code(){
    for(i=0;i<4;i++){
        number = Math.floor(Math.random() * 6);
        singleCode = colors[number];
        if(number = number){
            number = Math.floor(Math.random() * 6);
            singleCode = colors[number];
        }
        theCode.push(singleCode)
    }
    console.log(theCode);
}
function start(){
    
}
function selectColor(){
    
}
generate();
code();