
function addNumbers(x,y) {
    return Number(x) + Number(y)
}

function multiplyNumbers(x,y) {
    return Number(x) * Number(y)
}

btnAddition.onclick=function(){
  lblAnswer.value = inptName1.value + ", the additive answer of your numbers is: " + addNumbers(inptNum1.value, inptNum2.value)
}

btnMultiplication.onclick=function(){
lblAnswer.value = inptName1.value + ", the multiplicative answer of your numbers is: " + multiplyNumbers(inptNum1.value, inptNum2.value)
}

btnReset.onclick=function(){
  inptNum1.value = ""
  inptNum2.value = ""
  inptName1.value = ""
  lblAnswer.value = ""
}
