function getnumber(num){
    var result = document.getElementById("result");
    result.value += num;
}
function clearbtn(){
    var result = document.getElementById("result");
    result.value=""
}
function result(){
    var result = document.getElementById("result");
    result.value = eval(result.value);
}
function del(){
    var result = document.getElementById("result");
    result.value = result.value.slice(0,-1); 
}