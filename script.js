function ClearScreen() {
    document.getElementById("display").innerHTML=""
}
function display(value) {
    document.getElementById("display").innerHTML += value;
}
function Calculate() {
    var p = document.getElementById("display").innerHTML;
    var q = eval(p);
    document.getElementById("display").innerHTML = q;
}
function backspace(){
    
        var value = document.getElementById("display").innerHTML;
        document.getElementById("display").innerHTML= value.slice(0, value.length - 1);
}