// colors[
//     "black",
//     "blue",
//     "green",
//     "red",
//     "yellow",
//     "white"
// ];
// 2 t/m 13
function create(){
    var array = [];
    var block;
    for(i=1;i<=12;i++){
        block = document.createElement("div");
        block.className = "block";
        block.id = "row"+i;
        document.body.appendChild(block);
        array.push(block)
    }
    console.log(array);
    var div;
    var test = document.body.getElementsByTagName("div");
    for(i=0;i<12;i++){
        div = document.createElement("div");
        console.log(array[i]);
        test[i].appendChild(div);
        for(n=0;n<4;n++){
            var squircle = document.createElement("span");
            squircle.className = "squircles";
            test2[i].appendChild(squircle);
        }
        for(j=0;j<4;j++){
            var Circle = document.createElement("span");
            Circle.className = "circles";
            document.getElementById().appendChild(Circle);
        }
    }
    var test2 = document.getElementById("row"+1).getElementsByTagName("div");
}
create()