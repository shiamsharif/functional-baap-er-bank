function getInputFieldValueById(inputId){
    const inputField = document.getElementById('deposit-field');
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

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