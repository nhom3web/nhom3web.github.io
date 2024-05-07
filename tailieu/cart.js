function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
   caseInput.value = caseNumber;
   const caseTotal = document.getElementById(product + '-total');
   caseTotal.innerText = caseNumber * price;
   calculateTotal();
}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const teaTotal = getInputValue('tea') * 40000;
    const caseTotal = getInputValue('case') * 45000;
    const sodaTotal = getInputValue('soda') * 35000;
    const subTotal = teaTotal + caseTotal + sodaTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}
document.getElementById('case-plus').addEventListener('click',function(){
    upadateCaseNumber('case', 45000, true);
}); 
document.getElementById('case-minus').addEventListener('click',function(){
    upadateCaseNumber('case', 45000, false);
})
document.getElementById('tea-plus').addEventListener('click',function(){
    upadateCaseNumber('tea', 40000, true);
})
document.getElementById('tea-minus').addEventListener('click',function(){
    upadateCaseNumber('tea', 40000, false);
})
document.getElementById('soda-plus').addEventListener('click',function(){
    upadateCaseNumber('soda', 35000, true);
})
document.getElementById('soda-minus').addEventListener('click',function(){
    upadateCaseNumber('soda', 35000, false);
})