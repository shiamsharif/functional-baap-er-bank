document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    
    //Get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');

    //Calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    //Set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);

    //Get previous balance total by id
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
    
})

