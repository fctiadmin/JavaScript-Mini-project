


let display=document.getElementById('display');
function cal(newvalue){
    display.value+=newvalue;
}
// answer function
function result(){
    display.value=eval(display.value);
}
function finsihData(){

display.value='';
}
function sigledel(){

   display.value=display.value.slice(0,-1);
    }
function powerac(){
    display.value=Math.pow(display.value,2);
}