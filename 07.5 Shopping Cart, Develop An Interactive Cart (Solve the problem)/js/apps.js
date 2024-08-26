//Plus button event handle....
const itemOneEvent = document.getElementById('itemOne').value;
let itemNumber = parseInt(itemOneEvent);


//Price update:
const priceUpdate = document.getElementById('priceUpdate').innerText;
let priceUpdateNum = parseFloat(priceUpdate);
//console.log("This is text: ",priceUpdateNum);
//price update end....


//Plus button event handle....
const plusBtn = document.getElementById('plusItem');
plusBtn.addEventListener('click', function(){
    increMent("itemOne", 'priceUpdate');
});

const plusBtn1 = document.getElementById('plusItem1');
plusBtn1.addEventListener('click', function(){
    increMent("itemOne1", 'priceUpdate1');
});

//Minus button event handle....
const minusBtn = document.getElementById('minusItem');
minusBtn.addEventListener('click', function(){
    decreMent('itemOne', 'priceUpdate');
});

const minusBtn1 = document.getElementById('minusItem1');
minusBtn1.addEventListener('click', function(){
    decreMent('itemOne1', 'priceUpdate1');
});

function increMent(id, id1){
    itemNumber++;
    //console.log(itemNumber);
    document.getElementById(id).value = itemNumber;

    const priceIncrease = (priceUpdateNum +  (itemNumber * 17.99))-17.99;

    document.getElementById(id1).innerText = priceIncrease.toFixed(3);
}

function decreMent(id, id1){
    //console.log(itemNumber);
    if(itemNumber>1){
        itemNumber--;
        document.getElementById(id).value = itemNumber;

        const totalPrice = ((priceUpdateNum + (itemNumber * 17.99))-17.99);
        console.log(totalPrice);

        document.getElementById(id1).innerText = totalPrice.toFixed(3);
    }
}

// Delete item...............!
const deleteItem = document.querySelectorAll('.deleteItem');

for (let i = 0; i < deleteItem.length; i++) {
    //const Items = ;
    deleteItem[0].addEventListener('click', function(event){
        document.getElementById('removeCover').style.display = 'none';
    });
    deleteItem[1].addEventListener('click', function(event){
        document.getElementById('removeCoverOne').style.display = 'none';
        document.getElementById('alertText').innerHTML = 'No item available here...!';
    });
}

// Item counter...........
function UpdateCounter(id){
    const countRemoveItem = document.getElementById(id).innerText;
    //console.log(countRemoveItem);
    let countRemoveItemNumber = parseInt(countRemoveItem);
    countRemoveItemNumber--;
    console.log(countRemoveItemNumber)
    document.getElementById(id).innerText = countRemoveItemNumber;
}

const counterChange = document.getElementById('changeCounterone');
const counterChangeOne = document.getElementById('changeCounter');
counterChange.addEventListener('click', function(){
    UpdateCounter('counterTxt');
})
counterChangeOne.addEventListener('click', function(){
    UpdateCounter('counterTxt');
})

//Date update..........
const dataUpdte = document.getElementById('currentDate').innerText;
var dataUpdteTime = new Date();
document.getElementById('currentDate').innerText = dataUpdteTime;