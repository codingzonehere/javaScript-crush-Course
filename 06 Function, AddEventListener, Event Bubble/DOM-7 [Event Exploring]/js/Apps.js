/*
var selectItem = document.getElementsByTagName('li');
for (let i = 0; i < selectItem.length; i++) {
    var element = selectItem[i];
    //console.log(selectItem);
    element.addEventListener('click', function(event){
        //console.log(this, event.target);
        //console.log(this, event.target.innerText);
        //console.log(this, event.target.parentNode);
        event.target.parentNode.removeChild(event.target);
    });
}
*/
//Add item
document.getElementById('addItem').addEventListener('click', function(event){
    var itemParent = document.getElementById('myList');
    var itemAddNew = document.createElement('li');
    itemAddNew.innerText = 'Brand new item-1';
    itemParent.appendChild(itemAddNew);
});
//Remove
document.getElementById('myList').addEventListener('click', function(event){
    //console.log(this, event.target);
    event.target.parentNode.removeChild(event.target);
});