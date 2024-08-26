/*
document.getElementById('plusItem').addEventListener('click', function(){
    const countInput = document.getElementById('itemOne');
    const counterNumber = parseInt(countInput.value);
    //console.log(counterNumber)
    const caseNewCount = counterNumber + 1;
    countInput.value = caseNewCount;

    const caseTotal = caseNewCount * 17.99;
    document.getElementById('priceUpdate').innerText = caseTotal.toFixed(3);
});

document.getElementById('minusItem').addEventListener('click', function(){
    const countInput = document.getElementById('itemOne');
    const counterNumber = parseInt(countInput.value);
    //console.log(counterNumber)
    const caseNewCount = counterNumber - 1;
    countInput.value = caseNewCount;

    const caseTotal = caseNewCount * 17.99;
    document.getElementById('priceUpdate').innerText = caseTotal.toFixed(3);
});
*/
//With function..............!
//Item-01
document.getElementById('plusItem').addEventListener('click', function(){
    handleProductItemIncrementDecrement('itemOne', true, 'priceUpdate');
});

document.getElementById('minusItem').addEventListener('click', function(){
    handleProductItemIncrementDecrement('itemOne', false, 'priceUpdate');
});
// Do it onlick event
//Item-02
document.getElementById('plusItem1').addEventListener('click', function(){
    handleProductItemIncrementDecrement('itemOne1', true, 'priceUpdate1', 20.99);
});

document.getElementById('minusItem1').addEventListener('click', function(){
    handleProductItemIncrementDecrement('itemOne1', false, 'priceUpdate1', 20.99);
});


// Create function...........
function handleProductItemIncrementDecrement(id,IsIncrease, id1, chanagePrice=17.99){
    const countInput = document.getElementById(id);
    const counterNumber = parseInt(countInput.value);
    //console.log(counterNumber)
    let caseNewCount = counterNumber;
    if(IsIncrease == true){
        caseNewCount = counterNumber + 1;
    }
    if(IsIncrease == false && caseNewCount>0){
        caseNewCount = counterNumber - 1;
    }

    countInput.value = caseNewCount;

    const caseTotal = caseNewCount * chanagePrice;
    document.getElementById(id1).innerText = caseTotal.toFixed(3);
    totalUpdate();
}

//Total Handle.......................

// Total Update.............
function totalUpdate(){
    const countInputPrice = document.getElementById('itemOne');
    const counterPriceNumber = parseInt(countInputPrice.value);

    const countInputPrice1 = document.getElementById('itemOne1');
    const counterPriceNumber1 = parseInt(countInputPrice1.value);

    const totalPrice =  counterPriceNumber * 17.99 + counterPriceNumber1 * 20.99;
    const totalProduct = counterPriceNumber + counterPriceNumber1;
    document.getElementById('updateTotal').innerText = totalPrice.toFixed(3);
    document.getElementById('countProduct').innerText = totalProduct;
}