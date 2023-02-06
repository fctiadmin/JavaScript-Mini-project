
// function changeStyle(){
//     var para=document.getElementById('para1');
//     para.style.color="red";
//     para.style.backgroundColor="green";

// }

function addStyle(){
    var para=document.getElementById('para1');
    para.classList.add('active');
}
function removeStyle(){
    var para=document.getElementById('para1');
    para.classList.remove('active');
}
function onof(){
    var para=document.getElementById('para1');
    para.classList.toggle('active');
}