var secondBtn = document.getElementById('second');
//secondBtn.onclick =function() {
//    console.log("Second person clicked......");
//}
function handleClick(){
    document.body.style.backgroundColor = 'tomato';
}  
//secondBtn.onclick = handleClick();  // call now...
//secondBtn.onclick = handleClick;  // call onclick...
secondBtn.addEventListener('click', handleClick) ; // call onclick...
document.getElementById('lastPerson').addEventListener('click', function(){
    document.body.style.color = 'white';
});