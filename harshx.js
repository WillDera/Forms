/* addEventListener("click", function(event){
    var click = "Hello";
    document.write(click);
}); */
/*
var first = document.getElementById("first");
first.onclick = function(event){
    event.target.classList.toggle("highlight");
}

function harsh(){
    var f = document.getElementsByClassName("p1");
    var g = f.nodeValue;
    document.write(g);

}
harsh();

for(var i=1; i<3; i++){
    event = onmousedown;
    if(event === onmousedown){
    addEventListener("mousedown", function(){
        var reach = document.getElementById("first");
        reach.setAttribute("id", "highlight");
    })
    }else{
        console.log(" ");
    }
} */

addEventListener("keydown", function(event) {
  console.log("You just " + event.type);
});

addEventListener("keyup", function(event) {
  console.log("You just hit " + event.type);
});

document.body.addEventListener("keydown", function() {
  console.log(String.fromCharCode(charCode));
});
